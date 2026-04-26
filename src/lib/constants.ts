import { GardenStyle, BeforeAfterPair, GalleryImage } from "./types";

export const BUSINESS_NAME = "Forest Balcony";
export const BUSINESS_TAGLINE = "המרפסת שלך יכולה להיות גן עדן";
export const BUSINESS_SUBTITLE = "עיצוב גינות בוטיק למרפסות — בהתאמה אישית מלאה";
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/elad17/30min";

export const GARDEN_STYLES: GardenStyle[] = [
  {
    id: "vegetable",
    name: "גן ירק",
    description: "עגבניות שרי, פלפלים, חסה ועוד — ישר מהמרפסת לצלחת",
    plants: ["עגבניות שרי", "פלפל", "חסה", "תרד", "מלפון"],
    unsplashUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    emoji: "🥬",
  },
  {
    id: "mediterranean",
    name: "גן ים-תיכוני",
    description: "ריחות של לבנדר ורוזמרין, אווירה כפרית מרגיעה",
    plants: ["לבנדר", "רוזמרין", "תימין", "אורגנו", "זית נוי"],
    unsplashUrl:
      "https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=600&q=80",
    emoji: "🌿",
  },
  {
    id: "flowers",
    name: "גן פרחים צבעוני",
    description: "פטוניות, ורבנות וגרניומים — צבע כל השנה",
    plants: ["פטוניה", "ורבנה", "גרניום", "קלנדולה", "לוביליה"],
    unsplashUrl:
      "https://images.unsplash.com/photo-1477101718137-d1ac9f27600b?w=600&q=80",
    emoji: "🌸",
  },
  {
    id: "jungle",
    name: "גן ג׳ונגל",
    description: "יסמין, פסיפלורה ובוגנוויליה — מרפסת שהיא יער עירוני",
    plants: ["יסמין", "פסיפלורה", "בוגנוויליה", "קלמטיס"],
    unsplashUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    emoji: "🌴",
  },
  {
    id: "herbs",
    name: "גן עשבי תיבול",
    description: "נענע, בזיליקום, כוסברה — המטבח מתחיל במרפסת",
    plants: ["נענע", "בזיליקום", "כוסברה", "פטרוזיליה", "עירית"],
    unsplashUrl:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
    emoji: "🌱",
  },
  {
    id: "climbers",
    name: "גן מטפסים",
    description: "קירות ירוקים ומחיצות חיות — פרטיות עם יופי טבעי",
    plants: ["בוגנוויליה", "פסיפלורה", "יסמין מטפס", "אפונת ריח"],
    unsplashUrl:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    emoji: "🍃",
  },
];

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    beforeUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80",
    caption: "מרפסת בטון ריקה → גן ים-תיכוני מלבלב",
  },
  {
    beforeUrl:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=700&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
    caption: "מרפסת אחסון → גן ירק שופע",
  },
  {
    beforeUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1477101718137-d1ac9f27600b?w=700&q=80",
    caption: "מעקה חשוף → פרחים צבעוניים כל השנה",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    caption: "גן ירק שופע על מרפסת קטנה",
    style: "vegetable",
  },
  {
    url: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=800&q=80",
    caption: "פינת ים-תיכון ריחנית",
    style: "mediterranean",
  },
  {
    url: "https://images.unsplash.com/photo-1477101718137-d1ac9f27600b?w=800&q=80",
    caption: "גן פרחים צבעוני עם פטוניות",
    style: "flowers",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    caption: "קיר ירוק עם מטפסים",
    style: "jungle",
  },
  {
    url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    caption: "גן תבלינים ירוק ורענן",
    style: "herbs",
  },
  {
    url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
    caption: "בוגנוויליה על גדר — מרפסת פרטית",
    style: "climbers",
  },
  {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    caption: "מרפסת ים-תיכונית עם ריחות קיץ",
    style: "mediterranean",
  },
  {
    url: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
    caption: "גן קטן עם צמחים צבעוניים",
    style: "flowers",
  },
];

export const PLANTS_BY_CATEGORY = {
  ירקות: ["עגבניות שרי", "פלפל", "חסה", "תרד", "מלפון", "בצל ירוק", "חציל"],
  "עשבי תיבול": ["נענע", "בזיליקום", "כוסברה", "פטרוזיליה", "עירית", "תימין", "רוזמרין", "אורגנו"],
  פרחים: ["פטוניה", "ורבנה", "גרניום", "קלנדולה", "לוביליה", "ניגלה", "פוקסיה"],
  מטפסים: ["בוגנוויליה", "פסיפלורה", "יסמין מטפס", "אפונת ריח", "קלמטיס"],
  "ים-תיכוניים": ["לבנדר", "רוזמרין", "תימין", "אורגנו", "זית נוי", "אגרטל"],
  סוקולנטים: ["אלוורה", "סוקולנט שמן", "אכוור", "קקטוס קטן", "קרסולה"],
};
