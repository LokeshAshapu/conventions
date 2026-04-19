import { halls } from "@/lib/data";
import { notFound } from "next/navigation";
import HallDetailPage from "./HallDetailPage";

export async function generateStaticParams() {
  return halls.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const hall = halls.find((h) => h.slug === params.slug);
  if (!hall) return {};
  return {
    title: `${hall.name} — GrandVenue`,
    description: hall.shortDescription,
  };
}

export default function HallPage({ params }: { params: { slug: string } }) {
  const hall = halls.find((h) => h.slug === params.slug);
  if (!hall) notFound();
  return <HallDetailPage hall={hall} />;
}
