const User = require("../models/userModel");
const crypto = require("crypto");


const register = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    const error = new Error("All fields are required");
    error.status = 400;
    throw error;
  }

  if (password.length < 8) {
    const error = new Error("Password must be at least 8 characters");
    error.status = 400;
    throw error;
  }

  const existing = await User.findOne({ email });

  if (existing) {
    const error = new Error("An account with this email already exists");
    error.status = 409;
    throw error;
  }

  const user = await User.create({
    name,
    email,
    passwordHash: password,
  });

  return user;
};

const login = async (email, password) => {
  if (!email || !password) {
    const error = new Error("Email and password are required");
    error.status = 400;
    throw error;
  }

  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    throw error;
  }

  const match = await user.comparePassword(password);

  if (!match) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    throw error;
  }

  return user;
};

const forgotPassword = async (email) => {
  if (!email) {
    const error = new Error("Email is required");
    error.status = 400;
    throw error;
  }

  const user = await User.findOne({ email });

  
  if (!user) {
    return {
      message:
        "If an account exists, a reset link has been sent.",
    };
  }

  const token = crypto.randomBytes(32).toString("hex");

  user.resetToken = token;
  user.resetTokenExpires = Date.now() + 1000 * 60 * 30; // 30 minutes

  await user.save();

  return {
    message: "Reset link generated.",
    resetUrl: `${process.env.CLIENT_URL}/reset-password/${token}`,
  };
};

module.exports = {
  register,
  login,
  forgotPassword,
};
