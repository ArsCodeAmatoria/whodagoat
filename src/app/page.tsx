import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Users, Trophy, Code, Tv, DollarSign, Target, Calendar } from "lucide-react";

export default function ConceptPage() {
  return (
    <div className="docs-content">
      {/* Header */}
      <div className="mb-12">
        <h1 className="docs-title">Who&apos;s the GOAT?</h1>
        <p className="text-xl text-muted-foreground mb-6 italic">
          The Ultimate Reality-Tech Show
        </p>
        <div className="flex gap-4 mb-8">
          <Button size="lg">
            <Play className="w-4 h-4 mr-2" />
            Watch Pitch
          </Button>
          <Button variant="outline" size="lg">
            <Target className="w-4 h-4 mr-2" />
            Contact Team
          </Button>
        </div>
      </div>

      {/* Logline */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Logline</h2>
        <p className="text-lg leading-relaxed">
          Twelve young creators enter the arena with one goal: prove they are the Greatest of All Tech. 
          Each week, contestants must build, brand, and pitch an original app under intense deadlines 
          and team pressure. Only one will rise to GOAT status.
        </p>
      </div>

      {/* Concept Overview */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Concept Overview</h2>
        <p>
          &ldquo;Who&apos;s the GOAT?&rdquo; is a high-stakes reality series where innovation meets entertainment. 
          Each episode features new challenges centered around building apps, pitching ideas, and surviving eliminations. 
          Contestants are judged on creativity, teamwork, code, and charisma.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardHeader>
              <Tv className="w-6 h-6 mb-2" />
              <CardTitle className="text-base">Format</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Weekly episodes (44 mins), 12 contestants, 1 winner</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Code className="w-6 h-6 mb-2" />
              <CardTitle className="text-base">Genre</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Reality Competition / Tech / Innovation</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="w-6 h-6 mb-2" />
              <CardTitle className="text-base">Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Gen Z, tech-curious Millennials, creators, startup fans</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Format Structure */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Format Structure</h2>
        
        <h3 className="docs-heading">Episode Breakdown</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold text-lg">The Drop</h4>
            <p>New theme (e.g. HealthTech, AI Tools, Gen Z Social)</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold text-lg">The Build</h4>
            <p>Teams race to design, develop, and brand their app</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold text-lg">The Pitch</h4>
            <p>Present to judges and audience</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold text-lg">The Cut</h4>
            <p>Losing team must vote one off</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-semibold text-lg">The GOAT Rises</h4>
            <p>Last one standing is crowned the GOAT</p>
          </div>
        </div>
      </div>

      {/* Differentiators */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Differentiators</h2>
        <ul className="space-y-2">
          <li>• Combines tech, drama, and entrepreneurship</li>
          <li>• Features real digital product creation</li>
          <li>• Designed for social virality and audience interaction</li>
          <li>• Promotes real-world skills: coding, marketing, design, leadership</li>
          <li>• Showcased apps can launch post-episode for live public feedback</li>
        </ul>
      </div>

      {/* Target Market */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Target Market</h2>
        
        <div className="overflow-x-auto">
          <table className="docs-content table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Why They Watch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tech Creators</strong></td>
                <td>See tools, workflows, and creative builds</td>
              </tr>
              <tr>
                <td><strong>Gen Z / Millennials</strong></td>
                <td>Personalities, ambition, and competition</td>
              </tr>
              <tr>
                <td><strong>Investors / Founders</strong></td>
                <td>Talent scouting and startup energy</td>
              </tr>
              <tr>
                <td><strong>General Viewers</strong></td>
                <td>Fast-paced drama and relatable challenges</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Grand Prize */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Grand Prize</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <DollarSign className="w-8 h-8 mb-2 text-green-600" />
              <CardTitle>$100K in startup funding</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Seed capital to launch your winning application</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2 text-blue-600" />
              <CardTitle>Elite mentorship</CardTitle>
            </CardHeader>
            <CardContent>
              <p>1-on-1 guidance from top founders and VCs</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center p-6 bg-muted rounded-lg">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="docs-heading">The Crown: The Title of THE GOAT</h3>
          <p>Recognition as the Greatest of All Tech, opening doors across Silicon Valley and beyond.</p>
        </div>
      </div>

      {/* Expansion Potential */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Expansion Potential</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="docs-heading">Spin-offs</h3>
            <ul>
              <li>• High School GOAT</li>
              <li>• GOAT Global</li>
              <li>• GOAT: AI Edition</li>
            </ul>
          </div>
          
          <div>
            <h3 className="docs-heading">Distribution</h3>
            <ul>
              <li>• Netflix, Prime, YouTube Originals</li>
              <li>• International format licensing</li>
              <li>• Streaming-first strategy</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="docs-heading">Brand Partnerships</h3>
          <p>GitHub, Vercel, Y Combinator, Figma, Notion, Discord</p>
        </div>
      </div>

      {/* Connect */}
      <div className="docs-section">
        <h2 className="docs-subtitle">Connect</h2>
        <div className="space-y-2">
          <p><strong>TikTok:</strong> <a href="https://tiktok.com/@whosthegoat" className="text-primary hover:underline">@WhosTheGOAT</a></p>
          <p><strong>Website:</strong> <a href="https://whosthegoat.tv" className="text-primary hover:underline">whosthegoat.tv</a></p>
          <p><strong>Contact:</strong> <a href="mailto:info@whosthegoat.tv" className="text-primary hover:underline">info@whosthegoat.tv</a></p>
        </div>
      </div>
    </div>
  );
}
