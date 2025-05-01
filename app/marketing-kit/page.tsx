"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, Copy, Download, Home, ImageIcon, Mail, Plus } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { EventSidebar } from "@/components/event-sidebar"

export default function MarketingKit() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const eventId = searchParams.get("id")

  const [showRegistrationLink, setShowRegistrationLink] = useState(true)
  const [showSpeakerInfo, setShowSpeakerInfo] = useState(true)
  const [showWebinarDetails, setShowWebinarDetails] = useState(true)
  const [emailSubject, setEmailSubject] = useState("[Webinar] AI-Driven Workflow Optimization: Beyond the Hype")
  const [emailPreheader, setEmailPreheader] = useState(
    "Join us to learn how AI is transforming enterprise workflows with measurable results",
  )
  const [emailBody, setEmailBody] = useState(`Dear [Recipient],

We're excited to invite you to our upcoming webinar:

**AI-Driven Workflow Optimization: Beyond the Hype**

In this practical session, we'll showcase real-world examples of how AI transforms enterprise workflows with measurable results. You'll learn implementation strategies, common pitfalls to avoid, and how to measure success.

**Date:** June 15th, 2025
**Time:** 10:00 AM - 11:00 AM EST
**Format:** Live Webinar with Q&A

**Featured Speakers:**
- Dr. Alex Martinez, AI Research Director at TechCorp
- Sarah Johnson, VP of Operations at Enterprise Solutions Inc
- Michael Chang, Head of AI Implementation at Future Systems

Register today to secure your spot!

Best regards,
The Acme Inc. Team`)

  // Redirect to marketing-kits if no ID is provided, except when coming from event design
  useEffect(() => {
    if (!eventId && typeof window !== 'undefined') {
      router.replace("/marketing-kits")
    }
  }, [eventId, router])

  // Show loading state while checking ID
  if (typeof window === 'undefined') {
    return (
      <div className="flex min-h-screen bg-slate-50">
        <EventSidebar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    )
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
              <Link href="/marketing-kits" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold">
                Marketing Kit: AI-Driven Workflow Optimization {eventId && eventId !== "new" ? `(ID: ${eventId})` : ""}
              </h1>
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

        <Tabs defaultValue="marketing" className="w-full">
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
            <TabsTrigger value="content" asChild>
              <Link href="/content-planning">Content</Link>
            </TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:bg-slate-100">
              Marketing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="marketing" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Template Selection Sidebar */}
                <div className="lg:w-72">
                  <div className="bg-white rounded-lg border mb-6">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold">Marketing Assets</h3>
                      <p className="text-xs text-gray-600 mt-1">Select template to customize</p>
                    </div>

                    <div className="divide-y">
                      <Link href="#" className="block p-3 bg-purple-50 border-l-2 border-purple-600">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-purple-600 mr-2" />
                          <span className="font-medium text-sm">Email Invitation</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 ml-6">Standard email announcement</p>
                      </Link>

                      <Link href="#" className="block p-3 hover:bg-gray-50">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                          </svg>
                          <span className="font-medium text-sm">Social Media Posts</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 ml-6">LinkedIn, Twitter, Facebook</p>
                      </Link>

                      <Link href="#" className="block p-3 hover:bg-gray-50">
                        <div className="flex items-center">
                          <svg
                            className="h-4 w-4 text-gray-500 mr-2"
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
                          <span className="font-medium text-sm">Registration Page</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 ml-6">Landing page with form</p>
                      </Link>

                      <Link href="#" className="block p-3 hover:bg-gray-50">
                        <div className="flex items-center">
                          <svg
                            className="h-4 w-4 text-gray-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="font-medium text-sm">Calendar Invitation</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 ml-6">iCal/Google Calendar</p>
                      </Link>
                    </div>
                  </div>

                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm">Color Theme</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-4 gap-2">
                        <div className="w-full aspect-square bg-purple-600 rounded-md cursor-pointer ring-2 ring-offset-2 ring-purple-600"></div>
                        <div className="w-full aspect-square bg-blue-600 rounded-md cursor-pointer"></div>
                        <div className="w-full aspect-square bg-green-600 rounded-md cursor-pointer"></div>
                        <div className="w-full aspect-square bg-orange-600 rounded-md cursor-pointer"></div>
                        <div className="w-full aspect-square bg-teal-600 rounded-md cursor-pointer"></div>
                        <div className="w-full aspect-square bg-red-600 rounded-md cursor-pointer"></div>
                        <div className="w-full aspect-square bg-gray-600 rounded-md cursor-pointer"></div>
                        <div className="w-full aspect-square border border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
                          <Plus className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm">AI Content Suggestions</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xs font-medium text-purple-800 mb-1">SUBJECT LINE OPTIONS</h3>
                          <div className="space-y-1">
                            <div className="group flex items-center justify-between p-1 rounded hover:bg-purple-50 cursor-pointer">
                              <p className="text-xs">Join us: AI Workflow Optimization Webinar - June 15</p>
                              <Copy className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                            </div>
                            <div className="group flex items-center justify-between p-1 rounded hover:bg-purple-50 cursor-pointer">
                              <p className="text-xs">Transform Your Enterprise Workflows with AI - Live Webinar</p>
                              <Copy className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xs font-medium text-purple-800 mb-1">CALL-TO-ACTION OPTIONS</h3>
                          <div className="space-y-1">
                            <div className="group flex items-center justify-between p-1 rounded hover:bg-purple-50 cursor-pointer">
                              <p className="text-xs">Reserve Your Spot Now</p>
                              <Copy className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                            </div>
                            <div className="group flex items-center justify-between p-1 rounded hover:bg-purple-50 cursor-pointer">
                              <p className="text-xs">Join the AI Revolution</p>
                              <Copy className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xs font-medium text-purple-800 mb-1">OPENING PARAGRAPH</h3>
                          <div className="group p-1 rounded hover:bg-purple-50 cursor-pointer">
                            <p className="text-xs">
                              Ready to revolutionize your enterprise workflows? Join industry experts as they reveal how
                              AI is transforming business operations with real, measurable results.
                            </p>
                            <div className="flex justify-end mt-1 opacity-0 group-hover:opacity-100">
                              <Copy className="h-3 w-3 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg border p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Email Invitation Template</h2>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="sm">
                              Preview
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Preview email in new window</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email-subject">Subject Line</Label>
                        <Input
                          id="email-subject"
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email-preheader">Preheader Text</Label>
                        <Input
                          id="email-preheader"
                          value={emailPreheader}
                          onChange={(e) => setEmailPreheader(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email-body">Email Body</Label>
                        <Textarea
                          id="email-body"
                          className="h-64 font-sans"
                          value={emailBody}
                          onChange={(e) => setEmailBody(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="show-registration">Registration Link</Label>
                            <Switch
                              id="show-registration"
                              checked={showRegistrationLink}
                              onCheckedChange={setShowRegistrationLink}
                            />
                          </div>
                          {showRegistrationLink && <Input defaultValue="Register Now" size={1} />}
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="show-speakers">Speaker Info</Label>
                            <Switch id="show-speakers" checked={showSpeakerInfo} onCheckedChange={setShowSpeakerInfo} />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="show-details">Webinar Details</Label>
                            <Switch
                              id="show-details"
                              checked={showWebinarDetails}
                              onCheckedChange={setShowWebinarDetails}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button>
                          <ImageIcon className="h-4 w-4 mr-2" />
                          Add Feature Image
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Email Preview */}
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-4">Email Preview</h2>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-100 p-2 border-b text-sm">
                        <div className="mb-1">
                          <span className="font-medium">From:</span> Acme Inc. &lt;events@acmeinc.com&gt;
                        </div>
                        <div className="mb-1">
                          <span className="font-medium">Subject:</span> {emailSubject}
                        </div>
                        <div>
                          <span className="font-medium">To:</span> [Recipient]
                        </div>
                      </div>

                      <div className="p-4">
                        {/* Email Header */}
                        <div className="mb-4">
                          <div className="bg-purple-600 text-white text-center py-6 px-4 rounded-t-md">
                            <h2 className="text-xl font-bold">AI-Driven Workflow Optimization</h2>
                            <p className="mt-1">A practical webinar showcasing real-world examples</p>
                          </div>

                          <div className="bg-purple-100 text-purple-800 text-center py-3 px-4">
                            <p className="font-medium">June 15th, 2025 • 10:00 AM - 11:00 AM EST</p>
                          </div>
                        </div>

                        {/* Email Body Preview */}
                        <div className="prose prose-sm max-w-none">
                          <p>Dear [Recipient],</p>
                          <p>We're excited to invite you to our upcoming webinar:</p>
                          <p className="font-bold">AI-Driven Workflow Optimization: Beyond the Hype</p>
                          <p>
                            In this practical session, we'll showcase real-world examples of how AI transforms
                            enterprise workflows with measurable results.
                          </p>

                          {showWebinarDetails && (
                            <div className="bg-gray-50 p-3 rounded my-4">
                              <p className="font-medium">What you'll learn:</p>
                              <ul className="mt-2">
                                <li>Implementation strategies for AI workflow tools</li>
                                <li>Common pitfalls to avoid during deployment</li>
                                <li>How to measure success and ROI</li>
                              </ul>
                            </div>
                          )}

                          {showSpeakerInfo && (
                            <div className="my-4">
                              <p className="font-medium">Featured Speakers:</p>
                              <div className="flex flex-col gap-2 mt-2">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/diverse-group.png" alt="Dr. Alex Martinez" />
                                    <AvatarFallback>AM</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">Dr. Alex Martinez</p>
                                    <p className="text-xs">AI Research Director, TechCorp</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src="/diverse-woman-portrait.png" alt="Sarah Johnson" />
                                    <AvatarFallback>SJ</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">Sarah Johnson</p>
                                    <p className="text-xs">VP of Operations, Enterprise Solutions Inc</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {showRegistrationLink && (
                            <div className="text-center my-6">
                              <a
                                href="#"
                                className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium inline-block"
                              >
                                Register Now
                              </a>
                            </div>
                          )}

                          <p>
                            Best regards,
                            <br />
                            The Acme Inc. Team
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href="/content-planning">Back to Content</Link>
                    </Button>
                    <div className="flex gap-3">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Assets
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                        <Link href="/event-summary">Finalize Event</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
