import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Target, Globe, Trophy } from "lucide-react";

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-display-lg font-bold mb-6">Pitch Deck</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The business case for "Who's the GOAT?" - The Ultimate Reality-Tech Show
          </p>
          <div className="flex justify-center">
            <Button size="lg">
              Download Full Deck (PDF)
            </Button>
          </div>
        </div>

        {/* The Opportunity */}
        <section className="mb-20">
          <h2 className="text-display-md font-bold mb-12 text-center">The Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 mb-2" />
                <CardTitle>$2.6B Market</CardTitle>
                <CardDescription>Reality TV annual revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Growing 8% year-over-year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 mb-2" />
                <CardTitle>26.8M Developers</CardTitle>
                <CardDescription>Worldwide developer population</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">4.4M in US alone</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="w-8 h-8 mb-2" />
                <CardTitle>74% Interest</CardTitle>
                <CardDescription>Gen Z interested in coding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">95% smartphone usage</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-8 h-8 mb-2" />
                <CardTitle>$85B Education</CardTitle>
                <CardDescription>Tech education market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">12% annual growth</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Business Model */}
        <section className="mb-20">
          <h2 className="text-display-md font-bold mb-12 text-center">Revenue Streams</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 font-semibold">Revenue Source</th>
                        <th className="text-right py-4 font-semibold">Season 1</th>
                        <th className="text-right py-4 font-semibold">Growth Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-4">Licensing Fee</td>
                        <td className="text-right py-4 font-mono">$8M</td>
                        <td className="text-right py-4 text-green-600">+15% annually</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4">Sponsor Integration</td>
                        <td className="text-right py-4 font-mono">$4M</td>
                        <td className="text-right py-4 text-green-600">+25% annually</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4">Merchandise</td>
                        <td className="text-right py-4 font-mono">$500K</td>
                        <td className="text-right py-4 text-green-600">+50% annually</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4">International Format</td>
                        <td className="text-right py-4 font-mono">$1M</td>
                        <td className="text-right py-4 text-green-600">+100% annually</td>
                      </tr>
                      <tr className="border-b font-bold">
                        <td className="py-4">Total Revenue</td>
                        <td className="text-right py-4 font-mono text-xl">$13.8M</td>
                        <td className="text-right py-4 text-green-600">+25% annually</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Production Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Season 1 Budget</span>
                      <span className="font-mono">$6M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost per Episode</span>
                      <span className="font-mono">$500K</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Gross Margin</span>
                      <span className="text-green-600">56% ($7.8M)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3-Year Projections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Year 1 Revenue</span>
                      <span className="font-mono">$13.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Year 2 Revenue</span>
                      <span className="font-mono">$17.3M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Year 3 Revenue</span>
                      <span className="font-mono">$23.1M</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Total 3-Year Value</span>
                      <span className="text-green-600">$54M+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="mb-20">
          <h2 className="text-display-md font-bold mb-12 text-center">Why We'll Win</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>vs. Traditional Reality TV</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Educational value vs. pure entertainment</li>
                  <li>✅ Real career impact for contestants</li>
                  <li>✅ Social media integration</li>
                  <li>✅ Evergreen educational content</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>vs. Tech Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Entertainment value hooks audience</li>
                  <li>✅ Professional TV production quality</li>
                  <li>✅ Diverse personal stories</li>
                  <li>✅ Community viewing experience</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Ask */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-md font-bold mb-8">The Ask</h2>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Investment Request</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">$10M</div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span>Production Budget</span>
                      <span>$6M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Marketing</span>
                      <span>$2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Working Capital</span>
                      <span>$1M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Contingency</span>
                      <span>$1M</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Projected Returns</h3>
                  <div className="space-y-4 text-left">
                    <div>
                      <div className="font-semibold">18-month ROI</div>
                      <div className="text-2xl font-bold text-green-600">138% ($13.8M)</div>
                    </div>
                    <div>
                      <div className="font-semibold">3-year Value</div>
                      <div className="text-2xl font-bold text-green-600">$54M+</div>
                    </div>
                    <div>
                      <div className="font-semibold">Exit Opportunity</div>
                      <div className="text-muted-foreground">Format sale or production company acquisition</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="mr-4">
                  Schedule Meeting
                </Button>
                <Button variant="outline" size="lg">
                  Download Full Deck
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-display-sm font-bold mb-4">Ready to Find Out Who's the GOAT?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to discuss partnership opportunities and investment details.
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p>Email: info@whosthegoat.tv</p>
            <p>Phone: Available upon request</p>
            <p>Location: Los Angeles, CA</p>
          </div>
        </section>
      </div>
    </div>
  );
} 