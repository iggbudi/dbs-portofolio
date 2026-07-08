import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dwi Budi Santoso — Full-Stack Developer & AI Engineer",
  description:
    "Full-stack developer and AI engineer. 40+ production applications shipped and self-hosted across institutional systems, AI multi-agent platforms, bots, DeFi, and machine learning.",
  authors: [{ name: "Dwi Budi Santoso" }],
  keywords: [
    "full-stack developer",
    "AI engineer",
    "PHP",
    "TypeScript",
    "Node.js",
    "Next.js",
    "multi-agent",
    "freelance developer",
  ],
  openGraph: {
    title: "Dwi Budi Santoso — Full-Stack Developer & AI Engineer",
    description:
      "40+ production applications shipped and self-hosted. Full-cycle development from architecture to server maintenance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-ink-950 text-paper font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
