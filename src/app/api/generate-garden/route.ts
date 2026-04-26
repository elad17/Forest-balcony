import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";
import { getBalconyRecommendation, buildDallePrompt } from "@/lib/claude";
import { generateGardenImage } from "@/lib/dalle";
import { GALLERY_IMAGES } from "@/lib/constants";
import { QuestionnaireAnswers, GalleryImage } from "@/lib/types";

function matchGalleryImage(answers: QuestionnaireAnswers): GalleryImage {
  const primaryStyle = answers.styles[0];
  const styleMap: Record<string, string> = {
    "גן ירק": "vegetable",
    "גן ים-תיכוני": "mediterranean",
    "גן פרחים צבעוני": "flowers",
    "גן ג׳ונגל": "jungle",
    "גן עשבי תיבול": "herbs",
    "גן מטפסים": "climbers",
  };
  const targetStyle = styleMap[primaryStyle] || "mediterranean";
  const matches = GALLERY_IMAGES.filter((img) => img.style === targetStyle);
  return matches[0] || GALLERY_IMAGES[0];
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      {
        error: "הגעת למגבלת ההדמיות ל-AI (2 לשעה). נסה שוב מאוחר יותר.",
        resetAt: rateCheck.resetAt,
      },
      { status: 429 }
    );
  }

  let answers: QuestionnaireAnswers;
  try {
    answers = await request.json();
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  // Always get text recommendation from Claude
  let recommendation;
  try {
    recommendation = await getBalconyRecommendation(answers);
  } catch (err) {
    console.error("Claude error:", err);
    // Fallback recommendation
    recommendation = {
      title: "גינה מותאמת אישית למרפסת שלך",
      description:
        "בהתבסס על הנתונים שמסרת, נוכל לעצב עבורך גינת מרפסת יפהפייה ומתאימה לתנאי הסביבה שלך. שלח לנו הודעה ונתחיל לתכנן יחד.",
      plants: ["לבנדר", "רוזמרין", "פטוניה", "גרניום", "בזיליקום"],
      tips: [
        "השקה בבוקר — עדיף על השקה בצהריים",
        "הוסף דשן אורגני פעם בחודש",
        "בדוק את הניקוז בעציצים",
      ],
    };
  }

  // DALL-E image (Option A)
  let dalleImageUrl: string | undefined;
  if (process.env.OPENAI_API_KEY) {
    try {
      const prompt = buildDallePrompt(answers);
      dalleImageUrl = await generateGardenImage(prompt);
    } catch (err) {
      console.error("DALL-E error:", err);
    }
  }

  // Gallery match (Option C)
  const galleryMatch = matchGalleryImage(answers);

  return NextResponse.json(
    {
      recommendation,
      dalleImageUrl,
      galleryMatch,
      rateLimitRemaining: rateCheck.remaining,
    },
    { status: 200 }
  );
}
