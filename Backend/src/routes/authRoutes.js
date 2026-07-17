const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  forgotPasswordUser,
} = require("../controllers/authController");

const auth = require("../middleware/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/forgot-password", forgotPasswordUser);
router.get("/me", auth, getCurrentUser);

module.exports = router;
