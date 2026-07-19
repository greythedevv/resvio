const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/auth");

const {
  getCurrentWedding,
  getWeddingStats,
  getWeddingGuests,
} = require("../controllers/weddingController");

router.get("/current", requireAuth, getCurrentWedding);

router.get("/:id/stats", requireAuth, getWeddingStats);

router.get("/:id/guests", requireAuth, getWeddingGuests);

module.exports = router;