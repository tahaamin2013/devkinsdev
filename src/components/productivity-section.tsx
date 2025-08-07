import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail, Zap, BarChart3 } from 'lucide-react'

export default function ProductivitySection() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4 lg:sticky lg:top-12 lg:self-start">
          <Badge variant="secondary" className="px-3 py-1 text-sm rounded-full dark:bg-gray-800 dark:text-gray-100">
            Productivity
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
            Supercharge Team Productivity
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Keep your team focused and productive as they collaborate on building and shipping products swiftly.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-[#00d3f3] text-black hover:text-white dark:bg-[#00d3f3] dark:text-black dark:hover:text-white">Get started</Button>
            <Button variant="outline" className="dark:border-gray-700 dark:text-gray-100">See more</Button>
          </div>
        </div>
        <div className="grid gap-6">
          <Card className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Mail className="h-5 w-5 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Real-time Messaging</h3>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              Instantly communicate with your team, ensuring swift decision-making and seamless collaboration on project
              tasks and updates.
            </CardContent>
          </Card>
          <Card className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Zap className="h-5 w-5 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Task Management</h3>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              Organize and prioritize tasks effectively, assigning responsibilities and tracking progress to keep projects
              on schedule and within scope.
            </CardContent>
          </Card>
          <Card className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <BarChart3 className="h-5 w-5 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">File Sharing</h3>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              Share documents, images, and other files effortlessly within your team, ensuring everyone has access to the
              latest versions.
            </CardContent>
          </Card>
          <Card className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Mail className="h-5 w-5 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Secure Collaboration</h3>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              Work together on projects with confidence, knowing your data is protected with robust security measures and
              access controls.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
