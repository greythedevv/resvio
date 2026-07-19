const {
  getCurrentWeddingService,
  getWeddingStatsService,
  getWeddingGuestsService,
} = require("../services/weddingService");

const getCurrentWedding = async (req, res) => {
  try {
    const wedding = await getCurrentWeddingService(req.user._id);

    res.json({ wedding });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Something went wrong",
    });
  }
};

const getWeddingStats = async (req, res) => {
  try {
    const stats = await getWeddingStatsService(
      req.params.id,
      req.user._id
    );

    res.json(stats);
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Something went wrong",
    });
  }
};

const getWeddingGuests = async (req, res) => {
  try {
    const { limit, sort } = req.query;

    const guests = await getWeddingGuestsService(
      req.params.id,
      req.user._id,
      limit,
      sort
    );

    res.json({ guests });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = {
  getCurrentWedding,
  getWeddingStats,
  getWeddingGuests,
};