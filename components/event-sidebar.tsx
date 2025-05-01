"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, LayoutDashboard, Mail, Users, Users2 } from "lucide-react"

export function EventSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r hidden md:block">
      <div className="flex items-center p-4 border-b">
        <Calendar className="h-6 w-6 text-purple-600" />
        <h1 className="text-xl font-bold ml-2">EventDesign</h1>
      </div>

      <nav className="p-4 space-y-2">
        <Link
          href="/dashboard"
          className={`flex items-center p-2 rounded-md ${
            pathname === "/dashboard" ? "text-purple-600 bg-purple-50" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          href="/events"
          className={`flex items-center p-2 rounded-md ${
            pathname === "/events" ? "text-purple-600 bg-purple-50" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Calendar className="h-5 w-5 mr-3" />
          Events
        </Link>
        <Link
          href="/speakers-list"
          className={`flex items-center p-2 rounded-md ${
            pathname === "/speakers-list" ? "text-purple-600 bg-purple-50" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Users2 className="h-5 w-5 mr-3" />
          Speakers
        </Link>
        <Link
          href="/audiences-list"
          className={`flex items-center p-2 rounded-md ${
            pathname === "/audiences-list" ? "text-purple-600 bg-purple-50" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Users className="h-5 w-5 mr-3" />
          Audiences
        </Link>
        <Link
          href="/marketing-kits"
          className={`flex items-center p-2 rounded-md ${
            pathname === "/marketing-kits" || pathname.startsWith("/marketing-kit")
              ? "text-purple-600 bg-purple-50"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Mail className="h-5 w-5 mr-3" />
          Marketing Kits
        </Link>
      </nav>
    </div>
  )
}
