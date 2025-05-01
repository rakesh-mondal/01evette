"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Home, Info, Plus, UserCheck } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { EventSidebar } from "@/components/event-sidebar"

export default function AudienceDefinition() {
  const [registrationGoal, setRegistrationGoal] = useState(200)

  // Sample saved audience segments
  const savedSegments = [
    {
      id: 1,
      name: "Enterprise IT Decision Makers",
      description: "IT Directors and CIOs from enterprise companies (1000+ employees)",
      size: 4800,
      lastUsed: "2 months ago",
    },
    {
      id: 2,
      name: "Operations Leaders",
      description: "VPs and Directors of Operations across industries",
      size: 3200,
      lastUsed: "3 weeks ago",
    },
    {
      id: 3,
      name: "Digital Transformation Champions",
      description: "Professionals responsible for digital initiatives",
      size: 5600,
      lastUsed: "1 month ago",
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
              <h1 className="text-xl font-bold">Audience Definition: AI-Driven Workflow Optimization</h1>
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

        <Tabs defaultValue="audience" className="w-full">
          <TabsList className="bg-white border-b justify-start w-full rounded-none h-12 px-6">
            <TabsTrigger value="overview" asChild>
              <Link href="/event-design">Overview</Link>
            </TabsTrigger>
            <TabsTrigger value="speakers" asChild>
              <Link href="/speakers-selection">Speakers</Link>
            </TabsTrigger>
            <TabsTrigger value="audience" className="data-[state=active]:bg-slate-100">
              Audience
            </TabsTrigger>
            <TabsTrigger value="content" asChild>
              <Link href="/content-planning">Content</Link>
            </TabsTrigger>
            <TabsTrigger value="marketing" asChild>
              <Link href="/marketing-kit?id=new">Marketing</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audience" className="p-0 mt-0">
            <div className="container max-w-screen-xl mx-auto px-6 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Saved Segments Sidebar */}
                <div className="lg:w-72">
                  <div className="bg-white rounded-lg border p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Saved Segments</h3>
                      <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        New
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {savedSegments.map((segment) => (
                        <Card key={segment.id} className="cursor-pointer hover:border-purple-300 transition-colors">
                          <CardContent className="p-3">
                            <div className="mb-1">
                              <span className="font-medium text-sm">{segment.name}</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{segment.description}</p>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-500">Size: {segment.size.toLocaleString()}</span>
                              <span className="text-gray-500">Used: {segment.lastUsed}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg border p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-4">Define Target Audience</h2>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry Focus</Label>
                        <Select>
                          <SelectTrigger id="industry">
                            <SelectValue placeholder="Select industries" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance & Banking</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="all">All Industries</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Job Roles</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="role-it" className="rounded text-purple-600" defaultChecked />
                            <label htmlFor="role-it" className="text-sm">
                              IT Director/Manager
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="role-operations"
                              className="rounded text-purple-600"
                              defaultChecked
                            />
                            <label htmlFor="role-operations" className="text-sm">
                              Operations Leader
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="role-cio" className="rounded text-purple-600" defaultChecked />
                            <label htmlFor="role-cio" className="text-sm">
                              CIO/CTO
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="role-digital"
                              className="rounded text-purple-600"
                              defaultChecked
                            />
                            <label htmlFor="role-digital" className="text-sm">
                              Digital Transformation
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="role-process" className="rounded text-purple-600" />
                            <label htmlFor="role-process" className="text-sm">
                              Process Engineer
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="role-hr" className="rounded text-purple-600" />
                            <label htmlFor="role-hr" className="text-sm">
                              HR Management
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Company Size</Label>
                        <RadioGroup defaultValue="enterprise">
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="small" id="size-small" />
                              <Label htmlFor="size-small">Small (1-50)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="medium" id="size-medium" />
                              <Label htmlFor="size-medium">Medium (51-500)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="large" id="size-large" />
                              <Label htmlFor="size-large">Large (501-1000)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="enterprise" id="size-enterprise" />
                              <Label htmlFor="size-enterprise">Enterprise (1000+)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="all" id="size-all" />
                              <Label htmlFor="size-all">All Sizes</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>Geographic Regions</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="region-na" className="rounded text-purple-600" defaultChecked />
                            <label htmlFor="region-na" className="text-sm">
                              North America
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="region-europe"
                              className="rounded text-purple-600"
                              defaultChecked
                            />
                            <label htmlFor="region-europe" className="text-sm">
                              Europe
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="region-asia" className="rounded text-purple-600" />
                            <label htmlFor="region-asia" className="text-sm">
                              Asia-Pacific
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="region-latam" className="rounded text-purple-600" />
                            <label htmlFor="region-latam" className="text-sm">
                              Latin America
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="region-mea" className="rounded text-purple-600" />
                            <label htmlFor="region-mea" className="text-sm">
                              Middle East & Africa
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <UserCheck className="h-5 w-5 text-purple-600" />
                              <h3 className="font-medium">Audience Size Estimate</h3>
                            </div>
                            <div>
                              <span className="text-3xl font-bold">8,640</span>
                              <span className="text-gray-500 text-sm ml-2">potential attendees</span>
                            </div>
                            <div className="text-sm text-gray-600">Based on your selected criteria</div>
                          </div>

                          <div className="space-y-3 flex-1 max-w-md">
                            <div className="flex justify-between">
                              <Label htmlFor="registration-goal" className="flex items-center">
                                Registration Goal
                                <Info className="h-4 w-4 text-gray-400 ml-1" />
                              </Label>
                              <span className="text-sm font-medium">{registrationGoal}</span>
                            </div>
                            <Slider
                              id="registration-goal"
                              defaultValue={[200]}
                              max={500}
                              step={10}
                              onValueChange={(value) => setRegistrationGoal(value[0])}
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>100</span>
                              <span>300</span>
                              <span>500</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button className="bg-purple-600 hover:bg-purple-700">Save Audience Segment</Button>
                    </div>
                  </div>

                  {/* AI Recommendations */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">AI Audience Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">SUGGESTED TARGETING</h3>
                          <p>
                            Your event topic best resonates with IT Directors and Operations Leaders in enterprise
                            organizations who are actively exploring workflow automation solutions.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">ADDITIONAL AUDIENCE SEGMENTS</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 p-1 rounded">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">PD</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">Process Design Leaders</p>
                                <p className="text-xs text-gray-500">~3,200 potential attendees</p>
                              </div>
                              <Badge variant="outline" className="ml-auto">
                                Add
                              </Badge>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 p-1 rounded">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="bg-green-100 text-green-700 text-xs">DP</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">Digital Productivity Specialists</p>
                                <p className="text-xs text-gray-500">~2,800 potential attendees</p>
                              </div>
                              <Badge variant="outline" className="ml-auto">
                                Add
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-xs text-purple-800 mb-1">EXPECTED CONVERSION RATES</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between items-center text-xs">
                              <span>Registration to Attendance</span>
                              <span className="font-medium">40-50%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div className="bg-purple-600 h-1 rounded-full w-[45%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-8 flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/speakers-selection">Back to Speakers</Link>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/content-planning">
                    Next: Plan Content
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
