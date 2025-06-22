"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-xl font-bold">Who&apos;s the GOAT?</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Overview
          </Link>
          <Link href="/pitch" className="text-sm font-medium hover:text-primary transition-colors">
            Pitch Deck
          </Link>
        </div>

        {/* CTA Button */}
        <Button size="sm">
          Contact Us
        </Button>
      </div>
    </nav>
  );
} 