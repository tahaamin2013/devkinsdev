'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Copy, Download } from 'lucide-react'
import { useState } from 'react'

const searchRobots = [
  'Google',
  'Google Image',
  'Google Mobile',
  'MSN Search',
  'Yahoo',
  'Yahoo MM',
  'Yahoo Blogs',
  'Ask/Teoma',
  'GigaBlast',
  'DMOZ Checker',
  'Nutch',
  'Alexa/Wayback',
  'Baidu',
  'Naver',
  'MSN PicSearch'
]

export default function Home() {
  const [defaultRobots, setDefaultRobots] = useState('Allow')
  const [crawlDelay, setCrawlDelay] = useState('')
  const [sitemap, setSitemap] = useState('')
  const [robotSettings, setRobotSettings] = useState<Record<string, string>>(
    Object.fromEntries(searchRobots.map(robot => [robot, 'Default']))
  )
  const [restrictedDirectories, setRestrictedDirectories] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')

  const generateRobotsTxt = () => {
    let content = `User-agent: *\n${defaultRobots === 'Allow' ? 'Allow: /' : 'Disallow: /'}\n\n`

    if (crawlDelay) {
      content += `Crawl-delay: ${crawlDelay}\n\n`
    }

    if (sitemap) {
      content += `Sitemap: ${sitemap}\n\n`
    }

    Object.entries(robotSettings).forEach(([robot, setting]) => {
      if (setting !== 'Default') {
        content += `User-agent: ${robot}\n${setting === 'Allowed' ? 'Allow: /' : 'Disallow: /'}\n\n`
      }
    })

    if (restrictedDirectories) {
      restrictedDirectories.split('\n').forEach(dir => {
        if (dir.trim()) {
          content += `Disallow: ${dir.trim()}\n`
        }
      })
    }

    setGeneratedContent(content.trim())
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
  }

  const downloadRobotsTxt = () => {
    const blob = new Blob([generatedContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'robots.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
      <main className="container mx-auto px-6 py-12 pt-24">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6">
            Generate Your Robots.txt File
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Create a robots.txt file for your website to guide search engines on how to crawl your pages.
            Simply configure your preferences and generate the file instantly.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-0 shadow-lg bg-white dark:bg-zinc-800/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="general" className="border-zinc-200 dark:border-zinc-700">
                  <AccordionTrigger className="hover:no-underline">General Settings</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 px-1">
                      <div className="space-y-2">
                        <Label htmlFor="default-robots" className="text-sm font-medium">Default - All Robots are:</Label>
                        <Select value={defaultRobots} onValueChange={setDefaultRobots}>
                          <SelectTrigger id="default-robots">
                            <SelectValue placeholder="Select default behavior" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Allow">Allowed</SelectItem>
                            <SelectItem value="Disallow">Disallowed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="crawl-delay" className="text-sm font-medium">Crawl-Delay (seconds):</Label>
                        <Input 
                          id="crawl-delay" 
                          type="number"
                          min="0"
                          value={crawlDelay} 
                          onChange={(e) => setCrawlDelay(e.target.value)}
                          placeholder="Enter delay in seconds"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sitemap" className="text-sm font-medium">Sitemap URL:</Label>
                        <Input 
                          id="sitemap" 
                          value={sitemap} 
                          onChange={(e) => setSitemap(e.target.value)}
                          placeholder="https://example.com/sitemap.xml"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="robots" className="border-zinc-200 dark:border-zinc-700">
                  <AccordionTrigger className="hover:no-underline">Search Robots</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 px-1">
                      {searchRobots.map((robot) => (
                        <div key={robot} className="flex items-center justify-between gap-4">
                          <span className="text-sm">{robot}</span>
                          <Select
                            value={robotSettings[robot]}
                            onValueChange={(value) => setRobotSettings({...robotSettings, [robot]: value})}
                          >
                            <SelectTrigger className="w-[140px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Default">Default</SelectItem>
                              <SelectItem value="Allowed">Allowed</SelectItem>
                              <SelectItem value="Disallowed">Disallowed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="directories" className="border-zinc-200 dark:border-zinc-700">
                  <AccordionTrigger className="hover:no-underline">Restricted Directories</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 px-1">
                      <Label htmlFor="restricted-directories" className="text-sm font-medium">Enter directories to restrict:</Label>
                      <Textarea
                        id="restricted-directories"
                        value={restrictedDirectories}
                        onChange={(e) => setRestrictedDirectories(e.target.value)}
                        placeholder="Enter one directory per line&#10;Example:&#10;/admin&#10;/private"
                        rows={6}
                        className="font-mono"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white dark:bg-zinc-800/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Generated Robots.txt</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={generatedContent}
                readOnly
                className="h-[300px] mb-6 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 rounded-lg font-mono resize-none"
              />
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button 
                  onClick={generateRobotsTxt} 
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-white rounded-full transition-all duration-200"
                >
                  Generate Robots.txt
                </Button>
                <div className="flex gap-3">
                  <Button 
                    onClick={copyToClipboard} 
                    variant="outline" 
                    className="flex-1 sm:flex-initial rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    disabled={!generatedContent}
                  >
                    <Copy className="mr-2 h-4 w-4" /> Copy
                  </Button>
                  <Button 
                    onClick={downloadRobotsTxt} 
                    variant="outline" 
                    className="flex-1 sm:flex-initial rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    disabled={!generatedContent}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
  )
}