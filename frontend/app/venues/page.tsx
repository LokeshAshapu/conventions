import type { Metadata } from "next";
import { HALL_INFO } from "@/lib/data";
import VenuesPage from "./VenuesPage";

export const metadata: Metadata = {
  title: `Our Venues — ${HALL_INFO.name}`,
  description: `Explore all event spaces at ${HALL_INFO.name}: grand ballrooms, open-air lawns, banquet halls, conference rooms, and more.`,
};

export default function Venues() {
  return <VenuesPage />;
}
