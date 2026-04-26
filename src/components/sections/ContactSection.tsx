import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CalendlyButton from "@/components/ui/CalendlyButton";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-24 bg-earth-50" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <span className="text-earth-600 text-sm font-semibold uppercase tracking-widest">
          יצירת קשר
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-800 mt-2 mb-4">
          מוכן להתחיל?
        </h2>
        <p className="text-forest-600 text-lg mb-10 max-w-xl mx-auto">
          שלח הודעה ואחזור אליך תוך שעות ספורות, או קבע ביקור בית ישירות ביומן שלי
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            size="lg"
            label="שלח הודעה בוואטסאפ"
            className="w-full sm:w-auto"
          />
          <CalendlyButton
            size="lg"
            label="קבע ביקור בית בחינם"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "📍", title: "אזור שירות", desc: "מרכז הארץ ושפלה" },
            { icon: "⏱️", title: "זמן תגובה", desc: "עד 24 שעות" },
            { icon: "💰", title: "ייעוץ ראשוני", desc: "חינם, ללא התחייבות" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-earth-200">
              <div className="text-3xl mb-2">{icon}</div>
              <h4 className="font-bold text-forest-800 mb-1">{title}</h4>
              <p className="text-forest-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
