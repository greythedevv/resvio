const Wedding = require("../models/weddingModel");
const Guest = require("../models/guestModel");

const { generateUniqueSlug } = require("../utils/slug");
const { uploadBuffer } = require("../config/cloudinary");

const createWedding = async (ownerId, body) => {
  const { partner1Name, partner2Name } = body;

  if (!partner1Name || !partner2Name) {
    const error = new Error("Both partner names are required");
    error.status = 400;
    throw error;
  }

  const slug = await generateUniqueSlug(
    partner1Name,
    partner2Name,
    Wedding
  );

  const wedding = await Wedding.create({
    ownerId,
    partner1Name,
    partner2Name,
    slug,
  });

  return wedding;
};

const getCurrentWedding = async (ownerId) => {
  const wedding = await Wedding.findOne({
    ownerId,
  }).sort({
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

const getWeddingById = async (ownerId, weddingId) => {
  const wedding = await Wedding.findOne({
    _id: weddingId,
    ownerId,
  });

  if (!wedding) {
    const error = new Error("Wedding not found");
    error.status = 404;
    throw error;
  }

  return wedding;
};

const updateWedding = async (
  ownerId,
  weddingId,
  body
) => {
  const allowedFields = [
    "partner1Name",
    "partner2Name",
    "weddingDate",
    "venue",
    "story",
    "schedule",
    "theme",
    "rsvpDeadline",
    "settings",
    "giftFundTarget",
  ];

  const updates = {};

  allowedFields.forEach((field) => {
    if (body[field] !== undefined) {
      updates[field] = body[field];
    }
  });

  const wedding =
    await Wedding.findOneAndUpdate(
      {
        _id: weddingId,
        ownerId,
      },
      {
        $set: updates,
      },
      {
        new: true,
        runValidators: true,
      }
    );

  if (!wedding) {
    const error = new Error("Wedding not found");
    error.status = 404;
    throw error;
  }

  return wedding;
};
const uploadCoverImage = async (
  ownerId,
  weddingId,
  file
) => {
  if (!file) {
    const error = new Error("No image file provided");
    error.status = 400;
    throw error;
  }

  const wedding = await getWeddingById(
    ownerId,
    weddingId
  );

  const result = await uploadBuffer(
    file.buffer,
    `resvio/${wedding._id}/cover`
  );

  wedding.coverImageUrl = result.secure_url;

  await wedding.save();

  return wedding;
};

const publishWedding = async (
  ownerId,
  weddingId
) => {
  const wedding = await getWeddingById(
    ownerId,
    weddingId
  );

  const missing = [];

  if (
    !wedding.partner1Name ||
    !wedding.partner2Name
  ) {
    missing.push("partner names");
  }

  if (!wedding.weddingDate) {
    missing.push("wedding date");
  }

  if (!wedding.venue?.name) {
    missing.push("venue");
  }

  if (missing.length > 0) {
    const error = new Error(
      `Add ${missing.join(", ")} before publishing`
    );

    error.status = 400;

    throw error;
  }

  wedding.isPublished = true;

  await wedding.save();

  return wedding;
};

const getWeddingStats = async (
  ownerId,
  weddingId
) => {
  const wedding = await getWeddingById(
    ownerId,
    weddingId
  );

  const [
    total,
    attending,
    pending,
    declined,
  ] = await Promise.all([
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

const getWeddingGuests = async (
  ownerId,
  weddingId,
  query
) => {
  const wedding = await getWeddingById(
    ownerId,
    weddingId
  );

  const limit =
    parseInt(query.limit, 10) || 50;

  const sort =
    query.sort || "-createdAt";

  const guests = await Guest.find({
    weddingId: wedding._id,
  })
    .sort(sort)
    .limit(limit);

  return guests;
};

module.exports = {
  createWedding,
  getCurrentWedding,
  getWeddingById,
  updateWedding,
  uploadCoverImage,
  publishWedding,
  getWeddingStats,
  getWeddingGuests,
};