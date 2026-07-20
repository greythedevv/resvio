import type { ThemeOption } from "../types/wedding";

export const STEPS = [
  "Names",
  "Date & venue",
  "Story",
  "Cover photo",
  "Theme",
  "Review",
];

export const THEMES: ThemeOption[] = [
  {
    key: "classic",
    label: "Classic",
    swatch: "#C1694F",
  },
  {
    key: "botanical",
    label: "Botanical",
    swatch: "#9CAF88",
  },
  {
    key: "minimal",
    label: "Minimal",
    swatch: "#1F2421",
  },
  {
    key: "blush",
    label: "Blush",
    swatch: "#E8B4B8",
  },
];