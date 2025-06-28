'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Elements */}
        <div className="hero-bg">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="hero-content">
          {/* Status Badge */}
          <div className={`status-badge ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="status-dot"></div>
            <span>Now Casting</span>
          </div>

          {/* Main Hero Content */}
          <div className={`${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <h1 className="hero-title">
              Who's the GOAT?
            </h1>
            
            <h2 className="hero-subtitle">
              The Ultimate Reality-Tech Show
            </h2>
            
            <p className="hero-description">
              Twelve brilliant creators compete to prove they are the Greatest of All Tech. 
              Build, brand, and pitch under intense pressure. Only one rises to GOAT status.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <a href="#format" className="btn-primary">Explore Format</a>
            <a href="mailto:info@whosthegoat.tv" className="btn-secondary">Get Involved</a>
          </div>

          {/* Stats Grid */}
          <div className={`stats-grid ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Contestants</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$100K</div>
              <div className="stat-label">Grand Prize</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">44min</div>
              <div className="stat-label">Episodes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">GOAT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section id="format" className="relative py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="status-badge mb-8 mx-auto">
              <div className="status-dot"></div>
              <span>Show Format</span>
            </div>
            <h2 className="hero-title text-4xl md:text-6xl mb-6">
              How It Works
            </h2>
            <p className="hero-description max-w-2xl mx-auto">
              A high-stakes competition where coding meets reality TV drama. 
              Every episode pushes contestants to their limits while audiences witness real innovation unfold.
            </p>
          </div>

          {/* Episode Structure */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Episode Structure</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">The Drop</h4>
                <p className="text-gray-400 text-sm">Challenge revealed with industry focus</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">The Build</h4>
                <p className="text-gray-400 text-sm">48-hour intensive development sprint</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">The Pitch</h4>
                <p className="text-gray-400 text-sm">Present to real investors and judges</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">The Cut</h4>
                <p className="text-gray-400 text-sm">Elimination vote by losing team</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">5</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">GOAT Status</h4>
                <p className="text-gray-400 text-sm">Winner advances, legacy grows</p>
              </div>
            </div>
          </div>

          {/* Production Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Behind the Scenes</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">The House</h4>
                    <p className="text-gray-400 leading-relaxed">12 contestants live together in a tech-equipped mansion in Silicon Valley, with cameras capturing every collaboration, conflict, and breakthrough moment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">The Lab</h4>
                    <p className="text-gray-400 leading-relaxed">State-of-the-art development studio with multiple workstations, recording equipment, and presentation spaces designed for maximum drama and functionality.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">The Pressure</h4>
                    <p className="text-gray-400 leading-relaxed">Tight deadlines, team dynamics, and high stakes create natural tension while contestants race to build market-ready products under intense scrutiny.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">The Stakes</h4>
                    <p className="text-gray-400 leading-relaxed">Real investors provide genuine feedback, and winning products get actual launch support, making every challenge genuinely career-defining.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Team Dynamics</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Shifting Teams</h4>
                    <p className="text-gray-400 leading-relaxed">Team compositions change weekly based on performance, creating new alliances and breaking up established partnerships for maximum drama.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Role Specialization</h4>
                    <p className="text-gray-400 leading-relaxed">Contestants must master multiple roles - developer, designer, marketer, and leader - as teams adapt to different challenge requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Strategic Voting</h4>
                    <p className="text-gray-400 leading-relaxed">When teams lose, they must vote out one member, creating complex social dynamics as contestants balance performance with personal relationships.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Individual Immunity</h4>
                    <p className="text-gray-400 leading-relaxed">Top performers can earn immunity from elimination, creating additional strategic layers as contestants fight for safety and advantages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Examples */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="status-badge mb-8 mx-auto">
              <div className="status-dot"></div>
              <span>Episode Examples</span>
            </div>
            <h2 className="hero-title text-4xl md:text-6xl mb-6">
              Sample Episodes
            </h2>
            <p className="hero-description max-w-2xl mx-auto">
              Each episode brings a unique challenge designed to test different aspects of tech innovation. 
              Here's what audiences can expect from a full season.
            </p>
          </div>

          {/* Episode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Episode 1 */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">E1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Gen Z Social</h3>
                  <p className="text-sm text-gray-400">First Impressions</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">THE CHALLENGE</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Create a social app that captures the attention of Gen Z users. Must include video, community features, and viral potential.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">SPECIAL GUEST</h4>
                  <p className="text-gray-300 text-sm">TikTok executive judges final pitches, offering real insights into what makes content go viral.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">THE TWIST</h4>
                  <p className="text-gray-300 text-sm">Apps are tested with real Gen Z focus groups during development, with live feedback affecting team dynamics.</p>
                </div>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">E2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">HealthTech Crisis</h3>
                  <p className="text-sm text-gray-400">Life or Death</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">THE CHALLENGE</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Build a healthcare solution addressing mental health for remote workers. Must be evidence-based and user-friendly.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">SPECIAL GUEST</h4>
                  <p className="text-gray-300 text-sm">Licensed therapists and healthcare VCs evaluate solutions for real-world viability and impact.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">THE DRAMA</h4>
                  <p className="text-gray-300 text-sm">Personal mental health struggles surface as contestants share vulnerabilities while building solutions.</p>
                </div>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">E3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Revolution</h3>
                  <p className="text-sm text-gray-400">The Future is Now</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">THE CHALLENGE</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Create an AI-powered tool that solves a real business problem. Must demonstrate clear ROI and practical implementation.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">SPECIAL GUEST</h4>
                  <p className="text-gray-300 text-sm">OpenAI researcher and enterprise AI investors judge technical innovation and market potential.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">THE PRESSURE</h4>
                  <p className="text-gray-300 text-sm">Teams must integrate complex AI APIs under time pressure while explaining technical concepts to judges.</p>
                </div>
              </div>
            </div>
          </div>

          {/* More Episodes Preview */}
          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Season Arc</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-gradient mb-6">Episodes 4-8: Specialization Phase</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E4: FinTech Disruption</p>
                      <p className="text-gray-400 text-sm">Building payment solutions for the gig economy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E5: Sustainability Tech</p>
                      <p className="text-gray-400 text-sm">Green solutions for urban living challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E6: EdTech Innovation</p>
                      <p className="text-gray-400 text-sm">Personalized learning for remote education</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E7: Gaming Revolution</p>
                      <p className="text-gray-400 text-sm">Next-gen gaming experiences with Web3 integration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E8: Creator Economy</p>
                      <p className="text-gray-400 text-sm">Tools empowering independent content creators</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gradient mb-6">Episodes 9-12: Championship Phase</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E9: Individual Challenge</p>
                      <p className="text-gray-400 text-sm">Solo development sprint - no team support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E10: Shark Tank Style</p>
                      <p className="text-gray-400 text-sm">Pitch existing apps to real investors for funding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E11: Final Four</p>
                      <p className="text-gray-400 text-sm">Open-ended innovation challenge with $25K mini-prize</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">E12: The GOAT Finale</p>
                      <p className="text-gray-400 text-sm">Epic final challenge determines the Greatest of All Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Prize Section */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="status-badge mb-8 mx-auto">
              <div className="status-dot"></div>
              <span>Grand Prize</span>
            </div>
            <h2 className="hero-title text-4xl md:text-6xl mb-6">
              The Ultimate Prize
            </h2>
            <p className="hero-description max-w-2xl mx-auto">
              More than just money. We're offering a complete transformation of the winner's career 
              and unlimited access to Silicon Valley's elite network.
            </p>
          </div>
          
          {/* Prize Grid */}
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Financial Prize */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">$</span>
                </div>
                <h3 className="text-4xl font-bold text-gradient mb-4">$100,000</h3>
                <h4 className="text-xl font-semibold text-white mb-3">Startup Capital</h4>
                <p className="text-gray-400 leading-relaxed">
                  Seed funding to launch your startup dreams with no strings attached. 
                  Use it for development, marketing, team building, or whatever your vision requires.
                </p>
              </div>
              
              {/* Mentorship */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <h3 className="text-4xl font-bold text-gradient mb-4">Mentorship</h3>
                <h4 className="text-xl font-semibold text-white mb-3">Elite Network Access</h4>
                <p className="text-gray-400 leading-relaxed">
                  One-on-one mentoring with top founders, VCs, and industry leaders. 
                  Get guidance that typically takes years to access through traditional channels.
                </p>
              </div>
            </div>
            
            <div className="tech-line my-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Launch Support */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">L</span>
                </div>
                <h3 className="text-4xl font-bold text-gradient mb-4">Launch Support</h3>
                <h4 className="text-xl font-semibold text-white mb-3">Full Production Team</h4>
                <p className="text-gray-400 leading-relaxed">
                  Complete app development, marketing, and launch support from our professional team. 
                  Turn your idea into a market-ready product with expert assistance.
                </p>
              </div>
              
              {/* The Crown */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <h3 className="text-4xl font-bold text-gradient mb-4">The Crown</h3>
                <h4 className="text-xl font-semibold text-white mb-3">Greatest of All Tech</h4>
                <p className="text-gray-400 leading-relaxed">
                  The ultimate recognition as the GOAT. Join an exclusive alumni network and become 
                  the face of the next generation of tech innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="relative py-16 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">Who's the GOAT?</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              The ultimate reality-tech show where innovation meets entertainment.
            </p>
          </div>
          
          <div className="tech-line mb-8"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500">
              © 2025 Who's the GOAT? All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Ready to prove you're the Greatest of All Tech?
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

