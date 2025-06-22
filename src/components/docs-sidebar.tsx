"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { File, Users, Cog, TrendingUp, Megaphone, Presentation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Calendar, Target, DollarSign } from "lucide-react";

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

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/",
    icon: FileText,
    description: "Show concept and format"
  },
  {
    title: "Investment Pitch",
    href: "/pitch",
    icon: DollarSign,
    description: "Business case and financials"
  }
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-80 bg-card border-r border-border h-screen overflow-y-auto sidebar-scroll">
      <div className="p-6">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="script-title text-2xl mb-2">Who&apos;s the GOAT?</h1>
          <p className="text-sm text-muted-foreground">
            The Ultimate Reality-Tech Show
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start h-auto p-3"
                >
                  <Icon className="mr-3 h-4 w-4 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs opacity-70">{item.description}</div>
                  </div>
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Quick Stats Card */}
        <Card className="mt-8">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 text-sm">Quick Stats</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contestants</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Episodes</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Grand Prize</span>
                <span className="font-medium">$100K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Production Budget</span>
                <span className="font-medium">$6M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Projected Revenue</span>
                <span className="font-medium">$13.8M</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-sm">Contact</h3>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>info@whosthegoat.tv</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
} 