import React from 'react';
import Link from 'next/link';

interface NavigationBoxProps {
  currentPage: 'treatment' | 'business';
}

export default function NavigationBox({ currentPage }: NavigationBoxProps) {
  return (
    <div className="fixed top-0 right-0 w-72 h-screen bg-white border-l border-gray-200 p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
          WHO&apos;S THE GOAT?
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          A reality competition series pitch for the next generation of tech creators
        </p>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
          Navigation
        </h2>
        <div className="space-y-3">
          <Link 
            href="/" 
            className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
              currentPage === 'treatment' 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Treatment Document
          </Link>
          <Link 
            href="/pitch" 
            className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
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
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
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
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
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
                Education
              </span>
            </>
          ) : (
            <>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Ready for Production
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Seeking Investment
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                Series A Funding
              </span>
            </>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
          Project Info
        </h2>
        <div className="text-sm text-gray-600 space-y-2">
          <div>Created: {new Date().getFullYear()}</div>
          <div>Location: Los Angeles, CA</div>
          <div>Status: Development</div>
        </div>
      </div>

      {/* Contact */}
      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
          Contact
        </h2>
        <div className="text-sm text-gray-600 space-y-2">
          <div>
            <a href="mailto:info@whosthegoat.tv" className="text-blue-600 hover:text-blue-800 transition-colors">
              info@whosthegoat.tv
            </a>
          </div>
          <div>Los Angeles, California</div>
          <div className="text-xs text-red-600 font-medium mt-3">
            CONFIDENTIAL DOCUMENT
          </div>
        </div>
      </div>
    </div>
  );
} 