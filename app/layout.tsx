import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corfu Builders | Construction & Renovation Experts",
  description:
    "Premium construction, villa renovation, electrical, plumbing and property maintenance services in Corfu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}