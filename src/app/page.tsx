import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Users, Trophy, Code, Tv, DollarSign, Target, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="screenplay">
      {/* Title Page */}
      <div className="screenplay-title">
        "WHO'S THE GOAT?"
      </div>
      <div className="screenplay-subtitle">
        A Reality Competition Series Treatment
      </div>
      <div className="screenplay-subtitle">
        Created by [Production Company Name]
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

      {/* Concept Overview */}
      <div className="screenplay-heading">
        CONCEPT OVERVIEW
      </div>
      <div className="screenplay-action">
        In a world where technical skills determine career success, "WHO'S THE GOAT?" takes twelve ambitious creators and puts them through the ultimate test. Each week brings new challenges that push contestants beyond their comfort zones—from building mobile apps under extreme time pressure to pitching their ideas to industry titans.
      </div>
      <div className="screenplay-action">
        But this isn't just about code. It's about character. Cameras capture every breakdown, every breakthrough, and every betrayal as contestants navigate both technical challenges and complex social dynamics. Alliances form and crumble. Romances bloom and wither. And through it all, one question drives the competition: Who has what it takes to be the Greatest of All Tech?
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
        <strong>JUDGING & ELIMINATION (Day 6):</strong> Contestants present their work. Bottom performers face "The Debug"—a high-pressure technical interview. One contestant eliminated.
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
        <table className="business-table">
          <thead>
            <tr>
              <th>REVENUE STREAM</th>
              <th>AMOUNT</th>
              <th>PERCENTAGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Streaming Rights</td>
              <td>$8,000,000</td>
              <td>58%</td>
            </tr>
            <tr>
              <td>Advertising Revenue</td>
              <td>$3,500,000</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Sponsorship Deals</td>
              <td>$1,800,000</td>
              <td>13%</td>
            </tr>
            <tr>
              <td>Merchandise/Licensing</td>
              <td>$500,000</td>
              <td>4%</td>
            </tr>
            <tr>
              <td><strong>TOTAL REVENUE</strong></td>
              <td><strong>$13,800,000</strong></td>
              <td><strong>100%</strong></td>
            </tr>
          </tbody>
        </table>

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
        The convergence of several cultural and economic factors makes this the perfect moment for "WHO'S THE GOAT?":
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
        "WHO'S THE GOAT?" isn't just entertainment—it's education disguised as competition. Viewers don't just watch; they learn. Each episode includes:
      </div>
      <div className="screenplay-action">
        • SKILL SPOTLIGHTS: Brief segments explaining technical concepts<br/>
        • MENTOR MOMENTS: Industry leaders share career advice<br/>
        • VIEWER CHALLENGES: Online coding challenges tied to episode content<br/>
        • CAREER PATHS: Profiles of different tech career options
      </div>

      {/* Finale */}
      <div className="screenplay-heading">
        SEASON FINALE
      </div>
      <div className="screenplay-action">
        The final three contestants have 48 hours to build and launch a complete application. They must:
      </div>
      <div className="screenplay-action">
        • Develop a working product from concept to deployment<br/>
        • Present to a panel of tech industry legends<br/>
        • Defend their work in a live Q&A session<br/>
        • Win over a studio audience of tech professionals
      </div>
      <div className="screenplay-action">
        The winner receives:
      </div>
      <div className="screenplay-action">
        • $100,000 cash prize<br/>
        • One-year mentorship with industry leader<br/>
        • $50,000 in development resources<br/>
        • Guaranteed meetings with top VCs and tech companies<br/>
        • The title: Greatest of All Tech
      </div>

      {/* Contact */}
      <div className="screenplay-heading">
        CONTACT
      </div>
      <div className="screenplay-action">
        For more information about "WHO'S THE GOAT?" including full business plan, casting strategy, and production timeline, contact:
      </div>
      <div className="screenplay-action">
        Email: info@whosthegoat.tv<br/>
        Location: Los Angeles, California<br/>
        Status: Ready for Production
      </div>

      <div className="screenplay-transition">
        FADE OUT.
      </div>
    </div>
  );
}
