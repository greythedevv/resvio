const giftFundService = require("../services/giftFundService");

const handleError = (res, err) => {
  if (!err.status) console.error(err);

  res
    .status(err.status || 500)
    .json({ message: err.status ? err.message : "Something went wrong" });
};

const getSummary = async (req, res) => {
  try {
    const summary = await giftFundService.getGiftFundSummary(req.user._id, req.params.id);
    res.json(summary);
  } catch (err) {
    handleError(res, err);
  }
};

const addContribution = async (req, res) => {
  try {
    const contribution = await giftFundService.recordContribution(
      req.user._id,
      req.params.id,
      req.body
    );
    res.status(201).json({ contribution });
  } catch (err) {
    handleError(res, err);
  }
};

const deleteContribution = async (req, res) => {
  try {
    await giftFundService.removeContribution(
      req.user._id,
      req.params.id,
      req.params.contributionId
    );
    res.status(204).end();
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = { getSummary, addContribution, deleteContribution };