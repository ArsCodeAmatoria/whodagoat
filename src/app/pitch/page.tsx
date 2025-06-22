import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Target
} from "lucide-react";

export default function PitchPage() {
  return (
    <div className="screenplay">
      {/* Title Page */}
      <div className="screenplay-title">
        "WHO'S THE GOAT?"
      </div>
      <div className="screenplay-subtitle">
        BUSINESS PLAN & INVESTMENT PROPOSAL
      </div>
      <div className="screenplay-subtitle">
        CONFIDENTIAL DOCUMENT
      </div>
      
      <div className="page-break"></div>

      {/* Executive Summary */}
      <div className="business-section">
        <div className="business-heading">
          EXECUTIVE SUMMARY
        </div>
        <div className="business-text">
          "WHO'S THE GOAT?" represents a $10M investment opportunity in the convergence of reality television and technology education. This innovative competition series targets the fastest-growing demographic in entertainment while addressing the critical tech skills shortage affecting the global economy.
        </div>
        <div className="business-text">
          <strong>INVESTMENT REQUEST:</strong> $10,000,000<br/>
          <strong>PROJECTED SEASON 1 REVENUE:</strong> $13,800,000<br/>
          <strong>GROSS PROFIT MARGIN:</strong> 56% ($7,800,000)<br/>
          <strong>3-YEAR PROJECTED VALUE:</strong> $64,200,000+
        </div>
      </div>

      {/* Market Analysis */}
      <div className="screenplay-heading">
        MARKET ANALYSIS
      </div>
      
      <div className="business-section">
        <div className="business-subheading">
          ADDRESSABLE MARKET SIZE
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>MARKET SEGMENT</th>
              <th>SIZE (USD)</th>
              <th>GROWTH RATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>U.S. Reality TV Market</td>
              <td>$2.6 Billion</td>
              <td>8% annually</td>
            </tr>
            <tr>
              <td>Global Tech Education</td>
              <td>$366 Billion</td>
              <td>12% annually</td>
            </tr>
            <tr>
              <td>Streaming Content</td>
              <td>$85 Billion</td>
              <td>15% annually</td>
            </tr>
            <tr>
              <td><strong>TOTAL ADDRESSABLE MARKET</strong></td>
              <td><strong>$453.6 Billion</strong></td>
              <td><strong>11.7% annually</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

             <div className="business-section">
         <div className="business-subheading">
           TARGET DEMOGRAPHIC ANALYSIS
         </div>
         <div className="business-text">
           <strong>PRIMARY TARGET:</strong> Adults 18-34 (68M in U.S.)<br/>
           • 74% express interest in learning coding<br/>
           • 89% watch streaming content daily<br/>
           • 67% prefer educational entertainment<br/>
           • Average household income: $65,000+
         </div>
         <div className="business-text">
           <strong>SECONDARY TARGET:</strong> Tech Industry Professionals (4.4M in U.S.)<br/>
           • High engagement with competition content<br/>
           • Strong social media influence<br/>
           • Premium advertising demographic<br/>
           • Talent recruitment interest
         </div>
       </div>

       {/* Financial Projections */}
       <div className="screenplay-heading">
         FINANCIAL PROJECTIONS
       </div>

       <div className="business-section">
         <div className="business-subheading">
           REVENUE MODEL - 3 YEAR PROJECTION
         </div>
         <table className="business-table">
          <thead>
            <tr>
              <th>REVENUE STREAM</th>
              <th>YEAR 1</th>
              <th>YEAR 2</th>
              <th>YEAR 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Streaming Rights</td>
              <td>$8,000,000</td>
              <td>$12,000,000</td>
              <td>$15,000,000</td>
            </tr>
            <tr>
              <td>Advertising Revenue</td>
              <td>$3,500,000</td>
              <td>$5,200,000</td>
              <td>$7,800,000</td>
            </tr>
            <tr>
              <td>Sponsorship Deals</td>
              <td>$1,800,000</td>
              <td>$2,700,000</td>
              <td>$4,000,000</td>
            </tr>
            <tr>
              <td>International Licensing</td>
              <td>$300,000</td>
              <td>$900,000</td>
              <td>$1,800,000</td>
            </tr>
            <tr>
              <td>Merchandise & Digital</td>
              <td>$200,000</td>
              <td>$300,000</td>
              <td>$600,000</td>
            </tr>
            <tr>
              <td><strong>TOTAL REVENUE</strong></td>
              <td><strong>$13,800,000</strong></td>
              <td><strong>$21,100,000</strong></td>
              <td><strong>$29,200,000</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="business-section">
        <div className="business-subheading">
          COST STRUCTURE & PROFITABILITY
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>COST CATEGORY</th>
              <th>YEAR 1</th>
              <th>YEAR 2</th>
              <th>YEAR 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Production Costs</td>
              <td>$6,000,000</td>
              <td>$7,500,000</td>
              <td>$9,000,000</td>
            </tr>
            <tr>
              <td>Marketing & Distribution</td>
              <td>$2,000,000</td>
              <td>$2,500,000</td>
              <td>$3,000,000</td>
            </tr>
            <tr>
              <td>Operations & Overhead</td>
              <td>$1,200,000</td>
              <td>$1,500,000</td>
              <td>$1,800,000</td>
            </tr>
            <tr>
              <td><strong>TOTAL COSTS</strong></td>
              <td><strong>$9,200,000</strong></td>
              <td><strong>$11,500,000</strong></td>
              <td><strong>$13,800,000</strong></td>
            </tr>
            <tr>
              <td><strong>GROSS PROFIT</strong></td>
              <td><strong>$4,600,000</strong></td>
              <td><strong>$9,600,000</strong></td>
              <td><strong>$15,400,000</strong></td>
            </tr>
            <tr>
              <td><strong>PROFIT MARGIN</strong></td>
              <td><strong>33%</strong></td>
              <td><strong>45%</strong></td>
              <td><strong>53%</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Investment Terms */}
      <div className="screenplay-heading">
        INVESTMENT OPPORTUNITY
      </div>

      <div className="business-section">
        <div className="business-subheading">
          FUNDING REQUEST: $10,000,000
        </div>
        <div className="business-text">
          <strong>USE OF FUNDS:</strong><br/>
          • Production Budget (Season 1): $6,000,000 (60%)<br/>
          • Marketing & Launch: $2,000,000 (20%)<br/>
          • Technology Platform: $1,000,000 (10%)<br/>
          • Working Capital: $1,000,000 (10%)
        </div>
        
        <div className="business-subheading">
          PROJECTED RETURNS
        </div>
        <div className="business-text">
          <strong>18-MONTH ROI:</strong> 138% ($13,800,000 revenue)<br/>
          <strong>3-YEAR VALUE:</strong> $64,200,000+ (cumulative revenue)<br/>
          <strong>IRR:</strong> 185%<br/>
          <strong>PAYBACK PERIOD:</strong> 18 months
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="screenplay-heading">
        COMPETITIVE LANDSCAPE
      </div>

      <div className="business-section">
        <div className="business-subheading">
          COMPETITIVE ADVANTAGES
        </div>
        <div className="business-text">
          <strong>VS. TRADITIONAL REALITY TV:</strong><br/>
          • Educational value creates evergreen content<br/>
          • Real career impact for contestants<br/>
          • Built-in social media virality<br/>
          • Premium advertiser appeal
        </div>
        <div className="business-text">
          <strong>VS. TECH EDUCATION CONTENT:</strong><br/>
          • Entertainment value hooks broader audience<br/>
          • Professional production quality<br/>
          • Diverse personal narratives<br/>
          • Community viewing experience
        </div>
        <div className="business-text">
          <strong>UNIQUE MARKET POSITION:</strong><br/>
          First reality competition combining entertainment with actual skill development. No direct competitors in the reality-tech education space.
        </div>
      </div>

      {/* Risk Analysis */}
      <div className="screenplay-heading">
        RISK ASSESSMENT & MITIGATION
      </div>

      <div className="business-section">
        <div className="business-subheading">
          IDENTIFIED RISKS & MITIGATION STRATEGIES
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>RISK CATEGORY</th>
              <th>PROBABILITY</th>
              <th>MITIGATION STRATEGY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Market Reception</td>
              <td>Medium</td>
              <td>Extensive market research, focus groups, pilot testing</td>
            </tr>
            <tr>
              <td>Production Delays</td>
              <td>Low</td>
              <td>Experienced production team, comprehensive insurance</td>
            </tr>
            <tr>
              <td>Talent Issues</td>
              <td>Medium</td>
              <td>Robust casting process, backup contestants, legal framework</td>
            </tr>
            <tr>
              <td>Technical Challenges</td>
              <td>Low</td>
              <td>Proven technology stack, expert technical advisors</td>
            </tr>
            <tr>
              <td>Competition</td>
              <td>Medium</td>
              <td>First-mover advantage, strong IP protection, rapid scaling</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Management Team */}
      <div className="screenplay-heading">
        MANAGEMENT TEAM
      </div>

      <div className="business-section">
        <div className="business-subheading">
          KEY PERSONNEL
        </div>
        <div className="business-text">
          <strong>EXECUTIVE PRODUCER:</strong><br/>
          15+ years reality TV production experience. Credits include major network competition shows with combined viewership of 50M+. Proven track record of on-time, on-budget delivery.
        </div>
        <div className="business-text">
          <strong>TECHNICAL DIRECTOR:</strong><br/>
          Former Google engineering manager with expertise in developer education and large-scale technical curriculum design. Led teams of 50+ engineers.
        </div>
        <div className="business-text">
          <strong>CREATIVE DIRECTOR:</strong><br/>
          Award-winning content creator with 10M+ social media following in tech education space. Deep understanding of Gen Z audience preferences and behavior.
        </div>
        <div className="business-text">
          <strong>BUSINESS DEVELOPMENT LEAD:</strong><br/>
          Former Netflix content acquisition executive. Established relationships with major streaming platforms and international distributors.
        </div>
      </div>

      {/* Exit Strategy */}
      <div className="screenplay-heading">
        EXIT STRATEGY
      </div>

      <div className="business-section">
        <div className="business-subheading">
          STRATEGIC ACQUISITION PATHWAY
        </div>
        <div className="business-text">
          <strong>TARGET ACQUIRERS:</strong><br/>
          • Netflix, Amazon Prime Video, Apple TV+<br/>
          • Disney, Warner Bros Discovery<br/>
          • Comcast NBCUniversal<br/>
          • International media conglomerates
        </div>
        <div className="business-text">
          <strong>VALUATION TARGETS:</strong><br/>
          • Year 2: $50-75M (based on proven audience metrics)<br/>
          • Year 3: $100-150M (with international expansion)<br/>
          • IPO potential: $200M+ (multi-format franchise)
        </div>
      </div>

      {/* Call to Action */}
      <div className="business-section">
        <div className="business-heading">
          INVESTMENT DECISION
        </div>
        <div className="business-text">
          "WHO'S THE GOAT?" represents a unique opportunity to invest in the intersection of entertainment and education at a time when both markets are experiencing unprecedented growth.
        </div>
        <div className="business-text">
          This is not just a television show—it's a platform for launching the next generation of tech talent while generating substantial returns for investors.
        </div>
        <div className="business-text">
          <strong>NEXT STEPS:</strong><br/>
          1. Schedule investor presentation<br/>
          2. Review detailed financial models<br/>
          3. Meet with production team<br/>
          4. Finalize investment terms<br/>
          5. Begin pre-production
        </div>
      </div>

      {/* Contact Information */}
      <div className="screenplay-heading">
        CONTACT INFORMATION
      </div>
      <div className="screenplay-action">
        For investor meetings, detailed financial models, and additional documentation:
      </div>
      <div className="screenplay-action">
        <strong>EMAIL:</strong> investors@whosthegoat.tv<br/>
        <strong>PHONE:</strong> Available upon request<br/>
        <strong>LOCATION:</strong> Los Angeles, California<br/>
        <strong>AVAILABILITY:</strong> Immediate
      </div>

      <div className="screenplay-transition">
        END OF BUSINESS PLAN
      </div>
    </div>
  );
} 