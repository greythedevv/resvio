const mongoose = require("mongoose");
const Contribution = require("../models/contributionModel");

const createContribution = async (data) => Contribution.create(data);

const findRecentPaidByWedding = async (weddingId, limit) =>
  Contribution.find({ weddingId, status: "paid" })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();

const countPaidByWedding = async (weddingId) =>
  Contribution.countDocuments({ weddingId, status: "paid" });

const sumPaidByWedding = async (weddingId) => {
  const [result] = await Contribution.aggregate([
    {
      $match: {
        weddingId: new mongoose.Types.ObjectId(weddingId),
        status: "paid",
      },
    },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  return result?.total ?? 0;
};

// Only manual entries can be removed; online payments are financial records
const deleteManualByIdAndWedding = async (contributionId, weddingId) =>
  Contribution.findOneAndDelete({
    _id: contributionId,
    weddingId,
    source: "manual",
  });

module.exports = {
  createContribution,
  findRecentPaidByWedding,
  countPaidByWedding,
  sumPaidByWedding,
  deleteManualByIdAndWedding,
};