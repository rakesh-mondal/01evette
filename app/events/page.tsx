"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Filter,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  Users,
  Users2,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsList() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "AI-Driven Workflow Optimization: Beyond the Hype",
      type: "Webinar",
      date: "June 15, 2025",
      time: "10:00 AM EST",
      status: "Scheduled",
      registrations: 156,
      speakers: [
        {
          name: "Dr. Alex Martinez",
          title: "AI Research Director",
          avatar: "/placeholder.svg?key=3of5d",
        },
        {
          name: "Sarah Johnson",
          title: "VP of Operations",
          avatar: "/placeholder.svg?key=6qixk",
        },
      ],
    },
    {
      id: 2,
      title: "Marketing Analytics Deep Dive",
      type: "Webinar",
      date: "June 2, 2025",
      time: "2:00 PM EST",
      status: "Planning",
      registrations: 0,
      speakers: [
        {
          name: "Michael Chang",
          title: "Head of AI Implementation",
          avatar: "/placeholder.svg?key=kvp7o",
        },
      ],
    },
    {
      id: 3,
      title: "Local Tech Community Networking",
      type: "Meetup",
      date: "June 18, 2025",
      time: "6:00 PM EST",
      status: "Draft",
      registrations: 0,
      speakers: [],
    },
    {
      id: 4,
      title: "AI-Driven Collaboration: The Future of Teamwork",
      type: "Webinar",
      date: "May 15, 2025",
      time: "11:00 AM EST",
      status: "Scheduled",
      registrations: 203,
      speakers: [
        {
          name: "Priya Sharma",
          title: "Enterprise Workflow Consultant",
          avatar: "/placeholder.svg?key=o5zcu",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r hidden md:block">
        <div className="flex items-center p-4 border-b">
          <Calendar className="h-6 w-6 text-purple-600" />
          <h1 className="text-xl font-bold ml-2">EventDesign</h1>
        </div>

        <nav className="p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link href="/events" className="flex items-center p-2 text-purple-600 bg-purple-50 rounded-md">
            <Calendar className="h-5 w-5 mr-3" />
            Events
          </Link>
          <Link href="/speakers-list" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Users2 className="h-5 w-5 mr-3" />
            Speakers
          </Link>
          <Link href="/audiences-list" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Users className="h-5 w-5 mr-3" />
            Audiences
          </Link>
          <Link href="/marketing-kit" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Settings className="h-5 w-5 mr-3" />
            Marketing Kit
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold">Events</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700" size="sm" asChild>
                <Link href="/context-input">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
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
                <Input placeholder="Search events..." className="pl-8 w-full" />
              </div>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>Status</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>Event Type</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="webinar">Webinar</SelectItem>
                  <SelectItem value="meetup">Meetup</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>Sort By</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-asc">Date (Soonest First)</SelectItem>
                  <SelectItem value="date-desc">Date (Latest First)</SelectItem>
                  <SelectItem value="title">Title (A-Z)</SelectItem>
                  <SelectItem value="registrations">Registrations (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          <Tabs defaultValue="upcoming">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-6">
              <div className="grid grid-cols-1 gap-4">
                {events.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant={event.type === "Webinar" ? "default" : "outline"}
                              className={event.type === "Webinar" ? "bg-blue-500" : ""}
                            >
                              {event.type}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`${
                                event.status === "Scheduled"
                                  ? "border-green-500 text-green-600"
                                  : event.status === "Planning"
                                    ? "border-amber-500 text-amber-600"
                                    : "border-gray-500 text-gray-600"
                              }`}
                            >
                              {event.status}
                            </Badge>
                          </div>

                          <Link href="/event-design" className="block">
                            <h3 className="text-lg font-semibold hover:text-purple-700">{event.title}</h3>
                          </Link>

                          <div className="flex items-center text-sm text-gray-500 mt-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{event.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{event.time}</span>
                          </div>

                          {event.speakers.length > 0 && (
                            <div className="mt-4">
                              <p className="text-sm text-gray-600 mb-2">Speakers:</p>
                              <div className="flex flex-wrap gap-2">
                                {event.speakers.map((speaker, i) => (
                                  <div key={i} className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                      <AvatarImage src={speaker.avatar || "/placeholder.svg"} alt={speaker.name} />
                                      <AvatarFallback>
                                        {speaker.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm">{speaker.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="md:w-64 bg-gray-50 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l">
                          {event.status !== "Draft" && (
                            <div>
                              <p className="text-sm text-gray-600">Registrations</p>
                              <p className="text-2xl font-bold">{event.registrations}</p>
                            </div>
                          )}

                          <div className="flex flex-col gap-2 mt-4">
                            <Button variant="outline" size="sm" asChild>
                              <Link href="/event-design">Edit Event</Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link href="/event-summary">View Summary</Link>
                            </Button>
                            {event.status === "Scheduled" && (
                              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                Manage Registrations
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-6">
              <div className="text-center py-12 text-gray-500">No past events to display</div>
            </TabsContent>

            <TabsContent value="drafts" className="mt-6">
              <div className="text-center py-12 text-gray-500">
                <p>You have 1 draft event</p>
                <Button className="mt-4" asChild>
                  <Link href="/event-design">Continue Editing</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
