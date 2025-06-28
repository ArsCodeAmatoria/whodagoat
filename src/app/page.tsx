import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            WHO&apos;S THE <span className="text-red-500">GOAT?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The ultimate tech reality competition
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            12 young creators compete in coding challenges, startup pitches, and eliminations to prove they&apos;re the Greatest of All Tech.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">12</div>
              <div className="text-gray-400">Episodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">$100K</div>
              <div className="text-gray-400">Prize</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">$6M</div>
              <div className="text-gray-400">Budget</div>
            </div>
          </div>
          
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Download Pitch Deck
          </button>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Show</h2>
          <p className="text-xl text-gray-300 mb-6">
            Reality TV meets Silicon Valley in this groundbreaking competition series.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Young tech creators live together in a custom compound, competing in coding challenges and startup pitches while cameras capture every moment of drama, innovation, and elimination.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Weekly Format</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Skill challenges with immunity</li>
                <li>• Main project competitions</li>
                <li>• High-pressure eliminations</li>
                <li>• Real-world mentorship</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">The Setting</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• State-of-the-art tech compound</li>
                <li>• 24/7 development lab access</li>
                <li>• Industry-standard equipment</li>
                <li>• Complete camera coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Market Opportunity</h2>
            <p className="text-xl text-gray-400">Multiple billion-dollar markets converging</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">$2.6B</div>
              <div className="text-gray-400">Reality TV Market</div>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">68M</div>
              <div className="text-gray-400">Gen Z Viewers</div>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">4.4M</div>
              <div className="text-gray-400">Unfilled Tech Jobs</div>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">15%</div>
              <div className="text-gray-400">Streaming Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Projections</h2>
            <p className="text-xl text-gray-400">Strong returns from Season 1</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                  <span className="font-bold">Total</span>
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
                  <span className="text-gray-400">Production</span>
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
                  <div className="text-lg font-bold text-green-500">56% Margin</div>
                  <div className="text-gray-400">$7.8M Profit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Contestants</h2>
            <p className="text-xl text-gray-400">12 diverse creators representing the future of tech</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              <div key={index} className="bg-black p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-sm">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Greenlight?</h2>
          <p className="text-xl text-gray-400 mb-12">
            The next evolution of reality TV is here. Join us in creating television history.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Schedule Meeting
            </button>
            <button className="border border-gray-600 hover:border-white text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Download Deck
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-gray-500">
            <p className="font-semibold text-white">Nine Productions</p>
            <p>Los Angeles, California</p>
            <p>info@nineproductions.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
