'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavigationBoxProps {
  currentPage: 'treatment' | 'business';
}

export default function NavigationBox({ currentPage }: NavigationBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Simple Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 bg-black text-white p-3 rounded shadow-lg hover:bg-gray-800"
        style={{ fontFamily: 'Courier New, monospace' }}
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* Simple Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Simple Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-xs bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pt-20">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-xl font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
              WHO'S THE GOAT?
            </h1>
            <p className="text-sm text-gray-600">
              Reality TV Competition Series
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase mb-4 text-gray-800">Navigation</h2>
            <div className="space-y-2">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className={`block p-3 rounded ${currentPage === 'treatment' ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                Treatment Document
              </Link>
              <Link 
                href="/pitch" 
                onClick={() => setIsOpen(false)}
                className={`block p-3 rounded ${currentPage === 'business' ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                Business Plan
              </Link>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase mb-4 text-gray-800">Details</h2>
            <div className="space-y-2 text-sm">
              {currentPage === 'treatment' ? (
                <>
                  <div>Format: 12 episodes, 60 min</div>
                  <div>Contestants: 12 tech creators</div>
                  <div>Prize: $100,000</div>
                  <div>Budget: $6M production</div>
                </>
              ) : (
                <>
                  <div>Revenue: $13.8M</div>
                  <div>Profit: $7.8M</div>
                  <div>Margin: 56%</div>
                  <div>Funding: $10M</div>
                </>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-bold uppercase mb-4 text-gray-800">Contact</h2>
            <div className="text-sm">
              <div>Nine Productions</div>
              <div>Los Angeles, CA</div>
              <div className="mt-2">
                <a href="mailto:info@nineproductions.com" className="text-blue-600">
                  info@nineproductions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 