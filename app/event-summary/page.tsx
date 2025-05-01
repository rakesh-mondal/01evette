"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Check, ChevronDown, Download, Home, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function EventSummary() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="#dashboard" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold">Event Summary: AI-Driven Workflow Optimization</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="bg-white border-b justify-start w-full rounded-none h-12 px-6">
            <TabsTrigger value="summary" className="data-[state=active]:bg-slate-100">
              Summary
            </TabsTrigger>
            <TabsTrigger value="overview" asChild>
              <Link href="/event-design">Overview</Link>
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

          <TabsContent value="summary" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg border p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <Badge className="mb-2 bg-blue-500">Webinar</Badge>
                        <h2 className="text-2xl font-bold">AI-Driven Workflow Optimization: Beyond the Hype</h2>
                        <p className="text-gray-600 mt-1">
                          A practical webinar showcasing real-world examples of how AI transforms enterprise workflows
                          with measurable results.
                        </p>
                      </div>

                      <div className="flex flex-col items-center bg-purple-50 p-4 rounded-lg border border-purple-100">
                        <Calendar className="h-5 w-5 text-purple-600 mb-1" />
                        <p className="font-medium">June 15, 2025</p>
                        <p className="text-sm text-gray-600">10:00 AM EST</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">EVENT TYPE</h3>
                        <p>60-minute Webinar with Q&A</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">TARGET AUDIENCE</h3>
                        <p>IT Directors, Operations Leaders, Enterprise Decision Makers</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">REGISTRATION GOAL</h3>
                        <p>200 registrations</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline" className="bg-purple-50">
                        AI
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50">
                        Workflow
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50">
                        Enterprise
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50">
                        Automation
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-3">Speakers</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="/placeholder.svg?key=3of5d" alt="Dr. Alex Martinez" />
                              <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Dr. Alex Martinez</p>
                              <p className="text-sm text-gray-600">AI Research Director, TechCorp</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="/placeholder.svg?key=6qixk" alt="Sarah Johnson" />
                              <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Sarah Johnson</p>
                              <p className="text-sm text-gray-600">VP of Operations, Enterprise Solutions Inc</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="/placeholder.svg?key=kvp7o" alt="Michael Chang" />
                              <AvatarFallback>MC</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Michael Chang</p>
                              <p className="text-sm text-gray-600">Head of AI Implementation, Future Systems</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Agenda</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between">
                              <p className="font-medium">Introduction to AI-Driven Workflow Optimization</p>
                              <span className="text-sm text-gray-500">10 min</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Setting the stage for the webinar and introducing key concepts
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between">
                              <p className="font-medium">Real-World Implementation Examples</p>
                              <span className="text-sm text-gray-500">20 min</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Case studies of successful AI workflow implementations across industries
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between">
                              <p className="font-medium">Measuring ROI and Business Impact</p>
                              <span className="text-sm text-gray-500">15 min</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              How to track and quantify the benefits of workflow optimization
                            </p>
                          </div>

                          <div>
                            <div className="flex justify-between">
                              <p className="font-medium">Q&A Session</p>
                              <span className="text-sm text-gray-500">15 min</span>
                            </div>
                            <p className="text-sm text-gray-600">Interactive discussion with attendees</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-4">Marketing Assets</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm flex items-center">
                            <svg
                              className="h-4 w-4 mr-2 text-purple-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            Email Invitation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="text-xs text-gray-600 mb-2">
                            Subject: [Webinar] AI-Driven Workflow Optimization: Beyond the Hype
                          </div>
                          <div className="flex justify-between">
                            <Button variant="outline" size="sm" asChild>
                              <Link href="#email-preview">Preview</Link>
                            </Button>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm flex items-center">
                            <svg className="h-4 w-4 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                            </svg>
                            Social Media Posts
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="text-xs text-gray-600 mb-2">3 posts for LinkedIn, Twitter, and Facebook</div>
                          <div className="flex justify-between">
                            <Button variant="outline" size="sm" asChild>
                              <Link href="#social-preview">Preview</Link>
                            </Button>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm flex items-center">
                            <svg
                              className="h-4 w-4 mr-2 text-purple-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                            Registration Page
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="text-xs text-gray-600 mb-2">Landing page with registration form</div>
                          <div className="flex justify-between">
                            <Button variant="outline" size="sm" asChild>
                              <Link href="#registration-preview">Preview</Link>
                            </Button>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Status Sidebar */}
                <div className="lg:w-80">
                  <Card className="sticky top-6">
                    <CardHeader>
                      <CardTitle className="text-sm">Event Status</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                          <div className="flex items-center gap-2">
                            <div className="bg-green-100 p-1 rounded-full">
                              <Check className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="font-medium text-green-800">Ready for Execution</span>
                          </div>
                          <p className="text-green-700 text-xs mt-1 ml-7">
                            All required information has been completed
                          </p>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Completion Status</h3>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Event Overview</span>
                                <span className="text-green-600">Complete</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-green-600 h-1 rounded-full w-full"></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Speakers</span>
                                <span className="text-green-600">Complete</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-green-600 h-1 rounded-full w-full"></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Audience</span>
                                <span className="text-green-600">Complete</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-green-600 h-1 rounded-full w-full"></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Content</span>
                                <span className="text-green-600">Complete</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-green-600 h-1 rounded-full w-full"></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Marketing</span>
                                <span className="text-green-600">Complete</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className="bg-green-600 h-1 rounded-full w-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-2">Next Steps</h3>
                          <div className="space-y-2">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700">Schedule Event</Button>
                            <Button variant="outline" className="w-full">
                              Export to Marketing Platform
                            </Button>
                            <Button variant="outline" className="w-full">
                              Share with Team
                            </Button>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">Export Options</h3>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center text-xs p-1 hover:bg-gray-100 rounded cursor-pointer">
                              <svg
                                className="h-4 w-4 mr-2 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              PDF Summary
                            </div>
                            <div className="flex items-center text-xs p-1 hover:bg-gray-100 rounded cursor-pointer">
                              <svg
                                className="h-4 w-4 mr-2 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Excel Data
                            </div>
                            <div className="flex items-center text-xs p-1 hover:bg-gray-100 rounded cursor-pointer">
                              <svg
                                className="h-4 w-4 mr-2 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              Marketing Assets
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
