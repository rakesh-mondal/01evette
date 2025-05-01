import { Skeleton } from "@/components/ui/skeleton"
import { EventSidebar } from "@/components/event-sidebar"

export default function AudiencesListLoading() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <EventSidebar />
      <div className="flex-1 overflow-auto">
        {/* Header Skeleton */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-8 w-48" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-32" />
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
        </header>

        {/* Tabs Skeleton */}
        <div className="bg-white border-b h-12 px-6 flex items-center gap-4">
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-8 w-28" />
        </div>

        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          {/* Search and Filters Skeleton */}
          <div className="bg-white rounded-lg border p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton className="h-10 flex-1" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-[180px]" />
                <Skeleton className="h-10 w-[180px]" />
              </div>
            </div>
          </div>

          {/* Audience Segments Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white rounded-lg border p-4">
                  <div className="flex items-start justify-between mb-4">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-7 w-7 rounded-md" />
                  </div>
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-9 w-28" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
