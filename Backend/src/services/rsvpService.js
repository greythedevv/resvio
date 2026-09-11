const guestRepository = require('../database/guest.repository');

async function getGuestByToken(token) {
  const guest = await guestRepository.findByToken(token);

  if (!guest) {
    const error = new Error('RSVP link not found');
    error.status = 404;
    throw error;
  }

  return {
    name: guest.name,
    email: guest.email,
    rsvpStatus: guest.rsvpStatus,
    plusOneAllowed: guest.plusOneAllowed,
    partySize: guest.partySize,
    message: guest.message,
  };
}

async function submitRsvp(token, body) {
  const { attending, partySize, email, message } = body;

  if (typeof attending !== 'boolean') {
    const error = new Error('Attending status is required');
    error.status = 400;
    throw error;
  }

  if (!email) {
    const error = new Error('Email is required');
    error.status = 400;
    throw error;
  }

  const guest = await guestRepository.findByToken(token);

  if (!guest) {
    const error = new Error('RSVP link not found');
    error.status = 404;
    throw error;
  }

  const updates = {
    rsvpStatus: attending ? 'attending' : 'declined',
    email,
    respondedAt: new Date(),
  };

  if (attending && guest.plusOneAllowed) {
    updates.partySize = Math.max(1, partySize || 1);
  }

  if (message !== undefined) {
    updates.message = message;
  }

  const updated = await guestRepository.updateRsvpByToken(token, updates);

  return {
    name: updated.name,
    email: updated.email,
    rsvpStatus: updated.rsvpStatus,
    plusOneAllowed: updated.plusOneAllowed,
    partySize: updated.partySize,
    message: updated.message,
  };
}

module.exports = { getGuestByToken, submitRsvp };