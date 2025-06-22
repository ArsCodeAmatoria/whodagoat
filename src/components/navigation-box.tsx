import React from 'react';
import Link from 'next/link';

interface NavigationBoxProps {
  currentPage: 'treatment' | 'business';
}

export default function NavigationBox({ currentPage }: NavigationBoxProps) {
  return (
    <div style={{
      position: 'fixed', 
      top: 0, 
      right: 0, 
      width: '288px', 
      height: '100vh', 
      background: 'white', 
      borderLeft: '1px solid #e5e7eb',
      padding: '24px',
      overflowY: 'auto',
      zIndex: 50
    }}>
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
          <Link 
            href="/login" 
            style={{
              display: 'block',
              padding: '12px 16px',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: '#dc2626',
              color: '#fff',
              border: '1px solid #dc2626'
            }}
          >
            🔒 Confidential Access
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
                color: '#c2410c', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Education
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
                Ready for Production
              </span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#dbeafe', 
                color: '#1e40af', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Seeking Investment
              </span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#fef3c7', 
                color: '#92400e', 
                fontSize: '12px', 
                fontWeight: '500', 
                borderRadius: '9999px' 
              }}>
                Series A Funding
              </span>

            </>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '12px', 
          fontWeight: '600', 
          color: '#111827', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          marginBottom: '16px' 
        }}>
          Project Info
        </h2>
        <div style={{ fontSize: '14px', color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>Created: {new Date().getFullYear()}</div>
          <div>Location: Los Angeles, CA</div>
          <div>Studio: NINE</div>
          <div>Status: Development</div>
        </div>
      </div>

      {/* Contact */}
      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
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
        <div style={{ fontSize: '14px', color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <a href="mailto:arscodeamatoria@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
              arscodeamatoria@gmail.com
            </a>
          </div>
          <div>Los Angeles, California</div>
          <div style={{ fontSize: '12px', fontWeight: '500', color: '#374151' }}>
            Production House: NINE
          </div>
          <div style={{ fontSize: '12px', color: '#dc2626', fontWeight: '500', marginTop: '12px' }}>
            CONFIDENTIAL DOCUMENT
          </div>
        </div>
      </div>
    </div>
  );
} 