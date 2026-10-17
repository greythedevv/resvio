const { createHttpError } = require("./httpError");
const { WEDDING_THEMES, LIMITS } = require("../constants/wedding");

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const cleanString = (value, label, max, { required = false } = {}) => {
  if (typeof value !== "string") {
    throw createHttpError(400, `${label} must be text`);
  }

  const trimmed = value.trim();

  if (required && !trimmed) {
    throw createHttpError(400, `${label} can't be empty`);
  }

  if (trimmed.length > max) {
    throw createHttpError(400, `${label} must be ${max} characters or fewer`);
  }

  return trimmed;
};

// Empty string or null clears the date; anything else must parse
const cleanDate = (value, label) => {
  if (value === null || value === "") return null;

  const date = typeof value === "string" ? new Date(value) : null;

  if (!date || Number.isNaN(date.getTime())) {
    throw createHttpError(400, `${label} isn't a valid date`);
  }

  return date;
};

const cleanBoolean = (value, label) => {
  if (typeof value !== "boolean") {
    throw createHttpError(400, `${label} must be true or false`);
  }

  return value;
};

const buildScheduleItem = (item, index) => {
  const position = `Schedule item ${index + 1}`;

  if (!isPlainObject(item)) {
    throw createHttpError(400, `${position} is invalid`);
  }

  const time = cleanDate(item.time, `${position} time`);

  if (!time) {
    throw createHttpError(400, `${position} needs a time`);
  }

  return {
    title: cleanString(item.title, `${position} title`, LIMITS.scheduleTitle, {
      required: true,
    }),
    time,
    location:
      item.location === undefined
        ? ""
        : cleanString(item.location, `${position} location`, LIMITS.scheduleLocation),
  };
};


const buildWeddingUpdates = (body = {}) => {
  const updates = {};

  if (body.partner1Name !== undefined) {
    updates.partner1Name = cleanString(body.partner1Name, "Partner 1 name", LIMITS.name, {
      required: true,
    });
  }

  if (body.partner2Name !== undefined) {
    updates.partner2Name = cleanString(body.partner2Name, "Partner 2 name", LIMITS.name, {
      required: true,
    });
  }

  if (body.weddingDate !== undefined) {
    updates.weddingDate = cleanDate(body.weddingDate, "Wedding date");
  }

  if (body.rsvpDeadline !== undefined) {
    updates.rsvpDeadline = cleanDate(body.rsvpDeadline, "RSVP deadline");
  }

  if (body.story !== undefined) {
    updates.story = cleanString(body.story, "Story", LIMITS.story);
  }

  if (body.theme !== undefined) {
    if (!WEDDING_THEMES.includes(body.theme)) {
      throw createHttpError(400, "Choose a valid theme");
    }
    updates.theme = body.theme;
  }

  if (body.giftFundTarget !== undefined) {
    const target = body.giftFundTarget;

    if (
      typeof target !== "number" ||
      !Number.isFinite(target) ||
      target < 0 ||
      target > LIMITS.giftFundTarget
    ) {
      throw createHttpError(400, "Gift fund goal must be a valid amount");
    }

    updates.giftFundTarget = target;
  }

  if (body.venue !== undefined) {
    if (!isPlainObject(body.venue)) {
      throw createHttpError(400, "Venue is invalid");
    }

    const { name, address, city } = body.venue;

    if (name !== undefined) {
      updates["venue.name"] = cleanString(name, "Venue name", LIMITS.venueName);
    }
    if (address !== undefined) {
      updates["venue.address"] = cleanString(address, "Venue address", LIMITS.venueAddress);
    }
    if (city !== undefined) {
      updates["venue.city"] = cleanString(city, "City", LIMITS.venueCity);
    }
  }

  if (body.settings !== undefined) {
    if (!isPlainObject(body.settings)) {
      throw createHttpError(400, "Settings are invalid");
    }

    const { allowPlusOnes, showGuestCountPublicly } = body.settings;

    if (allowPlusOnes !== undefined) {
      updates["settings.allowPlusOnes"] = cleanBoolean(allowPlusOnes, "Allow plus-ones");
    }
    if (showGuestCountPublicly !== undefined) {
      updates["settings.showGuestCountPublicly"] = cleanBoolean(
        showGuestCountPublicly,
        "Show guest count"
      );
    }
  }

  if (body.schedule !== undefined) {
    if (!Array.isArray(body.schedule)) {
      throw createHttpError(400, "Schedule must be a list");
    }

    if (body.schedule.length > LIMITS.scheduleItems) {
      throw createHttpError(400, `A schedule can have up to ${LIMITS.scheduleItems} events`);
    }

   
    updates.schedule = body.schedule.map(buildScheduleItem);
  }

  return updates;
};

module.exports = { buildWeddingUpdates };