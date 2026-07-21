const weddingService = require("../services/weddingService");

const createWedding = async (req, res) => {
  try {
    const wedding =
      await weddingService.createWedding(
        req.user._id,
        req.body
      );

    res.status(201).json({ wedding });
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Something went wrong",
    });
  }
};

const getCurrentWedding = async (
  req,
  res
) => {
  try {
    const wedding =
      await weddingService.getCurrentWedding(
        req.user._id
      );

    res.json({ wedding });
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Something went wrong",
    });
  }
};

const getWedding = async (req, res) => {
  try {
    const wedding =
      await weddingService.getWeddingById(
        req.user._id,
        req.params.id
      );

    res.json({ wedding });
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Something went wrong",
    });
  }
};

const updateWedding = async (
  req,
  res
) => {
  try {
    const wedding =
      await weddingService.updateWedding(
        req.user._id,
        req.params.id,
        req.body
      );

    res.json({ wedding });
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Something went wrong",
    });
  }
};

const uploadCoverImage = async (
  req,
  res
) => {
  try {
    const wedding =
      await weddingService.uploadCoverImage(
        req.user._id,
        req.params.id,
        req.file
      );

    res.json({ wedding });
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Image upload failed",
    });
  }
};

const publishWedding = async (
  req,
  res
) => {
  try {
    const wedding =
      await weddingService.publishWedding(
        req.user._id,
        req.params.id
      );

    res.json({ wedding });
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Something went wrong",
    });
  }
};

const getWeddingStats = async (
  req,
  res
) => {
  try {
    const stats =
      await weddingService.getWeddingStats(
        req.user._id,
        req.params.id
      );

    res.json(stats);
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Something went wrong",
    });
  }
};

const getWeddingGuests = async (
  req,
  res
) => {
  try {
    const guests =
      await weddingService.getWeddingGuests(
        req.user._id,
        req.params.id,
        req.query
      );

    res.json({ guests });
  } catch (error) {
    res.status(error.status || 500).json({
      message:
        error.message ||
        "Something went wrong",
    });
  }
};

module.exports = {
  createWedding,
  getCurrentWedding,
  getWedding,
  updateWedding,
  uploadCoverImage,
  publishWedding,
  getWeddingStats,
  getWeddingGuests,
};