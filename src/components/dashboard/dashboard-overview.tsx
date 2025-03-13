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
    { 
      name: "Sales Agent", 
      tokens: 24750,
      interactions: 873,
      tasks: 215
    },
    { 
      name: "Customer Widget", 
      tokens: 18325,
      interactions: 642,
      tasks: 187
    },
    { 
      name: "Marketing Agent", 
      tokens: 12480,
      interactions: 356,
      tasks: 98
    }
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

      {/* Recent Activities */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent Activities</h2>
          <a href="#" className="text-sm text-primary hover:underline">View all</a>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-4 p-3 bg-background rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <UserRound className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">Sales Agent</h3>
                <span className="text-xs text-muted-foreground">2 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">NDA document generated for TechServe client</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Document</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Legal</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 p-3 bg-background rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="bg-amber-100 text-amber-600 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <BarChart className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">Marketing Agent</h3>
                <span className="text-xs text-muted-foreground">15 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">YouTube webinar converted to e-book (32 pages)</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Content</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Lead Magnet</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 p-3 bg-background rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="bg-purple-100 text-purple-600 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">Customer Widget</h3>
                <span className="text-xs text-muted-foreground">42 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Support ticket #4872 created and assigned to team</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Ticket</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Urgent</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 p-3 bg-background rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <UserRound className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">Sales Agent</h3>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Proposal document generated for InnovateTech ($24,500)</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Document</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">High Value</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 p-3 bg-background rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="bg-amber-100 text-amber-600 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <BarChart className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">Marketing Agent</h3>
                <span className="text-xs text-muted-foreground">3 hours ago</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Ad copy generated for spring campaign (12 variants)</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Content</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Ads</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-4 py-2 text-sm text-primary border border-primary/30 rounded-md hover:bg-primary/5 transition-colors">
          Load More Activities
        </button>
      </div>
    </div>
  )}