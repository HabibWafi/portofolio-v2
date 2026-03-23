import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habibullah Hibatul Wafi — Full Stack Developer & Blockchain Engineer",
  description:
    "Portfolio of Habibullah Hibatul Wafi — Full Stack Developer, Blockchain Engineer, and IT Professional based in Jakarta, Indonesia.",
  keywords: [
    "Full Stack Developer",
    "Blockchain Engineer",
    "React",
    "Next.js",
    "Solidity",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Habibullah Hibatul Wafi" }],
  openGraph: {
    title: "Habibullah Hibatul Wafi — Full Stack Developer",
    description:
      "Passionate about building clean, data-driven systems and meaningful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
