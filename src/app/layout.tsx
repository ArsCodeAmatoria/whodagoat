import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { DocsSidebar } from "@/components/docs-sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });

export const metadata: Metadata = {
  title: "Who's the GOAT? - The Ultimate Reality-Tech Show",
  description: "Twelve young creators enter the arena with one goal: prove they are the Greatest of All Tech. The reality competition that combines innovation, entertainment, and real skills.",
  keywords: "reality TV, tech competition, coding, app development, startup, GOAT",
  authors: [{ name: "Who's the GOAT Production Team" }],
  openGraph: {
    title: "Who's the GOAT? - The Ultimate Reality-Tech Show",
    description: "The reality competition that combines tech, drama, and entrepreneurship",
    type: "website",
    url: "https://whosthegoat.tv",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who's the GOAT? - The Ultimate Reality-Tech Show",
    description: "The reality competition that combines tech, drama, and entrepreneurship",
    creator: "@WhosTheGOAT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dancingScript.variable} antialiased`}>
        <div className="flex min-h-screen">
          <DocsSidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-8 py-12 max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
