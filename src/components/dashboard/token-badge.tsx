// src/components/dashboard/token-badge.tsx
"use client"

import { Coins } from "lucide-react"

export default function TokenBadge() {
  // Dummy data
  const tokenBalance = 875

  return (
    <div className="bg-primary/10 text-primary rounded-lg p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5" />
        <div>
          <p className="text-sm font-medium">Sonetz Tokens</p>
          <p className="text-xs text-muted-foreground">Power your AI agents</p>
        </div>
      </div>
      <span className="font-bold">{tokenBalance}</span>
    </div>
  )
}