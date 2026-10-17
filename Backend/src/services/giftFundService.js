const mongoose = require("mongoose");
const weddingRepository = require("../database/wedding.repository");
const contributionRepository = require("../database/contribution.repository");
const { buildContributionInput } = require("../utils/buildContributionInput");
const { createHttpError } = require("../utils/httpError");
const { GIFT_FUND_LIMITS } = require("../constants/giftFund");

// Every action starts here: the wedding must exist AND belong to the caller
const getOwnedWedding = async (ownerId, weddingId) => {
  if (!mongoose.isValidObjectId(weddingId)) {
    throw createHttpError(404, "Wedding not found");
  }

  const wedding = await weddingRepository.findOwnedById(ownerId, weddingId);

  if (!wedding) {
    throw createHttpError(404, "Wedding not found");
  }

  return wedding;
};

const getGiftFundSummary = async (ownerId, weddingId) => {
  const wedding = await getOwnedWedding(ownerId, weddingId);

  const [raised, count, contributions] = await Promise.all([
    contributionRepository.sumPaidByWedding(wedding._id),
    contributionRepository.countPaidByWedding(wedding._id),
    contributionRepository.findRecentPaidByWedding(
      wedding._id,
      GIFT_FUND_LIMITS.summaryRecent
    ),
  ]);

  return { raised, goal: wedding.giftFundTarget ?? 0, count, contributions };
};

const recordContribution = async (ownerId, weddingId, body) => {
  const wedding = await getOwnedWedding(ownerId, weddingId);
  const input = buildContributionInput(body);

  return contributionRepository.createContribution({
    ...input,
    weddingId: wedding._id,
    source: "manual",
    status: "paid",
  });
};

const removeContribution = async (ownerId, weddingId, contributionId) => {
  const wedding = await getOwnedWedding(ownerId, weddingId);

  if (!mongoose.isValidObjectId(contributionId)) {
    throw createHttpError(404, "Contribution not found");
  }

  const removed = await contributionRepository.deleteManualByIdAndWedding(
    contributionId,
    wedding._id
  );

  if (!removed) {
    throw createHttpError(404, "Contribution not found");
  }
};

module.exports = { getGiftFundSummary, recordContribution, removeContribution };