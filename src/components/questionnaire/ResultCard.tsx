"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GenerateResponse } from "@/lib/types";
import PlantTag from "@/components/ui/PlantTag";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CalendlyButton from "@/components/ui/CalendlyButton";

type AIOption = "A" | "B" | "C";

const OPTION_LABELS: Record<AIOption, { title: string; badge: string; desc: string; color: string }> = {
  A: {
    title: "אפשרות א׳ — תמונה שנוצרה ב-AI (DALL-E 3)",
    badge: "🎨 יצירת תמונה",
    desc: "תמונה שנוצרה ספציפית לפרופיל המרפסת שלך",
    color: "border-bloom-400 bg-bloom-400/5",
  },
  B: {
    title: "אפשרות ב׳ — תיאור מילולי מפורט",
    badge: "📝 תיאור AI",
    desc: "המלצה מותאמת אישית עם רשימת צמחים וטיפים",
    color: "border-forest-400 bg-forest-50",
  },
  C: {
    title: "אפשרות ג׳ — תמונת גינה דומה",
    badge: "🖼️ תמונה מתאימה",
    desc: "תמונה אמיתית של גינה דומה לסגנון שבחרת",
    color: "border-earth-400 bg-earth-50",
  },
};

export default function ResultCard({ data }: { data: GenerateResponse }) {
  const [activeOption, setActiveOption] = useState<AIOption>("B");
  const { recommendation, dalleImageUrl, galleryMatch } = data;

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🌿</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-800 mb-2">
          {recommendation.title}
        </h2>
        <p className="text-forest-600">{recommendation.description}</p>
      </div>

      {/* Option selector tabs */}
      <div className="mb-6">
        <p className="text-forest-600 text-sm font-semibold mb-3 text-center">
          בחר אפשרות הצגה — כולן מבוססות על הפרופיל שלך:
        </p>
        <div className="grid grid-cols-3 gap-2">
          {(["A", "B", "C"] as AIOption[]).map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveOption(opt)}
              className={`p-3 rounded-xl border-2 text-xs font-semibold transition-all text-center cursor-pointer ${
                activeOption === opt
                  ? OPTION_LABELS[opt].color + " border-current scale-[1.02] shadow-sm"
                  : "border-forest-200 bg-white text-forest-500 hover:border-forest-300"
              }`}
            >
              <div className="text-base mb-1">{OPTION_LABELS[opt].badge.split(" ")[0]}</div>
              <div className={activeOption === opt ? "text-forest-800" : ""}>
                {OPTION_LABELS[opt].badge.substring(3)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Option A — DALL-E image */}
      {activeOption === "A" && (
        <div className={`rounded-3xl border-2 p-4 mb-6 ${OPTION_LABELS.A.color}`}>
          <p className="text-xs font-semibold text-bloom-600 mb-3">{OPTION_LABELS.A.title}</p>
          {dalleImageUrl ? (
            <div className="relative w-full h-72 rounded-2xl overflow-hidden">
              <Image
                src={dalleImageUrl}
                alt="הדמיה AI של המרפסת שלך"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
                unoptimized
              />
              <div className="absolute bottom-3 end-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                נוצר ב-DALL-E 3
              </div>
            </div>
          ) : (
            <div className="w-full h-72 rounded-2xl bg-bloom-400/10 border-2 border-dashed border-bloom-300 flex flex-col items-center justify-center text-bloom-500 gap-3">
              <span className="text-4xl">🎨</span>
              <p className="font-semibold">לא הוגדר מפתח OpenAI API</p>
              <p className="text-xs text-center px-4">
                הוסף <code className="bg-white/60 px-1 rounded">OPENAI_API_KEY</code> ל-
                <code className="bg-white/60 px-1 rounded">.env.local</code> כדי להפעיל יצירת תמונות
              </p>
            </div>
          )}
        </div>
      )}

      {/* Option B — Text recommendation */}
      {activeOption === "B" && (
        <div className={`rounded-3xl border-2 p-6 mb-6 ${OPTION_LABELS.B.color}`}>
          <p className="text-xs font-semibold text-forest-600 mb-4">{OPTION_LABELS.B.title}</p>

          <div className="mb-4">
            <h4 className="font-bold text-forest-800 mb-2 flex items-center gap-2">
              🌿 צמחים מומלצים
            </h4>
            <div className="flex flex-wrap gap-2">
              {recommendation.plants.map((plant) => (
                <PlantTag key={plant} name={plant} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-forest-800 mb-2 flex items-center gap-2">
              💡 טיפי תחזוקה
            </h4>
            <ul className="space-y-2">
              {recommendation.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-forest-700 text-sm">
                  <span className="text-forest-400 mt-0.5">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Option C — Gallery match */}
      {activeOption === "C" && galleryMatch && (
        <div className={`rounded-3xl border-2 p-4 mb-6 ${OPTION_LABELS.C.color}`}>
          <p className="text-xs font-semibold text-earth-600 mb-3">{OPTION_LABELS.C.title}</p>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden">
            <Image
              src={galleryMatch.url}
              alt={galleryMatch.caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
            <div className="absolute bottom-4 start-4 end-4">
              <p className="text-white font-semibold">{galleryMatch.caption}</p>
              <p className="text-forest-200 text-xs mt-1">תמונת גינה מרפסת דומה לסגנון שבחרת</p>
            </div>
          </div>
        </div>
      )}

      {/* Rate limit note */}
      {data.rateLimitRemaining !== undefined && (
        <p className="text-center text-forest-400 text-xs mb-4">
          נותרות לך עוד {data.rateLimitRemaining} הדמיות AI לשעה הקרובה
        </p>
      )}

      {/* CTA */}
      <div className="bg-forest-800 rounded-3xl p-6 text-center">
        <h3 className="font-display text-xl font-bold text-white mb-2">
          אהבת? בואו נהפוך את זה לאמיתי!
        </h3>
        <p className="text-forest-200 text-sm mb-5">
          אגיע אליך לביקור בית, נסתכל יחד על המרפסת ואתן לך הצעת מחיר
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <WhatsAppButton label="שלח לי את העיצוב בוואטסאפ" />
          <CalendlyButton label="קבע ביקור בית" />
        </div>
        <Link
          href="/"
          className="block mt-4 text-forest-400 text-sm hover:text-forest-200 transition-colors"
        >
          ← חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}
