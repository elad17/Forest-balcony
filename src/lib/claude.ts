import Anthropic from "@anthropic-ai/sdk";
import { QuestionnaireAnswers, AiRecommendation } from "./types";

function getClient() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

export async function getBalconyRecommendation(
  answers: QuestionnaireAnswers
): Promise<AiRecommendation> {
  const content: Anthropic.MessageParam["content"] = [];

  if (answers.photoBase64 && answers.photoMimeType) {
    content.push({
      type: "image",
      source: {
        type: "base64",
        media_type: answers.photoMimeType,
        data: answers.photoBase64,
      },
    });
  }

  content.push({
    type: "text",
    text: buildPrompt(answers),
  });

  const client = getClient();
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content }],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in response");

  return JSON.parse(jsonMatch[0]) as AiRecommendation;
}

function buildPrompt(answers: QuestionnaireAnswers): string {
  const photoNote = answers.photoBase64
    ? "צורפה תמונה של המרפסת הנוכחית — נתח אותה בעת מתן ההמלצות."
    : "";

  return `אתה מומחה לגינון מרפסות בישראל. לפניך נתוני מרפסת של לקוח:

- גודל מרפסת: ${answers.size}
- חשיפה לשמש: ${answers.sun}
- סגנון מועדף: ${answers.styles.join(", ")}
- צמחים אכילים: ${answers.edible}
- רמת תחזוקה רצויה: ${answers.maintenance}
${photoNote}

חשוב: השתמש רק בצמחים הזמינים במשתלות ישראליות כגון: עגבניות שרי, פלפל, חסה, תרד, בזיליקום, נענע, פטרוזיליה, כוסברה, עירית, תימין, רוזמרין, אורגנו, לבנדר, פטוניה, ורבנה, גרניום, קלנדולה, בוגנוויליה, פסיפלורה, יסמין, אלוורה, סוקולנטים.

ספק:
1. כותרת השראתית קצרה (עד 8 מילים)
2. תיאור עיצוב מותאם אישית (3-4 משפטים, עברית)
3. 6-8 צמחים מומלצים מתאימים לתנאים
4. 3 טיפי תחזוקה קצרים

ענה **אך ורק** ב-JSON תקני בפורמט הבא (ללא markdown, ללא הסברים):
{"title":"...","description":"...","plants":["...","..."],"tips":["...","..."]}`;
}

export function buildDallePrompt(answers: QuestionnaireAnswers): string {
  const styleMap: Record<string, string> = {
    "גן ירק": "vegetable garden with tomatoes peppers and lettuce",
    "גן ים-תיכוני": "Mediterranean garden with lavender rosemary and herbs",
    "גן פרחים צבעוני": "colorful flower garden with petunias verbena and geraniums",
    "גן ג׳ונגל": "lush jungle balcony with jasmine bougainvillea and climbing plants",
    "גן עשבי תיבול": "herb garden with mint basil parsley and thyme",
    "גן מטפסים": "balcony with climbing bougainvillea jasmine and green wall",
  };

  const styles = answers.styles
    .map((s) => styleMap[s] || s)
    .join(" and ");
  const sunMap = {
    "שמש מלאה": "sunny",
    "חלקית": "partial shade",
    "צל": "shaded",
  };
  const sizeMap = {
    "קטנה": "small",
    "בינונית": "medium",
    "גדולה": "large",
  };

  return `A beautiful ${sizeMap[answers.size]} ${sunMap[answers.sun]} apartment balcony garden in Israel featuring ${styles}. Lush green plants in terracotta pots and planter boxes along the railing. Mediterranean climate, golden hour light, professional garden design, boutique style, real plants available in Israeli nurseries. No text, no watermarks, photorealistic.`;
}
