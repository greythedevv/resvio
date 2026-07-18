const {
  register,
  login,
  forgotPassword,
} = require("../services/auth.service");

const generateToken = require("../utils/jwt");
const COOKIE_OPTIONS = require("../utils/cookieOptions");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await register({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, COOKIE_OPTIONS);

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Something went wrong",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await login(email, password);

    const token = generateToken(user._id);

    res.cookie("token", token, COOKIE_OPTIONS);

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Something went wrong",
    });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token", COOKIE_OPTIONS);

  res.json({
    message: "Logged out",
  });
};

const forgotPasswordUser = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await forgotPassword(email);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Something went wrong",
    });
  }
};

const getCurrentUser = (req, res) => {
  res.json({
    user: req.user,
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  forgotPasswordUser,
  getCurrentUser,
};