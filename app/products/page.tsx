"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, CheckCircle, Info, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProductsInput() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product Suite Pro", description: "All-in-one enterprise solution" },
  ])

  const addProduct = () => {
    const newId = Math.max(0, ...products.map((p) => p.id)) + 1
    setProducts([...products, { id: newId, name: "", description: "" }])
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  // Sample data for preview
  const companyPreview = {
    name: "Acme Inc.",
    industry: "Technology",
  }

  const competitorsPreview = [
    { name: "Competitor Inc", industry: "Technology" },
    { name: "TechRival", industry: "Technology" },
  ]

  const productsPreview = [
    {
      name: "Product Suite Pro",
      description: "All-in-one enterprise solution",
      features: "AI-powered automation, Advanced analytics, Team collaboration",
      useCases: "Enterprise workflow management, Department coordination",
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
                <div className="h-1 w-full bg-green-200" />
              </div>
              <div className="flex flex-col items-center">
                <Link
                  href="/competitors"
                  className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"
                >
                  <CheckCircle className="h-5 w-5" />
                </Link>
                <Link href="/competitors" className="text-sm font-medium text-green-600 mt-1">
                  Competitors
                </Link>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-purple-200" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-purple-600 mt-1">Products</span>
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
                <h2 className="text-lg font-semibold mb-4">Product Information</h2>

                {products.map((product, index) => (
                  <div key={product.id} className="mb-8 pb-8 border-b last:border-b-0 last:pb-0 last:mb-0">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Product {index + 1}</h3>
                      {products.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProduct(product.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor={`product-name-${product.id}`}>Product Name</Label>
                        <Input id={`product-name-${product.id}`} defaultValue={product.name} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`product-description-${product.id}`}>Product Description</Label>
                        <Textarea
                          id={`product-description-${product.id}`}
                          defaultValue={product.description}
                          placeholder="Brief description of what the product does"
                          className="h-24"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`product-features-${product.id}`}>Key Features</Label>
                        <Input
                          id={`product-features-${product.id}`}
                          placeholder="List main features (comma separated)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`product-use-cases-${product.id}`}>Target Use Cases</Label>
                        <Input
                          id={`product-use-cases-${product.id}`}
                          placeholder="Primary use cases (comma separated)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`product-updates-${product.id}`}>Recent Updates</Label>
                        <Textarea
                          id={`product-updates-${product.id}`}
                          placeholder="Recent or upcoming changes worth highlighting"
                          className="h-20"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={addProduct} className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Product
                </Button>
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
                    <div className="flex flex-wrap gap-1 mt-1">
                      {competitorsPreview.map((comp, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                          {comp.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-gray-500">PRODUCTS</h4>
                    <div className="space-y-3 mt-1">
                      {productsPreview.map((prod, i) => (
                        <div key={i} className="text-sm">
                          <p className="font-medium">{prod.name}</p>
                          <p className="text-xs text-gray-600">{prod.description}</p>
                          <p className="text-xs mt-1">
                            <span className="font-medium">Features:</span> {prod.features}
                          </p>
                          <p className="text-xs">
                            <span className="font-medium">Use Cases:</span> {prod.useCases}
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
              <Link href="/competitors">Back</Link>
            </Button>

            <div className="flex gap-3">
              <Button variant="outline">Save Progress</Button>
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/summary">Next Step</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
