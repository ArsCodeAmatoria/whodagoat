import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            WHO'S THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">GOAT</span>?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The reality competition where 12 young tech creators battle to prove they're the Greatest of All Tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 text-white border border-white/20">
              <span className="text-sm text-gray-300">Format:</span>
              <span className="ml-2 font-semibold">12 Episodes • 60 Minutes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 text-white border border-white/20">
              <span className="text-sm text-gray-300">Prize:</span>
              <span className="ml-2 font-semibold">$100,000 + Mentorship</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 text-white border border-white/20">
              <span className="text-sm text-gray-300">Budget:</span>
              <span className="ml-2 font-semibold">$6M Production</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-2xl">
            Download Full Pitch Deck
          </button>
        </div>
      </section>

      {/* Show Concept */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">The Next Evolution of Reality TV</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In a world where tech skills determine success, we're creating the first reality competition that combines coding challenges with compelling human drama.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Now?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tech Skills Crisis</h4>
                    <p className="text-gray-600">4.4 million unfilled tech jobs create massive audience interest</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gen Z Engagement</h4>
                    <p className="text-gray-600">68M viewers hungry for authentic, educational content</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Streaming Wars</h4>
                    <p className="text-gray-600">Platforms need distinctive content to stand out</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Competition</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Skill Challenges</h4>
                  <p className="text-gray-600 text-sm">Individual coding tests with immunity rewards</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Main Challenges</h4>
                  <p className="text-gray-600 text-sm">Complex projects: apps, startups, presentations</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">The Debug</h4>
                  <p className="text-gray-600 text-sm">High-pressure elimination interview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">Massive Market Opportunity</h2>
            <p className="text-xl text-gray-600">Multiple billion-dollar markets converging at the perfect moment</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$2.6B</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Reality TV Market</div>
              <div className="text-gray-600">U.S. annual market size</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$366B</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Tech Education</div>
              <div className="text-gray-600">Global market opportunity</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">68M</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Target Audience</div>
              <div className="text-gray-600">Gen Z viewers in U.S.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">Compelling Financial Returns</h2>
            <p className="text-xl text-gray-600">Season 1 projections show strong profitability from day one</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Streaming Rights</span>
                    <span className="font-semibold">$6.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Advertising</span>
                    <span className="font-semibold">$4.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sponsorships</span>
                    <span className="font-semibold">$2.3M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Merchandise</span>
                    <span className="font-semibold">$0.8M</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total Revenue</span>
                    <span className="text-lg font-bold text-green-600">$13.8M</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Costs</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Total Production</span>
                  <span className="font-semibold">$6.0M</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-900">Gross Profit</span>
                  <span className="text-blue-600">$7.8M (56%)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Investment Opportunity</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-300">Series A Funding</div>
                  <div className="text-3xl font-bold">$10M</div>
                  <div className="text-sm text-gray-300">6-month timeline</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Production (60%)</span>
                    <span>$6.0M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing (20%)</span>
                    <span>$2.0M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technology (10%)</span>
                    <span>$1.0M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Working Capital (10%)</span>
                    <span>$1.0M</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                  Request Investment Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast & Competition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Meet the Competitors</h2>
            <p className="text-xl text-gray-300">12 diverse creators representing the future of technology</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "The Prodigy", desc: "19-year-old coding genius", color: "from-purple-500 to-pink-500" },
              { title: "The Entrepreneur", desc: "Failed startup founder", color: "from-blue-500 to-cyan-500" },
              { title: "The Influencer", desc: "Social media star", color: "from-green-500 to-emerald-500" },
              { title: "The Outsider", desc: "Self-taught from rural America", color: "from-yellow-500 to-orange-500" },
              { title: "The Corporate Refugee", desc: "Big Tech burnout", color: "from-red-500 to-pink-500" },
              { title: "The Activist", desc: "Tech for social good", color: "from-indigo-500 to-purple-500" },
              { title: "The Competitor", desc: "Hackathon champion", color: "from-cyan-500 to-blue-500" },
              { title: "The Artist", desc: "Creative coder", color: "from-emerald-500 to-green-500" },
            ].map((contestant, index) => (
              <div key={index} className={`bg-gradient-to-br ${contestant.color} rounded-xl p-6 text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">{contestant.title}</h3>
                <p className="text-sm opacity-90">{contestant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6">Ready to Find the GOAT?</h2>
          <p className="text-xl text-black/80 mb-8">
            Join us in creating the reality series that will define the next decade of television
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              Schedule Pitch Meeting
            </button>
            <button className="bg-white/20 backdrop-blur text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors">
              Download Business Plan
            </button>
          </div>
          <div className="mt-12 pt-8 border-t border-black/20 text-black/70">
            <p className="font-semibold">Nine Productions • Los Angeles, CA</p>
            <p>info@nineproductions.com • Ready for Production</p>
          </div>
        </div>
      </section>
    </div>
  );
}
