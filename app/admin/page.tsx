"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, PlusCircle } from "lucide-react"

// Mock data for the admin panel UI
const mockProjects = [
  { id: 1, title: "Museum Management System", slug: "museum-system", tech: ["React", "Node.js"] },
  { id: 2, title: "Discord MusicBot", slug: "discord-bot", tech: ["Python", "Discord.py"] },
]
const mockEducation = [{ id: 1, institution: "University of Houston", degree: "B.S. Computer Science" }]
const mockCertifications = [
  { id: 1, name: "AWS Certified Cloud Practitioner", issuingOrganization: "Amazon Web Services" },
]

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Administrator Dashboard</h1>
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Manage Projects</CardTitle>
              <CardDescription>Add, edit, or delete your project entries.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-right mb-4">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Project
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockProjects.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.slug}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add TabsContent for Education and Certifications similarly */}
      </Tabs>
    </div>
  )
}
