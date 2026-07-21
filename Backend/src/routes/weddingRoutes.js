const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  createWedding,
  getCurrentWedding,
  getWedding,
  updateWedding,
  uploadCoverImage,
  publishWedding,
  getWeddingStats,
  getWeddingGuests,
} = require("../controllers/weddingController");

router.post("/", requireAuth, createWedding);

router.get("/current", requireAuth, getCurrentWedding);

router.get("/:id", requireAuth, getWedding);

router.put("/:id", requireAuth, updateWedding);

router.post(
  "/:id/cover-image",
  requireAuth,
  upload.single("image"),
  uploadCoverImage
);

router.post("/:id/publish", requireAuth, publishWedding);

router.get("/:id/stats", requireAuth, getWeddingStats);

router.get("/:id/guests", requireAuth, getWeddingGuests);

module.exports = router;