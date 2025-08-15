'use client'

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, ThumbsDown, ThumbsUp } from 'lucide-react';
import Link from "next/link";

const digitalmarketingweb = [
  {
    name: "Crunchbase",
    url: "https://www.crunchbase.com/",
    description:
      "Crunchbase helps you discover companies, startups, and investors.",
    tags: ["Startups", "Startups", "Business Insights"],
    pros: "Comprehensive database of companies and investors.",
    cons: "Some features require a paid subscription.",
  },
  {
    name: "AngelList",
    url: "https://angel.co/",
    description: "A platform connecting startups with investors and talent.",
    tags: ["Startups", "Investors", "Job Opportunities"],
    pros: "Offers startup job listings and investment opportunities.",
    cons: "Focuses more on early-stage startups and less on comprehensive business insights."
  },
  {
    name: "CB Insights",
    url: "https://www.cbinsights.com/",
    description: "Provides data and research n startups, investors, and emerging technologies.",
    tags: ["Startups", "Investments", "Marke Research"],
    pros: "High-quality market research and technology trends.",
    cons: "Primarily targets corporate users with high subscription costs."
  },
  {
    name: "PitchBook",
    url: "https://pitchbook.com/",
    description: "A platform offering private market data and insights for investors.",
    tags: ["Private Markets", "Investments", "Startups"],
    pros: "Extensive data on venture capital, private equity, and M&A.",
    cons: "Expensive and geared towards institutional users."
  },
  {
    name: "Dealroom",
    url: "https://dealroom.co/",
    description: "Data platform for tech ecosystems, startups, and venture capital.",
    tags: ["Startups", "Venture Capital", "Tech Ecosystems"],
    pros: "Detailed insights into European and global tech ecosystems.",
    cons: "Smaller database compared to some competitors."
  },
  {
    name: "Mattermark",
    url: "http://mattermark.com/",
    description: "Data-driven insights on startups and companies.",
    tags: ["Startups", "Growth Signals", "Funding"],
    pros: "Easy-to-navigate platform with growth signal tracking.",
    cons: "Discontinued standalone product and integrated into other platforms."
  }
];

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 pt-20">
      <div className="mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">
          Discover Business Insights
        </h1>
        <p className="text-xl text-center mb-12 text-zinc-600 dark:text-zinc-400">
          Explore detailed profiles of companies, startups, and investors. Stay
          updated on industry trends, funding rounds, and innovation worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalmarketingweb.map((Website, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {Website.name}
                </CardTitle>
                <CardDescription>
                  <Link
                    href={Website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center"
                  >
                    Visit website <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">{Website.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Website.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ThumbsUp className="w-5 h-5 mr-2 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-zinc-700 dark:text-zinc-300">{Website.pros}</p>
                  </div>
                  <div className="flex items-start">
                    <ThumbsDown className="w-5 h-5 mr-2 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-zinc-700 dark:text-zinc-300">{Website.cons}</p>
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

