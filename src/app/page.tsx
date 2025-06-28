import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">WHO'S THE GOAT?</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#overview" className="nav-link">Overview</a>
              <a href="#market" className="nav-link">Market</a>
              <a href="#financials" className="nav-link">Financials</a>
              <a href="#contact" className="btn-primary">Contact</a>
            </div>
            <span className="text-sm text-gray-500 font-medium">CONFIDENTIAL</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h1 className="text-6xl font-bold mb-6">
            WHO'S THE <span className="text-gradient">GOAT?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">The Ultimate Tech Reality Competition</p>
          <p className="text-lg text-blue-600 font-semibold mb-12">Seeking $10M Series A Investment</p>
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Request Full Pitch Deck
          </a>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="overview" className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Executive Summary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">The Opportunity</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Reality TV market worth $2.6B annually</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>4.4M unfilled tech jobs creating massive audience demand</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>68M Gen Z viewers seeking authentic content</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Zero existing tech-focused competition series</span>
                </li>
              </ul>
            </div>

            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-6 text-green-600">The Business</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>12-episode premium competition series</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>$6M production budget for Season 1</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>$13.8M projected revenue (Season 1)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>56% gross margin with scaling potential</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Concept */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">The Concept</h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              12 young tech creators (ages 18-25) live together in a high-tech house, competing in 
              coding challenges, startup pitches, and strategic eliminations to win $100,000 and 
              industry mentorship from top tech leaders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-modern text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Real Challenges</h3>
              <p className="text-gray-600">Live coding under pressure, startup pitch competitions, and tech industry simulations</p>
            </div>
            
            <div className="card-modern text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-4">High Stakes</h3>
              <p className="text-gray-600">$100,000 prize, Silicon Valley mentorship, and career-launching opportunities</p>
            </div>
            
            <div className="card-modern text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">Gen Z Focus</h3>
              <p className="text-gray-600">Social media integration, authentic personalities, and relatable tech struggles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            <div className="card-modern text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">$2.6B</div>
              <h3 className="text-xl font-bold mb-2">U.S. Reality TV Market</h3>
              <p className="text-gray-600">Annual market size with consistent growth</p>
            </div>
            
            <div className="card-modern text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">$366B</div>
              <h3 className="text-xl font-bold mb-2">Tech Education Market</h3>
              <p className="text-gray-600">Global opportunity for educational content</p>
            </div>
            
            <div className="card-modern text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">68M</div>
              <h3 className="text-xl font-bold mb-2">Gen Z Viewers</h3>
              <p className="text-gray-600">Underserved audience seeking authentic tech content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Revenue Model</h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-8">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">Streaming Rights</span>
                  <span className="font-bold text-green-600">$6.5M</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">Advertising Revenue</span>
                  <span className="font-bold text-green-600">$4.2M</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">Sponsorships</span>
                  <span className="font-bold text-green-600">$2.3M</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">Merchandise</span>
                  <span className="font-bold text-green-600">$0.8M</span>
                </div>
                <div className="flex justify-between py-4 bg-blue-50 px-4 rounded-lg font-bold text-lg">
                  <span className="text-blue-900">Total Revenue</span>
                  <span className="text-blue-900">$13.8M</span>
                </div>
              </div>
            </div>

            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-8">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">56%</div>
                  <div className="text-sm font-medium text-green-800">Gross Margin</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$7.8M</div>
                  <div className="text-sm font-medium text-blue-800">Projected Profit</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                  <div className="text-sm font-medium text-purple-800">Episodes</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5M+</div>
                  <div className="text-sm font-medium text-orange-800">Target Viewers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section id="financials" className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">5-Year Financial Projections</h2>
          <div className="card-modern overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-bold">Year</th>
                  <th className="text-right p-4 font-bold">Revenue</th>
                  <th className="text-right p-4 font-bold">Production Cost</th>
                  <th className="text-right p-4 font-bold">Gross Profit</th>
                  <th className="text-right p-4 font-bold">Margin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">2025</td>
                  <td className="p-4 text-right">$13.8M</td>
                  <td className="p-4 text-right text-gray-600">$6.0M</td>
                  <td className="p-4 text-right font-bold text-green-600">$7.8M</td>
                  <td className="p-4 text-right font-bold text-green-600">56%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">2026</td>
                  <td className="p-4 text-right">$18.5M</td>
                  <td className="p-4 text-right text-gray-600">$7.2M</td>
                  <td className="p-4 text-right font-bold text-green-600">$11.3M</td>
                  <td className="p-4 text-right font-bold text-green-600">61%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">2027</td>
                  <td className="p-4 text-right">$24.1M</td>
                  <td className="p-4 text-right text-gray-600">$8.6M</td>
                  <td className="p-4 text-right font-bold text-green-600">$15.5M</td>
                  <td className="p-4 text-right font-bold text-green-600">64%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">2028</td>
                  <td className="p-4 text-right">$31.3M</td>
                  <td className="p-4 text-right text-gray-600">$10.2M</td>
                  <td className="p-4 text-right font-bold text-green-600">$21.1M</td>
                  <td className="p-4 text-right font-bold text-green-600">67%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-4 font-bold text-blue-900">2029</td>
                  <td className="p-4 text-right font-bold text-blue-900">$40.7M</td>
                  <td className="p-4 text-right text-blue-700">$12.0M</td>
                  <td className="p-4 text-right font-bold text-blue-900">$28.7M</td>
                  <td className="p-4 text-right font-bold text-blue-900">70%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="card-modern text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
              <p className="text-blue-600 font-medium mb-4">Executive Producer</p>
              <p className="text-gray-600 text-sm">Former VP Programming at Netflix. 15+ years in reality TV production with Emmy nominations.</p>
            </div>

            <div className="card-modern text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MR</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Marcus Rivera</h3>
              <p className="text-green-600 font-medium mb-4">Creator/Showrunner</p>
              <p className="text-gray-600 text-sm">Former tech founder with $120M exit. Emmy-nominated producer with deep industry connections.</p>
            </div>

            <div className="card-modern text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">DK</span>
              </div>
              <h3 className="text-xl font-bold mb-2">David Kim</h3>
              <p className="text-purple-600 font-medium mb-4">Head of Technology</p>
              <p className="text-gray-600 text-sm">Former CTO at TechStars. 10+ years in tech education and startup mentorship programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Get the Full Pitch Deck</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-6">Investment Opportunity</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <span><strong>Nine Productions</strong></span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <span>Los Angeles, California</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <a href="mailto:info@nineproductions.com" className="text-blue-600 hover:text-blue-700">info@nineproductions.com</a>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-blue-900 font-bold text-lg">Series A: $10M</p>
                <p className="text-blue-800">Pre-money valuation: $40M</p>
              </div>
            </div>

            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-6">Request Materials</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="form-input" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="form-input" placeholder="Investment firm or company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="form-input" placeholder="Tell us about your investment interests..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
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
