import React from "react";
import RevenueChart from "../components/revenue-chart";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Simple Navigation Header */}
      <div className="mb-8 pb-4 border-b border-gray-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
            WHO'S THE GOAT?
          </h1>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-black text-white rounded text-sm">
              Treatment Document
            </span>
            <Link 
              href="/pitch" 
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors"
            >
              Business Plan
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          A reality competition series pitch for the next generation of tech creators
        </p>
      </div>

      <div className="screenplay">
        {/* Title Page */}
        <div className="screenplay-title">
          &ldquo;WHO&apos;S THE GOAT?&rdquo;
        </div>
        <div className="screenplay-subtitle">
          A Reality Competition Series Treatment
        </div>
        <div className="screenplay-subtitle">
          Created by NINE
        </div>
        
        <div className="page-break"></div>

        {/* Logline */}
        <div className="screenplay-heading">
          LOGLINE
        </div>
        <div className="screenplay-action">
          Twelve young tech creators aged 18-25 compete in the ultimate reality show where coding meets drama, innovation meets elimination, and only one will prove they are the Greatest of All Tech.
        </div>

        {/* Format */}
        <div className="screenplay-heading">
          FORMAT
        </div>
        <div className="screenplay-action">
          • GENRE: Competition Reality Series<br/>
          • LENGTH: 12 x 60-minute episodes<br/>
          • NETWORK: Streaming/Cable (Premium Tier)<br/>
          • TARGET DEMO: Adults 18-34, Tech-Savvy Millennials & Gen Z<br/>
          • PRODUCTION TIMELINE: 26 weeks (6 months total)
        </div>

        {/* Narrator */}
        <div className="screenplay-heading">
          NARRATOR
        </div>
        <div className="screenplay-action">
          The young ones come to Los Angeles with their laptops and their dreams. They code in coffee shops and sleep on couches and believe they will change the world. Most will not. But some will.
        </div>
        <div className="screenplay-action">
          This is their story. Twelve of them. The best and the brightest and the hungriest. They will live together and work together and compete against each other until only one remains. The cameras will watch. The audience will judge. The code will not lie.
        </div>
        <div className="screenplay-action">
          There is no mercy in silicon. There is no kindness in algorithms. There is only what works and what does not work. The young ones know this. They have always known this. Now they must prove it.
        </div>
        <div className="screenplay-action">
          In the end, one will stand alone. One will be the greatest. One will be the GOAT.
        </div>

        {/* Concept Overview */}
        <div className="screenplay-heading">
          CONCEPT OVERVIEW
        </div>
        <div className="screenplay-action">
          In a world where technical skills determine career success, &ldquo;WHO&apos;S THE GOAT?&rdquo; takes twelve ambitious creators and puts them through the ultimate test. Each week brings new challenges that push contestants beyond their comfort zones—from building mobile apps under extreme time pressure to pitching their ideas to industry titans.
        </div>
        <div className="screenplay-action">
          But this isn&apos;t just about code. It&apos;s about character. Cameras capture every breakdown, every breakthrough, and every betrayal as contestants navigate both technical challenges and complex social dynamics. Alliances form and crumble. Romances bloom and wither. And through it all, one question drives the competition: Who has what it takes to be the Greatest of All Tech?
        </div>

        {/* The Arena */}
        <div className="screenplay-heading">
          THE ARENA
        </div>
        <div className="screenplay-action">
          Our contestants live and work in a custom-built tech compound featuring:
        </div>
        <div className="screenplay-action">
          • STATE-OF-THE-ART DEVELOPMENT LAB: 12 individual workstations equipped with the latest hardware and software<br/>
          • COLLABORATION SPACES: Open areas designed for team challenges and social interaction<br/>
          • LIVING QUARTERS: Shared dormitory-style housing to maximize interpersonal drama<br/>
          • THE PITCH ROOM: Where contestants present their work to judges and face elimination<br/>
          • CONFESSIONAL BOOTHS: Private spaces for contestant interviews and emotional moments
        </div>

        {/* Competition Structure */}
        <div className="screenplay-heading">
          COMPETITION STRUCTURE
        </div>
        
        <div className="screenplay-scene-heading">
          WEEKLY CHALLENGE FORMAT:
        </div>
        <div className="screenplay-action">
          <strong>SKILL CHALLENGE (Day 1-2):</strong> Individual technical test. Winner receives advantage in main challenge plus immunity from elimination.
        </div>
        <div className="screenplay-action">
          <strong>MAIN CHALLENGE (Day 3-5):</strong> Complex project requiring multiple skills—coding, design, user testing, presentation. May be individual or team-based.
        </div>
        <div className="screenplay-action">
          <strong>JUDGING & ELIMINATION (Day 6):</strong> Contestants present their work. Bottom performers face &ldquo;The Debug&rdquo;—a high-pressure technical interview. One contestant eliminated.
        </div>
        <div className="screenplay-action">
          <strong>SOCIAL DYNAMICS (Throughout):</strong> 24/7 filming captures alliances, conflicts, and personal relationships that influence competition strategy.
        </div>

        {/* Cast Profile */}
        <div className="screenplay-heading">
          CONTESTANT PROFILE
        </div>
        <div className="screenplay-action">
          We seek twelve diverse, compelling individuals who represent the future of technology:
        </div>
        <div className="screenplay-action">
          • <strong>THE PRODIGY:</strong> 19-year-old coding genius with zero social skills<br/>
          • <strong>THE ENTREPRENEUR:</strong> Failed startup founder looking for redemption<br/>
          • <strong>THE INFLUENCER:</strong> Social media star trying to prove they have real skills<br/>
          • <strong>THE OUTSIDER:</strong> Self-taught developer from rural America<br/>
          • <strong>THE CORPORATE REFUGEE:</strong> Big Tech burnout seeking creative freedom<br/>
          • <strong>THE ACTIVIST:</strong> Passionate about technology for social good<br/>
          • <strong>THE COMPETITOR:</strong> Hackathon champion who lives to win<br/>
          • <strong>THE ARTIST:</strong> Creative coder blending technology with art<br/>
          • <strong>THE HUSTLER:</strong> Street-smart developer with big dreams<br/>
          • <strong>THE ACADEMIC:</strong> Computer science PhD with imposter syndrome<br/>
          • <strong>THE VETERAN:</strong> Career-changer using military discipline<br/>
          • <strong>THE WILD CARD:</strong> Unconventional background, unexpected skills
        </div>

        {/* Business Section */}
        <div className="business-section">
          <div className="business-heading">
            BUSINESS OVERVIEW
          </div>
          
          <div className="business-subheading">
            MARKET OPPORTUNITY
          </div>
          <div className="business-text">
            • Reality TV: $2.6B annual U.S. market<br/>
            • Tech Education: $366B global market<br/>
            • Target Demographic: 68M Gen Z viewers in U.S.<br/>
            • Streaming Growth: 15% year-over-year increase
          </div>

          <div className="business-subheading">
            REVENUE PROJECTIONS (SEASON 1)
          </div>
          <div style={{ margin: '2em 0', padding: '1em', background: '#fafafa' }}>
            <RevenueChart />
            <div style={{ 
              textAlign: 'center', 
              marginTop: '1em',
              fontFamily: 'Courier New, monospace',
              fontSize: '12pt',
              fontWeight: 'bold'
            }}>
              TOTAL REVENUE: $13,800,000
            </div>
          </div>

          <div className="business-subheading">
            PRODUCTION BUDGET
          </div>
          <div className="business-text">
            Total Production Cost: $6,000,000<br/>
            Cost Per Episode: $500,000<br/>
            <strong>GROSS PROFIT MARGIN: 56% ($7,800,000)</strong>
          </div>
        </div>

        {/* Why Now */}
        <div className="screenplay-heading">
          WHY NOW?
        </div>
        <div className="screenplay-action">
          The convergence of several cultural and economic factors makes this the perfect moment for &ldquo;WHO&apos;S THE GOAT?&rdquo;:
        </div>
        <div className="screenplay-action">
          <strong>TECH SKILLS CRISIS:</strong> 4.4 million unfilled tech jobs in the U.S. create massive audience interest in tech careers.
        </div>
        <div className="screenplay-action">
          <strong>REALITY TV EVOLUTION:</strong> Audiences crave authentic competition with real-world impact, not manufactured drama.
        </div>
        <div className="screenplay-action">
          <strong>STREAMING WARS:</strong> Platforms desperately need distinctive content to differentiate from competitors.
        </div>
        <div className="screenplay-action">
          <strong>SOCIAL MEDIA INTEGRATION:</strong> Tech-savvy contestants naturally create viral moments and online engagement.
        </div>

        {/* The Hook */}
        <div className="screenplay-heading">
          THE HOOK
        </div>
        <div className="screenplay-action">
          &ldquo;WHO&apos;S THE GOAT?&rdquo; isn&apos;t just entertainment—it&apos;s education disguised as competition. Viewers don&apos;t just watch; they learn. Each episode includes:
        </div>
        <div className="screenplay-action">
          • SKILL SPOTLIGHTS: Brief segments explaining technical concepts<br/>
          • MENTOR MOMENTS: Industry leaders share career advice<br/>
          • CHALLENGE BREAKDOWNS: Step-by-step analysis of problem-solving techniques<br/>
          • CAREER INSIGHTS: Real-world applications of demonstrated skills
        </div>

        {/* Conclusion */}
        <div className="screenplay-heading">
          CONCLUSION
        </div>
        <div className="screenplay-action">
          &ldquo;WHO&apos;S THE GOAT?&rdquo; represents more than entertainment—it&apos;s a cultural phenomenon waiting to happen. By combining the addictive drama of reality competition with the aspirational appeal of tech success stories, we create appointment television that both entertains and inspires.
        </div>
        <div className="screenplay-action">
          The question isn&apos;t whether audiences want this show. The question is: which network will be bold enough to greenlight the future of reality television?
        </div>
        <div className="screenplay-action">
          Who&apos;s the GOAT? Let&apos;s find out.
        </div>

        <div className="screenplay-action" style={{ textAlign: 'center', marginTop: '4em', fontWeight: 'bold' }}>
          FADE OUT.
        </div>
      </div>
    </>
  );
}
