"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, CheckCircle, HelpCircle, Info, Loader2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContextInput() {
  const [companyName, setCompanyName] = useState("Acme Inc.")
  const [industry, setIndustry] = useState("")
  const [companySize, setCompanySize] = useState("")
  const [productUrl, setProductUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [activeTab, setActiveTab] = useState("url")

  // Sample data for preview
  const companyPreview = {
    name: companyName || "Your Company",
    industry: industry || "Technology",
    description: "A leading provider of innovative solutions...",
    targets: ["B2B", "Enterprise"],
    differentiators: ["Cutting-edge AI technology", "Enterprise scalability", "World-class support"],
  }

  // Sample competitors data that would be populated after analysis
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

  // Sample product data that would be populated after analysis
  const productPreview = {
    name: "Product Suite Pro",
    description: "All-in-one enterprise solution for team collaboration and workflow management",
    features: ["AI-powered automation", "Advanced analytics", "Team collaboration tools", "Enterprise security"],
    useCases: "Enterprise workflow management, Department coordination, Remote team collaboration",
    updates: "New AI-powered insights dashboard, Enhanced integration capabilities",
  }

  const handleAnalyzeUrl = () => {
    if (!productUrl) return

    setIsAnalyzing(true)

    // Simulate API call to analyze URL
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
      // In a real implementation, we would set the company, competitor, and product data
      // based on the API response
      setCompanyName("Detected Company Name")
      setIndustry("technology")
      setCompanySize("enterprise")
    }, 3000)
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
            <h1 className="text-xl font-bold">Set Up Event Context</h1>
          </div>
        </header>

        {/* Progress Steps */}
        <div className="bg-white border-b">
          <div className="container max-w-screen-xl mx-auto px-6 py-3">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-purple-600 mt-1">Context</span>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-purple-200" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">2</div>
                <span className="text-sm font-medium text-gray-600 mt-1">Review</span>
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
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <div className="flex-1">
              <Tabs defaultValue="url" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="url">URL Analysis</TabsTrigger>
                  <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                </TabsList>

                <TabsContent value="url" className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Analyze Product URL</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Enter your product or company URL and our AI will analyze it to extract relevant information,
                          identify competitors, and generate event ideas.
                        </p>

                        <div className="flex gap-2">
                          <div className="flex-1">
                            <Input
                              placeholder="https://www.yourproduct.com"
                              value={productUrl}
                              onChange={(e) => setProductUrl(e.target.value)}
                            />
                          </div>
                          <Button
                            onClick={handleAnalyzeUrl}
                            disabled={isAnalyzing || !productUrl}
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            {isAnalyzing ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Analyzing...
                              </>
                            ) : (
                              <>
                                <Search className="mr-2 h-4 w-4" />
                                Analyze
                              </>
                            )}
                          </Button>
                        </div>

                        {analysisComplete && (
                          <Alert className="bg-green-50 border-green-200">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertTitle>Analysis Complete</AlertTitle>
                            <AlertDescription>
                              We've analyzed your URL and extracted information about your company, competitors, and
                              products. You can review and edit this information in the tabs below.
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {analysisComplete && (
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center justify-between">
                            <span>Company Information</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setActiveTab("manual")}
                              className="text-purple-600"
                            >
                              Edit
                            </Button>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <dl className="space-y-2">
                            <div className="grid grid-cols-3 gap-4">
                              <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                              <dd className="text-sm text-gray-900 col-span-2">{companyName}</dd>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <dt className="text-sm font-medium text-gray-500">Industry</dt>
                              <dd className="text-sm text-gray-900 col-span-2">
                                {industry ? industry.charAt(0).toUpperCase() + industry.slice(1) : "Technology"}
                              </dd>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <dt className="text-sm font-medium text-gray-500">Company Size</dt>
                              <dd className="text-sm text-gray-900 col-span-2">
                                {companySize === "enterprise"
                                  ? "Enterprise (1000+ employees)"
                                  : "Medium (51-200 employees)"}
                              </dd>
                            </div>
                          </dl>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center justify-between">
                            <span>Competitors</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setActiveTab("manual")}
                              className="text-purple-600"
                            >
                              Edit
                            </Button>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {competitorsPreview.map((competitor, index) => (
                              <div key={index} className="text-sm">
                                <p className="font-medium">{competitor.name}</p>
                                <p className="text-xs text-gray-600">{competitor.industry}</p>
                                <p className="text-xs mt-1">
                                  <span className="font-medium">Strengths:</span> {competitor.strengths}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center justify-between">
                            <span>Product Information</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setActiveTab("manual")}
                              className="text-purple-600"
                            >
                              Edit
                            </Button>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <dl className="space-y-2">
                            <div className="grid grid-cols-3 gap-4">
                              <dt className="text-sm font-medium text-gray-500">Product Name</dt>
                              <dd className="text-sm text-gray-900 col-span-2">{productPreview.name}</dd>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <dt className="text-sm font-medium text-gray-500">Description</dt>
                              <dd className="text-sm text-gray-900 col-span-2">{productPreview.description}</dd>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <dt className="text-sm font-medium text-gray-500">Key Features</dt>
                              <dd className="text-sm text-gray-900 col-span-2">
                                <ul className="list-disc list-inside space-y-1">
                                  {productPreview.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                  ))}
                                </ul>
                              </dd>
                            </div>
                          </dl>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="manual">
                  <div className="bg-white rounded-lg border p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-4">Company Information</h2>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input
                            id="company-name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select value={industry} onValueChange={setIndustry}>
                            <SelectTrigger id="industry">
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

                      <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        <Select value={companySize} onValueChange={setCompanySize}>
                          <SelectTrigger id="company-size">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                            <SelectItem value="small">Small (11-50 employees)</SelectItem>
                            <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                            <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                            <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Target Markets</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="target-b2b" />
                            <label htmlFor="target-b2b" className="text-sm">
                              B2B
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="target-b2c" />
                            <label htmlFor="target-b2c" className="text-sm">
                              B2C
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="target-enterprise" />
                            <label htmlFor="target-enterprise" className="text-sm">
                              Enterprise
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="target-smb" defaultChecked />
                            <label htmlFor="target-smb" className="text-sm">
                              SMB
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company-description">Company Description</Label>
                        <Textarea
                          id="company-description"
                          placeholder="Describe your company's mission and focus"
                          className="h-24"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="differentiators">Key Differentiators</Label>
                        <Input id="differentiators" placeholder="What makes your company unique (comma separated)" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="marketing-messaging">Recent Marketing Messaging</Label>
                        <Textarea
                          id="marketing-messaging"
                          placeholder="Examples of recent marketing headlines or messaging"
                          className="h-24"
                        />
                      </div>
                    </div>
                  </div>

                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="flex text-sm items-center text-gray-500">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Tips for Best Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-sm">
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Be specific about your target markets to receive better event suggestions</li>
                        <li>Include recent marketing themes to ensure event alignment with your brand messaging</li>
                        <li>
                          Add key differentiators to help highlight your unique selling points in generated content
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Preview Sidebar */}
            {(analysisComplete ||
              (activeTab === "manual" && (companyName !== "" || industry !== "" || companySize !== ""))) && (
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
                      <h4 className="text-xs font-medium text-gray-500">DESCRIPTION</h4>
                      <p className="text-sm">{companyPreview.description}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-gray-500">TARGET MARKETS</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {companyPreview.targets.map((target, i) => (
                          <span key={i} className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded">
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-gray-500">DIFFERENTIATORS</h4>
                      <ul className="text-sm space-y-1 mt-1">
                        {companyPreview.differentiators.map((diff, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-600 mr-1">•</span> {diff}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Add Next Button after analysis */}
          {analysisComplete && activeTab === "url" && (
            <div className="mt-8 flex justify-end">
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                asChild
              >
                <Link href="/summary">Next Step</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
