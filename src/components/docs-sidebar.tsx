"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  href: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    title: "TREATMENT",
    href: "/",
    description: "Series Overview & Format"
  },
  {
    title: "BUSINESS PLAN",
    href: "/pitch",
    description: "Financial Projections & Investment"
  }
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="sidebar w-80 h-screen overflow-y-auto border-l-2 border-black">
      <div className="p-6">
        {/* Title */}
        <div className="mb-8 text-center border-b-2 border-black pb-4">
          <div className="sidebar-title">
            "WHO'S THE GOAT?"
          </div>
          <div className="text-xs uppercase tracking-wider">
            REALITY COMPETITION SERIES
          </div>
          <div className="text-xs mt-2">
            CONFIDENTIAL TREATMENT
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav space-y-1 mb-8">
          <div className="text-xs uppercase font-bold tracking-wider border-b border-black pb-1 mb-3">
            DOCUMENTS
          </div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={`p-3 border ${isActive ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'} cursor-pointer transition-colors`}>
                  <div className="font-bold text-xs uppercase tracking-wider">{item.title}</div>
                  <div className="text-xs mt-1">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Production Details */}
        <div className="border border-black p-4 mb-6">
          <div className="text-xs uppercase font-bold tracking-wider border-b border-black pb-1 mb-3">
            PRODUCTION DETAILS
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>FORMAT:</span>
              <span>12 x 60 MIN</span>
            </div>
            <div className="flex justify-between">
              <span>CONTESTANTS:</span>
              <span>12</span>
            </div>
            <div className="flex justify-between">
              <span>GRAND PRIZE:</span>
              <span>$100,000</span>
            </div>
            <div className="flex justify-between">
              <span>BUDGET:</span>
              <span>$6M</span>
            </div>
            <div className="flex justify-between">
              <span>REVENUE:</span>
              <span>$13.8M</span>
            </div>
            <div className="flex justify-between border-t border-black pt-2 font-bold">
              <span>PROFIT MARGIN:</span>
              <span>56%</span>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="border border-black p-4 mb-6">
          <div className="text-xs uppercase font-bold tracking-wider border-b border-black pb-1 mb-3">
            PROJECT STATUS
          </div>
          <div className="text-xs space-y-1">
            <div>STATUS: READY FOR PRODUCTION</div>
            <div>CREATED: 2024</div>
            <div>LOCATION: LOS ANGELES, CA</div>
            <div>GENRE: REALITY COMPETITION</div>
            <div>TARGET: STREAMING/CABLE</div>
          </div>
        </div>

        {/* Contact */}
        <div className="border border-black p-4">
          <div className="text-xs uppercase font-bold tracking-wider border-b border-black pb-1 mb-3">
            CONTACT INFORMATION
          </div>
          <div className="text-xs space-y-1">
            <div>EMAIL: INFO@WHOSTHEGOAT.TV</div>
            <div>LOCATION: LOS ANGELES, CA</div>
            <div>AVAILABILITY: IMMEDIATE</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs">
          <div className="border-t border-black pt-3">
            © 2024 WHO'S THE GOAT?<br/>
            ALL RIGHTS RESERVED<br/>
            CONFIDENTIAL MATERIAL
          </div>
        </div>
      </div>
    </div>
  );
} 