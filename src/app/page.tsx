import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold">WHO&apos;S THE GOAT?</div>
          <div className="text-sm text-gray-600">CONFIDENTIAL</div>
        </div>
      </header>

      {/* Title Slide */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-6 tracking-wide">
            WHO&apos;S THE GOAT?
          </h1>
          <div className="text-2xl text-gray-600 mb-12 font-light">
            Series Pitch Deck
          </div>
          <div className="border-t border-gray-300 pt-8 text-gray-600">
            <p>The Ultimate Tech Reality Competition</p>
            <p className="mt-2">Seeking $10M Series A</p>
            <p className="text-sm mt-4">Nine Productions • June 2025</p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Executive Summary</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">The Opportunity</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reality TV market: $2.6B annually</li>
                <li>• 4.4M unfilled tech jobs creating audience demand</li>
                <li>• 68M Gen Z viewers seeking authentic content</li>
                <li>• No existing tech-focused competition series</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">The Business</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 12-episode competition series</li>
                <li>• $6M production budget</li>
                <li>• $13.8M projected revenue (Season 1)</li>
                <li>• 56% gross margin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">The Problem</h2>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              &ldquo;There&apos;s no reality TV that captures the excitement and innovation happening in tech today.&rdquo;
            </p>
            <p className="text-center text-gray-600 mt-4">— Survey of 2,500 Gen Z viewers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gray-800 mb-2">68M</div>
              <div className="text-gray-600">Gen Z viewers underserved</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-800 mb-2">4.4M</div>
              <div className="text-gray-600">Unfilled tech jobs</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-800 mb-2">0</div>
              <div className="text-gray-600">Tech-focused reality shows</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">The Solution</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A high-stakes reality competition where 12 young tech creators (ages 18-25) live together, 
              competing in coding challenges and startup pitches to win $100,000 and industry mentorship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Format Innovation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Real coding challenges with time pressure</li>
                <li>• Startup pitch competitions</li>
                <li>• Industry mentor feedback</li>
                <li>• Strategic eliminations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Unique Value</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Educational content that entertains</li>
                <li>• Authentic tech industry exposure</li>
                <li>• Relatable young talent</li>
                <li>• Social media integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div className="border border-gray-200 p-8 rounded-lg">
              <div className="text-3xl font-light text-gray-800 mb-2">$2.6B</div>
              <div className="text-gray-600 mb-4">U.S. Reality TV Market</div>
              <div className="text-sm text-gray-500">Annual market size</div>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <div className="text-3xl font-light text-gray-800 mb-2">$366B</div>
              <div className="text-gray-600 mb-4">Tech Education Market</div>
              <div className="text-sm text-gray-500">Global opportunity</div>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <div className="text-3xl font-light text-gray-800 mb-2">15%</div>
              <div className="text-gray-600 mb-4">Annual Streaming Growth</div>
              <div className="text-sm text-gray-500">Platform expansion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Revenue Model</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-6">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Streaming Rights</span>
                  <span className="font-semibold">$6.5M</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Advertising Revenue</span>
                  <span className="font-semibold">$4.2M</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Sponsorships</span>
                  <span className="font-semibold">$2.3M</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Merchandise</span>
                  <span className="font-semibold">$0.8M</span>
                </div>
                <div className="flex justify-between py-3 font-semibold text-lg">
                  <span>Total Revenue</span>
                  <span>$13.8M</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Key Metrics</h3>
              <div className="bg-white p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-light text-gray-800">56%</div>
                    <div className="text-sm text-gray-600">Gross Margin</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-gray-800">$7.8M</div>
                    <div className="text-sm text-gray-600">Projected Profit</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-gray-800">12</div>
                    <div className="text-sm text-gray-600">Episodes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-gray-800">60min</div>
                    <div className="text-sm text-gray-600">Episode Length</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Competitive Landscape</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 border-b border-gray-200">Show</th>
                  <th className="text-left p-4 border-b border-gray-200">Focus</th>
                  <th className="text-left p-4 border-b border-gray-200">Audience</th>
                  <th className="text-left p-4 border-b border-gray-200">Tech Element</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Shark Tank</td>
                  <td className="p-4">Business pitches</td>
                  <td className="p-4">General adult</td>
                  <td className="p-4">Limited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">The Voice</td>
                  <td className="p-4">Music talent</td>
                  <td className="p-4">General family</td>
                  <td className="p-4">Production only</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Survivor</td>
                  <td className="p-4">Physical/social</td>
                  <td className="p-4">General adult</td>
                  <td className="p-4">None</td>
                </tr>
                <tr className="bg-blue-50 border-b border-gray-200">
                  <td className="p-4 font-semibold">Who&apos;s the GOAT?</td>
                  <td className="p-4">Tech skills</td>
                  <td className="p-4">Gen Z + Millennials</td>
                  <td className="p-4">Core focus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">Sarah Chen</h3>
              <p className="text-sm text-gray-600 mb-2">Executive Producer</p>
              <p className="text-xs text-gray-500">Former VP of Programming, Netflix<br/>15+ years reality TV</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">Marcus Rivera</h3>
              <p className="text-sm text-gray-600 mb-2">Creator/Showrunner</p>
              <p className="text-xs text-gray-500">Former Tech Founder (exit: $120M)<br/>Emmy-nominated producer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">David Kim</h3>
              <p className="text-sm text-gray-600 mb-2">Head of Technology</p>
              <p className="text-xs text-gray-500">Former CTO, TechStars<br/>10+ years in tech education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">5-Year Financial Projections</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 border-b border-gray-200">Year</th>
                  <th className="text-right p-4 border-b border-gray-200">Revenue</th>
                  <th className="text-right p-4 border-b border-gray-200">Production Cost</th>
                  <th className="text-right p-4 border-b border-gray-200">Gross Profit</th>
                  <th className="text-right p-4 border-b border-gray-200">Margin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">2025</td>
                  <td className="p-4 text-right">$13.8M</td>
                  <td className="p-4 text-right">$6.0M</td>
                  <td className="p-4 text-right">$7.8M</td>
                  <td className="p-4 text-right">56%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">2026</td>
                  <td className="p-4 text-right">$18.5M</td>
                  <td className="p-4 text-right">$7.2M</td>
                  <td className="p-4 text-right">$11.3M</td>
                  <td className="p-4 text-right">61%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">2027</td>
                  <td className="p-4 text-right">$24.1M</td>
                  <td className="p-4 text-right">$8.6M</td>
                  <td className="p-4 text-right">$15.5M</td>
                  <td className="p-4 text-right">64%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">2028</td>
                  <td className="p-4 text-right">$31.3M</td>
                  <td className="p-4 text-right">$10.2M</td>
                  <td className="p-4 text-right">$21.1M</td>
                  <td className="p-4 text-right">67%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-4 font-semibold">2029</td>
                  <td className="p-4 text-right font-semibold">$40.7M</td>
                  <td className="p-4 text-right">$12.0M</td>
                  <td className="p-4 text-right font-semibold">$28.7M</td>
                  <td className="p-4 text-right font-semibold">70%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Use of Funds ($10M Series A)</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Production (Season 1)</span>
                  <span className="font-semibold">$6.0M (60%)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Marketing & Distribution</span>
                  <span className="font-semibold">$2.0M (20%)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Technology Infrastructure</span>
                  <span className="font-semibold">$1.0M (10%)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Working Capital</span>
                  <span className="font-semibold">$1.0M (10%)</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Key Milestones</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Complete Season 1 production</li>
                <li>• Secure streaming distribution deal</li>
                <li>• Build technology platform</li>
                <li>• Launch marketing campaign</li>
                <li>• Achieve 5M+ viewers (Season 1)</li>
                <li>• Secure Season 2 renewal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Investment Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="font-semibold mb-4">Market Timing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Peak demand for authentic content</li>
                <li>• Tech talent shortage creating interest</li>
                <li>• Streaming platforms seeking differentiation</li>
                <li>• Gen Z viewing habits favor reality TV</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-4">Competitive Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• First-mover in tech reality space</li>
                <li>• Experienced production team</li>
                <li>• Strong industry relationships</li>
                <li>• Scalable format for global markets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Next Steps</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              Ready to invest in the future of reality television?
            </p>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">Nine Productions</p>
              <p>Los Angeles, California</p>
              <p>info@nineproductions.com</p>
              <p className="mt-4 text-sm">Series A: $10M • Pre-money valuation: $40M</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
