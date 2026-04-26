import type { Metadata } from "next";
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-frank-ruhl",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forest Balcony | גינות בוטיק למרפסות",
  description:
    "עיצוב גינות מרפסת בוטיק בהתאמה אישית — גינת ירק, פרחים, מטפסים ועוד. קבל הדמיה בחינם.",
  keywords: "גינון מרפסות, גינת ירק, גינה בוטיק, עיצוב מרפסת, Forest Balcony",
  openGraph: {
    title: "Forest Balcony | גינות בוטיק למרפסות",
    description: "המרפסת שלך יכולה להיות גן עדן — עיצוב גינות בוטיק בהתאמה אישית",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${frankRuhl.variable} antialiased bg-forest-50 text-forest-800`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
