'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavigationBoxProps {
  currentPage: 'treatment' | 'business';
}

export default function NavigationBox({ currentPage }: NavigationBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile toggle button
  const MobileToggle = () => (
    <button
      className="lg:hidden fixed top-4 right-4 z-[60] bg-black text-white p-2 rounded-md shadow-lg"
      onClick={() => setIsOpen(!isOpen)}
      style={{ fontFamily: 'Courier New, monospace' }}
    >
      {isOpen ? '✕' : '☰'}
    </button>
  );

  // Overlay for mobile
  const Overlay = () => (
    isOpen && (
      <div 
        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[45]"
        onClick={() => setIsOpen(false)}
      />
    )
  );

  // Sidebar content component to avoid duplication
  const SidebarContent = () => (
    <>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '8px',
          fontFamily: 'Courier New, monospace' 
        }}>
          WHO&apos;S THE GOAT?
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#6b7280', 
          lineHeight: '1.6' 
        }}>
          A reality competition series pitch for the next generation of tech creators
        </p>
        <p style={{ 
          fontSize: '18px', 
          color: '#374151', 
          fontWeight: 'bold',
          marginTop: '8px',
          fontFamily: 'Courier New, monospace' 
        }}>
          IX
        </p>
      </div>

      {/* Navigation */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '12px', 
          fontWeight: '600', 
          color: '#111827', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          marginBottom: '16px' 
        }}>
          Navigation
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              padding: '12px 16px',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: currentPage === 'treatment' ? '#000' : '#f3f4f6',
              color: currentPage === 'treatment' ? '#fff' : '#374151'
            }}
          >
            Treatment Document
          </Link>
          <Link 
            href="/pitch" 
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              padding: '12px 16px',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: currentPage === 'business' ? '#000' : '#f3f4f6',
              color: currentPage === 'business' ? '#fff' : '#374151'
            }}
          >
            Business Plan
          </Link>
        </div>
      </div>

      {/* Key Metrics */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '12px', 
          fontWeight: '600', 
          color: '#111827', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          marginBottom: '16px' 
        }}>
          {currentPage === 'treatment' ? 'Show Details' : 'Key Metrics'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
          {currentPage === 'treatment' ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Format:</span>
                <span style={{ fontWeight: '500' }}>12 episodes, 60 min</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Contestants:</span>
                <span style={{ fontWeight: '500' }}>12 tech creators</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Grand Prize:</span>
                <span style={{ fontWeight: '500' }}>$100,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Budget:</span>
                <span style={{ fontWeight: '500' }}>$6M production</span>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Revenue:</span>
                <span style={{ fontWeight: '500', color: '#059669' }}>$13.8M</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Profit:</span>
                <span style={{ fontWeight: '500', color: '#059669' }}>$7.8M</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Margin:</span>
                <span style={{ fontWeight: '500', color: '#059669' }}>56%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Funding:</span>
                <span style={{ fontWeight: '500', color: '#2563eb' }}>$10M</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Categories/Status */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '12px', 
          fontWeight: '600', 
          color: '#111827', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          marginBottom: '16px' 
        }}>
          {currentPage === 'treatment' ? 'Categories' : 'Status'}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {currentPage === 'treatment' ? (
            <>
              <span style={{ 
                padding: '4px 12px', 
                background: '#dbeafe', 
                color: '#1e40af', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Reality TV
              </span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#dcfce7', 
                color: '#166534', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Technology
              </span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#f3e8ff', 
                color: '#7c3aed', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Competition
              </span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#fed7aa', 
                color: '#ea580c', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Entertainment
              </span>
            </>
          ) : (
            <>
              <span style={{ 
                padding: '4px 12px', 
                background: '#dcfce7', 
                color: '#166534', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                In Development
              </span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#dbeafe', 
                color: '#1e40af', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Funding Ready
              </span>
            </>
          )}
        </div>
      </div>

      {/* Contact */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '12px', 
          fontWeight: '600', 
          color: '#111827', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          marginBottom: '16px' 
        }}>
          Contact
        </h2>
        <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ color: '#374151', fontWeight: '500' }}>Nine Productions</p>
          <p style={{ color: '#6b7280' }}>Los Angeles, CA</p>
          <p style={{ color: '#6b7280', marginTop: '8px' }}>
            <a href="mailto:info@nineproductions.com" style={{ color: '#2563eb' }}>
              info@nineproductions.com
            </a>
          </p>
        </div>
      </div>

      {/* Confidentiality Notice */}
      <div style={{ 
        padding: '16px', 
        background: '#f9fafb', 
        borderRadius: '8px', 
        marginTop: 'auto' 
      }}>
        <p style={{ 
          fontSize: '12px', 
          color: '#6b7280', 
          lineHeight: '1.5',
          fontFamily: 'Courier New, monospace' 
        }}>
          CONFIDENTIAL & PROPRIETARY<br />
          This document contains confidential and proprietary information of Nine Productions.
        </p>
      </div>
    </>
  );

  return (
    <>
      <MobileToggle />
      <Overlay />
      
      {/* Mobile Sidebar - slides in when toggled */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full bg-white border-l border-gray-200 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: '288px', 
          padding: '24px',
          overflowY: 'auto'
        }}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar - always visible */}
      <div 
        className="hidden lg:block fixed top-0 right-0 h-full bg-white border-l border-gray-200 z-50"
        style={{
          width: '288px', 
          padding: '24px',
          overflowY: 'auto'
        }}
      >
        <SidebarContent />
      </div>
    </>
  );
} 