import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Who's the GOAT? | Ultimate Reality-Tech Show",
  description: 'Twelve young creators compete to prove they are the Greatest of All Tech. Innovation meets entertainment in the ultimate reality series.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 