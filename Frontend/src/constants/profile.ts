export const PROFILE_TABS = [
  { id: "event", label: "Event Details" },
  { id: "story", label: "Our Story" },
  { id: "settings", label: "Settings" },
] as const;

export type ProfileTab = (typeof PROFILE_TABS)[number]["id"];
export type ProfileModalKey = "event" | "schedule" | "story" | "settings";