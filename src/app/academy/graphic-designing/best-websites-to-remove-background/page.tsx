import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";

const uiLibraries = [
  {
    name: "Addy Background Remover",
    url: "https://bg.addy.ie/",
    description: "A free and simple tool to remove the background of any image instantly with AI.",
    tags: ["Image Editing", "Background Removal", "AI"],
    pros: "Quick and efficient background removal",
    cons: "Limited editing features beyond background removal"
  },
];

export default function UILibrariesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          FREE Websites for Removing Background of Images
        </h1>
        <p className="text-xl text-center mb-12 text-zinc-600 dark:text-zinc-400">
          Explore these powerful tools to remove backgrounds from your images quickly and easily, using advanced AI technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiLibraries.map((library, index) => (
            <Card
              key={index}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{library.name}</CardTitle>
                <CardDescription>
                  <Link
                    href={library.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-500 flex items-center"
                  >
                    Visit website <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">{library.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {library.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ThumbsUp className="w-5 h-5 mr-2 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-zinc-700 dark:text-zinc-300">{library.pros}</p>
                  </div>
                  <div className="flex items-start">
                    <ThumbsDown className="w-5 h-5 mr-2 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-zinc-700 dark:text-zinc-300">{library.cons}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
