const rsvpService = require('../services/rsvpService');

async function postRsvp(req, res) {
  try {
    const guest = await rsvpService.submitRsvp(req.params.slug, req.body);
    res.json({ guest });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || 'Something went wrong' });
  }
}

module.exports = { postRsvp };