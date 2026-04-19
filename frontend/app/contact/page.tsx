import type { Metadata } from "next";
import { HALL_INFO } from "@/lib/data";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: `Contact Us — ${HALL_INFO.name}`,
  description: `Contact ${HALL_INFO.name} to book your event. Call ${HALL_INFO.phone} or WhatsApp us for instant availability and pricing.`,
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <ContactSection />
    </div>
  );
}
