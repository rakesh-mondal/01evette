"use client"

import Link from "next/link"
import {
  BarChart3,
  Calendar,
  ChevronRight,
  Clock,
  Laptop,
  Layers,
  LayoutDashboard,
  Plus,
  Search,
  Users,
  Users2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  // Sample data
  const stats = [
    { title: "Upcoming Events", value: 12, icon: Calendar },
    { title: "Active Speakers", value: 48, icon: Users },
    { title: "Draft Events", value: 7, icon: Layers },
    { title: "Event Ideas", value: 23, icon: Laptop },
  ]

  const eventIdeas = [
    {
      id: 1,
      type: "Webinar",
      title: "Future of AI in Customer Experience",
      description: "Interactive session exploring AI-driven personalization in customer journeys",
      targetDate: "Q2 2025",
      audience: "Product Managers, CX Leaders",
    },
    {
      id: 2,
      type: "Meetup",
      title: "Developer Productivity Workshop",
      description: "Hands-on session focused on modern development workflows and tools",
      targetDate: "Q3 2025",
      audience: "Engineering Teams, Tech Leads",
    },
    {
      id: 3,
      type: "Webinar",
      title: "Sustainable Business Practices",
      description: "Panel discussion on implementing eco-friendly initiatives in enterprise operations",
      targetDate: "Q2 2025",
      audience: "Operations, Sustainability Officers",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "AI-Driven Collaboration: The Future of Teamwork",
      type: "Webinar",
      date: "May 15, 2025",
      status: "Scheduled",
    },
    {
      id: 2,
      title: "Marketing Analytics Deep Dive",
      type: "Webinar",
      date: "June 2, 2025",
      status: "Planning",
    },
    {
      id: 3,
      title: "Local Tech Community Networking",
      type: "Meetup",
      date: "June 18, 2025",
      status: "Draft",
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
          <Link href="#dashboard" className="flex items-center p-2 text-purple-600 bg-purple-50 rounded-md">
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link href="/events" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
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
            <BarChart3 className="h-5 w-5 mr-3" />
            Marketing Kit
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="relative w-64">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search..." className="pl-8 w-full" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?key=z0mp7" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/context-input">
                <Plus className="h-4 w-4 mr-2" />
                Create New Event
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Event Ideas */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Event Ideas</h2>
              <Link href="/ideation" className="text-purple-600 hover:text-purple-800 text-sm flex items-center">
                View all ideas
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <span className="text-sm text-gray-500">{idea.targetDate}</span>
                    </div>
                    <CardTitle className="text-lg mt-2">{idea.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{idea.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Target Audience:</span> {idea.audience}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/event-preview">Preview</Link>
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
                      <Link href="/event-design">Design Event</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Link href="/events" className="text-purple-600 hover:text-purple-800 text-sm flex items-center">
                View all events
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {upcomingEvents.map((event) => (
                    <Link href="/event-design" key={event.id} className="block p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Badge variant="outline" className="mr-2">
                              {event.type}
                            </Badge>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{event.date}</span>
                          </div>
                        </div>
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
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
