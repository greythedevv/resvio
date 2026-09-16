const Guest = require('../models/guestModel');

async function findByWeddingAndEmail(weddingId, email) {
  return Guest.findOne({ weddingId, email });
}

async function createGuestRsvp(data) {
  return Guest.create(data);
}

async function updateGuestRsvp(guestId, updates) {
  return Guest.findByIdAndUpdate(guestId, { $set: updates }, { new: true, runValidators: true });
}

module.exports = { findByWeddingAndEmail, createGuestRsvp, updateGuestRsvp };