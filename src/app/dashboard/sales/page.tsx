// src/app/dashboard/sales/page.tsx
import { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export const metadata: Metadata = {
  title: "Sales Agent - Sonetz Software",
  description: "Manage customer interactions and sales pipeline",
}

export default function SalesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Agent</h1>
          <p className="text-muted-foreground mt-1">
            Manage customer interactions and optimize your sales pipeline
          </p>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <p className="text-center text-muted-foreground py-12">
            Sales Agent functionality will be implemented here
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}

// src/app/dashboard/customer/page.tsx
import { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export const metadata: Metadata = {
  title: "Customer Widget - Sonetz Software",
  description: "Handle customer support and engagement",
}

export default function CustomerPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customer Widget</h1>
          <p className="text-muted-foreground mt-1">
            Configure your customer widget and manage support interactions
          </p>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <p className="text-center text-muted-foreground py-12">
            Customer Widget functionality will be implemented here
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}

// src/app/dashboard/marketing/page.tsx
import { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export const metadata: Metadata = {
  title: "Marketing - Sonetz Software",
  description: "Analyze and manage ad campaigns",
}

export default function MarketingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marketing</h1>
          <p className="text-muted-foreground mt-1">
            Optimize your ad campaigns and analyze marketing performance
          </p>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm p-6">
          <p className="text-center text-muted-foreground py-12">
            Marketing functionality will be implemented here
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}