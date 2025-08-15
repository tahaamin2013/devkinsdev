import Link from "next/link";
import React from "react";

const COLOR_PALETTE = {
  green: {
    gradient: "from-[#3AD89F] to-[#54C8DA]",
  },
  blue: {
    gradient: "from-[#3B82F6] to-[#60A5FA]",
  },
  purple: {
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
  },
  red: {
    gradient: "from-[#EF4444] to-[#F87171]",
  },
  orange: {
    gradient: "from-[#F97316] to-[#FDBA74]",
  },
};

// Define an interface for the section data
interface SectionData {
  heading: string;
  color: keyof typeof COLOR_PALETTE;
  cards: {
    title: string;
    description: string;
    href: string;
  }[];
}

// Create an array of section data with predefined color keys
const DEVELOPMENT_SECTIONS: SectionData[] = [
  {
    heading: "Website Development",
    color: "green",
    cards: [
      {
        title: "Best UI Libraries to Supercharge Your Websites",
        description:
          "Create amazing interfaces with these essential UI libraries.",
        href: "/web-development/best_ui_libraries_to_supercharge_your_websites",
      },
      {
        title: "Tailwind CSS Buttons",
        description:
          "Collection of ready-to-use Tailwind CSS button components.",
        href: "/web-development/tailwind-css-buttons",
      },
    ],
  },
  {
    heading: "Digital Marketing",
    color: "purple",
    cards: [
      {
        title: "Best Websites for Digital Marketing",
        description:
          "Boost your online presence with advanced marketing techniques.",
        href: "/digital-marketing/best_websites_for_digital_marketing",
      },
    ],
  },
  {
    heading: "Graphic Designing",
    color: "blue",
    cards: [
      {
        title: "Best Websites to Remove Background",
        description:
          "Create intuitive and engaging mobile application interfaces.",
        href: "/graphic-designing/best-websites-to-remove-background",
      },
    ],
  },
  {
    heading: "Business",
    color: "orange",
    cards: [
      {
        title: "Discover Business Insights",
        description:
          "Explore detailed profiles of companies, startups, and investors. Stay updated on industry trends, funding rounds, and innovation worldwide.",
        href: "/business/discover-business-insights",
      },
      {
        title: "Text To Speech",
        description:
          "Explore detailed profiles of companies, startups, and investors. Stay updated on industry trends, funding rounds, and innovation worldwide.",
        href: "/business/text-to-speech",
      },
      {
        title: "Zcal Professional Meeting Scheduler",
        description:
          "A free and easy-to-use online meeting scheduler for booking appointments and managing your calendar.",
        href: "https://zcal.co/",
      },
      {
        title: "Sarmaaya - Investment & Business Tools in Pakistan",
        description:
          "Explore Pakistan stock market insights, investment tools, and financial education with Sarmaaya.pk.",
        href: "https://sarmaaya.pk/",
      },
    ],
  },
  {
    heading: "SEO (Search Engine Optimization)",
    color: "blue",
    cards: [
      {
        title: "Machine Learning",
        description:
          "Explore detailed profiles of companies, startups, and investors. Stay updated on industry trends, funding rounds, and innovation worldwide.",
        href: "/data-science/machine-learning",
      },
      {
        title: "sitelike.org",
        description: "Find similar and alternative websites to any site.",
        href: "https://www.sitelike.org/",
      },
      {
        title: "valentin.app",
        description: "an easy way to get localized SERPs at an exact location without any additional tools.",
        href: "https://valentin.app/",
      },
      {
        title: "Topical Relevance",
        description: "For entities and seo phrases",
        href: "https://topicalrelevance.com/lsi-entities-google/",
      },
    ],
  },
  {
    heading: "Data Science",
    color: "purple",
    cards: [
      {
        title: "Machine Learning",
        description:
          "Explore detailed profiles of companies, startups, and investors. Stay updated on industry trends, funding rounds, and innovation worldwide.",
        href: "/data-science/machine-learning",
      },
    ],
  },
  {
    heading: "9th Class Study",
    color: "blue",
    cards: [
      {
        title: "Chemistry, Physics and Math",
        description: "",
        href: "/9th-class-study/cpm",
      },
    ],
  },
  {
    heading: "Educational Resources",
    color: "red",
    cards: [
      {
        title: "German Academic Exchange Service (DAAD)",
        description:
          "Information on scholarships, research opportunities, and academic programs in Germany.",
        href: "https://www.daad.de/de/",
      },
    ],
  },
  {
    heading: "Generative AI",
    color: "blue",
    cards: [
      {
        title: "Websites for sharing content",
        description:
          "Information on scholarships, research opportunities, and academic programs in Germany.",
        href: "https://airforshare.com/",
      },
{
  title: "AI Leaderboard",
  description: "Explore top AI models ranked by performance, benchmarks, and real-world evaluations.",
  href: "https://lmarena.ai/leaderboard",
}


    ],
  },
  {
    heading: "Best Domain Providers",
    color: "blue",
    cards: [
      {
        title: "https://www.ovhcloud.com/asia/",
        description:
          "Information on scholarships, research opportunities, and academic programs in Germany.",
        href: "https://www.ovhcloud.com/asia/",
      },
    ],
  },
];

const Learning: React.FC = () => {
  return (
    <div className="pb-12 mt-24 px-4 md:px-8 lg:px-16">
      {DEVELOPMENT_SECTIONS.map((section, sectionIndex) => {
        const palette = COLOR_PALETTE[section.color];

        return (
          <div key={sectionIndex} className="mb-12">
            <h2 className="mt-4 pb-4 text-3xl font-bold text-zinc-800 dark:text-zinc-200">
              {section.heading}
            </h2>
            <div className="grid max-w-full gap-y-5 transition-all delay-100 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {section.cards.map((card, cardIndex) => {
                const isExternal = card.href.startsWith("http");
                const linkContent = (
                  <div
                    className={`flex h-full flex-col rounded-xl bg-zinc-100 dark:bg-zinc-900 px-5 pb-5 pt-[22px] shadow-[0_1px_1px_rgba(31,33,36,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all ease-in-out group-focus:pt-5 group-focus:shadow-inset-around`}
                    data-testid="topic-card"
                  >
                    <h2 className="pb-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                      {card.title}
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {card.description}
                    </p>
                  </div>
                );

                return isExternal ? (
                  <a
                    key={cardIndex}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-gradient-to-r ${palette.gradient} pt-[3px] shadow-sm transition-all ease-in-out hover:shadow-lg focus:pt-[5px] focus:shadow-inset`}
                    data-discover="true"
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link
                    key={cardIndex}
                    href={`/academy${card.href}`}
                    className={`group relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-gradient-to-r ${palette.gradient} pt-[3px] shadow-sm transition-all ease-in-out hover:shadow-lg focus:pt-[5px] focus:shadow
::contentReference[oaicite:1]{index=1}-inset`}
                    data-discover="true"
                  >
                    {" "}
                    {linkContent}{" "}
                  </Link>
                );
              })}{" "}
            </div>{" "}
          </div>
        );
      })}{" "}
    </div>
  );
};

export default Learning;
