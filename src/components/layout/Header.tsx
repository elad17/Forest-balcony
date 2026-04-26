"use client";
import Link from "next/link";
import { useState } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const navLinks = [
  { href: "#examples", label: "לפני/אחרי" },
  { href: "#gallery", label: "השראה" },
  { href: "#how-it-works", label: "איך זה עובד?" },
  { href: "#contact", label: "צור קשר" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 start-0 end-0 z-50 bg-white/90 backdrop-blur-md border-b border-forest-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-display font-bold text-forest-800 text-xl">
            Forest Balcony
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-forest-600 hover:text-forest-800 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/questionnaire"
            className="bg-bloom-400 hover:bg-bloom-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            ✨ קבל הדמיה חינם
          </Link>
          <WhatsAppButton size="sm" label="וואטסאפ" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-forest-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="תפריט"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-forest-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-forest-700 py-2 border-b border-forest-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/questionnaire"
            className="block text-center bg-bloom-400 text-white py-3 rounded-xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            ✨ קבל הדמיה חינם
          </Link>
          <WhatsAppButton size="md" label="שלח הודעה בוואטסאפ" className="w-full" />
        </div>
      )}
    </header>
  );
}
