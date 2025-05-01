"use client"

import Link from "next/link"
import { useState } from "react"
import { Calendar, Filter, LayoutGrid, List, Mail, Plus, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventSidebar } from "@/components/event-sidebar"

export default function MarketingKits() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Sample marketing kit data
  const marketingKits = [
    {
      id: 1,
      eventName: "AI-Driven Workflow Optimization",
      date: "June 15, 2025",
      type: "Webinar",
      assets: ["Email", "Social", "Registration"],
      status: "Complete",
    },
    {
      id: 2,
      eventName: "Future of Cloud Security",
      date: "July 8, 2025",
      type: "Webinar",
      assets: ["Email", "Social"],
      status: "In Progress",
    },
    {
      id: 3,
      eventName: "DevOps Best Practices",
      date: "August 22, 2025",
      type: "Meetup",
      assets: ["Email"],
      status: "In Progress",
    },
    {
      id: 4,
      eventName: "Data Analytics Summit",
      date: "September 5, 2025",
      type: "Webinar",
      assets: ["Email", "Social", "Registration", "Calendar"],
      status: "Complete",
    },
    {
      id: 5,
      eventName: "Product Management Workshop",
      date: "October 12, 2025",
      type: "Meetup",
      assets: ["Email", "Social"],
      status: "Not Started",
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
            <h1 className="text-xl font-bold">Marketing Kits</h1>

            <div className="flex items-center gap-2">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                New Marketing Kit
              </Button>
            </div>
          </div>
        </header>

        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search marketing kits..." className="pl-8 bg-white" />
              </div>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Advanced filters</span>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white border rounded-md p-1 flex">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-8 px-2"
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                  <span className="sr-only">Grid view</span>
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-8 px-2"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                  <span className="sr-only">List view</span>
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white border w-full md:w-auto rounded-md p-1 h-auto">
              <TabsTrigger value="all" className="text-xs md:text-sm">
                All Kits
              </TabsTrigger>
              <TabsTrigger value="complete" className="text-xs md:text-sm">
                Complete
              </TabsTrigger>
              <TabsTrigger value="in-progress" className="text-xs md:text-sm">
                In Progress
              </TabsTrigger>
              <TabsTrigger value="not-started" className="text-xs md:text-sm">
                Not Started
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {marketingKits.map((kit) => (
                    <Card key={kit.id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{kit.eventName}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{kit.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">{kit.type}</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              kit.status === "Complete"
                                ? "bg-green-100 text-green-800"
                                : kit.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {kit.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {kit.assets.map((asset) => (
                            <span key={asset} className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                              {asset}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/marketing-kit?id=${kit.id}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            View Marketing Kit
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 p-4 border-b font-medium text-sm text-gray-500">
                    <div className="col-span-4">Event Name</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  {marketingKits.map((kit) => (
                    <div key={kit.id} className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50">
                      <div className="col-span-4 font-medium">{kit.eventName}</div>
                      <div className="col-span-2 text-sm text-gray-600">{kit.date}</div>
                      <div className="col-span-2">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">{kit.type}</span>
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${
                            kit.status === "Complete"
                              ? "bg-green-100 text-green-800"
                              : kit.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {kit.status}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/marketing-kit?id=${kit.id}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="complete" className="mt-6">
              {/* Similar content for complete kits */}
            </TabsContent>

            <TabsContent value="in-progress" className="mt-6">
              {/* Similar content for in-progress kits */}
            </TabsContent>

            <TabsContent value="not-started" className="mt-6">
              {/* Similar content for not-started kits */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
