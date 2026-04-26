export interface QuestionnaireAnswers {
  size: "קטנה" | "בינונית" | "גדולה";
  sun: "שמש מלאה" | "חלקית" | "צל";
  styles: string[];
  edible: "כן" | "לא" | "שילוב";
  maintenance: "נמוך" | "בינוני" | "גבוה";
  photoBase64?: string;
  photoMimeType?: "image/jpeg" | "image/png" | "image/webp" | "image/gif";
  contactName: string;
  contactPhone: string;
}

export interface AiRecommendation {
  title: string;
  description: string;
  plants: string[];
  tips: string[];
}

export interface GalleryImage {
  url: string;
  caption: string;
  style: string;
}

export interface GenerateResponse {
  recommendation: AiRecommendation;
  dalleImageUrl?: string;
  galleryMatch?: GalleryImage;
  rateLimitRemaining?: number;
}

export interface GardenStyle {
  id: string;
  name: string;
  description: string;
  plants: string[];
  unsplashUrl: string;
  emoji: string;
}

export interface BeforeAfterPair {
  beforeUrl: string;
  afterUrl: string;
  caption: string;
}
