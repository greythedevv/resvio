const weddingRepository = require('../database/wedding.repository');
const guestRepository = require('../database/guest.repository');

async function submitRsvp(slug, body) {
  const { name, email, attending, partySize, message } = body;

  if (!name) {
    const error = new Error('Name is required');
    error.status = 400;
    throw error;
  }
  if (!email) {
    const error = new Error('Email is required');
    error.status = 400;
    throw error;
  }
  if (typeof attending !== 'boolean') {
    const error = new Error('Attending status is required');
    error.status = 400;
    throw error;
  }

  const wedding = await weddingRepository.findPublishedBySlug(slug);

  if (!wedding) {
    const error = new Error('Invitation not found');
    error.status = 404;
    throw error;
  }

  const existing = await guestRepository.findByWeddingAndEmail(wedding._id, email);

  const guestData = {
    weddingId: wedding._id,
    name,
    email,
    rsvpStatus: attending ? 'attending' : 'declined',
    partySize: attending ? Math.max(1, partySize || 1) : 1,
    message: message || undefined,
    respondedAt: new Date(),
  };

  const guest = existing
    ? await guestRepository.updateGuestRsvp(existing._id, guestData)
    : await guestRepository.createGuestRsvp(guestData);

  return {
    name: guest.name,
    email: guest.email,
    rsvpStatus: guest.rsvpStatus,
    partySize: guest.partySize,
    message: guest.message,
  };
}

module.exports = { submitRsvp };