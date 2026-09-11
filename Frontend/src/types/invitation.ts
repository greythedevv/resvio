export interface Invitation {
  partner1Name: string;
  partner2Name: string;
  weddingDate?: string;
  venue?: { name: string; address?: string; city?: string };
  story?: string;
  schedule?: { title: string; time: string; location?: string }[];
  coverImageUrl?: string;
  galleryImageUrls?: string[];
  theme?: string;
  rsvpDeadline?: string;
  giftFundTarget: number;
  giftFundRaised: number;
  slug: string;
}