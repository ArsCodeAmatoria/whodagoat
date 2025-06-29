'use client'

import { useEffect, useState } from 'react'

import { Crown } from 'lucide-react'

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
          <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2 glass-light rounded-2xl px-4 py-3">
              <span className="text-2xl md:text-3xl font-bold text-gradient">12</span>
              <span className="text-gray-300 font-medium">Contestants</span>
            </div>
            <div className="flex items-center gap-2 glass-light rounded-2xl px-4 py-3">
              <span className="text-2xl md:text-3xl font-bold text-gradient">$100K</span>
              <span className="text-gray-300 font-medium">Grand Prize</span>
            </div>
            <div className="flex items-center gap-2 glass-light rounded-2xl px-4 py-3">
              <span className="text-2xl md:text-3xl font-bold text-gradient">44min</span>
              <span className="text-gray-300 font-medium">Episodes</span>
            </div>
            <div className="flex items-center gap-2 glass-light rounded-2xl px-4 py-3">
              <span className="text-2xl md:text-3xl font-bold text-gradient">1</span>
              <span className="text-gray-300 font-medium">GOAT</span>
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

          {/* Episode Structure - Web3 Design */}
          <div className="mb-32 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  radial-gradient(circle at 1px 1px, cyan 1px, transparent 0),
                  linear-gradient(90deg, transparent 24px, rgba(0,255,255,0.03) 25px, rgba(0,255,255,0.03) 26px, transparent 27px, transparent 74px)
                `,
                backgroundSize: '25px 25px'
              }}></div>
            </div>
            

            
                         
          </div>

          {/* Behind the Scenes */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
            
            <div className="relative card">
              <div className="status-badge mb-6">
                <div className="status-dot"></div>
                <span>Behind the Scenes</span>
              </div>
              <h3 className="hero-title text-3xl mb-6">The House</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">Living Space</h4>
                    <p className="hero-description">12 contestants live together in a tech-equipped mansion in Silicon Valley, with cameras capturing every collaboration, conflict, and breakthrough moment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">Development Studio</h4>
                    <p className="hero-description">State-of-the-art development studio with multiple workstations, recording equipment, and presentation spaces designed for maximum drama and functionality.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">The Pressure</h4>
                    <p className="hero-description">Tight deadlines, team dynamics, and high stakes create natural tension while contestants race to build market-ready products under intense scrutiny.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">Real Stakes</h4>
                    <p className="hero-description">Real investors provide genuine feedback, and winning products get actual launch support, making every challenge genuinely career-defining.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative card">
              <div className="status-badge mb-6">
                <div className="status-dot"></div>
                <span>Team Dynamics</span>
              </div>
              <h3 className="hero-title text-3xl mb-6">The Strategy</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">Shifting Teams</h4>
                    <p className="hero-description">Team compositions change weekly based on performance, creating new alliances and breaking up established partnerships for maximum drama.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">Role Specialization</h4>
                    <p className="hero-description">Contestants must master multiple roles - developer, designer, marketer, and leader - as teams adapt to different challenge requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">Strategic Voting</h4>
                    <p className="hero-description">When teams lose, they must vote out one member, creating complex social dynamics as contestants balance performance with personal relationships.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-2">Individual Immunity</h4>
                    <p className="hero-description">Top performers can earn immunity from elimination, creating additional strategic layers as contestants fight for safety and advantages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Examples */}
      <section className="relative py-24 px-4 md:px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
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
              Each episode presents unique challenges designed to test different aspects of tech innovation. 
              Here are examples of what contestants face in competition.
            </p>
          </div>

          {/* Episode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Episode 1 */}
            <div className="card">
              <div className="status-badge mb-4">
                <div className="status-dot"></div>
                <span>Episode 1</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-black">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">Gen Z Social</h3>
                  <p className="text-sm hero-description">The Social Challenge</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Challenge</h4>
                  <p className="hero-description text-sm">Create a social app that captures the attention of Gen Z users. Must include video, community features, and viral potential.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Judge</h4>
                  <p className="hero-description text-sm">TikTok executive judges final pitches, offering real insights into what makes content go viral.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Drama</h4>
                  <p className="hero-description text-sm">Apps are tested with real Gen Z focus groups during development, with live feedback affecting team dynamics.</p>
                </div>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="card">
              <div className="status-badge mb-4">
                <div className="status-dot"></div>
                <span>Episode 2</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-black">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">HealthTech Crisis</h3>
                  <p className="text-sm hero-description">The Wellness Challenge</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Challenge</h4>
                  <p className="hero-description text-sm">Build a healthcare solution addressing mental health for remote workers. Must be evidence-based and user-friendly.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Judge</h4>
                  <p className="hero-description text-sm">Licensed therapists and healthcare VCs evaluate solutions for real-world viability and impact.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Drama</h4>
                  <p className="hero-description text-sm">Personal mental health struggles surface as contestants share vulnerabilities while building solutions.</p>
                </div>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="card">
              <div className="status-badge mb-4">
                <div className="status-dot"></div>
                <span>Episode 3</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-black">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">AI Revolution</h3>
                  <p className="text-sm hero-description">The Future Challenge</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Challenge</h4>
                  <p className="hero-description text-sm">Create an AI-powered tool that solves a real business problem. Must demonstrate clear ROI and practical implementation.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Judge</h4>
                  <p className="hero-description text-sm">OpenAI researcher and enterprise AI investors judge technical innovation and market potential.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gradient mb-2">Drama</h4>
                  <p className="hero-description text-sm">Teams must integrate complex AI APIs under time pressure while explaining technical concepts to judges.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Season Overview */}
          <div className="text-center mb-20">
            <div className="status-badge mb-8">
              <div className="status-dot"></div>
              <span>Season Overview</span>
            </div>
            <h3 className="hero-title text-4xl mb-6">
              Complete Season Arc
            </h3>
            <p className="hero-description text-lg max-w-3xl mx-auto">
              From individual challenges to team dynamics, watch 12 episodes of intense competition 
              as creators battle for the ultimate tech crown.
            </p>
          </div>

          {/* Episode Timeline */}
          <div className="space-y-16">
            {/* Mid-Season Phase */}
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 border border-emerald-400/20 rounded-full px-8 py-4 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-black">2</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gradient">Mid-Season Challenges</h4>
                </div>
                <p className="hero-description">Episodes 4-8: Specialized Tech Domains</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Episode 4 */}
                <div className="card group hover:border-emerald-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">4</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">FinTech Disruption</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Building payment solutions for the gig economy with real-world applications and investor feedback.
                  </p>
                </div>

                {/* Episode 5 */}
                <div className="card group hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">5</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">Sustainability Tech</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Green solutions for urban living challenges that make environmental impact measurable.
                  </p>
                </div>

                {/* Episode 6 */}
                <div className="card group hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">6</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">EdTech Innovation</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Personalized learning for remote education with AI-powered adaptive features.
                  </p>
                </div>

                {/* Episode 7 */}
                <div className="card group hover:border-cyan-400/30 transition-all duration-300 md:col-start-1 lg:col-start-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">7</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">Gaming Revolution</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Next-gen gaming experiences with immersive technologies and social features.
                  </p>
                </div>

                {/* Episode 8 */}
                <div className="card group hover:border-orange-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">8</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">Creator Economy</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Tools empowering independent content creators with monetization and audience growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Championship Phase */}
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-400/10 to-red-400/10 border border-orange-400/20 rounded-full px-8 py-4 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-black">3</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gradient">Championship Phase</h4>
                </div>
                <p className="hero-description">Episodes 9-12: Individual Excellence & Final Showdown</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Episode 9 */}
                <div className="card group hover:border-yellow-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">9</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">Individual Mode</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Solo development sprint with no team support - pure individual skill test.
                  </p>
                </div>

                {/* Episode 10 */}
                <div className="card group hover:border-orange-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">10</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">Investor Pitch</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Pitch existing apps to real investors for funding and market validation.
                  </p>
                </div>

                {/* Episode 11 */}
                <div className="card group hover:border-red-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">11</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">Final Four</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Open-ended innovation challenge with $25K mini-prize for creativity.
                  </p>
                </div>

                {/* Episode 12 - Special Finale Card */}
                <div className="card group hover:border-yellow-400/50 transition-all duration-300 border border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-400/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-sm font-bold text-black">12</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gradient">GOAT Finale</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="hero-description text-sm leading-relaxed">
                    Epic final challenge determines the Greatest of All Tech with $100K prize.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-yellow-400 font-medium">Grand Finale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Prize Section */}
      <section className="relative py-24 px-4 md:px-6">
        {/* Floating Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="status-badge mb-8">
              <div className="status-dot"></div>
              <span>Ultimate Prize</span>
            </div>
            <h2 className="hero-title mb-6">
              Ultimate Rewards
            </h2>
            <p className="hero-description text-lg max-w-3xl mx-auto">
              More than just prize money. We're offering complete career transformation 
              with unlimited access to Silicon Valley's elite network and resources.
            </p>
          </div>
          
          {/* Prize Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Financial Prize */}
            <div className="card group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">$</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient">$100,000</h3>
                  <p className="text-sm hero-description">Startup Capital</p>
                </div>
              </div>
              <p className="hero-description leading-relaxed">
                Seed funding to launch your startup dreams with no strings attached. 
                Use it for development, marketing, team building, or whatever your vision requires.
              </p>
            </div>
            
            {/* Mentorship */}
            <div className="card group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">M</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient">Mentorship</h3>
                  <p className="text-sm hero-description">Elite Network Access</p>
                </div>
              </div>
              <p className="hero-description leading-relaxed">
                One-on-one mentoring with top founders, VCs, and industry leaders. 
                Get guidance that typically takes years to access through traditional channels.
              </p>
            </div>
            
            {/* Launch Support */}
            <div className="card group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">L</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient">Launch Support</h3>
                  <p className="text-sm hero-description">Production Team</p>
                </div>
              </div>
              <p className="hero-description leading-relaxed">
                Complete app development, marketing, and launch support from our professional team. 
                Turn your idea into a market-ready product with expert assistance.
              </p>
            </div>
            
            {/* The Crown */}
            <div className="card group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient">The Crown</h3>
                  <p className="text-sm hero-description">GOAT Status</p>
                </div>
              </div>
              <p className="hero-description leading-relaxed">
                The ultimate recognition as the GOAT. Join an exclusive alumni network and become 
                the face of the next generation of tech innovators.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="hero-title text-3xl mb-4">Who's the GOAT?</h3>
            <p className="hero-description text-lg max-w-2xl mx-auto">
              Creating the next generation of tech innovators through competitive reality programming
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Show Metrics */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
                  <h4 className="hero-title text-2xl">Show Metrics</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/5 hover:border-emerald-400/30 transition-all duration-300">
                      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">12</div>
                      <div className="text-sm text-white/60 uppercase tracking-wider font-medium">Contestants</div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/5 hover:border-blue-400/30 transition-all duration-300">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">$100K</div>
                      <div className="text-sm text-white/60 uppercase tracking-wider font-medium">Grand Prize</div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/5 hover:border-purple-400/30 transition-all duration-300">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">44m</div>
                      <div className="text-sm text-white/60 uppercase tracking-wider font-medium">Episode Length</div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/5 hover:border-yellow-400/30 transition-all duration-300">
                      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">12</div>
                      <div className="text-sm text-white/60 uppercase tracking-wider font-medium">Episodes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Pipeline */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  <h4 className="hero-title text-2xl">Production Pipeline</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-400/20">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-white">Silicon Valley Studio</div>
                        <div className="text-xs text-white/60 mt-1">Ready for production</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-400/20 border border-emerald-400/30 rounded-full">
                      <span className="text-emerald-400 text-xs font-medium uppercase tracking-wider">Online</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-white">Casting Network</div>
                        <div className="text-xs text-white/60 mt-1">Recruiting talent</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-blue-400/20 border border-blue-400/30 rounded-full">
                      <span className="text-blue-400 text-xs font-medium uppercase tracking-wider">Active</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-white">Production Team</div>
                        <div className="text-xs text-white/60 mt-1">Crew assembled</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-purple-400/20 border border-purple-400/30 rounded-full">
                      <span className="text-purple-400 text-xs font-medium uppercase tracking-wider">Ready</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-white">Investor Panel</div>
                        <div className="text-xs text-white/60 mt-1">Judges confirmed</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full">
                      <span className="text-yellow-400 text-xs font-medium uppercase tracking-wider">Standby</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <div className="status-badge mb-6">
              <div className="status-dot"></div>
              <span>Production Ready</span>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="hero-description">© 2024 Who's the GOAT? Reality Network. All rights reserved.</span>
                <div className="flex items-center gap-2">
                  <span className="hero-description text-sm">Powered by Innovation</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


