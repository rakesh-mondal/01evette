import { Skeleton } from "@/components/ui/skeleton"
import { EventSidebar } from "@/components/event-sidebar"

export default function Loading() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <EventSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-7 w-64" />
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
        </header>

        <div className="w-full h-12 bg-white border-b">
          <div className="px-6 py-3">
            <Skeleton className="h-6 w-96" />
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Skeleton */}
            <div className="lg:w-72">
              <Skeleton className="h-64 w-full mb-6" />
              <Skeleton className="h-40 w-full mb-6" />
              <Skeleton className="h-64 w-full" />
            </div>

            {/* Main Content Skeleton */}
            <div className="flex-1">
              <Skeleton className="h-96 w-full mb-6" />
              <Skeleton className="h-96 w-full mb-8" />
              <div className="flex justify-between">
                <Skeleton className="h-10 w-32" />
                <div className="flex gap-3">
                  <Skeleton className="h-10 w-40" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
