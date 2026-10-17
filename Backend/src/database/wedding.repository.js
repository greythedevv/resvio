const Wedding = require("../models/weddingModel");

const findPublishedBySlug = async (slug) =>
  Wedding.findOne({ slug, isPublished: true });

const findOwnedById = async (ownerId, weddingId) =>
  Wedding.findOne({ _id: weddingId, ownerId });

const updateOwnedById = async (ownerId, weddingId, updates) =>
  Wedding.findOneAndUpdate(
    { _id: weddingId, ownerId },
    { $set: updates },
    { new: true, runValidators: true }
  );

module.exports = { findPublishedBySlug, findOwnedById, updateOwnedById };