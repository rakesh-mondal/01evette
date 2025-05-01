"use client"

import Link from "next/link"
import { ArrowLeft, Check, ChevronDown, Home, Lightbulb, RefreshCw, Search, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EventSidebar } from "@/components/event-sidebar"

export default function EventIdeation() {
  // Sample event ideas
  const eventIdeas = [
    {
      id: 1,
      type: "Webinar",
      match: 95,
      title: "AI-Driven Workflow Optimization: Beyond the Hype",
      description:
        "A practical webinar showcasing real-world examples of how AI transforms enterprise workflows with measurable results.",
      timeframe: "Q2 2025",
      audience: "Operations Directors, IT Managers, Workflow Specialists",
      tags: ["AI", "Workflow", "Enterprise"],
    },
    {
      id: 2,
      type: "Meetup",
      match: 92,
      title: "Cross-Team Collaboration Workshop",
      description:
        "Interactive session on breaking down silos in large organizations using modern collaboration tools and methodologies.",
      timeframe: "Q3 2025",
      audience: "Team Leads, Department Managers, Collaboration Champions",
      tags: ["Collaboration", "Teams", "Workshop"],
    },
    {
      id: 3,
      type: "Webinar",
      match: 88,
      title: "The Analytics Advantage: Turning Data into Decisions",
      description:
        "Deep dive into how advanced analytics features can drive better business decisions across the enterprise.",
      timeframe: "Q2 2025",
      audience: "Business Analysts, Data Scientists, Decision Makers",
      tags: ["Analytics", "Data", "Decision Making"],
    },
    {
      id: 4,
      type: "Meetup",
      match: 86,
      title: "Remote Work Revolution: Tools for Distributed Teams",
      description: "Showcase how enterprise teams can maintain productivity and culture while working remotely.",
      timeframe: "Q3 2025",
      audience: "HR Leaders, Team Managers, Remote Workers",
      tags: ["Remote Work", "Teams", "Productivity"],
    },
    {
      id: 5,
      type: "Webinar",
      match: 85,
      title: "Security in the Age of Collaboration",
      description:
        "Expert panel discussing how to balance open collaboration with enterprise-grade security requirements.",
      timeframe: "Q4 2025",
      audience: "Security Officers, Compliance Managers, IT Directors",
      tags: ["Security", "Compliance", "Enterprise"],
    },
    {
      id: 6,
      type: "Webinar",
      match: 82,
      title: "Integration Mastery: Connecting Your Enterprise Stack",
      description:
        "Technical deep dive on integration capabilities and how to create a seamless workflow across different tools.",
      timeframe: "Q3 2025",
      audience: "IT Architects, Integration Specialists, CIOs",
      tags: ["Integration", "Technical", "Enterprise Stack"],
    },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      <EventSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/summary" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold">Event Ideation</h1>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/dashboard">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/new-idea">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  New Event Idea
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Filter Controls */}
        <div className="bg-white border-b">
          <div className="container max-w-screen-xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative md:w-64 w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search ideas..." className="pl-8 w-full" />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Filter
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>Event Type</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <input type="checkbox" id="filter-webinar" className="mr-2" />
                    <label htmlFor="filter-webinar">Webinar</label>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <input type="checkbox" id="filter-meetup" className="mr-2" />
                    <label htmlFor="filter-meetup">Meetup</label>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuLabel>Timeframe</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <input type="checkbox" id="filter-q2" className="mr-2" />
                    <label htmlFor="filter-q2">Q2 2025</label>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <input type="checkbox" id="filter-q3" className="mr-2" />
                    <label htmlFor="filter-q3">Q3 2025</label>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <input type="checkbox" id="filter-q4" className="mr-2" />
                    <label htmlFor="filter-q4">Q4 2025</label>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Sort: Match Score
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem>Match Score (High to Low)</DropdownMenuItem>
                  <DropdownMenuItem>Match Score (Low to High)</DropdownMenuItem>
                  <DropdownMenuItem>Timeframe (Soonest First)</DropdownMenuItem>
                  <DropdownMenuItem>Event Type (Webinar First)</DropdownMenuItem>
                  <DropdownMenuItem>Event Type (Meetup First)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex-1 md:text-right">
                <Button variant="ghost" className="text-purple-600">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Ideas
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          <h2 className="text-xl font-bold mb-6">
            AI Suggested Event Ideas
            <span className="text-sm font-normal text-gray-500 ml-2">Based on your company context</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventIdeas.map((idea) => (
              <Card key={idea.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant={idea.type === "Webinar" ? "default" : "outline"}
                      className={idea.type === "Webinar" ? "bg-blue-500" : ""}
                    >
                      {idea.type}
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                      {idea.match}% Match
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">{idea.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{idea.description}</p>

                  <div className="space-y-2">
                    <div className="flex gap-2 text-xs">
                      <span className="font-medium text-gray-700">Timeframe:</span>
                      <span>{idea.timeframe}</span>
                    </div>

                    <div className="flex gap-2 text-xs">
                      <span className="font-medium text-gray-700">Target Audience:</span>
                      <span>{idea.audience}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-1">
                      {idea.tags.map((tag, i) => (
                        <span key={i} className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>

                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                    <Lightbulb className="h-4 w-4 mr-1" />
                    Save
                  </Button>

                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/event-design">
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
