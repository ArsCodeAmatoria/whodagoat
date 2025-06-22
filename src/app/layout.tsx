import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Who's the GOAT? - Reality TV Pitch",
  description: "A reality competition series where 12 young tech creators compete to prove they're the Greatest of All Tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white`}>
        <div className="min-h-screen">
          {/* Main Content with proper spacing for fixed navigation box */}
          <div className="pr-80">
            <main className="px-6 py-8 max-w-4xl mx-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
