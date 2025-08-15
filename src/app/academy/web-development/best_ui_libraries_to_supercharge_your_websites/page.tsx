import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";

const uiLibraries = [
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    description: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    tags: ["React", "Tailwind CSS", "Customizable"],
    pros: "Highly customizable and accessible components",
    cons: "Requires manual setup and integration for each component"
  },
  {
    name: "React Aria",
    url: "https://react-spectrum.adobe.com/react-aria/",
    description: "A library of React Hooks that provides accessible UI primitives for your design system.",
    tags: ["React", "Accessibility", "Adobe"],
    pros: "Excellent accessibility features and flexibility",
    cons: "Steeper learning curve for developers new to accessibility concepts"
  },
  {
    name: "NextUI",
    url: "https://nextui.org",
    description: "Beautiful, fast and modern React UI library that allows you to create beautiful and accessible user interfaces.",
    tags: ["React", "Modern", "Customizable"],
    pros: "Modern design and good performance",
    cons: "Limited number of components compared to more established libraries"
  },
  {
    name: "Flowbite",
    url: "https://flowbite.com",
    description: "Open-source library of UI components based on the utility-first Tailwind CSS framework.",
    tags: ["Tailwind CSS", "Components", "Open Source"],
    pros: "Seamless integration with Tailwind CSS projects",
    cons: "May require additional customization for unique designs"
  },
  {
    name: "Chakra UI",
    url: "https://chakra-ui.com",
    description: "A simple, modular and accessible component library that gives you the building blocks to build React applications.",
    tags: ["React", "Accessible", "Customizable"],
    pros: "Highly accessible and easy to customize",
    cons: "Default design may look generic without customization"
  },
  {
    name: "daisyUI",
    url: "https://daisyui.com",
    description: "The most popular component library for Tailwind CSS. Free and open-source.",
    tags: ["Tailwind CSS", "Components", "Open Source"],
    pros: "Large selection of pre-built components",
    cons: "May increase bundle size if not properly optimized"
  },
  {
    name: "Tailblocks",
    url: "https://tailblocks.cc",
    description: "Ready-to-use Tailwind CSS blocks for your next project. Open source and free to use.",
    tags: ["Tailwind CSS", "Blocks", "Open Source"],
    pros: "Quick to implement pre-designed sections",
    cons: "Limited customization options compared to component libraries"
  },
  {
    name: "Ant Design",
    url: "https://ant.design",
    description: "A design system for enterprise-level products. Create an efficient and enjoyable work experience.",
    tags: ["React", "Enterprise", "Comprehensive"],
    pros: "Comprehensive set of components for enterprise applications",
    cons: "Opinionated design that may not fit all project styles"
  },
  {
    name: "React Suite",
    url: "https://rsuitejs.com",
    description: "A suite of React components, sensible UI design, and a friendly development experience.",
    tags: ["React", "Components", "Customizable"],
    pros: "Rich set of components with good documentation",
    cons: "Less popular, which may result in fewer community resources"
  },
  {
    name: "Material-UI",
    url: "https://mui.com",
    description: "Ready-to-use foundational React components, free forever. It includes Material Design components that implement Google's Material Design.",
    tags: ["React", "Material Design", "Comprehensive"],
    pros: "Widely adopted with extensive documentation",
    cons: "Can be challenging to customize away from the Material Design look"
  },
  {
    name: "LottieFiles",
    url: "https://lottiefiles.com",
    description: "The world's largest online platform for the world's smallest animation format for designers, developers, and more.",
    tags: ["Animation", "Lightweight", "Cross-platform"],
    pros: "Lightweight and performant animations",
    cons: "Limited to animation-specific use cases"
  },
  {
    name: "Aceternity UI",
    url: "https://ui.aceternity.com/",
    description: "Beautiful and modern components built with Tailwind CSS and Framer Motion.",
    tags: ["Tailwind CSS", "Framer Motion", "Modern"],
    pros: "Unique and eye-catching animations",
    cons: "May be too flashy for some professional applications"
  },
  {
    name: "Tailwind Components",
    url: "https://tailwindcomponents.com",
    description: "A free repository for community components using Tailwind CSS. Over 2847+ components available.",
    tags: ["Tailwind CSS", "Community", "Free"],
    pros: "Wide variety of community-contributed components",
    cons: "Quality and consistency may vary across components"
  },
  {
    name: "Tailwind Flex",
    url: "https://tailwindflex.com",
    description: "1100+ Free Tailwind CSS examples and components to kickstart your projects.",
    tags: ["Tailwind CSS", "Examples", "Free"],
    pros: "Large collection of ready-to-use examples",
    cons: "May require additional work to integrate into existing projects"
  },
  {
    name: "Radix UI",
    url: "https://www.radix-ui.com/",
    description: "An open source UI component library for building high-quality, accessible design systems and web apps.",
    tags: ["React", "Accessible", "Headless"],
    pros: "Highly accessible and customizable headless components",
    cons: "Requires more styling work as it's a headless library"
  },
  {
    name: "Motion Primitives",
    url: "https://motion-primitives.com",
    description: "UI kit focused on beautiful, animated interfaces. Provides beautifully designed motion components that are easy to copy-paste, customizable, and open source.",
    tags: ["Animation", "React", "Open Source"],
    pros: "Specialized in motion and animations with easy copy-paste implementation",
    cons: "Focused specifically on animations, may need to be combined with other UI libraries for full functionality"
  },
  {
    name: "Creative Tim Tailwind CSS Components",
    url: "https://www.creative-tim.com/twcomponents/",
    description: "A collection of fully coded UI components based on Tailwind CSS for fast and responsive web design.",
    tags: ["Tailwind CSS", "UI Components", "Professional"],
    pros: "High-quality, pre-designed components for professional web projects",
    cons: "Requires a license for full access to premium components"
  },
  {
    name: "Best website to get inspirations",
    url: "https://www.webdesign-inspiration.com/",
    description: "A collection of fully coded UI components based on Tailwind CSS for fast and responsive web design.",
    tags: ["Tailwind CSS", "UI Components", "Professional"],
    pros: "High-quality, pre-designed components for professional web projects",
    cons: "Requires a license for full access to premium components"
  },
  {
    name: "Kokonut UI",
    url: "https://kokonutui.com/",
    description: "A collection of fully coded UI components based on Tailwind CSS for fast and responsive web design.",
    tags: ["Tailwind CSS", "UI Components", "Professional"],
    pros: "High-quality, pre-designed components for professional web projects, easy to use, Make sure to view kokonutui pro",
    cons: "Requires a license for full access to premium components"
  },
];

export default function UILibrariesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Best UI Libraries to Supercharge Your Websites
        </h1>
        <p className="text-xl text-center mb-12 text-zinc-600 dark:text-zinc-400">
          Explore these powerful UI libraries to enhance your web development projects and create stunning user interfaces.
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
