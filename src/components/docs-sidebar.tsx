"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { File, Users, Cog, TrendingUp, Megaphone, Presentation } from "lucide-react";

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Concept", href: "/", icon: File },
      { title: "Pitch Deck", href: "/pitch", icon: Presentation },
    ],
  },
  {
    title: "Production",
    items: [
      { title: "Production Plan", href: "/production", icon: Cog },
      { title: "Casting Criteria", href: "/casting", icon: Users },
      { title: "Technical Specs", href: "/technical", icon: Cog },
    ],
  },
  {
    title: "Strategy",
    items: [
      { title: "Marketing Strategy", href: "/marketing", icon: Megaphone },
      { title: "Business Model", href: "/business", icon: TrendingUp },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen sticky top-0 border-r border-border bg-background/95 backdrop-blur">
      <div className="p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-xl font-bold">Who's the GOAT?</span>
        </Link>

        {/* Navigation */}
        <nav className="space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="mt-12 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2">Ready to Pitch?</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Contact us to discuss this revolutionary show concept.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 