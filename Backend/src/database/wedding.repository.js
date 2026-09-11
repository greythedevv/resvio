const Wedding = require('../models/weddingModel');

async function findPublishedBySlug(slug) {
  return Wedding.findOne({ slug, isPublished: true });
}

module.exports = { findPublishedBySlug };