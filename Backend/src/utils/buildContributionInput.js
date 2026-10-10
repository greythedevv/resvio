const { createHttpError } = require("./httpError");
const { MANUAL_METHODS, GIFT_FUND_LIMITS } = require("../constants/giftFund");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const buildContributionInput = (body = {}) => {
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!name) {
    throw createHttpError(400, "The giver's name is required");
  }
  if (name.length > GIFT_FUND_LIMITS.name) {
    throw createHttpError(400, `Name must be ${GIFT_FUND_LIMITS.name} characters or fewer`);
  }

  const { amount } = body;

  if (
    !Number.isInteger(amount) ||
    amount < GIFT_FUND_LIMITS.minAmount ||
    amount > GIFT_FUND_LIMITS.maxAmount
  ) {
    throw createHttpError(
      400,
      `Amount must be a whole number between ₦${GIFT_FUND_LIMITS.minAmount} and ₦${GIFT_FUND_LIMITS.maxAmount.toLocaleString()}`
    );
  }

  if (!MANUAL_METHODS.includes(body.method)) {
    throw createHttpError(400, "Choose bank transfer or cash");
  }

  const input = { name, amount, method: body.method };

  if (body.email !== undefined && body.email !== "") {
    if (
      typeof body.email !== "string" ||
      body.email.length > GIFT_FUND_LIMITS.email ||
      !EMAIL_PATTERN.test(body.email.trim())
    ) {
      throw createHttpError(400, "Enter a valid email address");
    }
    input.email = body.email.trim();
  }

  if (body.message !== undefined && body.message !== "") {
    if (typeof body.message !== "string" || body.message.length > GIFT_FUND_LIMITS.message) {
      throw createHttpError(400, `Message must be ${GIFT_FUND_LIMITS.message} characters or fewer`);
    }
    input.message = body.message.trim();
  }

  return input;
};

module.exports = { buildContributionInput };