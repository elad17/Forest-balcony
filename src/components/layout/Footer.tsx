import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CalendlyButton from "@/components/ui/CalendlyButton";

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-forest-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-display font-bold text-white text-xl">
                Forest Balcony
              </span>
            </div>
            <p className="text-forest-400 text-sm leading-relaxed">
              גינון בוטיק למרפסות — עיצוב אישי, צמחים ממשתלות ישראליות,
              תוצאות שמרגשות.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#examples", label: "לפני ואחרי" },
                { href: "#gallery", label: "גלריית השראה" },
                { href: "#how-it-works", label: "איך זה עובד?" },
                { href: "/questionnaire", label: "שאלון עיצוב חינמי" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">יצירת קשר</h4>
            <div className="space-y-3">
              <WhatsAppButton size="sm" label="שלח הודעה" />
              <div className="block">
                <CalendlyButton size="sm" label="קבע ביקור בית" />
              </div>
              <p className="text-forest-400 text-xs">
                📍 מרכז הארץ ושפלה
                <br />
                ⏱️ מגיב תוך 24 שעות
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 pt-6 text-center">
          <p className="text-forest-500 text-xs">
            © {new Date().getFullYear()} Forest Balcony — כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
}
