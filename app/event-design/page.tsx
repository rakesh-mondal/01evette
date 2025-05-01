"use client"

import Link from "next/link"
import { ArrowLeft, CalendarIcon, ChevronRight, Home, Tag } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { EventSidebar } from "@/components/event-sidebar"

export default function EventDesign() {
  const [date, setDate] = useState<Date>()

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
              <h1 className="text-xl font-bold">Event Designer: AI-Driven Workflow Optimization</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                Save
              </Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-white border-b justify-start w-full rounded-none h-12 px-6">
            <TabsTrigger value="overview" className="data-[state=active]:bg-slate-100">
              Overview
            </TabsTrigger>
            <TabsTrigger value="speakers" asChild>
              <Link href="/speakers-selection">Speakers</Link>
            </TabsTrigger>
            <TabsTrigger value="audience" asChild>
              <Link href="/audience-definition">Audience</Link>
            </TabsTrigger>
            <TabsTrigger value="content" asChild>
              <Link href="/content-planning">Content</Link>
            </TabsTrigger>
            <TabsTrigger value="marketing" asChild>
              <Link href="/marketing-kit?id=new">Marketing</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Form */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg border p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-4">Event Details</h2>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="event-title">Event Title</Label>
                        <Input id="event-title" defaultValue="AI-Driven Workflow Optimization: Beyond the Hype" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="event-description">Event Description</Label>
                        <Textarea
                          id="event-description"
                          className="h-32"
                          defaultValue="A practical webinar showcasing real-world examples of how AI transforms enterprise workflows with measurable results. Attendees will learn implementation strategies, common pitfalls to avoid, and how to measure success."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Event Type</Label>
                        <RadioGroup defaultValue="webinar" className="flex gap-6">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="webinar" id="event-type-webinar" />
                            <Label htmlFor="event-type-webinar">Webinar</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="meetup" id="event-type-meetup" />
                            <Label htmlFor="event-type-meetup">Meetup</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Date & Time</Label>
                          <div className="flex space-x-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : <span>Select date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="event-time">Time</Label>
                          <Select>
                            <SelectTrigger id="event-time">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="9am">9:00 AM</SelectItem>
                              <SelectItem value="10am">10:00 AM</SelectItem>
                              <SelectItem value="11am">11:00 AM</SelectItem>
                              <SelectItem value="12pm">12:00 PM</SelectItem>
                              <SelectItem value="1pm">1:00 PM</SelectItem>
                              <SelectItem value="2pm">2:00 PM</SelectItem>
                              <SelectItem value="3pm">3:00 PM</SelectItem>
                              <SelectItem value="4pm">4:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="event-format">Event Format</Label>
                          <Select defaultValue="presentation">
                            <SelectTrigger id="event-format">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="presentation">Presentation</SelectItem>
                              <SelectItem value="panel">Panel Discussion</SelectItem>
                              <SelectItem value="workshop">Workshop</SelectItem>
                              <SelectItem value="interview">Interview</SelectItem>
                              <SelectItem value="demo">Product Demo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="event-duration">Duration</Label>
                          <Select defaultValue="60">
                            <SelectTrigger id="event-duration">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="45">45 minutes</SelectItem>
                              <SelectItem value="60">60 minutes</SelectItem>
                              <SelectItem value="90">90 minutes</SelectItem>
                              <SelectItem value="120">2 hours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="event-tags">Tags</Label>
                        <div className="flex items-center gap-2">
                          <Tag className="h-4 w-4 text-gray-500" />
                          <Input
                            id="event-tags"
                            defaultValue="AI, Workflow, Enterprise, Automation"
                            placeholder="Enter tags separated by commas"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations Sidebar */}
                <div className="lg:w-80">
                  <Card className="sticky top-6">
                    <CardHeader>
                      <CardTitle className="text-sm">AI Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">SUGGESTED FORMAT</h3>
                          <p>Based on your content and audience, a panel discussion with Q&A would be most engaging.</p>
                        </div>

                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">OPTIMAL DURATION</h3>
                          <p>60-minute session: 45min presentation + 15min Q&A for maximum engagement.</p>
                        </div>

                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">TIMING SUGGESTION</h3>
                          <p>
                            Tuesday or Wednesday mornings at 10am typically see highest attendance for this audience.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">TITLE OPTIMIZATION</h3>
                          <div className="space-y-1">
                            <p className="cursor-pointer hover:bg-purple-50 p-1 rounded">
                              "AI Workflow Optimization: Real Results from the Field"
                            </p>
                            <p className="cursor-pointer hover:bg-purple-50 p-1 rounded">
                              "Beyond the Hype: AI's Measurable Impact on Workflows"
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-8 flex justify-between">
                <Button variant="outline">Save Draft</Button>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/speakers-selection">
                    Next: Select Speakers
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
