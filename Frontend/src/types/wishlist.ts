export interface WishlistItem {
  _id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  isClaimed: boolean;
  claimedBy?: string;
}