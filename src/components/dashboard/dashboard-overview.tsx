// src/components/dashboard/dashboard-overview.tsx
"use client"

import { 
  UserRound, MessageSquare, BarChart,
  TrendingUp, Users, Clock
} from "lucide-react"
import Link from "next/link"

export default function DashboardOverview() {
  // Dummy stats data
  const stats = [
    {
      title: "AI Interactions",
      value: "2,847",
      change: "+12.5%",
      icon: MessageSquare
    },
    {
      title: "Leads Generated",
      value: "187",
      change: "+23.1%",
      icon: Users
    },
    {
      title: "Time Saved",
      value: "74h",
      change: "+18.7%",
      icon: Clock
    },
    {
      title: "Conversion Rate",
      value: "3.6%",
      change: "+2.3%",
      icon: TrendingUp
    }
  ]
  
  // Dummy agent usage data
  const agentUsage = [
    { name: "Sales Agent", percentage: 65 },
    { name: "Customer Widget", percentage: 42 },
    { name: "Marketing Agent", percentage: 28 }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's an overview of your AI agents.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg p-6 border shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="bg-primary/10 text-primary p-2 rounded-full">
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500 font-medium">{stat.change}</span>
              <span className="text-muted-foreground ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Agent Hub */}
      <div className="bg-card rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">AI Agent Hub</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Select an agent to start working on specific tasks
          </p>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dashboard/sales" className="group">
            <div className="bg-background p-6 rounded-lg border border-transparent hover:border-primary/50 transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <UserRound className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Sales Agent</h3>
              <p className="text-sm text-muted-foreground">
                Automate customer interactions and sales processes
              </p>
            </div>
          </Link>
          
          <Link href="/dashboard/customer" className="group">
            <div className="bg-background p-6 rounded-lg border border-transparent hover:border-primary/50 transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Customer Widget</h3>
              <p className="text-sm text-muted-foreground">
                Handle customer queries and support tickets
              </p>
            </div>
          </Link>
          
          <Link href="/dashboard/marketing" className="group">
            <div className="bg-background p-6 rounded-lg border border-transparent hover:border-primary/50 transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Marketing</h3>
              <p className="text-sm text-muted-foreground">
                Optimize ad campaigns and analyze performance
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Agent Usage */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Agent Usage</h2>
        <div className="space-y-4">
          {agentUsage.map((agent, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{agent.name}</span>
                <span className="font-medium">{agent.percentage}%</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${agent.percentage}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}