import React from "react";
import FinancialChart from "../../components/financial-chart";
import RevenueChart from "../../components/revenue-chart";
import Link from "next/link";

export default function PitchPage() {
  return (
    <>
      {/* Simple Navigation Header */}
      <div className="mb-8 pb-4 border-b border-gray-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
            WHO'S THE GOAT?
          </h1>
          <div className="flex gap-4">
            <Link 
              href="/" 
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors"
            >
              Treatment Document
            </Link>
            <span className="px-3 py-1 bg-black text-white rounded text-sm">
              Business Plan
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Business plan & investment proposal for the reality competition series
        </p>
      </div>

      <div className="screenplay">
        {/* Title Page */}
        <div className="screenplay-title">
          &ldquo;WHO&apos;S THE GOAT?&rdquo;
        </div>
        <div className="screenplay-subtitle">
          BUSINESS PLAN & INVESTMENT PROPOSAL
        </div>
        <div className="screenplay-subtitle">
          Production Company: NINE
        </div>
        <div className="screenplay-subtitle">
          Date: {new Date().getFullYear()}
        </div>
        <div className="screenplay-subtitle">
          CONFIDENTIAL
        </div>
        
        <div className="page-break"></div>

        {/* Executive Summary */}
        <div className="business-heading">
          EXECUTIVE SUMMARY
        </div>
        <div className="business-text">
          &ldquo;WHO&apos;S THE GOAT?&rdquo; represents a groundbreaking fusion of reality television and technology education, targeting the underserved market of tech-savvy millennials and Gen Z viewers. Our competition series follows twelve young creators (ages 18-25) as they compete to prove they are the Greatest of All Tech through coding challenges, startup pitches, and interpersonal drama.
        </div>
        <div className="business-text">
          With projected first-season revenue of $13.8M against production costs of $6M, the show delivers a robust 56% gross margin while addressing the critical tech skills gap affecting 4.4 million unfilled positions nationwide.
        </div>

        {/* Market Analysis */}
        <div className="business-heading">
          MARKET ANALYSIS
        </div>
        
        <div className="business-subheading">
          MARKET SIZE & OPPORTUNITY
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>MARKET SEGMENT</th>
              <th>SIZE (USD)</th>
              <th>GROWTH RATE</th>
              <th>OPPORTUNITY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reality TV (U.S.)</td>
              <td>$2.6 Billion</td>
              <td>8% annually</td>
              <td>Premium content gap</td>
            </tr>
            <tr>
              <td>Tech Education (Global)</td>
              <td>$366 Billion</td>
              <td>15% annually</td>
              <td>Gamification trend</td>
            </tr>
            <tr>
              <td>Streaming Platforms</td>
              <td>$70 Billion</td>
              <td>12% annually</td>
              <td>Original content demand</td>
            </tr>
            <tr>
              <td>Gen Z Entertainment</td>
              <td>$143 Billion</td>
              <td>20% annually</td>
              <td>Authentic storytelling</td>
            </tr>
          </tbody>
        </table>

        <div className="business-subheading">
          TARGET DEMOGRAPHICS
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>DEMOGRAPHIC</th>
              <th>SIZE</th>
              <th>CHARACTERISTICS</th>
              <th>VIEWING HABITS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary: Ages 18-25</td>
              <td>42M viewers</td>
              <td>Tech-native, entrepreneurial</td>
              <td>Streaming-first, mobile-heavy</td>
            </tr>
            <tr>
              <td>Secondary: Ages 26-34</td>
              <td>45M viewers</td>
              <td>Career-focused, high income</td>
              <td>Premium content, binge-watch</td>
            </tr>
            <tr>
              <td>Tertiary: Tech Workers</td>
              <td>15M viewers</td>
              <td>Industry insiders, influencers</td>
              <td>Social sharing, discussion</td>
            </tr>
          </tbody>
        </table>

        <div className="business-subheading">
          COMPETITIVE LANDSCAPE
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>COMPETITOR</th>
              <th>FORMAT</th>
              <th>AUDIENCE</th>
              <th>WEAKNESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shark Tank</td>
              <td>Pitch competition</td>
              <td>8.5M viewers</td>
              <td>No skill development</td>
            </tr>
            <tr>
              <td>The Apprentice</td>
              <td>Business challenges</td>
              <td>4.2M viewers</td>
              <td>Outdated format</td>
            </tr>
            <tr>
              <td>Silicon Valley (HBO)</td>
              <td>Tech comedy</td>
              <td>2.1M viewers</td>
              <td>Fictional, limited appeal</td>
            </tr>
            <tr>
              <td>Tech YouTube</td>
              <td>Educational content</td>
              <td>Fragmented</td>
              <td>No narrative structure</td>
            </tr>
          </tbody>
        </table>

        {/* Financial Projections */}
        <div className="business-heading">
          FINANCIAL PROJECTIONS
        </div>

        <div className="business-subheading">
          SEASON 1 REVENUE BREAKDOWN
        </div>
        <div style={{ margin: '2em 0', padding: '1em', background: '#fafafa' }}>
          <RevenueChart />
          <div style={{ 
            marginTop: '1em',
            fontFamily: 'Courier New, monospace',
            fontSize: '11pt',
            lineHeight: '1.6'
          }}>
            <strong>Revenue Notes:</strong><br/>
            • Streaming Rights: Netflix/Amazon tier pricing<br/>
            • Advertising: Premium tech brand sponsors<br/>
            • Sponsorships: Apple, Google, Microsoft<br/>
            • Merchandise: Branded tech accessories<br/>
            <strong>TOTAL REVENUE: $13,800,000</strong>
          </div>
        </div>

        <div className="business-subheading">
          PRODUCTION COST BREAKDOWN
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>COST CATEGORY</th>
              <th>AMOUNT</th>
              <th>PERCENTAGE</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Above-the-Line</td>
              <td>$1,200,000</td>
              <td>20%</td>
              <td>Host, judges, producer fees</td>
            </tr>
            <tr>
              <td>Below-the-Line</td>
              <td>$2,400,000</td>
              <td>40%</td>
              <td>Crew, equipment, post-production</td>
            </tr>
            <tr>
              <td>Location & Sets</td>
              <td>$1,200,000</td>
              <td>20%</td>
              <td>Compound build-out, technology</td>
            </tr>
            <tr>
              <td>Contestant Costs</td>
              <td>$600,000</td>
              <td>10%</td>
              <td>Stipends, housing, prize money</td>
            </tr>
            <tr>
              <td>Contingency</td>
              <td>$600,000</td>
              <td>10%</td>
              <td>Overages, insurance, legal</td>
            </tr>
          </tbody>
        </table>

        <div className="business-subheading">
          FINANCIAL PERFORMANCE CHART
        </div>
        <div style={{ margin: '2em 0', padding: '1em', background: '#fafafa' }}>
          <FinancialChart />
          <div style={{ 
            marginTop: '1em',
            fontFamily: 'Courier New, monospace',
            fontSize: '11pt',
            textAlign: 'center'
          }}>
            <strong>PROJECTED GROSS PROFIT: $7,800,000 (56% MARGIN)</strong>
          </div>
        </div>

        {/* Investment Terms */}
        <div className="business-heading">
          INVESTMENT OPPORTUNITY
        </div>

        <div className="business-subheading">
          FUNDING REQUIREMENTS
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>FUNDING STAGE</th>
              <th>AMOUNT</th>
              <th>PURPOSE</th>
              <th>TIMELINE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Series A</td>
              <td>$10,000,000</td>
              <td>Season 1 production & development</td>
              <td>Next 6 months</td>
            </tr>
            <tr>
              <td>Series B</td>
              <td>$25,000,000</td>
              <td>Multi-season commitment</td>
              <td>Year 2-3</td>
            </tr>
            <tr>
              <td>International</td>
              <td>$50,000,000</td>
              <td>Global format licensing</td>
              <td>Year 3-5</td>
            </tr>
          </tbody>
        </table>

        <div className="business-subheading">
          INVESTOR BENEFITS
        </div>
        <div className="business-text">
          • <strong>IMMEDIATE ROI:</strong> 56% gross margin on Season 1<br/>
          • <strong>SCALABLE FORMAT:</strong> International licensing potential<br/>
          • <strong>BRAND EXTENSION:</strong> Educational content, merchandise, live events<br/>
          • <strong>TECH PARTNERSHIP:</strong> Exclusive access to emerging talent<br/>
          • <strong>CULTURAL IMPACT:</strong> Address critical tech skills shortage
        </div>

        {/* Risk Analysis */}
        <div className="business-heading">
          RISK ASSESSMENT
        </div>

        <div className="business-subheading">
          RISK MITIGATION STRATEGIES
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>RISK FACTOR</th>
              <th>PROBABILITY</th>
              <th>IMPACT</th>
              <th>MITIGATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Market Saturation</td>
              <td>Low</td>
              <td>Medium</td>
              <td>First-mover advantage in tech reality</td>
            </tr>
            <tr>
              <td>Production Delays</td>
              <td>Medium</td>
              <td>High</td>
              <td>Experienced production team, buffer time</td>
            </tr>
            <tr>
              <td>Talent Acquisition</td>
              <td>Low</td>
              <td>Medium</td>
              <td>Strong casting strategy, industry partnerships</td>
            </tr>
            <tr>
              <td>Technology Changes</td>
              <td>Medium</td>
              <td>Low</td>
              <td>Flexible format, trend adaptation</td>
            </tr>
          </tbody>
        </table>

        {/* Implementation Timeline */}
        <div className="business-heading">
          PRODUCTION TIMELINE
        </div>

        <div className="business-subheading">
          PHASE 1: PRE-PRODUCTION (MONTHS 1-3)
        </div>
        <div className="business-text">
          • Secure funding and network partnership<br/>
          • Complete casting and talent acquisition<br/>
          • Design and build production compound<br/>
          • Hire key production staff<br/>
          • Finalize challenge formats and storylines
        </div>

        <div className="business-subheading">
          PHASE 2: PRODUCTION (MONTHS 4-5)
        </div>
        <div className="business-text">
          • 8 weeks of principal photography<br/>
          • 24/7 filming of contestant activities<br/>
          • 12 elimination challenges<br/>
          • Confessional interviews and testimonials<br/>
          • Judge deliberations and finale
        </div>

        <div className="business-subheading">
          PHASE 3: POST-PRODUCTION (MONTHS 6-8)
        </div>
        <div className="business-text">
          • Edit 12 episodes + reunion special<br/>
          • Color correction and audio mixing<br/>
          • Graphics, music, and sound design<br/>
          • Network delivery and marketing prep<br/>
          • International sales and distribution
        </div>

        {/* Success Metrics */}
        <div className="business-heading">
          SUCCESS METRICS
        </div>

        <div className="business-subheading">
          KEY PERFORMANCE INDICATORS
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>METRIC</th>
              <th>TARGET</th>
              <th>BENCHMARK</th>
              <th>MEASUREMENT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Premiere Viewership</td>
              <td>5M viewers</td>
              <td>Top 10 reality debut</td>
              <td>Nielsen + streaming data</td>
            </tr>
            <tr>
              <td>Season Average</td>
              <td>3.5M viewers</td>
              <td>Network top 5</td>
              <td>Live + 7 day viewing</td>
            </tr>
            <tr>
              <td>Social Engagement</td>
              <td>50M interactions</td>
              <td>Viral content creation</td>
              <td>Cross-platform analytics</td>
            </tr>
            <tr>
              <td>Critical Reception</td>
              <td>75+ Metacritic</td>
              <td>Awards consideration</td>
              <td>Professional reviews</td>
            </tr>
          </tbody>
        </table>

        {/* Call to Action */}
        <div className="business-heading">
          NEXT STEPS
        </div>
        <div className="business-text">
          &ldquo;WHO&apos;S THE GOAT?&rdquo; represents a once-in-a-generation opportunity to create appointment television that both entertains and educates. With the tech industry facing an unprecedented talent shortage and audiences hungry for authentic competition content, the timing has never been better.
        </div>
        <div className="business-text">
          We are seeking visionary partners who understand that the future of entertainment lies at the intersection of technology and storytelling. Join us in creating the reality series that will define the next decade of television.
        </div>
        <div className="business-text">
          <strong>Contact Information:</strong><br/>
          Nine Productions<br/>
          Los Angeles, California<br/>
          Email: info@nineproductions.com
        </div>
        <div className="business-text" style={{ textAlign: 'center', marginTop: '3em', fontWeight: 'bold' }}>
          THE QUESTION ISN&apos;T WHETHER THIS SHOW WILL SUCCEED.<br/>
          THE QUESTION IS: WILL YOU BE PART OF ITS SUCCESS?
        </div>
      </div>
    </>
  );
} 