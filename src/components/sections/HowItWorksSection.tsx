const steps = [
  {
    num: "01",
    icon: "📋",
    title: "ממלאים שאלון קצר",
    desc: "3 דקות — גודל המרפסת, כמות שמש, סגנון מועדף ורמת תחזוקה",
  },
  {
    num: "02",
    icon: "✨",
    title: "מקבלים הדמיה מ-AI",
    desc: "מערכת ה-AI שלנו יוצרת עבורך עיצוב מותאם אישית עם רשימת צמחים",
  },
  {
    num: "03",
    icon: "🏡",
    title: "ביקור בית וביצוע",
    desc: "אנחנו מגיעים אליך, נותנים הצעת מחיר ומתחילים לבנות את הגינה",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="how-it-works">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            תהליך
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-800 mt-2 mb-4">
            איך זה עובד?
          </h2>
          <p className="text-forest-600 text-lg">
            פשוט, מהיר, ובלי כאב ראש
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 start-1/6 end-1/6 h-0.5 bg-gradient-to-r from-forest-200 via-forest-400 to-forest-200" />

          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-20 h-20 rounded-full bg-forest-600 text-white flex flex-col items-center justify-center shadow-lg mb-6">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <span className="text-forest-300 text-xs font-bold tracking-widest mb-2">
                שלב {step.num}
              </span>
              <h3 className="font-bold text-forest-800 text-xl mb-2">{step.title}</h3>
              <p className="text-forest-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
