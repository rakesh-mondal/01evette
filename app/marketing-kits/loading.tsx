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
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-9 w-40" />
          </div>
        </header>

        <div className="container max-w-screen-xl mx-auto px-6 py-8">
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-64" />
              <Skeleton className="h-9 w-9" />
              <Skeleton className="h-9 w-9" />
            </div>

            <Skeleton className="h-9 w-24" />
          </div>

          <Skeleton className="h-10 w-full md:w-96 mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
