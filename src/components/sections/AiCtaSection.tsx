import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AiCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-forest-800 relative overflow-hidden">
      {/* decorative circles */}
      <div className="absolute -top-20 -start-20 w-80 h-80 rounded-full bg-forest-600/30 blur-3xl" />
      <div className="absolute -bottom-20 -end-20 w-80 h-80 rounded-full bg-forest-400/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-forest-600/40 border border-forest-400/30 rounded-full px-4 py-2 text-forest-200 text-sm mb-6">
          ✨ מופעל על ידי AI
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          רוצה לראות איך
          <br />
          <span className="text-forest-200">המרפסת שלך</span> יכולה להיראות?
        </h2>

        <p className="text-forest-200 text-lg mb-4 leading-relaxed">
          מלא שאלון קצר של 3 דקות, העלה תמונה של המרפסת שלך (אופציונלי),
          <br />
          וקבל הדמיה מותאמת אישית — חינם, מיידי, ללא התחייבות.
        </p>

        <div className="flex flex-wrap gap-3 justify-center text-forest-300 text-sm mb-10">
          <span>✅ 3 דקות בלבד</span>
          <span>•</span>
          <span>✅ מותאם לתנאים שלך</span>
          <span>•</span>
          <span>✅ ללא התחייבות</span>
          <span>•</span>
          <span>✅ צמחים ממשתלות ישראליות</span>
        </div>

        <Link href="/questionnaire">
          <Button variant="bloom" size="lg" className="text-xl px-10 py-5">
            🌿 התחל את השאלון עכשיו
          </Button>
        </Link>
      </div>
    </section>
  );
}
