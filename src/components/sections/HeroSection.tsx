import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CalendlyButton from "@/components/ui/CalendlyButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="מרפסת בוטיק מעוצבת"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay — darkens uniformly so text is readable over lush greenery */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content — aligned right (RTL start) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 pb-24 pt-32 md:py-0">
        <div className="max-w-xl animate-fade-in">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-sm font-medium tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400 inline-block" />
            גינון בוטיק למרפסות
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-[1.1] mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl">
              המרפסת שלך
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-forest-200 mt-1">
              יכולה להיות
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl mt-1">
              גן עדן
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
            עיצוב גינות בוטיק למרפסות בהתאמה אישית מלאה —
            מגינת ירק ועד גן פרחים מרהיב
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="/questionnaire">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-400 hover:bg-forest-600 text-white font-semibold px-7 py-4 rounded-2xl text-base shadow-lg shadow-forest-900/30 transition-all duration-200 hover:scale-105 active:scale-95">
                ✨ קבל הדמיה בחינם
              </button>
            </Link>
            <WhatsAppButton size="lg" label="דברו איתי" />
            <CalendlyButton size="lg" label="קבע ביקור" />
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="text-forest-400">✓</span> ייעוץ ראשוני חינם
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-forest-400">✓</span> צמחים ממשתלות מקומיות
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-forest-400">✓</span> ביקור בית עד אליך
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest">גלול</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
