"use client"

import Link from "next/link"
import { ArrowLeft, ChevronDown, Filter, Home, Plus, Search, Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventSidebar } from "@/components/event-sidebar"

export default function SpeakersList() {
  // Sample speakers data
  const speakers = [
    {
      id: 1,
      name: "Dr. Alex Martinez",
      title: "AI Research Director",
      company: "TechCorp",
      expertise: ["AI & Machine Learning", "Neural Networks", "Enterprise AI"],
      followers: "12.4K",
      rating: 4.9,
      recentActivity: "Keynote at AI Summit 2025",
      avatar: "/placeholder.svg?key=3of5d",
      events: 8,
    },
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
      events: 5,
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
      events: 12,
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
      events: 6,
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
      events: 9,
    },
    {
      id: 6,
      name: "Emily Rodriguez",
      title: "Digital Transformation Lead",
      company: "Innovate Partners",
      expertise: ["Change Management", "Process Optimization", "Enterprise Strategy"],
      followers: "7.1K",
      rating: 4.8,
      recentActivity: "Published case study on enterprise transformation",
      avatar: "/placeholder.svg?key=p9dkq",
      events: 4,
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
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold">Speakers Directory</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Speaker
              </Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-white border-b justify-start w-full rounded-none h-12 px-6">
            <TabsTrigger value="all" className="data-[state=active]:bg-slate-100">
              All Speakers
            </TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="recent">Recently Used</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              {/* Search and Filters */}
              <div className="bg-white rounded-lg border p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search speakers by name, expertise, or company..." className="pl-8 w-full" />
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

                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <div className="flex items-center">
                          <ChevronDown className="h-4 w-4 mr-2" />
                          <span>Sort By</span>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Rating (High to Low)</SelectItem>
                        <SelectItem value="followers">Followers (High to Low)</SelectItem>
                        <SelectItem value="events">Events (Most to Least)</SelectItem>
                        <SelectItem value="name">Name (A to Z)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Speakers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
                            <span className="mx-2">•</span>
                            <span>{speaker.events} past events</span>
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
                        <Link href={`/speaker-profile/${speaker.id}`}>View Profile</Link>
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Add to Event
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="bg-white rounded-lg border p-6 text-center">
                <h3 className="text-lg font-medium mb-2">No Favorite Speakers</h3>
                <p className="text-gray-500 mb-4">You haven't added any speakers to your favorites yet.</p>
                <Button variant="outline" asChild>
                  <Link href="#browse-speakers">Browse Speakers</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="bg-white rounded-lg border p-6 text-center">
                <h3 className="text-lg font-medium mb-2">No Recent Speakers</h3>
                <p className="text-gray-500 mb-4">You haven't used any speakers in your events recently.</p>
                <Button variant="outline" asChild>
                  <Link href="#browse-speakers">Browse Speakers</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
