import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Who's the GOAT? - Series Pitch Deck",
  description: "The ultimate tech reality competition series seeking $10M Series A funding. 12 episodes, $13.8M projected revenue, 56% gross margin.",
  keywords: "reality TV, tech competition, venture capital, series A funding, television production",
  authors: [{ name: "Nine Productions" }],
  openGraph: {
    title: "Who's the GOAT? - Series Pitch Deck",
    description: "The ultimate tech reality competition series seeking $10M Series A funding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
