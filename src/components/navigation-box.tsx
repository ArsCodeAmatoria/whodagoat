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
      {/* Toggle Button - always visible, top right */}
      <button
        className="fixed top-4 right-4 z-[70] bg-black text-white p-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontFamily: 'Courier New, monospace' }}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Overlay - only shows when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-[65] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: '320px',
          maxWidth: '85vw',
          borderLeft: '1px solid #e5e7eb',
        }}
      >
        <div 
          className="h-full overflow-y-auto p-6"
          style={{ paddingTop: '80px' }} // Space for close button
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
              WHO&apos;S THE GOAT?
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              A reality competition series pitch for the next generation of tech creators
            </p>
            <p className="text-lg font-bold mt-2 text-gray-700" style={{ fontFamily: 'Courier New, monospace' }}>
              IX
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h2>
            <div className="space-y-3">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                  currentPage === 'treatment' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Treatment Document
              </Link>
              <Link 
                href="/pitch" 
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                  currentPage === 'business' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Business Plan
              </Link>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {currentPage === 'treatment' ? 'Show Details' : 'Key Metrics'}
            </h2>
            <div className="space-y-3 text-sm">
              {currentPage === 'treatment' ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">12 episodes, 60 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contestants:</span>
                    <span className="font-medium">12 tech creators</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grand Prize:</span>
                    <span className="font-medium">$100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium">$6M production</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-medium text-green-600">$13.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit:</span>
                    <span className="font-medium text-green-600">$7.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Margin:</span>
                    <span className="font-medium text-green-600">56%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Funding:</span>
                    <span className="font-medium text-blue-600">$10M</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Categories/Status */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {currentPage === 'treatment' ? 'Categories' : 'Status'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {currentPage === 'treatment' ? (
                <>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    Reality TV
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Technology
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    Competition
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                    Entertainment
                  </span>
                </>
              ) : (
                <>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    In Development
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    Funding Ready
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h2>
            <div className="text-sm leading-relaxed">
              <p className="font-medium text-gray-900">Nine Productions</p>
              <p className="text-gray-600">Los Angeles, CA</p>
              <p className="text-gray-600 mt-2">
                <a href="mailto:info@nineproductions.com" className="text-blue-600 hover:text-blue-800">
                  info@nineproductions.com
                </a>
              </p>
            </div>
          </div>

          {/* Confidentiality Notice */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Courier New, monospace' }}>
              <strong>CONFIDENTIAL & PROPRIETARY</strong><br />
              This document contains confidential and proprietary information of Nine Productions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 