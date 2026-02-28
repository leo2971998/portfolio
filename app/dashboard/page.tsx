"use client"

import { BarChart, DollarSign, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

// Mock Data for the dashboard
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
]

const recentActivity = [
  { name: "Olivia Martin", action: "purchased 'Pro Plan'", avatar: "/placeholder.svg?width=40&height=40" },
  { name: "Jackson Lee", action: "viewed 'Team Bundle'", avatar: "/placeholder.svg?width=40&height=40" },
  { name: "Isabella Nguyen", action: "purchased 'Basic Plan'", avatar: "/placeholder.svg?width=40&height=40" },
  { name: "William Kim", action: "cancelled 'Pro Plan'", avatar: "/placeholder.svg?width=40&height=40" },
]

const topProducts = [
  { name: "Pro Plan", sales: 1200 },
  { name: "Team Bundle", sales: 850 },
  { name: "Basic Plan", sales: 600 },
  { name: "Enterprise Solution", sales: 300 },
]

export default function DashboardPage() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 md:p-6">
      {/* Sales Overview Chart (Spans 2 columns on large screens) */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-2 sm:p-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              />
              <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Key Stats Card */}
      <Card>
        <CardHeader>
          <CardTitle>Key Stats</CardTitle>
          <CardDescription className="text-xs">This month&apos;s performance</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
            <p className="text-sm font-medium">Total Revenue</p>
            <p className="text-sm font-bold ml-auto">$45,231.89</p>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-muted-foreground mr-2" />
            <p className="text-sm font-medium">Subscriptions</p>
            <p className="text-sm font-bold ml-auto">+2350</p>
          </div>
          <div className="flex items-center">
            <BarChart className="h-4 w-4 text-muted-foreground mr-2" />
            <p className="text-sm font-medium">Average Sale</p>
            <p className="text-sm font-bold ml-auto">$120.50</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Card */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} alt="Avatar" />
                  <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-none">{activity.name}</p>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Products Table (Spans 2 columns on large screens) */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Sales</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProducts.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="font-medium text-sm py-2">{product.name}</TableCell>
                  <TableCell className="text-right text-sm py-2">{product.sales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}
