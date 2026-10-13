const express = require("express");
const requireAuth = require("../middleware/auth");
const giftFundController = require("../controllers/giftFundController");


const router = express.Router({ mergeParams: true });

router.use(requireAuth);

router.get("/", giftFundController.getSummary);
router.post("/contributions", giftFundController.addContribution);
router.delete("/contributions/:contributionId", giftFundController.deleteContribution);

module.exports = router;