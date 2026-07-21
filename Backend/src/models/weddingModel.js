const mongoose = require('mongoose');

const weddingSchema = new mongoose.Schema(
  {
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    partner1Name: { type: String, required: true },
    partner2Name: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    weddingDate: Date,
    venue: {
      name: String,
      address: String,
      city: String,
    },
    story: String,
    schedule: [
      {
        title: String,
        time: Date,
        location: String,
      },
    ],
    coverImageUrl: String,
    galleryImageUrls: [String],
    theme: { type: String, default: 'classic' },
    rsvpDeadline: Date,
    isPublished: { type: Boolean, default: false },
    settings: {
      allowPlusOnes: { type: Boolean, default: true },
      showGuestCountPublicly: { type: Boolean, default: false },
      passcode: String,
    },
    giftFundTarget: { type: Number, default: 0 },
    giftFundRaised: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Wedding', weddingSchema);