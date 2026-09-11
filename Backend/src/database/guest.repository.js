const Guest = require('../models/guestModel');

async function findByToken(token) {
  return Guest.findOne({ inviteToken: token });
}

async function updateRsvpByToken(token, updates) {
  return Guest.findOneAndUpdate(
    { inviteToken: token },
    { $set: updates },
    { new: true, runValidators: true }
  );
}

module.exports = { findByToken, updateRsvpByToken };