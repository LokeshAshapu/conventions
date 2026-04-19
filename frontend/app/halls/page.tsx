import { redirect } from "next/navigation";

// Old marketplace halls route — redirect to venues
export default function HallsRedirect() {
  redirect("/venues");
}
