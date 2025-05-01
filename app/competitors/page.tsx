"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, CheckCircle, Info, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CompetitorsInput() {
  const [competitors, setCompetitors] = useState([{ id: 1, name: "Competitor Inc", industry: "technology" }])

  const addCompetitor = () => {
    const newId = Math.max(0, ...competitors.map((c) => c.id)) + 1
    setCompetitors([...competitors, { id: newId, name: "", industry: "" }])
  }

  const removeCompetitor = (id: number) => {
    setCompetitors(competitors.filter((c) => c.id !== id))
  }

  // Sample data for preview
  const companyPreview = {
    name: "Acme Inc.",
    industry: "Technology",
  }

  const competitorsPreview = [
    {
      name: "Competitor Inc",
      industry: "Technology",
      strengths: "Strong brand recognition, Wide product range",
      events: "Q1 Product Launch Webinar",
    },
    {
      name: "TechRival",
      industry: "Technology",
      strengths: "Lower pricing, Fast customer support",
      events: "Annual Developer Conference",
    },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold">Set Up Event Context</h1>
          </div>
        </header>

        {/* Progress Steps */}
        <div className="bg-white border-b">
          <div className="container max-w-screen-xl mx-auto px-6 py-3">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <Link
                  href="/context-input"
                  className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"
                >
                  <CheckCircle className="h-5 w-5" />
                </Link>
                <Link href="/context-input" className="text-sm font-medium text-green-600 mt-1">
                  Company
                </Link>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-purple-200" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-purple-600 mt-1">Competitors</span>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-gray-200" />
              </div>
              <div className="flex flex-col items-center">
                <Link
                  href="/products"
                  className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center"
                >
                  3
                </Link>
                <Link href="/products" className="text-sm font-medium text-gray-600 mt-1">
                  Products
                </Link>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-gray-200" />
              </div>
              <div className="flex flex-col items-center">
                <Link
                  href="/summary"
                  className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center"
                >
                  4
                </Link>
                <Link href="/summary" className="text-sm font-medium text-gray-600 mt-1">
                  Summary
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <div className="flex-1">
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Competitor Information</h2>

                {competitors.map((competitor, index) => (
                  <div key={competitor.id} className="mb-8 pb-8 border-b last:border-b-0 last:pb-0 last:mb-0">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Competitor {index + 1}</h3>
                      {competitors.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCompetitor(competitor.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor={`competitor-name-${competitor.id}`}>Competitor Name</Label>
                          <Input id={`competitor-name-${competitor.id}`} defaultValue={competitor.name} />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`competitor-industry-${competitor.id}`}>Industry</Label>
                          <Select defaultValue={competitor.industry}>
                            <SelectTrigger id={`competitor-industry-${competitor.id}`}>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor={`competitor-strengths-${competitor.id}`}>Strengths</Label>
                          <Textarea
                            id={`competitor-strengths-${competitor.id}`}
                            placeholder="What are they known for?"
                            className="h-24"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`competitor-weaknesses-${competitor.id}`}>Weaknesses</Label>
                          <Textarea
                            id={`competitor-weaknesses-${competitor.id}`}
                            placeholder="Where are they vulnerable?"
                            className="h-24"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`competitor-events-${competitor.id}`}>Recent Events</Label>
                        <Input
                          id={`competitor-events-${competitor.id}`}
                          placeholder="Recent webinars, meetups, conferences, etc."
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={addCompetitor} className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Competitor
                </Button>
              </div>

              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Competitive Positioning</h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="competitive-advantage">Your Competitive Advantage</Label>
                    <Textarea
                      id="competitive-advantage"
                      placeholder="What makes you better than competitors?"
                      className="h-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="market-gaps">Market Gaps</Label>
                    <Textarea
                      id="market-gaps"
                      placeholder="What are competitors missing that you offer?"
                      className="h-24"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white rounded-lg border p-4 sticky top-6">
                <h3 className="font-semibold text-sm mb-3 flex items-center text-gray-500">
                  <Info className="h-4 w-4 mr-1" />
                  Context Preview
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500">COMPANY</h4>
                    <p className="font-semibold">{companyPreview.name}</p>
                    <p className="text-sm text-gray-600">{companyPreview.industry}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-gray-500">COMPETITORS</h4>
                    <div className="space-y-3 mt-1">
                      {competitorsPreview.map((comp, i) => (
                        <div key={i} className="text-sm">
                          <p className="font-medium">{comp.name}</p>
                          <p className="text-xs text-gray-600">{comp.industry}</p>
                          <p className="text-xs mt-1">
                            <span className="font-medium">Strengths:</span> {comp.strengths}
                          </p>
                          <p className="text-xs">
                            <span className="font-medium">Events:</span> {comp.events}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/context-input">Back</Link>
            </Button>

            <div className="flex gap-3">
              <Button variant="outline">Save Progress</Button>
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/products">Next Step</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
