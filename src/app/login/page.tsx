import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="screenplay">
      {/* Title */}
      <div className="screenplay-title">
        &ldquo;WHO&apos;S THE GOAT?&rdquo;
      </div>
      <div className="screenplay-subtitle">
        CONFIDENTIAL ACCESS
      </div>
      <div className="screenplay-subtitle">
        INVITE ONLY
      </div>
      
      <div className="page-break"></div>

      {/* Login Form */}
      <div className="screenplay-heading">
        AUTHORIZED ACCESS
      </div>
      
      <div className="screenplay-action">
        This document contains proprietary and confidential information about &ldquo;WHO&apos;S THE GOAT?&rdquo; television series. Access is restricted to invited parties only.
      </div>

      <div className="screenplay-action">
        If you have received an invitation code, please enter it below:
      </div>

      {/* Form */}
      <div style={{ 
        maxWidth: '400px', 
        margin: '40px auto', 
        padding: '32px',
        border: '2px solid #000',
        fontFamily: 'Courier New, monospace'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              INVITATION CODE:
            </label>
            <input 
              type="password"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #000',
                fontFamily: 'Courier New, monospace',
                fontSize: '14px',
                backgroundColor: '#f9f9f9'
              }}
              placeholder="Enter invitation code"
            />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              EMAIL ADDRESS:
            </label>
            <input 
              type="email"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #000',
                fontFamily: 'Courier New, monospace',
                fontSize: '14px',
                backgroundColor: '#f9f9f9'
              }}
              placeholder="your.email@company.com"
            />
          </div>

          <button 
            type="submit"
            style={{
              padding: '16px 24px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              fontFamily: 'Courier New, monospace',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            ACCESS DOCUMENTS
          </button>
        </form>
      </div>

      {/* Security Notice */}
      <div className="screenplay-heading">
        CONFIDENTIALITY NOTICE
      </div>
      
      <div className="screenplay-action">
        <strong className="text-red-600">CONFIDENTIAL:</strong> This material is proprietary to NINE and contains trade secrets and confidential information. Any reproduction, distribution, or disclosure without written authorization is strictly prohibited and may result in legal action.
      </div>

      <div className="screenplay-action">
        By accessing this material, you agree to maintain strict confidentiality and use the information solely for the purpose of evaluating potential business relationships with NINE.
      </div>

      {/* Contact */}
      <div className="screenplay-heading">
        REQUEST ACCESS
      </div>
      
      <div className="screenplay-action">
        If you believe you should have access to this material but do not have an invitation code, please contact:
      </div>
      
      <div className="screenplay-action">
        Email: <a href="mailto:arscodeamatoria@gmail.com" className="text-blue-600 underline">arscodeamatoria@gmail.com</a><br/>
        Subject: &ldquo;WHO&apos;S THE GOAT?&rdquo; - Access Request<br/>
        Production House: NINE
      </div>

      {/* Back Link */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link 
          href="/"
          style={{
            color: '#2563eb',
            textDecoration: 'underline',
            fontFamily: 'Courier New, monospace',
            fontSize: '14px'
          }}
        >
          ← Return to Public Treatment
        </Link>
      </div>

      <div className="screenplay-transition">
        FADE OUT.
      </div>
    </div>
  );
} 