const CONTRIBUTION_METHODS = ["bank_transfer", "card", "ussd", "cash"];
const MANUAL_METHODS = ["bank_transfer", "cash"];
const CONTRIBUTION_STATUSES = ["pending", "paid", "failed"];
const CONTRIBUTION_SOURCES = ["manual", "online"];

const GIFT_FUND_LIMITS = {
  name: 80,
  email: 254,
  message: 280,
  minAmount: 1,
  maxAmount: 100000000,
  summaryRecent: 20,
};

module.exports = {
  CONTRIBUTION_METHODS,
  MANUAL_METHODS,
  CONTRIBUTION_STATUSES,
  CONTRIBUTION_SOURCES,
  GIFT_FUND_LIMITS,
};