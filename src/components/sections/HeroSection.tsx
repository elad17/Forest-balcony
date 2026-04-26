import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CalendlyButton from "@/components/ui/CalendlyButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800/70 via-forest-800/50 to-forest-800/80" />

      {/* Floating leaves decoration */}
      <div className="absolute top-20 start-10 text-5xl animate-float opacity-40 hidden md:block">
        🌿
      </div>
      <div
        className="absolute top-40 end-16 text-4xl animate-float opacity-30 hidden md:block"
        style={{ animationDelay: "2s" }}
      >
        🍃
      </div>
      <div
        className="absolute bottom-32 start-20 text-3xl animate-float opacity-25 hidden md:block"
        style={{ animationDelay: "4s" }}
      >
        🌱
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-forest-400/30 backdrop-blur-sm text-forest-100 border border-forest-400/40 rounded-full px-4 py-2 text-sm mb-6">
          🌿 גינון בוטיק למרפסות
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          המרפסת שלך
          <br />
          <span className="text-forest-200">יכולה להיות</span>
          <br />
          גן עדן
        </h1>

        <p className="text-forest-100 text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto">
          עיצוב גינות בוטיק למרפסות — בהתאמה אישית מלאה
          <br />
          <span className="text-forest-200 text-lg">
            מגינת ירק ועד גן פרחים צבעוני
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/questionnaire">
            <Button variant="bloom" size="lg" className="w-full sm:w-auto">
              ✨ קבל הדמיה בחינם
            </Button>
          </Link>
          <WhatsAppButton size="lg" label="דברו איתי" />
          <CalendlyButton size="lg" label="קבע ביקור בית" />
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap gap-6 justify-center text-forest-200 text-sm">
          <span className="flex items-center gap-2">✅ ייעוץ ראשוני חינם</span>
          <span className="flex items-center gap-2">🌱 צמחים ממשתלות מקומיות</span>
          <span className="flex items-center gap-2">📍 ביקור בית עד הבית</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
