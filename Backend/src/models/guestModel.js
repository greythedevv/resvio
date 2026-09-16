const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema(
  {
    weddingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wedding', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    rsvpStatus: {
      type: String,
      enum: ['pending', 'attending', 'declined'],
      default: 'pending',
    },
    partySize: { type: Number, default: 1 },
    message: String,
    respondedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Guest', guestSchema);