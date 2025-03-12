// src/components/dashboard/dashboard-layout.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  UserRound, MessageSquare, BarChart, Users, Search, 
  FileText, Lightbulb, PenTool, Globe, Menu, X
} from "lucide-react"
import TokenBadge from "./token-badge"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // AI Agents for left sidebar
  const aiAgents = [
    {
      title: "Sales Agent",
      href: "/dashboard/sales",
      icon: UserRound,
      description: "Manage customer interactions and sales pipeline"
    },
    {
      title: "Customer Widget",
      href: "/dashboard/customer",
      icon: MessageSquare,
      description: "Handle customer support and engagement"
    },
    {
      title: "Marketing",
      href: "/dashboard/marketing",
      icon: BarChart,
      description: "Analyze and manage ad campaigns"
    },
  ]

  // Tools for right sidebar
  const tools = [
    {
      title: "Lead Finder",
      href: "/dashboard/tools/lead-finder",
      icon: Search,
      description: "Discover potential clients"
    },
    {
      title: "Document Generator",
      href: "/dashboard/tools/document-generator",
      icon: FileText,
      description: "Create proposals and contracts"
    },
    {
      title: "AI Suggestions",
      href: "/dashboard/tools/suggestions",
      icon: Lightbulb,
      description: "Get intelligent business insights"
    },
    {
      title: "Ad Copy Generator",
      href: "/dashboard/tools/ad-copy",
      icon: PenTool,
      description: "Create compelling ad copy"
    },
    {
      title: "Social Integration",
      href: "/dashboard/tools/social",
      icon: Globe,
      description: "Connect with social platforms"
    },
  ]

  // Time saved data (dummy data)
  const timeSaved = {
    hours: 12,
    minutes: 45,
    percentage: 28
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile Nav Toggle */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-primary text-primary-foreground md:hidden"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Left Sidebar - AI Agents */}
      <aside className={`w-64 border-r bg-card p-6 flex flex-col md:relative fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out ${
        mobileNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">Sonetz</h1>
          <p className="text-sm text-muted-foreground">AI Business Suite</p>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-4">AI AGENTS</h2>
          <nav className="space-y-1">
            {aiAgents.map((agent) => {
              const isActive = pathname === agent.href
              return (
                <Link
                  key={agent.href}
                  href={agent.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm group ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <agent.icon className="h-5 w-5" />
                  <span>{agent.title}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="mt-auto">
          <TokenBadge />
          
          <div className="mt-4 bg-accent/50 rounded-lg p-4">
            <h3 className="font-medium text-sm">Time saved this week</h3>
            <p className="text-2xl font-bold mt-1">{timeSaved.hours}h {timeSaved.minutes}m</p>
            <div className="mt-2 w-full bg-background rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${timeSaved.percentage}%` }} 
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">+{timeSaved.percentage}% from last week</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>

      {/* Right Sidebar - Tools */}
      <aside className={`w-64 border-l bg-card p-6 hidden lg:block`}>
        <h2 className="text-sm font-medium text-muted-foreground mb-4">TOOLS</h2>
        <nav className="space-y-1">
          {tools.map((tool) => {
            const isActive = pathname === tool.href
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm group ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <tool.icon className="h-5 w-5" />
                <span>{tool.title}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </div>
  )
}