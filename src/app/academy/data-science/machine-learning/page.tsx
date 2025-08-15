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
    name: "PapersWithCode",
    url: "https://paperswithcode.com/",
    description:
      "Papers with Code links research papers in AI with open-source code, promoting accessibility and innovation.",
    tags: ["AI", "Machine Learning", "Research"],
    pros: "Provides easy access to research papers and their corresponding code.",
    cons: "Quality of code varies across projects.",
  },
  {
    name: "ArXiv",
    url: "https://arxiv.org/",
    description: "ArXiv hosts a vast collection of research papers across multiple disciplines, including AI and machine learning.",
    tags: ["Research", "AI", "Machine Learning"],
    pros: "Extensive repository of research papers across various fields.",
    cons: "No direct links to code implementations."
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    description: "GitHub is a platform for hosting and sharing open-source projects, including many implementations of machine learning algorithms.",
    tags: ["Open-Source", "Code Repository", "Collaboration"],
    pros: "Widely used for sharing code with version control and collaboration tools.",
    cons: "Lacks dedicated research paper integration."
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/",
    description: "Kaggle offers datasets, notebooks, and competitions, helping practitioners apply machine learning techniques.",
    tags: ["Data Science", "Machine Learning", "Competitions"],
    pros: "Great resource for datasets and applied learning opportunities.",
    cons: "Focuses more on competitions than linking research papers."
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/",
    description: "Google Scholar provides access to scholarly articles and citations across various disciplines.",
    tags: ["Research", "Citations", "Academia"],
    pros: "Excellent for finding academic papers and tracking citations.",
    cons: "No integration with code or implementations."
  },
  {
    name: "Semantic Scholar",
    url: "https://www.semanticscholar.org/",
    description: "Semantic Scholar uses AI to provide enhanced search and insights for academic papers.",
    tags: ["Research", "AI", "Scholarly Articles"],
    pros: "AI-driven insights and recommendations for research papers.",
    cons: "Limited emphasis on open-source code integration."
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

