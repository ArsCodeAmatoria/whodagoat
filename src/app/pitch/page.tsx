import React from "react";
import NavigationBox from "../../components/navigation-box";

export default function PitchPage() {
  return (
    <>
      <NavigationBox currentPage="business" />
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
        <table className="business-table">
          <thead>
            <tr>
              <th>REVENUE STREAM</th>
              <th>AMOUNT</th>
              <th>PERCENTAGE</th>
              <th>NOTES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Streaming Rights</td>
              <td>$8,000,000</td>
              <td>58%</td>
              <td>Netflix/Amazon tier pricing</td>
            </tr>
            <tr>
              <td>Advertising Revenue</td>
              <td>$3,500,000</td>
              <td>25%</td>
              <td>Premium tech brand sponsors</td>
            </tr>
            <tr>
              <td>Sponsorship Deals</td>
              <td>$1,800,000</td>
              <td>13%</td>
              <td>Apple, Google, Microsoft</td>
            </tr>
            <tr>
              <td>Merchandise/Licensing</td>
              <td>$500,000</td>
              <td>4%</td>
              <td>Branded tech accessories</td>
            </tr>
            <tr>
              <td><strong>TOTAL REVENUE</strong></td>
              <td><strong>$13,800,000</strong></td>
              <td><strong>100%</strong></td>
              <td><strong>Conservative estimate</strong></td>
            </tr>
          </tbody>
        </table>

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
              <td>Host, judges, producers</td>
            </tr>
            <tr>
              <td>Below-the-Line</td>
              <td>$2,400,000</td>
              <td>40%</td>
              <td>Crew, equipment, post-production</td>
            </tr>
            <tr>
              <td>Location & Sets</td>
              <td>$900,000</td>
              <td>15%</td>
              <td>Tech compound, workstations</td>
            </tr>
            <tr>
              <td>Contestant Costs</td>
              <td>$600,000</td>
              <td>10%</td>
              <td>Housing, food, stipends, prizes</td>
            </tr>
            <tr>
              <td>Technology & Equipment</td>
              <td>$480,000</td>
              <td>8%</td>
              <td>Computers, software, servers</td>
            </tr>
            <tr>
              <td>Marketing & Promotion</td>
              <td>$300,000</td>
              <td>5%</td>
              <td>Launch campaign, PR</td>
            </tr>
            <tr>
              <td>Contingency</td>
              <td>$120,000</td>
              <td>2%</td>
              <td>Overruns, reshoots</td>
            </tr>
            <tr>
              <td><strong>TOTAL COSTS</strong></td>
              <td><strong>$6,000,000</strong></td>
              <td><strong>100%</strong></td>
              <td><strong>$500K per episode</strong></td>
            </tr>
          </tbody>
        </table>

        <div className="business-subheading">
          3-YEAR FINANCIAL FORECAST
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>METRIC</th>
              <th>YEAR 1</th>
              <th>YEAR 2</th>
              <th>YEAR 3</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revenue</td>
              <td>$13,800,000</td>
              <td>$18,500,000</td>
              <td>$22,200,000</td>
              <td>$54,500,000</td>
            </tr>
            <tr>
              <td>Production Costs</td>
              <td>$6,000,000</td>
              <td>$7,200,000</td>
              <td>$8,100,000</td>
              <td>$21,300,000</td>
            </tr>
            <tr>
              <td>Gross Profit</td>
              <td>$7,800,000</td>
              <td>$11,300,000</td>
              <td>$14,100,000</td>
              <td>$33,200,000</td>
            </tr>
            <tr>
              <td>Gross Margin</td>
              <td>56%</td>
              <td>61%</td>
              <td>64%</td>
              <td>61%</td>
            </tr>
            <tr>
              <td>Episodes</td>
              <td>12</td>
              <td>15</td>
              <td>18</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>

        {/* Risk Analysis */}
        <div className="business-heading">
          RISK ANALYSIS & MITIGATION
        </div>

        <div className="business-subheading">
          PRODUCTION RISKS
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>RISK</th>
              <th>PROBABILITY</th>
              <th>IMPACT</th>
              <th>MITIGATION STRATEGY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contestant dropout</td>
              <td>Medium</td>
              <td>High</td>
              <td>Alternate contestants, insurance</td>
            </tr>
            <tr>
              <td>Technical failures</td>
              <td>Low</td>
              <td>Medium</td>
              <td>Backup systems, IT support</td>
            </tr>
            <tr>
              <td>Budget overruns</td>
              <td>Medium</td>
              <td>High</td>
              <td>Fixed-price contracts, contingency</td>
            </tr>
            <tr>
              <td>Scheduling delays</td>
              <td>High</td>
              <td>Medium</td>
              <td>Buffer time, flexible crew</td>
            </tr>
          </tbody>
        </table>

        <div className="business-subheading">
          MARKET RISKS
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>RISK</th>
              <th>PROBABILITY</th>
              <th>IMPACT</th>
              <th>MITIGATION STRATEGY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Streaming platform rejection</td>
              <td>Low</td>
              <td>High</td>
              <td>Multiple platform strategy</td>
            </tr>
            <tr>
              <td>Audience reception</td>
              <td>Medium</td>
              <td>High</td>
              <td>Focus groups, test episodes</td>
            </tr>
            <tr>
              <td>Competitive response</td>
              <td>High</td>
              <td>Medium</td>
              <td>First-mover advantage, IP protection</td>
            </tr>
            <tr>
              <td>Economic downturn</td>
              <td>Medium</td>
              <td>Medium</td>
              <td>Diverse revenue streams</td>
            </tr>
          </tbody>
        </table>

        {/* Management Team */}
        <div className="business-heading">
          MANAGEMENT TEAM
        </div>

        <div className="business-subheading">
          EXECUTIVE PRODUCER
        </div>
        <div className="business-text">
          [Name], Executive Producer<br/>
          • 15+ years reality TV production experience<br/>
          • Credits include [Major Reality Shows]<br/>
          • Emmy Award winner, industry relationships<br/>
          • Expertise in casting, story development, post-production<br/>
          • NINE Leadership Team
        </div>

        <div className="business-subheading">
          TECHNICAL DIRECTOR
        </div>
        <div className="business-text">
          [Name], Technical Director<br/>
          • Former Silicon Valley engineering manager<br/>
          • 20+ years software development experience<br/>
          • Expertise in challenge design, technical judging<br/>
          • Connections to major tech companies for partnerships
        </div>

        <div className="business-subheading">
          CASTING DIRECTOR
        </div>
        <div className="business-text">
          [Name], Casting Director<br/>
          • Specialist in tech talent identification<br/>
          • Network of university relationships<br/>
          • Experience with diverse casting requirements<br/>
          • Track record of finding compelling personalities
        </div>

        {/* Investment Ask */}
        <div className="business-heading">
          INVESTMENT OPPORTUNITY
        </div>

        <div className="business-subheading">
          FUNDING REQUEST
        </div>
        <div className="business-text">
          We are seeking $10,000,000 in Series A funding to produce the first season of &ldquo;WHO&apos;S THE GOAT?&rdquo; and establish the foundation for a multi-season franchise.
        </div>

        <div className="business-subheading">
          USE OF FUNDS
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>AMOUNT</th>
              <th>PERCENTAGE</th>
              <th>PURPOSE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Season 1 Production</td>
              <td>$6,000,000</td>
              <td>60%</td>
              <td>Full 12-episode production</td>
            </tr>
            <tr>
              <td>Marketing & Launch</td>
              <td>$2,000,000</td>
              <td>20%</td>
              <td>Platform partnerships, PR campaign</td>
            </tr>
            <tr>
              <td>Technology Platform</td>
              <td>$1,000,000</td>
              <td>10%</td>
              <td>Viewer challenges, online community</td>
            </tr>
            <tr>
              <td>Working Capital</td>
              <td>$500,000</td>
              <td>5%</td>
              <td>Operations, pre-production</td>
            </tr>
            <tr>
              <td>Legal & Professional</td>
              <td>$300,000</td>
              <td>3%</td>
              <td>Contracts, IP protection</td>
            </tr>
            <tr>
              <td>Contingency</td>
              <td>$200,000</td>
              <td>2%</td>
              <td>Unforeseen expenses</td>
            </tr>
          </tbody>
        </table>

        <div className="business-subheading">
          INVESTOR RETURNS
        </div>
        <table className="business-table">
          <thead>
            <tr>
              <th>SCENARIO</th>
              <th>PROBABILITY</th>
              <th>REVENUE (3-YEAR)</th>
              <th>INVESTOR RETURN</th>
              <th>ROI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conservative</td>
              <td>60%</td>
              <td>$45,000,000</td>
              <td>$18,000,000</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Expected</td>
              <td>30%</td>
              <td>$54,500,000</td>
              <td>$25,000,000</td>
              <td>150%</td>
            </tr>
            <tr>
              <td>Optimistic</td>
              <td>10%</td>
              <td>$75,000,000</td>
              <td>$40,000,000</td>
              <td>300%</td>
            </tr>
          </tbody>
        </table>

        {/* Exit Strategy */}
        <div className="business-heading">
          EXIT STRATEGY
        </div>

        <div className="business-subheading">
          ACQUISITION TARGETS
        </div>
        <div className="business-text">
          • <strong>Media Conglomerates:</strong> Disney, NBCUniversal, ViacomCBS seeking tech-focused content<br/>
          • <strong>Streaming Platforms:</strong> Netflix, Amazon, Apple expanding original programming<br/>
          • <strong>Tech Companies:</strong> Google, Microsoft exploring education/entertainment crossover<br/>
          • <strong>Production Companies:</strong> Endemol Shine, Fremantle building reality TV portfolios
        </div>

        <div className="business-subheading">
          VALUATION MULTIPLES
        </div>
        <div className="business-text">
          Based on comparable transactions in reality TV and educational content:<br/>
          • Revenue Multiple: 3-5x annual revenue<br/>
          • EBITDA Multiple: 8-12x annual EBITDA<br/>
          • Strategic Premium: 20-40% for unique IP and audience
        </div>

        <div className="business-subheading">
          TIMELINE TO EXIT
        </div>
        <div className="business-text">
          • <strong>Year 2:</strong> Strategic partnership discussions<br/>
          • <strong>Year 3:</strong> Formal acquisition process<br/>
          • <strong>Year 4:</strong> Target exit completion<br/>
          • <strong>Expected Valuation:</strong> $150-200M based on proven success
        </div>

        {/* Contact */}
        <div className="business-heading">
          NEXT STEPS
        </div>
        <div className="business-text">
          We are ready to begin pre-production immediately upon funding. Our experienced team has developed comprehensive production plans, casting strategies, and partnership frameworks.
        </div>
        <div className="business-text">
          For additional information, including detailed financial models, production schedules, and partnership agreements, please contact:
        </div>
        <div className="business-text">
          Email: <a href="mailto:arscodeamatoria@gmail.com" className="text-blue-600 underline">arscodeamatoria@gmail.com</a><br/>
          Phone: [Phone Number]<br/>
          Location: Los Angeles, California<br/>
          Production House: NINE<br/>
          Status: Series A Funding Round Open
        </div>

        <div className="business-text">
          <strong className="text-red-600">CONFIDENTIALITY NOTICE:</strong> This business plan contains proprietary and confidential information. Any reproduction or distribution is strictly prohibited without written consent.
        </div>

        <div className="screenplay-transition">
          END OF BUSINESS PLAN
        </div>
      </div>
    </>
  );
} 