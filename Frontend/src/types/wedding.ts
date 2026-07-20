

export type Theme =
  | "classic"
  | "botanical"
  | "minimal"
  | "blush";

export interface Venue {
  name: string;
  address?: string;
  city?: string;
}

export interface ScheduleItem {
  title: string;
  time: string;
  location?: string;
}

export interface WeddingSettings {
  allowPlusOnes: boolean;
  showGuestCountPublicly: boolean;
  passcode?: string;
}

export interface Wedding {
  _id: string;
  ownerId: string;

  partner1Name: string;
  partner2Name: string;

  slug: string;

  weddingDate?: string;

  venue?: Venue;

  story?: string;

  schedule?: ScheduleItem[];

  coverImageUrl?: string;

  galleryImageUrls?: string[];

  theme?: Theme;

  rsvpDeadline?: string;

  isPublished: boolean;

  settings: WeddingSettings;

  giftFundTarget: number;

  giftFundRaised: number;

  createdAt?: string;
  updatedAt?: string;
}

export interface CreateWeddingInput {
  partner1Name: string;
  partner2Name: string;
}

export interface UpdateWeddingInput {
  partner1Name?: string;
  partner2Name?: string;

  weddingDate?: string;

  venue?: Venue;

  story?: string;

  schedule?: ScheduleItem[];

  theme?: Theme;

  rsvpDeadline?: string;

  settings?: Partial<WeddingSettings>;

  giftFundTarget?: number;
}

export interface WeddingForm {
  partner1Name: string;
  partner2Name: string;

  weddingDate: string;

  venueName: string;
  venueAddress: string;
  venueCity: string;

  story: string;

  theme: Theme;
}

export interface ThemeOption {
  key: Theme;
  label: string;
  swatch: string;
}

export interface SummaryRowProps {
  label: string;
  value: string;
}

export interface StepHeaderProps {
  step: number;
  totalSteps: number;
  title: string;
}

export interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export interface StepContainerProps {
  error: string;
  children: React.ReactNode;
}

export interface StepNavigationProps {
  step: number;
  totalSteps: number;
  saving: boolean;
  onBack: () => void;
  onNext: () => void;
  onPublish: () => void;
}

export interface NamesStepProps {
  form: WeddingForm;
  updateForm: (
    field: keyof WeddingForm,
    value: string
  ) => void;
}

export interface DateVenueStepProps {
  form: WeddingForm;
  updateForm: (
    field: keyof WeddingForm,
    value: string
  ) => void;
}

export interface StoryStepProps {
  story: string;
  onChange: (value: string) => void;
}

export interface CoverPhotoStepProps {
  preview: string | null;
  onSelect: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface ThemeStepProps {
  selectedTheme: Theme;
  onSelect: (theme: Theme) => void;
}

export interface ReviewStepProps {
  wedding: Wedding | null;
  form: WeddingForm;
}