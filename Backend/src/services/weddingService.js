const Wedding = require("../models/weddingModel");
const Guest = require("../models/guestModel");

const getCurrentWeddingService = async (ownerId) => {
  const wedding = await Wedding.findOne({ ownerId }).sort({
    createdAt: -1,
  });

  if (!wedding) {
    const error = new Error(
      "No wedding found for this account"
    );
    error.status = 404;
    throw error;
  }

  return wedding;
};

const getWeddingStatsService = async (
  weddingId,
  ownerId
) => {
  const wedding = await Wedding.findOne({
    _id: weddingId,
    ownerId,
  });

  if (!wedding) {
    const error = new Error("Wedding not found");
    error.status = 404;
    throw error;
  }

  const [total, attending, pending, declined] =
    await Promise.all([
      Guest.countDocuments({
        weddingId: wedding._id,
      }),
      Guest.countDocuments({
        weddingId: wedding._id,
        rsvpStatus: "attending",
      }),
      Guest.countDocuments({
        weddingId: wedding._id,
        rsvpStatus: "pending",
      }),
      Guest.countDocuments({
        weddingId: wedding._id,
        rsvpStatus: "declined",
      }),
    ]);

  return {
    total,
    attending,
    pending,
    declined,
    fundsRaised: wedding.giftFundRaised,
    fundsTarget: wedding.giftFundTarget,
  };
};

const getWeddingGuestsService = async (
  weddingId,
  ownerId,
  limit,
  sort
) => {
  const wedding = await Wedding.findOne({
    _id: weddingId,
    ownerId,
  });

  if (!wedding) {
    const error = new Error("Wedding not found");
    error.status = 404;
    throw error;
  }

  const guests = await Guest.find({
    weddingId: wedding._id,
  })
    .sort(sort || "-createdAt")
    .limit(Number(limit) || 50);

  return guests;
};

module.exports = {
  getCurrentWeddingService,
  getWeddingStatsService,
  getWeddingGuestsService,
};