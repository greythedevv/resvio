const mongoose = require("mongoose");
const {
  CONTRIBUTION_METHODS,
  CONTRIBUTION_STATUSES,
  CONTRIBUTION_SOURCES,
} = require("../constants/giftFund");

const contributionSchema = new mongoose.Schema(
  {
    weddingId: { type: mongoose.Schema.Types.ObjectId, ref: "Wedding", required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    amount: { type: Number, required: true, min: 1 },
    method: { type: String, enum: CONTRIBUTION_METHODS, required: true },
    source: { type: String, enum: CONTRIBUTION_SOURCES, default: "manual" },
    status: { type: String, enum: CONTRIBUTION_STATUSES, default: "paid" },
    message: { type: String, trim: true },

    reference: { type: String, unique: true, sparse: true },
  },
  { timestamps: true }
);


contributionSchema.index({ weddingId: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model("Contribution", contributionSchema);