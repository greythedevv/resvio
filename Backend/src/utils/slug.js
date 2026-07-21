function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function generateUniqueSlug(partner1Name, partner2Name, Wedding) {
  const base = slugify(`${partner1Name}-and-${partner2Name}`) || 'our-wedding';
  let slug = base;
  let attempt = 0;

  while (await Wedding.exists({ slug })) {
    attempt += 1;
    slug = `${base}-${Math.random().toString(36).slice(2, 6)}`;
    if (attempt > 5) break;
  }

  return slug;
}

module.exports = { slugify, generateUniqueSlug };