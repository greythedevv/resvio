export const getInviteUrl = (
  slug: string
): string => {
  return `${window.location.origin}/invite/${slug}`;
};