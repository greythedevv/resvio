const rsvpService = require('../services/rsvpService');

async function getRsvp(req, res) {
  try {
    const guest = await rsvpService.getGuestByToken(req.params.token);
    res.json({ guest });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || 'Something went wrong' });
  }
}

async function postRsvp(req, res) {
  try {
    const guest = await rsvpService.submitRsvp(req.params.token, req.body);
    res.json({ guest });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || 'Something went wrong' });
  }
}

module.exports = { getRsvp, postRsvp };