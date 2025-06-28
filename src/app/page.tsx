import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="section-tech pt-16">
        <div className="container-tech">
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="text-sm font-medium text-blue-400 mb-4 tracking-widest uppercase">
                CONFIDENTIAL PITCH DECK
              </div>
              <h1 className="mb-8 text-white">
                WHO&apos;S THE <span className="text-gradient">GOAT?</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 font-light max-w-3xl mx-auto">
                The first reality competition where coding skills, startup vision, and raw determination collide
              </p>
              <div className="text-lg text-gradient-cyan font-semibold mb-12">
                A Revolutionary Entertainment Experience
              </div>
            </div>
            
            <div className="flex justify-center">
              <a href="#contact" className="btn-tech">
                <span>Request Full Pitch Deck</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Show Concept */}
      <section className="section-tech bg-gray-800/50">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-8">The Show That Silicon Valley Has Been Waiting For</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Imagine if you combined the strategic gameplay of Survivor, the high-stakes drama of The Bachelor, 
              and the innovation of Shark Tank – but set it in a cutting-edge tech house where America's brightest 
              young minds compete to prove they're the Greatest of All Time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-tech">
              <h3 className="text-gradient-cyan mb-6">Real Stakes, Real Skills</h3>
              <div className="space-y-4">
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Live coding challenges where contestants build actual apps under pressure</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Startup pitch competitions judged by real Silicon Valley investors</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">24/7 cameras capturing the authentic struggles of young entrepreneurs</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Strategic alliances and eliminations that mirror real startup dynamics</span>
                </div>
              </div>
            </div>

            <div className="card-tech">
              <h3 className="text-gradient mb-6">Unprecedented Access</h3>
              <div className="space-y-4">
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Industry legends mentor contestants in exclusive one-on-one sessions</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Behind-the-scenes look at how billion-dollar ideas are actually born</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Real venture capital funding opportunities for winning concepts</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">The most authentic portrayal of tech culture ever captured on television</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">Why This Show Will Dominate</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're at the perfect cultural moment where technology isn't just changing the world – it IS the world. 
              Young audiences are hungry for authentic content that reflects their digital-first reality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-tech text-center">
              <h3 className="text-gradient mb-4">Cultural Zeitgeist</h3>
              <p className="text-gray-400 leading-relaxed">
                Every young person today dreams of being the next Zuckerberg or building the next TikTok. 
                This show captures that universal aspiration in a compelling, binge-worthy format.
              </p>
            </div>
            
            <div className="card-tech text-center">
              <h3 className="text-gradient mb-4">Educational Entertainment</h3>
              <p className="text-gray-400 leading-relaxed">
                Viewers don't just watch – they learn. From coding fundamentals to startup strategy, 
                audiences gain valuable skills while being thoroughly entertained.
              </p>
            </div>
            
            <div className="card-tech text-center">
              <h3 className="text-gradient mb-4">Social Media Gold</h3>
              <p className="text-gray-400 leading-relaxed">
                Built for the TikTok generation with moments designed to go viral. 
                Coding failures, breakthrough innovations, and genuine human drama create endless shareable content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Format */}
      <section className="section-tech bg-gray-800/30">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient-cyan mb-6">A Format That's Never Been Done</h2>
          </div>
          
          <div className="card-hero mb-12">
            <h3 className="text-xl font-bold mb-6 text-white">The Tech House Experience</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              12 brilliant contestants aged 18-25 live together in a state-of-the-art tech house equipped with the latest hardware, 
              software, and development tools. Every conversation, every breakthrough, every meltdown is captured as they compete 
              in increasingly challenging rounds that test both their technical abilities and entrepreneurial instincts.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gradient font-semibold mb-4">Weekly Challenge Structure</h4>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Monday:</strong> New challenge announced by celebrity tech mentors</p>
                  <p><strong>Tuesday-Thursday:</strong> Development and strategy sessions</p>
                  <p><strong>Friday:</strong> Live demonstrations and peer evaluations</p>
                  <p><strong>Saturday:</strong> Elimination ceremony with investor panel</p>
                  <p><strong>Sunday:</strong> Personal stories and relationship dynamics</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-gradient font-semibold mb-4">Escalating Complexity</h4>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Episodes 1-3:</strong> Individual coding challenges</p>
                  <p><strong>Episodes 4-6:</strong> Team-based app development</p>
                  <p><strong>Episodes 7-9:</strong> Startup pitch competitions</p>
                  <p><strong>Episodes 10-11:</strong> Real market validation tests</p>
                  <p><strong>Episode 12:</strong> Final presentation to top VCs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Prize */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">More Than Money</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-tech">
              <h3 className="text-xl font-bold mb-6 text-gradient">The Winner Receives</h3>
              <div className="space-y-4">
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">$100,000 cash prize to fund their startup dreams</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">One-year mentorship with Silicon Valley legends</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Guaranteed meetings with top-tier venture capital firms</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Platform to launch their startup idea to millions of viewers</span>
                </div>
              </div>
            </div>

            <div className="card-tech">
              <h3 className="text-xl font-bold mb-6 text-gradient-cyan">Every Contestant Wins</h3>
              <div className="space-y-4">
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Industry connections that typically take years to build</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Real-world experience that can't be taught in classrooms</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">National platform to showcase their talents and ideas</span>
                </div>
                <div className="tech-list-item">
                  <div className="tech-dot"></div>
                  <span className="text-gray-300">Alumni network of future tech leaders and innovators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Business Case */}
      <section className="section-tech bg-gray-800/30">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient-cyan mb-6">Why This Investment Makes Sense</h2>
          </div>
          
          <div className="card-hero">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="stat-number text-4xl mb-2">First</div>
                <div className="text-gray-300 font-medium">Tech-focused reality competition ever produced</div>
              </div>
              <div>
                <div className="stat-number text-4xl mb-2">68M</div>
                <div className="text-gray-300 font-medium">Gen Z viewers seeking authentic tech content</div>
              </div>
              <div>
                <div className="stat-number text-4xl mb-2">Global</div>
                <div className="text-gray-300 font-medium">Format ready for international adaptation</div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-600">
              <h3 className="text-xl font-bold mb-6 text-white text-center">Revenue Projections</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-gradient-cyan font-bold text-2xl">$6.5M</div>
                  <div className="text-gray-400 text-sm">Streaming Rights</div>
                </div>
                <div>
                  <div className="text-gradient-cyan font-bold text-2xl">$4.2M</div>
                  <div className="text-gray-400 text-sm">Advertising</div>
                </div>
                <div>
                  <div className="text-gradient-cyan font-bold text-2xl">$2.3M</div>
                  <div className="text-gray-400 text-sm">Sponsorships</div>
                </div>
                <div>
                  <div className="text-gradient-cyan font-bold text-2xl">$1M+</div>
                  <div className="text-gray-400 text-sm">Merchandise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-tech">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">The Dream Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We've assembled the perfect combination of entertainment industry veterans and Silicon Valley insiders 
              to bring this vision to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-tech text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Sarah Chen</h3>
              <p className="text-gradient-cyan font-medium mb-4 text-sm">Executive Producer</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Former VP Programming at Netflix who greenlit three Emmy-winning reality series. 
                She knows how to create television that audiences can't stop watching.
              </p>
            </div>

            <div className="card-tech text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Marcus Rivera</h3>
              <p className="text-gradient font-medium mb-4 text-sm">Creator/Showrunner</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tech entrepreneur who sold his startup for $120M before pivoting to entertainment. 
                He understands both worlds and knows how to make tech accessible to mainstream audiences.
              </p>
            </div>

            <div className="card-tech text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DK</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">David Kim</h3>
              <p className="text-gradient-cyan font-medium mb-4 text-sm">Technical Advisor</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Former CTO at TechStars with connections to every major tech company. 
                He ensures our challenges reflect real industry standards and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-tech bg-gray-800/50">
        <div className="container-tech">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">Let's Make Television History</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              This isn't just another reality show. It's a cultural phenomenon waiting to happen. 
              Join us in creating the series that will define a generation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-hero">
              <h3 className="text-lg font-bold mb-6 text-white">Investment Opportunity</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-white">Nine Productions</strong> - Los Angeles, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <a href="mailto:info@nineproductions.com" className="text-gradient-cyan hover:text-white transition-colors">
                    info@nineproductions.com
                  </a>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-xl text-center border border-blue-500/30">
                <div className="text-2xl font-bold text-gradient mb-1">Series A: $10M</div>
                <div className="text-gray-300 text-sm">To produce Season 1 and secure global distribution</div>
              </div>
            </div>

            <div className="card-tech">
              <h3 className="text-lg font-bold mb-6 text-gradient-cyan">Request Materials</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input type="text" className="form-tech" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" className="form-tech" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input type="text" className="form-tech" placeholder="Investment firm or company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea rows={3} className="form-tech" placeholder="Tell us about your investment interests..."></textarea>
                </div>
                <button type="submit" className="btn-tech w-full">
                  <span>Request Full Pitch Deck</span>
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 border-t border-gray-700">
        <div className="container-tech">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">
              © 2025 Nine Productions. All rights reserved. Confidential and proprietary.
            </div>
            <div className="text-xs text-gray-600">
              This presentation contains confidential and proprietary information.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
