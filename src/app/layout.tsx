import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Who's the GOAT? - Reality Tech Competition",
  description: "The ultimate reality competition where 12 young tech creators battle to prove they're the Greatest of All Tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
