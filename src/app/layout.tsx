import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-border bg-background">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-display-sm font-bold mb-4">Who's the GOAT?</h3>
                <p className="text-muted-foreground">
                  The ultimate reality-tech show where innovation meets entertainment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>TikTok: @WhosTheGOAT</p>
                  <p>Website: whosthegoat.tv</p>
                  <p>Email: info@whosthegoat.tv</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Show Info</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>12 episodes • 44 minutes each</p>
                  <p>Genre: Reality Competition</p>
                  <p>Target: Gen Z • Tech Creators</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
              <p>&copy; 2024 Who's the GOAT? All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 