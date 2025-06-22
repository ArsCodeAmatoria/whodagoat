import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Users, Trophy, Code, Tv, DollarSign } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display-xl font-bold mb-6 text-balance">
              Who's the <span className="italic">GOAT</span>?
            </h1>
            <p className="text-display-sm font-light mb-8 text-muted-foreground text-balance">
              The Ultimate Reality-Tech Show
            </p>
            <p className="text-xl leading-relaxed mb-12 text-muted-foreground max-w-3xl mx-auto">
              Twelve young creators enter the arena with one goal: prove they are the Greatest of All Tech. 
              Each week, contestants must build, brand, and pitch an original app under intense deadlines 
              and team pressure. Only one will rise to GOAT status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Watch Pitch Video
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Read Full Concept
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-display-md font-bold mb-6">Reality TV Meets Silicon Valley</h2>
            <p className="text-lg text-muted-foreground">
              The first reality competition where innovation meets entertainment. 
              Contestants build real apps, learn actual skills, and compete for life-changing opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <Users className="w-8 h-8 mb-2" />
                <CardTitle>12 Contestants</CardTitle>
                <CardDescription>Young developers, designers, and entrepreneurs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diverse backgrounds from self-taught coders to bootcamp graduates, 
                  all hungry to prove they're the GOAT.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Code className="w-8 h-8 mb-2" />
                <CardTitle>Real Apps Built</CardTitle>
                <CardDescription>Functional, deployable applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike other reality shows, contestants create actual products 
                  that launch post-episode for real user feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Tv className="w-8 h-8 mb-2" />
                <CardTitle>44-Min Episodes</CardTitle>
                <CardDescription>12 episodes of pure innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Weekly episodes featuring The Drop, The Build, The Pitch, 
                  and The Cut. Drama meets technical excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Format Structure */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-md font-bold mb-12 text-center">Episode Breakdown</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">The Drop</h3>
                <p className="text-muted-foreground mb-4">New theme revealed (e.g. HealthTech, AI Tools, Gen Z Social)</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">The Build</h3>
                <p className="text-muted-foreground mb-4">Teams race to design, develop, and brand their app</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">The Pitch</h3>
                <p className="text-muted-foreground mb-4">Present to judges and audience in professional environment</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">The Cut</h3>
                <p className="text-muted-foreground mb-4">Losing team must vote one member off</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold mb-2">The GOAT Rises</h3>
                <p className="text-muted-foreground mb-4">Last one standing is crowned the Greatest of All Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Prize */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-8 text-yellow-500" />
            <h2 className="text-display-md font-bold mb-8">Grand Prize</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <DollarSign className="w-8 h-8 mb-2" />
                  <CardTitle>$100K Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Startup capital to launch your winning app and build your company.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2" />
                  <CardTitle>Elite Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    1-on-1 guidance from top founders and VCs in the industry.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">The Crown: The Title of THE GOAT</h3>
              <p className="text-lg text-muted-foreground">
                Recognition as the Greatest of All Tech, opening doors across Silicon Valley and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-md font-bold mb-6">Ready to Change Reality TV Forever?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the revolution where tech meets entertainment. 
              The next generation of developers deserves a show that matches their ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                View Pitch Deck
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 