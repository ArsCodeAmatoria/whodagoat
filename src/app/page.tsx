import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            WHO&apos;S THE<br />
            <span className="text-red-500">GOAT?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            12 young tech creators. One ultimate challenge.<br />
            Who will prove they&apos;re the Greatest of All Tech?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500">12</div>
              <div className="text-gray-400">Episodes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">$100K</div>
              <div className="text-gray-400">Grand Prize</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">$6M</div>
              <div className="text-gray-400">Production Budget</div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The Show</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Reality TV meets Silicon Valley. Twelve brilliant young creators aged 18-25 live together in a custom tech compound, competing in coding challenges, startup pitches, and eliminations.
              </p>
                             <p className="text-lg text-gray-400 leading-relaxed">
                 It&apos;s not just about technical skills—it&apos;s about who can handle pressure, build alliances, and emerge as the ultimate tech talent.
               </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold mb-2">Weekly Format</h3>
                <p className="text-gray-400">Skill challenges, main projects, and high-pressure eliminations</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold mb-2">The Compound</h3>
                <p className="text-gray-400">State-of-the-art development lab with 24/7 filming</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold mb-2">The Prize</h3>
                <p className="text-gray-400">$100,000 + mentorship + industry connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Market Opportunity</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 bg-black rounded-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">$2.6B</div>
              <div className="text-gray-400">Reality TV Market</div>
            </div>
            <div className="p-8 bg-black rounded-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">68M</div>
              <div className="text-gray-400">Gen Z Viewers</div>
            </div>
            <div className="p-8 bg-black rounded-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">4.4M</div>
              <div className="text-gray-400">Unfilled Tech Jobs</div>
            </div>
            <div className="p-8 bg-black rounded-lg">
              <div className="text-3xl font-bold text-red-500 mb-2">15%</div>
              <div className="text-gray-400">Streaming Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial Projections</h2>
            <p className="text-xl text-gray-400">Season 1 delivers strong returns from day one</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Revenue</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Streaming Rights</span>
                  <span className="font-semibold">$6.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Advertising</span>
                  <span className="font-semibold">$4.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sponsorships</span>
                  <span className="font-semibold">$2.3M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Merchandise</span>
                  <span className="font-semibold">$0.8M</span>
                </div>
                <div className="border-t border-gray-700 pt-4 flex justify-between text-lg">
                  <span className="font-bold">Total Revenue</span>
                  <span className="font-bold text-green-500">$13.8M</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Investment</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-red-500">$10M</div>
                <div className="text-gray-400">Series A Funding</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Production Costs</span>
                  <span>$6.0M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Marketing</span>
                  <span>$2.0M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technology</span>
                  <span>$1.0M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Working Capital</span>
                  <span>$1.0M</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-lg font-bold text-green-500">56% Gross Margin</div>
                  <div className="text-gray-400">$7.8M Projected Profit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Contestants</h2>
            <p className="text-xl text-gray-400">12 archetypes representing the future of tech</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "The Prodigy",
              "The Entrepreneur", 
              "The Influencer",
              "The Outsider",
              "The Corporate Refugee",
              "The Activist",
              "The Competitor",
              "The Artist",
              "The Hustler",
              "The Academic",
              "The Veteran",
              "The Wild Card"
            ].map((title, index) => (
              <div key={index} className="bg-black p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="font-bold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Greenlight?</h2>
          <p className="text-xl text-gray-400 mb-12">
            The next evolution of reality TV is here.<br />
            Join us in creating television history.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Pitch Meeting
            </button>
            <button className="border border-gray-600 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download Full Deck
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-gray-500">
            <p className="font-semibold text-white">Nine Productions</p>
            <p>Los Angeles, California</p>
            <p>info@nineproductions.com</p>
            <p className="mt-4 text-sm">Ready for immediate production • Series A funding available</p>
          </div>
        </div>
      </section>
    </div>
  );
}
