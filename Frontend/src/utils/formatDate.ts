export const formatLongDate = (iso?: string | null, fallback = "Not set") =>
  iso
    ? new Date(iso).toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : fallback;

export const formatShortDate = (iso?: string | null, fallback = "Not set") =>
  iso
    ? new Date(iso).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : fallback;

export const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

export const formatDateTime = (iso?: string | null, fallback = "Not set") =>
  iso ? `${formatLongDate(iso)} · ${formatTime(iso)}` : fallback;