import React from 'react';
import Link from 'next/link';
import { FileText, DollarSign, Users, Calendar, Target, Trophy } from 'lucide-react';

export default function DocsSidebar() {
  return (
    <div className="w-64 bg-gray-50 border-l border-gray-200 sticky top-0 h-screen overflow-y-auto">
      <div className="p-4">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-1" style={{ fontFamily: 'Courier New, monospace' }}>
            WHO&apos;S THE GOAT?
          </h2>
          <p className="text-xs text-gray-600 uppercase tracking-wide">
            REALITY TV PITCH
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-2 mb-6">
          <Link 
            href="/" 
            className="flex items-center gap-3 w-full p-3 text-left bg-white border border-gray-200 hover:bg-gray-100 transition-colors rounded"
          >
            <FileText size={16} className="text-gray-600" />
            <div>
              <div className="text-sm font-medium text-black">Treatment</div>
              <div className="text-xs text-gray-500">Show concept & format</div>
            </div>
          </Link>
          
          <Link 
            href="/pitch" 
            className="flex items-center gap-3 w-full p-3 text-left bg-white border border-gray-200 hover:bg-gray-100 transition-colors rounded"
          >
            <DollarSign size={16} className="text-gray-600" />
            <div>
              <div className="text-sm font-medium text-black">Business Plan</div>
              <div className="text-xs text-gray-500">Investment & financials</div>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="bg-white border border-gray-200 rounded p-3 mb-6">
          <h3 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">
            Quick Stats
          </h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Users size={12} className="text-gray-500" />
              <span className="text-gray-700">12 contestants</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={12} className="text-gray-500" />
              <span className="text-gray-700">12 episodes</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={12} className="text-gray-500" />
              <span className="text-gray-700">$6M budget</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy size={12} className="text-gray-500" />
              <span className="text-gray-700">$100K prize</span>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white border border-gray-200 rounded p-3 mb-6">
          <h3 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">
            Financials
          </h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue:</span>
              <span className="font-medium text-green-700">$13.8M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Profit:</span>
              <span className="font-medium text-green-700">$7.8M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Margin:</span>
              <span className="font-medium text-green-700">56%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ROI:</span>
              <span className="font-medium text-green-700">150%</span>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-6">
          <h3 className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">
            Status
          </h3>
          <div className="text-xs text-blue-800">
            <div className="mb-1">✓ Ready for production</div>
            <div className="mb-1">✓ Casting strategy complete</div>
            <div className="mb-1">✓ Budget finalized</div>
            <div>✓ Seeking $10M funding</div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-100 border border-gray-200 rounded p-3">
          <h3 className="text-sm font-bold text-black mb-2 uppercase tracking-wide">
            Contact
          </h3>
          <div className="text-xs text-gray-700 space-y-1">
            <div>info@whosthegoat.tv</div>
            <div>Los Angeles, CA</div>
            <div className="text-red-600 font-medium">CONFIDENTIAL</div>
          </div>
        </div>
      </div>
    </div>
  );
} 