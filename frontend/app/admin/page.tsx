import type { Metadata } from "next";
import AdminPage from "./AdminPage";

export const metadata: Metadata = {
  title: "Admin Dashboard — GrandVenue",
  description: "Manage hall listings, leads, inquiries, and analytics.",
  robots: "noindex",
};

export default function Admin() {
  return <AdminPage />;
}
