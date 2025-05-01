"use client"

import Link from "next/link"
import { ArrowLeft, ChevronDown, Filter, Home, Plus, Search, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventSidebar } from "@/components/event-sidebar"

export default function AudiencesList() {
  // Sample audience segments data
  const audienceSegments = [
    {
      id: 1,
      name: "Enterprise IT Decision Makers",
      description: "Senior IT leaders with purchasing authority in enterprise organizations",
      size: "12,500+",
      industries: ["Technology", "Finance", "Healthcare", "Manufacturing"],
      roles: ["CIO", "CTO", "IT Director", "VP of IT"],
      lastUsed: "2 days ago",
      events: 8,
    },
    {
      id: 2,
      name: "Operations Leaders",
      description: "Professionals focused on operational efficiency and process improvement",
      size: "8,200+",
      industries: ["Manufacturing", "Logistics", "Retail", "Services"],
      roles: ["COO", "Operations Director", "Process Manager"],
      lastUsed: "1 week ago",
      events: 5,
    },
    {
      id: 3,
      name: "Digital Transformation Champions",
      description: "Change agents driving digital initiatives within their organizations",
      size: "6,800+",
      industries: ["All Industries"],
      roles: ["Digital Transformation Lead", "Innovation Manager", "Change Manager"],
      lastUsed: "2 weeks ago",
      events: 12,
    },
    {
      id: 4,
      name: "AI Implementation Teams",
      description: "Technical teams responsible for AI deployment and management",
      size: "4,500+",
      industries: ["Technology", "Finance", "Healthcare", "Retail"],
      roles: ["AI Engineer", "Data Scientist", "ML Ops", "AI Product Manager"],
      lastUsed: "1 month ago",
      events: 6,
    },
    {
      id: 5,
      name: "Enterprise Architects",
      description: "Professionals designing and implementing enterprise-wide systems",
      size: "3,200+",
      industries: ["Technology", "Finance", "Government", "Telecommunications"],
      roles: ["Enterprise Architect", "Solutions Architect", "Technical Architect"],
      lastUsed: "3 months ago",
      events: 4,
    },
    {
      id: 6,
      name: "Workflow Optimization Specialists",
      description: "Experts in improving business processes and workflows",
      size: "5,100+",
      industries: ["Business Services", "Manufacturing", "Healthcare", "Finance"],
      roles: ["Business Process Manager", "Workflow Specialist", "Process Engineer"],
      lastUsed: "2 months ago",
      events: 7,
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
              <h1 className="text-xl font-bold">Audience Segments</h1>
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
                Create Segment
              </Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-white border-b justify-start w-full rounded-none h-12 px-6">
            <TabsTrigger value="all" className="data-[state=active]:bg-slate-100">
              All Segments
            </TabsTrigger>
            <TabsTrigger value="recent">Recently Used</TabsTrigger>
            <TabsTrigger value="custom">Custom Segments</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              {/* Search and Filters */}
              <div className="bg-white rounded-lg border p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search audience segments by name, industry, or role..."
                      className="pl-8 w-full"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <div className="flex items-center">
                          <Filter className="h-4 w-4 mr-2" />
                          <span>Industry</span>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
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
                        <SelectItem value="size">Size (Large to Small)</SelectItem>
                        <SelectItem value="recent">Recently Used</SelectItem>
                        <SelectItem value="events">Events (Most to Least)</SelectItem>
                        <SelectItem value="name">Name (A to Z)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Audience Segments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {audienceSegments.map((segment) => (
                  <Card key={segment.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{segment.name}</CardTitle>
                        <div className="bg-purple-100 p-1 rounded-md">
                          <Users className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{segment.description}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                          {segment.size} contacts
                        </Badge>
                        <Badge variant="outline">{segment.events} events</Badge>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs font-medium text-gray-500 mb-1">INDUSTRIES</p>
                        <div className="flex flex-wrap gap-1">
                          {segment.industries.map((industry, i) => (
                            <Badge key={i} variant="outline" className="bg-gray-50">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">KEY ROLES</p>
                        <div className="flex flex-wrap gap-1">
                          {segment.roles.map((role, i) => (
                            <Badge key={i} variant="outline" className="bg-gray-50">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-2 flex justify-between items-center">
                      <div className="text-xs text-gray-500">Last used: {segment.lastUsed}</div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Use Segment
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="bg-white rounded-lg border p-6 text-center">
                <h3 className="text-lg font-medium mb-2">No Recently Used Segments</h3>
                <p className="text-gray-500 mb-4">You haven't used any audience segments recently.</p>
                <Button variant="outline" asChild>
                  <Link href="#browse-segments">Browse Segments</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="custom">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="bg-white rounded-lg border p-6 text-center">
                <h3 className="text-lg font-medium mb-2">No Custom Segments</h3>
                <p className="text-gray-500 mb-4">You haven't created any custom audience segments yet.</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Segment
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
