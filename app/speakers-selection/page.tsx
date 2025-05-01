"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Filter, Home, Search, Star } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventSidebar } from "@/components/event-sidebar"

export default function SpeakerSelection() {
  const [selectedSpeakers, setSelectedSpeakers] = useState([
    {
      id: 1,
      name: "Dr. Alex Martinez",
      title: "AI Research Director",
      company: "TechCorp",
      avatar: "/placeholder.svg?key=3of5d",
    },
  ])

  // Sample speakers data
  const speakers = [
    {
      id: 2,
      name: "Sarah Johnson",
      title: "VP of Operations",
      company: "Enterprise Solutions Inc",
      expertise: ["Workflow Optimization", "Digital Transformation", "Change Management"],
      followers: "5.2K",
      rating: 4.8,
      recentActivity: "Keynote at Digital Summit 2024",
      avatar: "/placeholder.svg?key=6qixk",
    },
    {
      id: 3,
      name: "Michael Chang",
      title: "Head of AI Implementation",
      company: "Future Systems",
      expertise: ["AI Applications", "Machine Learning", "Process Automation"],
      followers: "8.7K",
      rating: 4.9,
      recentActivity: "Published 'AI in the Enterprise' whitepaper",
      avatar: "/placeholder.svg?key=kvp7o",
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Enterprise Workflow Consultant",
      company: "Business Process Partners",
      expertise: ["Workflow Analysis", "Enterprise Systems", "Productivity"],
      followers: "3.8K",
      rating: 4.7,
      recentActivity: "Webinar series on productivity systems",
      avatar: "/placeholder.svg?key=o5zcu",
    },
    {
      id: 5,
      name: "James Wilson",
      title: "CTO",
      company: "WorkflowAI",
      expertise: ["Enterprise AI", "Software Architecture", "Technology Strategy"],
      followers: "12.3K",
      rating: 4.9,
      recentActivity: "Panel at Enterprise Tech Conference",
      avatar: "/placeholder.svg?key=raauq",
    },
  ]

  const addSpeaker = (speaker: any) => {
    if (!selectedSpeakers.find((s) => s.id === speaker.id)) {
      setSelectedSpeakers([...selectedSpeakers, speaker])
    }
  }

  const removeSpeaker = (id: number) => {
    setSelectedSpeakers(selectedSpeakers.filter((s) => s.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <EventSidebar />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold">Speaker Selection: AI-Driven Workflow Optimization</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="speakers" className="w-full">
          <TabsList className="bg-white border-b justify-start w-full rounded-none h-12 px-6">
            <TabsTrigger value="overview" asChild>
              <Link href="/event-design">Overview</Link>
            </TabsTrigger>
            <TabsTrigger value="speakers" className="data-[state=active]:bg-slate-100">
              Speakers
            </TabsTrigger>
            <TabsTrigger value="audience" asChild>
              <Link href="/audience-definition">Audience</Link>
            </TabsTrigger>
            <TabsTrigger value="content" asChild>
              <Link href="/content-planning">Content</Link>
            </TabsTrigger>
            <TabsTrigger value="marketing" asChild>
              <Link href="/marketing-kit">Marketing</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="speakers" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1">
                  {/* Search and Filters */}
                  <div className="bg-white rounded-lg border p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search speakers by name, expertise, or company..."
                          className="pl-8 w-full"
                        />
                      </div>

                      <div className="flex gap-3">
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <div className="flex items-center">
                              <Filter className="h-4 w-4 mr-2" />
                              <span>Expertise</span>
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai">AI & Machine Learning</SelectItem>
                            <SelectItem value="workflow">Workflow Optimization</SelectItem>
                            <SelectItem value="enterprise">Enterprise Systems</SelectItem>
                            <SelectItem value="transformation">Digital Transformation</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          More Filters
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Minimum Rating</span>
                        <span className="text-sm">4.5+</span>
                      </div>
                      <Slider defaultValue={[4.5]} min={1} max={5} step={0.1} />
                    </div>
                  </div>

                  {/* Speakers Grid */}
                  <h2 className="text-lg font-semibold mb-4">Recommended Speakers</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {speakers.map((speaker) => (
                      <Card key={speaker.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="p-4 pb-0">
                          <div className="flex items-start gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={speaker.avatar || "/placeholder.svg"} alt={speaker.name} />
                              <AvatarFallback>
                                {speaker.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{speaker.name}</h3>
                              <p className="text-sm text-gray-600">
                                {speaker.title}, {speaker.company}
                              </p>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <Star className="h-3 w-3 text-yellow-400 mr-1" />
                                <span>{speaker.rating}</span>
                                <span className="mx-2">•</span>
                                <span>{speaker.followers} LinkedIn followers</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-3">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {speaker.expertise.map((exp, i) => (
                              <Badge key={i} variant="outline" className="bg-purple-50">
                                {exp}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-xs text-gray-600">
                            <span className="font-medium">Recent Activity:</span> {speaker.recentActivity}
                          </p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/speaker-profile">View Profile</Link>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700"
                            onClick={() => addSpeaker(speaker)}
                          >
                            Add to Event
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Selected Speakers Sidebar */}
                <div className="lg:w-80">
                  <div className="bg-white rounded-lg border p-4 sticky top-6">
                    <h3 className="font-semibold mb-4">Selected Speakers ({selectedSpeakers.length})</h3>

                    {selectedSpeakers.length > 0 ? (
                      <div className="space-y-3">
                        {selectedSpeakers.map((speaker) => (
                          <div key={speaker.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={speaker.avatar || "/placeholder.svg"} alt={speaker.name} />
                                <AvatarFallback>
                                  {speaker.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{speaker.name}</p>
                                <p className="text-xs text-gray-600">{speaker.title}</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-gray-400 hover:text-red-500"
                              onClick={() => removeSpeaker(speaker.id)}
                            >
                              ✕
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">No speakers selected yet</p>
                    )}

                    <div className="mt-4 text-sm text-gray-600">
                      <p>Recommended number of speakers: 2-3 for this event type</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-8 flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/event-design">Back to Overview</Link>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/audience-definition">
                    Next: Define Audience
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
