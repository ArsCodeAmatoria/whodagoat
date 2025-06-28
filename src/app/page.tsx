import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">WHO&apos;S THE GOAT?</div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#opportunity" className="text-gray-600 hover:text-gray-900 transition-colors">Opportunity</a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900 transition-colors">Solution</a>
            <a href="#market" className="text-gray-600 hover:text-gray-900 transition-colors">Market</a>
            <a href="#financials" className="text-gray-600 hover:text-gray-900 transition-colors">Financials</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</a>
          </nav>
          <div className="text-sm text-gray-600 font-medium">CONFIDENTIAL</div>
        </div>
      </header>

      {/* Title Slide */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-playfair font-light mb-8 tracking-wide text-gray-900">
            WHO&apos;S THE GOAT?
          </h1>
          <div className="text-2xl text-gray-600 mb-16 font-light tracking-wide">
            Series Pitch Deck
          </div>
          <div className="border-t border-gray-300 pt-12 text-gray-700 space-y-3">
            <p className="text-xl font-medium">The Ultimate Tech Reality Competition</p>
            <p className="text-lg font-semibold text-blue-600">Seeking $10M Series A</p>
            <p className="text-sm text-gray-500 mt-6">Nine Productions • June 2025</p>
          </div>
          <div className="mt-12">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 inline-block font-medium">
              Request Full Pitch Deck
            </a>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="opportunity" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Executive Summary</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">The Opportunity</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Reality TV market: $2.6B annually
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  4.4M unfilled tech jobs creating audience demand
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  68M Gen Z viewers seeking authentic content
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  No existing tech-focused competition series
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">The Business</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  12-episode competition series
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  $6M production budget
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  $13.8M projected revenue (Season 1)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  56% gross margin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">The Problem</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-xl mb-12 border border-blue-100">
            <blockquote className="text-2xl text-gray-800 leading-relaxed text-center font-light italic">
              &ldquo;There&apos;s no reality TV that captures the excitement and innovation happening in tech today.&rdquo;
            </blockquote>
            <p className="text-center text-gray-600 mt-6 font-medium">— Survey of 2,500 Gen Z viewers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="text-4xl font-light text-gray-800 mb-3">68M</div>
              <div className="text-gray-600 font-medium">Gen Z viewers underserved</div>
            </div>
            <div className="p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="text-4xl font-light text-gray-800 mb-3">4.4M</div>
              <div className="text-gray-600 font-medium">Unfilled tech jobs</div>
            </div>
            <div className="p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="text-4xl font-light text-gray-800 mb-3">0</div>
              <div className="text-gray-600 font-medium">Tech-focused reality shows</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">The Solution</h2>
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              A high-stakes reality competition where 12 young tech creators (ages 18-25) live together, 
              competing in coding challenges and startup pitches to win $100,000 and industry mentorship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Format Innovation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real coding challenges with time pressure
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Startup pitch competitions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Industry mentor feedback
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strategic eliminations
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Unique Value</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Educational content that entertains
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Authentic tech industry exposure
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Relatable young talent
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Social media integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section id="market" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div className="border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-all bg-white">
              <div className="text-4xl font-light text-gray-800 mb-4">$2.6B</div>
              <div className="text-gray-700 mb-3 font-medium">U.S. Reality TV Market</div>
              <div className="text-sm text-gray-500">Annual market size</div>
            </div>
            <div className="border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-all bg-white">
              <div className="text-4xl font-light text-gray-800 mb-4">$366B</div>
              <div className="text-gray-700 mb-3 font-medium">Tech Education Market</div>
              <div className="text-sm text-gray-500">Global opportunity</div>
            </div>
            <div className="border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-all bg-white">
              <div className="text-4xl font-light text-gray-800 mb-4">15%</div>
              <div className="text-gray-700 mb-3 font-medium">Annual Streaming Growth</div>
              <div className="text-sm text-gray-500">Platform expansion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Revenue Model</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-8 text-gray-900">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Streaming Rights</span>
                  <span className="font-semibold text-gray-900">$6.5M</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Advertising Revenue</span>
                  <span className="font-semibold text-gray-900">$4.2M</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Sponsorships</span>
                  <span className="font-semibold text-gray-900">$2.3M</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Merchandise</span>
                  <span className="font-semibold text-gray-900">$0.8M</span>
                </div>
                <div className="flex justify-between py-4 font-semibold text-lg bg-blue-50 rounded px-2 border border-blue-200">
                  <span className="text-blue-900">Total Revenue</span>
                  <span className="text-blue-900">$13.8M</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-8 text-gray-900">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-3xl font-light text-green-800 mb-2">56%</div>
                  <div className="text-sm text-green-700 font-medium">Gross Margin</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-3xl font-light text-blue-800 mb-2">$7.8M</div>
                  <div className="text-sm text-blue-700 font-medium">Projected Profit</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-3xl font-light text-purple-800 mb-2">12</div>
                  <div className="text-sm text-purple-700 font-medium">Episodes</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-3xl font-light text-orange-800 mb-2">60min</div>
                  <div className="text-sm text-orange-700 font-medium">Episode Length</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Competitive Landscape</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-6 font-semibold text-gray-900">Show</th>
                    <th className="text-left p-6 font-semibold text-gray-900">Focus</th>
                    <th className="text-left p-6 font-semibold text-gray-900">Audience</th>
                    <th className="text-left p-6 font-semibold text-gray-900">Tech Element</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">Shark Tank</td>
                    <td className="p-6 text-gray-700">Business pitches</td>
                    <td className="p-6 text-gray-700">General adult</td>
                    <td className="p-6 text-gray-700">Limited</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">The Voice</td>
                    <td className="p-6 text-gray-700">Music talent</td>
                    <td className="p-6 text-gray-700">General family</td>
                    <td className="p-6 text-gray-700">Production only</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">Survivor</td>
                    <td className="p-6 text-gray-700">Physical/social</td>
                    <td className="p-6 text-gray-700">General adult</td>
                    <td className="p-6 text-gray-700">None</td>
                  </tr>
                  <tr className="bg-blue-50 border-b border-blue-200">
                    <td className="p-6 font-bold text-blue-900">Who&apos;s the GOAT?</td>
                    <td className="p-6 font-semibold text-blue-800">Tech skills</td>
                    <td className="p-6 font-semibold text-blue-800">Gen Z + Millennials</td>
                    <td className="p-6 font-semibold text-blue-800">Core focus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">SC</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-sm text-blue-600 mb-3 font-medium">Executive Producer</p>
              <p className="text-xs text-gray-600 leading-relaxed">Former VP of Programming, Netflix<br/>15+ years reality TV production</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">MR</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Marcus Rivera</h3>
              <p className="text-sm text-green-600 mb-3 font-medium">Creator/Showrunner</p>
              <p className="text-xs text-gray-600 leading-relaxed">Former Tech Founder (exit: $120M)<br/>Emmy-nominated producer</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">DK</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">David Kim</h3>
              <p className="text-sm text-purple-600 mb-3 font-medium">Head of Technology</p>
              <p className="text-xs text-gray-600 leading-relaxed">Former CTO, TechStars<br/>10+ years in tech education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section id="financials" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">5-Year Financial Projections</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-6 font-semibold text-gray-900">Year</th>
                    <th className="text-right p-6 font-semibold text-gray-900">Revenue</th>
                    <th className="text-right p-6 font-semibold text-gray-900">Production Cost</th>
                    <th className="text-right p-6 font-semibold text-gray-900">Gross Profit</th>
                    <th className="text-right p-6 font-semibold text-gray-900">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">2025</td>
                    <td className="p-6 text-right font-medium">$13.8M</td>
                    <td className="p-6 text-right text-gray-700">$6.0M</td>
                    <td className="p-6 text-right font-semibold text-green-700">$7.8M</td>
                    <td className="p-6 text-right font-semibold text-green-700">56%</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">2026</td>
                    <td className="p-6 text-right font-medium">$18.5M</td>
                    <td className="p-6 text-right text-gray-700">$7.2M</td>
                    <td className="p-6 text-right font-semibold text-green-700">$11.3M</td>
                    <td className="p-6 text-right font-semibold text-green-700">61%</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">2027</td>
                    <td className="p-6 text-right font-medium">$24.1M</td>
                    <td className="p-6 text-right text-gray-700">$8.6M</td>
                    <td className="p-6 text-right font-semibold text-green-700">$15.5M</td>
                    <td className="p-6 text-right font-semibold text-green-700">64%</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">2028</td>
                    <td className="p-6 text-right font-medium">$31.3M</td>
                    <td className="p-6 text-right text-gray-700">$10.2M</td>
                    <td className="p-6 text-right font-semibold text-green-700">$21.1M</td>
                    <td className="p-6 text-right font-semibold text-green-700">67%</td>
                  </tr>
                  <tr className="bg-blue-50 border-blue-200">
                    <td className="p-6 font-bold text-blue-900">2029</td>
                    <td className="p-6 text-right font-bold text-blue-900">$40.7M</td>
                    <td className="p-6 text-right text-blue-700">$12.0M</td>
                    <td className="p-6 text-right font-bold text-blue-900">$28.7M</td>
                    <td className="p-6 text-right font-bold text-blue-900">70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Use of Funds ($10M Series A)</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Production (Season 1)</span>
                  <span className="font-semibold text-gray-900">$6.0M (60%)</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Marketing & Distribution</span>
                  <span className="font-semibold text-gray-900">$2.0M (20%)</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Technology Infrastructure</span>
                  <span className="font-semibold text-gray-900">$1.0M (10%)</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors px-2">
                  <span className="text-gray-700 font-medium">Working Capital</span>
                  <span className="font-semibold text-gray-900">$1.0M (10%)</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Key Milestones</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Complete Season 1 production
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secure streaming distribution deal
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build technology platform
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Launch marketing campaign
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Achieve 5M+ viewers (Season 1)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secure Season 2 renewal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Investment Highlights</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Market Timing</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Peak demand for authentic content
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Tech talent shortage creating interest
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Streaming platforms seeking differentiation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gen Z viewing habits favor reality TV
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Competitive Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  First-mover in tech reality space
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experienced production team
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong industry relationships
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Scalable format for global markets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-medium mb-12 text-center text-gray-900">Get the Full Pitch Deck</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4 text-gray-700 mb-8">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">Nine Productions</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Los Angeles, California</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <a href="mailto:info@nineproductions.com" className="text-blue-600 hover:text-blue-700 transition-colors">info@nineproductions.com</a>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-blue-900 font-semibold text-center">Series A: $10M</p>
                <p className="text-blue-800 text-center mt-1">Pre-money valuation: $40M</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Request Full Materials</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Investment firm or company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your investment interests..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium"
                >
                  Request Full Pitch Deck
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
