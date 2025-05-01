"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, ChevronDown, ChevronUp, Edit, Info } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContextSummary() {
  const [expanded, setExpanded] = useState({
    company: true,
    competitors: false,
    products: false,
  })

  const toggle = (section: keyof typeof expanded) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section],
    })
  }

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
            <h1 className="text-xl font-bold">Context Summary</h1>
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
                  Context
                </Link>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-purple-200" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-purple-600 mt-1">Review</span>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-gray-200" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">3</div>
                <span className="text-sm font-medium text-gray-600 mt-1">Generate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle>AI-Generated Context</AlertTitle>
              <AlertDescription>
                This information was automatically generated based on your product URL. You can edit any section by
                clicking the edit button.
              </AlertDescription>
            </Alert>

            <div className="bg-white rounded-lg border mb-6">
              {/* Company Information */}
              <div className="border-b">
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggle("company")}
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold">Company Information</h2>
                    <Link
                      href="/context-input"
                      className="text-purple-600 hover:text-purple-800"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                  </div>

                  {expanded.company ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {expanded.company && (
                  <div className="px-4 pb-4">
                    <dl className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                        <dd className="text-sm text-gray-900 col-span-2">Acme Inc.</dd>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">Industry</dt>
                        <dd className="text-sm text-gray-900 col-span-2">Technology</dd>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">Company Size</dt>
                        <dd className="text-sm text-gray-900 col-span-2">Enterprise (1000+ employees)</dd>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">Target Markets</dt>
                        <dd className="text-sm text-gray-900 col-span-2 flex flex-wrap gap-1">
                          <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs">B2B</span>
                          <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs">Enterprise</span>
                          <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs">SMB</span>
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">Company Description</dt>
                        <dd className="text-sm text-gray-900 col-span-2">
                          A leading provider of innovative technology solutions for enterprise businesses, focusing on
                          automation, collaboration, and analytics platforms.
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">Key Differentiators</dt>
                        <dd className="text-sm text-gray-900 col-span-2">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Cutting-edge AI technology</li>
                            <li>Enterprise scalability</li>
                            <li>World-class support</li>
                          </ul>
                        </dd>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">Recent Marketing</dt>
                        <dd className="text-sm text-gray-900 col-span-2">
                          "Transform your workflow with AI-powered collaboration tools"
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>

              {/* Competitor Information */}
              <div className="border-b">
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggle("competitors")}
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold">Competitor Information</h2>
                    <Link
                      href="/context-input"
                      className="text-purple-600 hover:text-purple-800"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                  </div>

                  {expanded.competitors ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {expanded.competitors && (
                  <div className="px-4 pb-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3">Competitor Inc</h3>
                        <dl className="space-y-3">
                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Industry</dt>
                            <dd className="text-sm text-gray-900 col-span-2">Technology</dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Strengths</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              Strong brand recognition, Wide product range
                            </dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Weaknesses</dt>
                            <dd className="text-sm text-gray-900 col-span-2">Higher pricing, Complex deployment</dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Recent Events</dt>
                            <dd className="text-sm text-gray-900 col-span-2">Q1 Product Launch Webinar</dd>
                          </div>
                        </dl>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-3">TechRival</h3>
                        <dl className="space-y-3">
                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Industry</dt>
                            <dd className="text-sm text-gray-900 col-span-2">Technology</dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Strengths</dt>
                            <dd className="text-sm text-gray-900 col-span-2">Lower pricing, Fast customer support</dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Weaknesses</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              Limited feature set, Smaller market share
                            </dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Recent Events</dt>
                            <dd className="text-sm text-gray-900 col-span-2">Annual Developer Conference</dd>
                          </div>
                        </dl>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-3">Competitive Positioning</h3>
                        <dl className="space-y-3">
                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Competitive Advantage</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              Our AI-driven approach provides more intelligent automation compared to competitors'
                              static workflows
                            </dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Market Gaps</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              Competitors lack seamless integration between collaboration and analytics features
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Information */}
              <div>
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggle("products")}
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold">Product Information</h2>
                    <Link
                      href="/context-input"
                      className="text-purple-600 hover:text-purple-800"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                  </div>

                  {expanded.products ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {expanded.products && (
                  <div className="px-4 pb-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3">Product Suite Pro</h3>
                        <dl className="space-y-3">
                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              All-in-one enterprise solution for team collaboration and workflow management
                            </dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Key Features</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              <ul className="list-disc list-inside space-y-1">
                                <li>AI-powered automation</li>
                                <li>Advanced analytics</li>
                                <li>Team collaboration tools</li>
                                <li>Enterprise security</li>
                              </ul>
                            </dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Target Use Cases</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              Enterprise workflow management, Department coordination, Remote team collaboration
                            </dd>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium text-gray-500">Recent Updates</dt>
                            <dd className="text-sm text-gray-900 col-span-2">
                              New AI-powered insights dashboard, Enhanced integration capabilities
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg border border-purple-200 p-4 mb-6">
              <div className="flex gap-3 items-start">
                <Info className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-purple-800">Ready to Generate Ideas</h3>
                  <p className="text-sm text-purple-700 mt-1">
                    Your context information is complete and ready for AI-powered event idea generation. Click "Generate
                    Event Ideas" to see personalized webinar and meetup suggestions based on your company context.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/context-input">Back</Link>
              </Button>

              <div className="flex gap-3">
                <Button variant="outline">Save Context</Button>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/ideation">Generate Event Ideas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
