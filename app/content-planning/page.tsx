"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Grip, Home, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { EventSidebar } from "@/components/event-sidebar"

export default function ContentPlanning() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      title: "Introduction to AI-Driven Workflow Optimization",
      description: "Setting the stage for the webinar and introducing key concepts",
      duration: "10",
      speaker: "1",
    },
    {
      id: 2,
      title: "Real-World Implementation Examples",
      description: "Case studies of successful AI workflow implementations across industries",
      duration: "20",
      speaker: "2",
    },
    {
      id: 3,
      title: "Measuring ROI and Business Impact",
      description: "How to track and quantify the benefits of workflow optimization",
      duration: "15",
      speaker: "3",
    },
  ])

  const addSession = () => {
    const newId = Math.max(0, ...sessions.map((s) => s.id)) + 1
    setSessions([...sessions, { id: newId, title: "", description: "", duration: "15", speaker: "" }])
  }

  const removeSession = (id: number) => {
    setSessions(sessions.filter((s) => s.id !== id))
  }

  // Sample speakers data - would come from previous step
  const speakers = [
    { id: "1", name: "Dr. Alex Martinez", title: "AI Research Director" },
    { id: "2", name: "Sarah Johnson", title: "VP of Operations" },
    { id: "3", name: "Michael Chang", title: "Head of AI Implementation" },
    { id: "4", name: "Priya Sharma", title: "Enterprise Workflow Consultant" },
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
              <h1 className="text-xl font-bold">Content Planning: AI-Driven Workflow Optimization</h1>
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

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="bg-white border-b justify-start w-full rounded-none h-12 px-6">
            <TabsTrigger value="overview" asChild>
              <Link href="/event-design">Overview</Link>
            </TabsTrigger>
            <TabsTrigger value="speakers" asChild>
              <Link href="/speakers-selection">Speakers</Link>
            </TabsTrigger>
            <TabsTrigger value="audience" asChild>
              <Link href="/audience-definition">Audience</Link>
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-slate-100">
              Content
            </TabsTrigger>
            <TabsTrigger value="marketing" asChild>
              <Link href="/marketing-kit?id=new">Marketing</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg border p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-4">Session/Agenda Builder</h2>

                    <div className="mb-6">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 mb-6">
                        <div className="flex items-start gap-2">
                          <div className="bg-purple-100 p-1 rounded-full text-purple-600">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">Content Planning Tips</h3>
                            <p className="text-sm text-purple-800 mt-1">
                              For a 60-minute webinar, plan for 45 minutes of content plus 15 minutes of Q&A. Aim for
                              3-4 focused sessions with clear transitions between speakers.
                            </p>
                          </div>
                        </div>
                      </div>

                      {sessions.map((session, index) => (
                        <div
                          key={session.id}
                          className="mb-6 p-4 bg-white rounded-lg border last:mb-0 hover:border-gray-300 transition-colors"
                        >
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                              <Grip className="h-5 w-5 text-gray-400 mr-2 cursor-move" />
                              <h3 className="font-medium">Session {index + 1}</h3>
                            </div>

                            {sessions.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeSession(session.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            )}
                          </div>

                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor={`session-title-${session.id}`}>Session Title</Label>
                              <Input
                                id={`session-title-${session.id}`}
                                defaultValue={session.title}
                                placeholder="Enter a clear, descriptive title"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor={`session-description-${session.id}`}>Session Description</Label>
                              <Textarea
                                id={`session-description-${session.id}`}
                                defaultValue={session.description}
                                placeholder="Brief overview of what this session will cover"
                                className="h-20"
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`session-duration-${session.id}`}>Duration</Label>
                                <Select defaultValue={session.duration}>
                                  <SelectTrigger id={`session-duration-${session.id}`}>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="5">5 minutes</SelectItem>
                                    <SelectItem value="10">10 minutes</SelectItem>
                                    <SelectItem value="15">15 minutes</SelectItem>
                                    <SelectItem value="20">20 minutes</SelectItem>
                                    <SelectItem value="30">30 minutes</SelectItem>
                                    <SelectItem value="45">45 minutes</SelectItem>
                                    <SelectItem value="60">60 minutes</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`session-speaker-${session.id}`}>Assigned Speaker</Label>
                                <Select defaultValue={session.speaker}>
                                  <SelectTrigger id={`session-speaker-${session.id}`}>
                                    <SelectValue placeholder="Select a speaker" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {speakers.map((speaker) => (
                                      <SelectItem key={speaker.id} value={speaker.id}>
                                        {speaker.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full mt-4" onClick={addSession}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Session
                      </Button>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-3">Session Timeline</h3>
                      <div className="relative">
                        <div className="h-10 bg-gray-100 rounded-md overflow-hidden">
                          {sessions.map((session, index) => {
                            // Calculate session width based on duration
                            const totalDuration = sessions.reduce((acc, s) => acc + Number.parseInt(s.duration), 0)
                            const width = (Number.parseInt(session.duration) / totalDuration) * 100
                            const backgroundColor = index % 2 === 0 ? "bg-purple-400" : "bg-purple-600"

                            return (
                              <div
                                key={session.id}
                                className={`absolute top-0 h-10 ${backgroundColor} opacity-80`}
                                style={{
                                  left: `${sessions.slice(0, index).reduce((acc, s) => acc + (Number.parseInt(s.duration) / totalDuration) * 100, 0)}%`,
                                  width: `${width}%`,
                                }}
                              >
                                <div className="flex items-center justify-center h-full text-white text-xs font-medium">
                                  {session.title.substring(0, 15)}
                                  {session.title.length > 15 ? "..." : ""}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>0:00</span>
                          <span>0:30</span>
                          <span>1:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations Sidebar */}
                <div className="lg:w-80">
                  <Card className="sticky top-6">
                    <CardHeader>
                      <CardTitle className="text-sm">Content Suggestions</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">RECOMMENDED FLOW</h3>
                          <ol className="list-decimal list-inside space-y-1">
                            <li>Introduction & context setting (5-10min)</li>
                            <li>Problem statement & challenges (10min)</li>
                            <li>Solution demonstration (15-20min)</li>
                            <li>Case studies & results (10-15min)</li>
                            <li>Q&A session (15min)</li>
                          </ol>
                        </div>

                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">ENGAGEMENT ELEMENTS</h3>
                          <div className="space-y-1">
                            <div className="flex gap-2 items-start hover:bg-purple-50 p-1 rounded cursor-pointer">
                              <div className="w-4 h-4 rounded bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5 flex-shrink-0 text-xs">
                                +
                              </div>
                              <div>
                                <p className="font-medium text-xs">Live Polling</p>
                                <p className="text-xs text-gray-600">
                                  Ask audience about their current workflow challenges
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2 items-start hover:bg-purple-50 p-1 rounded cursor-pointer">
                              <div className="w-4 h-4 rounded bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5 flex-shrink-0 text-xs">
                                +
                              </div>
                              <div>
                                <p className="font-medium text-xs">Interactive Demo</p>
                                <p className="text-xs text-gray-600">Show before/after workflow comparison</p>
                              </div>
                            </div>
                            <div className="flex gap-2 items-start hover:bg-purple-50 p-1 rounded cursor-pointer">
                              <div className="w-4 h-4 rounded bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5 flex-shrink-0 text-xs">
                                +
                              </div>
                              <div>
                                <p className="font-medium text-xs">Q&A Preparation</p>
                                <p className="text-xs text-gray-600">Add pre-seeded questions to kick off discussion</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">SPEAKER ASSIGNMENTS</h3>
                          {speakers.slice(0, 3).map((speaker) => (
                            <div key={speaker.id} className="flex items-center gap-2 mb-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">
                                  {speaker.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-xs font-medium">{speaker.name}</p>
                                <p className="text-xs text-gray-500">{speaker.title}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-8 flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/audience-definition">Back to Audience</Link>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/marketing-kit?id=new">
                    Next: Create Marketing
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
