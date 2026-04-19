import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ScrollToTop from "@/components/ScrollToTop";
import { HALL_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: `${HALL_INFO.name} — Premier Convention & Event Venue in ${HALL_INFO.city}`,
  description: `${HALL_INFO.tagline}. Book halls for weddings, receptions, corporate events, birthdays, and cultural functions in ${HALL_INFO.city}. Call ${HALL_INFO.phone}.`,
  keywords: `convention hall ${HALL_INFO.city}, wedding venue ${HALL_INFO.city}, event hall, banquet hall, corporate events, reception hall`,
  openGraph: {
    title: `${HALL_INFO.name} — Premier Event Venue`,
    description: HALL_INFO.subtitle,
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
