const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema(
  {
    weddingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wedding', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    inviteToken: { type: String, unique: true, required: true },
    rsvpStatus: {
      type: String,
      enum: ['pending', 'attending', 'declined'],
      default: 'pending',
    },
    plusOneAllowed: { type: Boolean, default: false },
    partySize: { type: Number, default: 1 },
    message: String,
    respondedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Guest', guestSchema);