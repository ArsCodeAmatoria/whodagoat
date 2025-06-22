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
    <div className="docs-content">
      {/* Header */}
      <div className="mb-12">
        <h1 className="script-title mb-4">Investment Pitch</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          &ldquo;Who&apos;s the GOAT?&rdquo; represents a $10M investment opportunity in the next generation 
          of reality television—where entertainment meets education and viewers gain real skills.
        </p>
      </div>

      {/* Market Opportunity */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Market Opportunity</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Massive Addressable Market</h3>
            <ul className="space-y-2">
              <li><strong>Reality TV:</strong> $2.6B annual market</li>
              <li><strong>Tech Education:</strong> $366B global market</li>
              <li><strong>Gen Z Audience:</strong> 68M in US alone</li>
              <li><strong>Streaming Growth:</strong> 15% YoY increase</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Unique Positioning</h3>
            <p>
              First reality show to combine entertainment with actual skill development. 
              Viewers don&apos;t just watch—they learn coding, entrepreneurship, and innovation 
              alongside contestants.
            </p>
          </div>
        </div>
      </div>

      {/* Financial Projections */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Financial Projections</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Year 1 Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">$13.8M</div>
              <p className="text-sm text-muted-foreground">
                Streaming rights, advertising, sponsorships
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Production Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">$6.0M</div>
              <p className="text-sm text-muted-foreground">
                26-week production cycle
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gross Margin</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-2">56%</div>
              <p className="text-sm text-muted-foreground">
                Industry-leading profitability
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Revenue Stream</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Year 1</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Year 2</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Year 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Streaming Rights</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$8.0M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$12.0M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$15.0M</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Advertising Revenue</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$3.5M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$5.2M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$7.8M</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sponsorships</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$1.8M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$2.7M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$4.0M</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Merchandise & Licensing</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$0.5M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$1.2M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$2.5M</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 px-4 py-2">Total Revenue</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$13.8M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$21.1M</td>
                <td className="border border-gray-300 px-4 py-2 text-right">$29.3M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Competitive Advantages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">First-Mover Advantage</h3>
            <ul className="space-y-2">
              <li>• No direct competitors in reality-tech education space</li>
              <li>• Established relationships with tech industry leaders</li>
              <li>• Proprietary challenge framework and curriculum</li>
              <li>• Strong IP protection for format and methodology</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Scalability Factors</h3>
            <ul className="space-y-2">
              <li>• International format licensing potential</li>
              <li>• Multiple season sustainability</li>
              <li>• Spin-off opportunities (junior version, corporate edition)</li>
              <li>• Digital platform and course monetization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Investment Terms */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Investment Opportunity</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Funding Request</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-4">$10M</div>
              <ul className="space-y-2 text-sm">
                <li>• $6M Production (Season 1)</li>
                <li>• $2M Marketing & Distribution</li>
                <li>• $1M Technology Platform</li>
                <li>• $1M Working Capital</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Projected Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600 mb-4">5.4x</div>
              <ul className="space-y-2 text-sm">
                <li>• 3-Year Revenue: $64.2M</li>
                <li>• 3-Year Profit: $28.8M</li>
                <li>• IRR: 185%</li>
                <li>• Payback Period: 18 months</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Risk Mitigation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Market Risk</h3>
            <p className="text-sm">
              Diversified revenue streams and pre-sold international rights 
              reduce dependency on single market performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Production Risk</h3>
            <p className="text-sm">
              Experienced production team with reality TV track record. 
              Comprehensive insurance and contingency planning.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Talent Risk</h3>
            <p className="text-sm">
              Robust casting process with backup contestants. 
              Strong legal framework and contestant agreements.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Investment Timeline</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
              Q1
            </div>
            <div>
              <h3 className="font-semibold">Funding & Pre-Production</h3>
              <p className="text-sm text-muted-foreground">
                Secure investment, finalize casting, complete set construction
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
              Q2
            </div>
            <div>
              <h3 className="font-semibold">Production Phase</h3>
              <p className="text-sm text-muted-foreground">
                26-week filming schedule, contestant challenges, elimination ceremonies
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
              Q3
            </div>
            <div>
              <h3 className="font-semibold">Post-Production & Marketing</h3>
              <p className="text-sm text-muted-foreground">
                Editing, marketing campaign launch, distribution partnerships
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
              Q4
            </div>
            <div>
              <h3 className="font-semibold">Launch & Revenue Generation</h3>
              <p className="text-sm text-muted-foreground">
                Series premiere, advertising revenue, international sales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Strategy */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Exit Strategy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Strategic Acquisition</h3>
            <p className="mb-4">
              Target acquisition by major media conglomerates seeking innovative content:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Netflix, Amazon Prime, Apple TV+</li>
              <li>• Disney, Warner Bros Discovery</li>
              <li>• Comcast NBCUniversal</li>
              <li>• Estimated valuation: $50-75M (Year 3)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">IPO Pathway</h3>
            <p className="mb-4">
              Public offering after establishing multi-season success:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Revenue run-rate: $40M+ annually</li>
              <li>• International expansion complete</li>
              <li>• Multiple format licensing deals</li>
              <li>• Estimated valuation: $100-150M</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Management Team */}
      <div className="docs-section">
        <h2 className="script-title mb-6">Management Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Executive Producer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                <strong>15+ years</strong> reality TV production experience. 
                Credits include major network competition shows with 
                combined viewership of 50M+.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Director</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Former <strong>Google</strong> engineering manager with 
                expertise in developer education and large-scale 
                technical curriculum design.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Creative Director</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Award-winning content creator with <strong>10M+</strong> 
                social media following in tech education space. 
                Deep Gen Z audience understanding.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h2 className="script-title mb-4">Ready to Invest in the Future?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join us in revolutionizing reality television while building the next generation 
          of tech talent. This isn&apos;t just entertainment—it&apos;s education with impact.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="px-8">
            <TrendingUp className="mr-2 h-5 w-5" />
            Schedule Investor Meeting
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Download Financial Model
          </Button>
        </div>
      </div>
    </div>
  );
} 