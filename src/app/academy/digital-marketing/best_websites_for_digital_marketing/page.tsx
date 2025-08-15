import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ThumbsUp, ThumbsDown } from 'lucide-react'
import Link from "next/link"

const digitalmarketingweb = [
 {
   name: "Refrens",
   url: "https://www.refrens.com/",
   description: "All-in-one business management platform for invoicing, proposals, and payments.",
   tags: ["Invoicing", "Proposals", "Payments"],
   pros: "Comprehensive tools, user-friendly, free basic plan",
   cons: "Advanced features need paid plans"
 },
 {
   name: "Drippi.ai",
   url: "https://www.drippi.ai/",
   description: "Drippi AI automates personalized Twitter/X DMs, simplifies lead generation, and provides analytics to enhance engagement and outreach efficiency",
   tags: ["AI Marketing", "Automation", "Content"],
   pros: "Advanced AI, data insights, multi-channel support",
   cons: "Expensive, steep learning curve"
 },
 {
  name: "ManyChat",
  url: "https://manychat.com",
  description: "ManyChat is a platform for automating conversations to engage customers via Facebook Messenger, SMS, and Instagram.",
  tags: ["chatbot", "automation", "eCommerce", "SMS"],
  pros: "Multi-platform support, high eCommerce ROI, easy to use, wide app integrations.",
  cons: "Limited free features, complex for advanced use, best for small businesses."
},
{
  name: "Calendly",
  url: "https://calendly.com",
  description: "Calendly automates scheduling by allowing users to share their availability and book meetings without email back-and-forth.",
  tags: ["scheduling", "automation", "productivity"],
  pros: "Simple to use, integrates with calendars, supports video tools.",
  cons: "Limited free features, some advanced options need payment."
},
{
  name: "GMass",
  url: "https://www.gmass.co",
  description: "GMass is an email marketing tool built into Gmail, offering features like mail merge, email tracking, and automated follow-ups.",
  tags: ["email", "marketing", "automation", "Gmail"],
  pros: "Simple Gmail integration, supports follow-ups, and tracks emails effectively.",
  cons: "Limited free features and lacks advanced analytics for large campaigns."
},

{
  name: "Skrapp",
  url: "https://skrapp.io",
  description: "Skrapp is a lead generation tool for finding professional email addresses from LinkedIn, company websites, and public data for B2B outreach.",
  tags: ["lead generation", "email finder", "B2B", "LinkedIn"],
  pros: "Efficient email discovery, accurate results, and user-friendly interface.",
  cons: "Limited free credits and less suitable for large-scale enterprise needs."
},

{
  name: "Disboard",
  url: "https://disboard.org",
  description: "Disboard is a platform for discovering and listing Discord servers, connecting users with communities based on interests like gaming, anime, tech, and more.",
  tags: ["Discord", "community", "server", "list"],
  pros: "Simple interface, supports various categories, and promotes server visibility.",
  cons: "Search results can be cluttered, and some categories lack adequate moderation."
}





]

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20">
      <div className="mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          Best Websites for Digital Marketing
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600">
        Discover powerful digital marketing tools and platforms that can revolutionize your online marketing strategy, boost productivity, and drive business growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalmarketingweb.map((Website, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">{Website.name}</CardTitle>
                <CardDescription>
                  <Link href={Website.url} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 flex items-center">
                    Visit website <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{Website.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Website.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-gray-100 text-gray-800 border border-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ThumbsUp className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{Website.pros}</p>
                  </div>
                  <div className="flex items-start">
                    <ThumbsDown className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{Website.cons}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

