import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
