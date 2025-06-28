import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="text-sm font-medium text-gradient mb-4 tracking-widest uppercase">
                CONFIDENTIAL PITCH DECK
              </div>
              <h1 className="mb-8">
                WHO'S THE <span className="text-gradient">GOAT?</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-4 font-light">
                The Ultimate Tech Reality Competition
              </p>
              <div className="text-lg text-gradient-cyan font-semibold mb-12">
                Seeking $10M Series A Investment
              </div>
            </div>
            
            <div className="flex justify-center">
              <a href="#contact" className="btn-tech">
                <span>Request Full Pitch Deck</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Metrics */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="stat-card">
              <div className="stat-number">$2.6B</div>
              <div className="text-gray-400 font-medium">Reality TV Market</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">68M</div>
              <div className="text-gray-400 font-medium">Gen Z Viewers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$13.8M</div>
              <div className="text-gray-400 font-medium">Projected Revenue</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">56%</div>
              <div className="text-gray-400 font-medium">Gross Margin</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">Executive Summary</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              12 young tech creators compete in high-stakes coding challenges and startup pitches, 
              living together in a cutting-edge tech house for the ultimate $100K prize.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-tech">
              <h3 className="text-gradient-cyan mb-8">The Opportunity</h3>
              <div className="space-y-6">
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">$2.6B annual reality TV market with zero tech-focused competition</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">4.4M unfilled tech jobs creating massive audience demand</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">68M Gen Z viewers seeking authentic tech content</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Perfect timing for educational entertainment convergence</span>
                </div>
              </div>
            </div>

            <div className="card-tech">
              <h3 className="text-gradient mb-8">The Business</h3>
              <div className="space-y-6">
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">12-episode premium series with streaming distribution</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">$6M production budget for Season 1</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">$13.8M projected revenue with 56% margins</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Scalable format for international markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Concept */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient-cyan mb-6">The Concept</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-tech text-center">
              <div className="tech-icon">⚡</div>
              <h3 className="text-gradient mb-4">Real Challenges</h3>
              <p className="text-gray-400 leading-relaxed">
                Live coding under pressure, startup pitch competitions, and authentic tech industry simulations that test real skills.
              </p>
            </div>
            
            <div className="card-tech text-center">
              <div className="tech-icon">🏆</div>
              <h3 className="text-gradient mb-4">High Stakes</h3>
              <p className="text-gray-400 leading-relaxed">
                $100,000 grand prize, Silicon Valley mentorship opportunities, and career-launching industry connections.
              </p>
            </div>
            
            <div className="card-tech text-center">
              <div className="tech-icon">🚀</div>
              <h3 className="text-gradient mb-4">Gen Z Focus</h3>
              <p className="text-gray-400 leading-relaxed">
                Social media integration, authentic personalities, and relatable tech struggles that resonate with young audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">Revenue Model</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-hero">
              <h3 className="text-2xl font-bold mb-8 text-white">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-gray-300 font-medium">Streaming Rights</span>
                  <span className="text-gradient-cyan font-bold text-xl">$6.5M</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-gray-300 font-medium">Advertising Revenue</span>
                  <span className="text-gradient-cyan font-bold text-xl">$4.2M</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-gray-300 font-medium">Sponsorships</span>
                  <span className="text-gradient-cyan font-bold text-xl">$2.3M</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-gray-300 font-medium">Merchandise & Digital</span>
                  <span className="text-gradient-cyan font-bold text-xl">$0.8M</span>
                </div>
                <div className="flex justify-between items-center py-6 mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl px-6">
                  <span className="text-white font-bold text-lg">Total Revenue</span>
                  <span className="text-gradient font-bold text-2xl">$13.8M</span>
                </div>
              </div>
            </div>

            <div className="card-tech">
              <h3 className="text-2xl font-bold mb-8 text-gradient">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="stat-card">
                  <div className="stat-number text-3xl mb-2">56%</div>
                  <div className="text-gray-400 text-sm font-medium">Gross Margin</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number text-3xl mb-2">$7.8M</div>
                  <div className="text-gray-400 text-sm font-medium">Net Profit</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number text-3xl mb-2">12</div>
                  <div className="text-gray-400 text-sm font-medium">Episodes</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number text-3xl mb-2">5M+</div>
                  <div className="text-gray-400 text-sm font-medium">Target Viewers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient-cyan mb-6">5-Year Financial Projections</h2>
          </div>
          
          <div className="card-tech overflow-x-auto">
            <table className="table-tech">
              <thead>
                <tr>
                  <th>Year</th>
                  <th className="text-right">Revenue</th>
                  <th className="text-right">Production Cost</th>
                  <th className="text-right">Gross Profit</th>
                  <th className="text-right">Margin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">2025</td>
                  <td className="text-right text-gray-300">$13.8M</td>
                  <td className="text-right text-gray-400">$6.0M</td>
                  <td className="text-right font-bold text-gradient-cyan">$7.8M</td>
                  <td className="text-right font-bold text-gradient-cyan">56%</td>
                </tr>
                <tr>
                  <td className="font-bold">2026</td>
                  <td className="text-right text-gray-300">$18.5M</td>
                  <td className="text-right text-gray-400">$7.2M</td>
                  <td className="text-right font-bold text-gradient-cyan">$11.3M</td>
                  <td className="text-right font-bold text-gradient-cyan">61%</td>
                </tr>
                <tr>
                  <td className="font-bold">2027</td>
                  <td className="text-right text-gray-300">$24.1M</td>
                  <td className="text-right text-gray-400">$8.6M</td>
                  <td className="text-right font-bold text-gradient-cyan">$15.5M</td>
                  <td className="text-right font-bold text-gradient-cyan">64%</td>
                </tr>
                <tr>
                  <td className="font-bold">2028</td>
                  <td className="text-right text-gray-300">$31.3M</td>
                  <td className="text-right text-gray-400">$10.2M</td>
                  <td className="text-right font-bold text-gradient-cyan">$21.1M</td>
                  <td className="text-right font-bold text-gradient-cyan">67%</td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <td className="font-bold text-white">2029</td>
                  <td className="text-right font-bold text-white">$40.7M</td>
                  <td className="text-right text-blue-300">$12.0M</td>
                  <td className="text-right font-bold text-gradient">$28.7M</td>
                  <td className="text-right font-bold text-gradient">70%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">Leadership Team</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-tech text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Sarah Chen</h3>
              <p className="text-gradient-cyan font-medium mb-4">Executive Producer</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Former VP Programming at Netflix. 15+ years in reality TV production with Emmy nominations and proven hit series.
              </p>
            </div>

            <div className="card-tech text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-xl">MR</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Marcus Rivera</h3>
              <p className="text-gradient font-medium mb-4">Creator/Showrunner</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Former tech founder with $120M exit. Emmy-nominated producer with deep Silicon Valley connections and proven track record.
              </p>
            </div>

            <div className="card-tech text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-xl">DK</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">David Kim</h3>
              <p className="text-gradient-cyan font-medium mb-4">Head of Technology</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Former CTO at TechStars. 10+ years in tech education and startup mentorship with extensive industry network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">Get the Full Pitch Deck</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us in revolutionizing reality TV with the first tech-focused competition series.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="card-hero">
              <h3 className="text-2xl font-bold mb-8 text-white">Investment Opportunity</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <span className="text-gray-300"><strong className="text-white">Nine Productions</strong> - Los Angeles, CA</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                  <a href="mailto:info@nineproductions.com" className="text-gradient-cyan hover:text-white transition-colors">
                    info@nineproductions.com
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-8 rounded-2xl text-center border border-blue-500/30">
                <div className="text-3xl font-bold text-gradient mb-2">Series A: $10M</div>
                <div className="text-gray-300">Pre-money valuation: $40M</div>
              </div>
            </div>

            <div className="card-tech">
              <h3 className="text-2xl font-bold mb-8 text-gradient-cyan">Request Materials</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Name</label>
                  <input type="text" className="form-tech" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                  <input type="email" className="form-tech" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Company</label>
                  <input type="text" className="form-tech" placeholder="Investment firm or company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Message</label>
                  <textarea rows={4} className="form-tech" placeholder="Tell us about your investment interests..."></textarea>
                </div>
                <button type="submit" className="btn-tech w-full">
                  <span>Request Full Pitch Deck</span>
                  <span className="text-xl">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16">
        <div className="container-tech">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-4">
              © 2025 Nine Productions. All rights reserved. Confidential and proprietary.
            </div>
            <div className="text-xs text-gray-600">
              This presentation contains confidential and proprietary information. Any reproduction or distribution is strictly prohibited.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
