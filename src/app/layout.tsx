import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jyotish Kumar — Software Engineer",
  description:
    "Interactive developer portfolio of Jyotish Kumar, showcasing software engineering, developer tools, backend systems, AI, and open-source work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}