"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center">
            <Calendar className="h-10 w-10 text-purple-600" />
            <h1 className="text-2xl font-bold ml-2">Event Design System</h1>
          </div>

          <h2 className="text-3xl font-bold mb-2">Sign in</h2>
          <p className="text-gray-500 mb-8">Design and plan webinars and meetups with AI-powered recommendations</p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#password-reset" className="text-sm text-purple-600 hover:text-purple-800">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/dashboard">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden md:flex flex-1 bg-purple-50 justify-center items-center p-8">
        <div className="relative h-[400px] w-full max-w-lg">
          <Image src="/placeholder.svg?key=qf8uh" alt="Event planning illustration" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}
