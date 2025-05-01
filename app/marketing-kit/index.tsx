"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function MarketingKitIndex() {
  const router = useRouter()

  useEffect(() => {
    router.push("/marketing-kits")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to Marketing Kits...</p>
    </div>
  )
}
