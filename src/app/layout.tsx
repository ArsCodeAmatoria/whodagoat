import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocsSidebar from "@/components/docs-sidebar";

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
        <div className="flex min-h-screen">
          {/* Main Content */}
          <main className="flex-1 overflow-x-auto">
            <div className="max-w-5xl mx-auto p-8">
              {children}
            </div>
          </main>
          
          {/* Sidebar */}
          <DocsSidebar />
        </div>
      </body>
    </html>
  );
}
