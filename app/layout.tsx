import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Krishna's Files — Engineering & Full-Stack Modernism",
  description:
    "A research-driven archive exploring full-stack systems, generative AI pipelines, decentralized prediction markets, and high-concurrency real-time engines built by Krishna Bhardwaj (@kkrissshnaa).",
  keywords: [
    "Krishna Bhardwaj",
    "kkrissshnaa",
    "Full-stack Software Engineer",
    "Solana Prediction Market",
    "Generative AI Video",
    "React Native Expo",
    "WebSockets Realtime",
    "Engineering Archive",
    "Mosby Files Portfolio"
  ],
  authors: [{ name: "Krishna Bhardwaj", url: "https://github.com/kkrissshnaa" }],
  openGraph: {
    title: "Krishna's Files — Engineering & Full-Stack Modernism",
    description:
      "A research-driven archive exploring full-stack systems, generative AI pipelines, and decentralized systems by Krishna Bhardwaj.",
    url: "https://github.com/kkrissshnaa",
    siteName: "Krishna's Files",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna's Files — Engineering & Full-Stack Modernism",
    description:
      "A research-driven archive exploring full-stack systems, generative AI pipelines, and decentralized systems by Krishna Bhardwaj.",
    creator: "@kkrissshnaa"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0c0c0e] text-[#FDFAF7] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
