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
        {/* Left Side Footer with Vertical Text - responsive visibility */}
        <div 
          className="fixed left-0 top-0 bottom-0 w-8 lg:flex hidden items-center justify-center bg-gray-50"
          style={{ zIndex: 50, position: 'fixed' }}
        >
          <div 
            className="text-gray-400 tracking-widest"
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '12px',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              paddingTop: '3rem',
              paddingBottom: '3rem'
            }}
          >
            WHO&apos;S THE GOAT? • CONFIDENTIAL TREATMENT • NINE PRODUCTIONS • LOS ANGELES, CA
          </div>
        </div>

        <div className="min-h-screen">
          {/* Main Content with responsive spacing */}
          <div className="px-4 sm:px-6 lg:pr-80 lg:pl-12">
            <main className="py-8 max-w-4xl lg:mx-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
