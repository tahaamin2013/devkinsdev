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
        name: "ElevenLabs",
        url: "https://elevenlabs.io/",
        description:
            "AI voice cloning and text-to-speech platform with natural-sounding voices.",
        tags: ["Text-to-Speech", "Voice Cloning", "AI"],
        pros: "High-quality voice cloning and text-to-speech capabilities.",
        cons: "Limited free tier and pricing based on usage.",
    },
    {
        name: "Murf AI",
        url: "https://murf.ai/",
        description: "AI-powered text-to-speech platform with diverse voices and languages.",
        tags: ["Text-to-Speech", "Voice Over", "AI Voices"],
        pros: "Multiple languages and accents, easy-to-use interface.",
        cons: "Some voices may sound less natural than others.",
    },
    {
        name: "Play.ht",
        url: "https://play.ht/",
        description: "Create realistic AI voices for content, videos, and applications.",
        tags: ["Text-to-Speech", "Voice Synthesis", "Content Creation"],
        pros: "Extensive voice library and good customization options.",
        cons: "Higher pricing tiers for advanced features.",
    },
    {
        name: "Speechify",
        url: "https://speechify.com/",
        description: "Convert text to natural-sounding speech with AI technology.",
        tags: ["Text-to-Speech", "Accessibility", "Productivity"],
        pros: "Works across multiple platforms and devices.",
        cons: "Premium features require subscription.",
    },
    {
        name: "Amazon Polly",
        url: "https://aws.amazon.com/polly/",
        description: "AWS service that turns text into lifelike speech.",
        tags: ["Text-to-Speech", "Cloud Service", "Enterprise"],
        pros: "Reliable infrastructure and scalable pricing.",
        cons: "Requires technical knowledge to implement."
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

