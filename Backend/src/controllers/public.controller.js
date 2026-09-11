const weddingService = require('../services/weddingService');

async function getInvitation(req, res) {
  try {
    const invitation = await weddingService.getPublicInvitationBySlug(req.params.slug);
    res.json({ invitation });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message || 'Something went wrong' });
  }
}

module.exports = { getInvitation };