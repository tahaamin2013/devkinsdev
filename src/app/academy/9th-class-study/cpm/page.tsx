import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ThumbsUp, ThumbsDown } from 'lucide-react'
import Link from "next/link"

const digitalmarketingweb = [
 {
   name: "MathisFun",
   url: "https://www.mathsisfun.com/",
   description: "A fun and interactive platform to learn mathematics with engaging explanations and exercises.",
   tags: ["Math", "Education", "Interactive"],
   pros: "Easy to understand, interactive exercises, free access",
   cons: "Limited advanced topics"
 },
 {
   name: "JavaLab",
   url: "https://javalab.org/",
   description: "JavaLab offers interactive science simulations for better understanding of physics, chemistry, and biology.",
   tags: ["Science", "Simulations", "Education"],
   pros: "Engaging animations, broad science topics, free to use",
   cons: "Requires internet, limited customization"
 },
 {
   name: "PhET Interactive Simulations",
   url: "https://phet.colorado.edu/en/simulations",
   description: "PhET provides free interactive math and science simulations to enhance conceptual learning.",
   tags: ["Math", "Science", "Simulations"],
   pros: "Well-designed simulations, supports multiple languages, research-based learning",
   cons: "Some simulations require Java or Flash, limited mobile optimization"
 },
]

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20">
      <div className="mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          Best Websites for 9th Class Study
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600">
        Discover powerful educational resources to enhance your understanding of math and science through interactive learning.
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
