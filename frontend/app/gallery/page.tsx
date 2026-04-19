import type { Metadata } from "next";
import { HALL_INFO } from "@/lib/data";
import GalleryFullPage from "./GalleryFullPage";

export const metadata: Metadata = {
  title: `Gallery — ${HALL_INFO.name}`,
  description: `Browse event photos from ${HALL_INFO.name} — weddings, corporate events, receptions, cultural functions, and more.`,
};

export default function Gallery() {
  return <GalleryFullPage />;
}
