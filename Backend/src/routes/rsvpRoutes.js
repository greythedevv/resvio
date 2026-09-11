const express = require('express');
const router = express.Router();
const rsvpController = require('../controllers/rsvpController');


router.get('/:token', rsvpController.getRsvp);
router.post('/:token', rsvpController.postRsvp);

module.exports = router;