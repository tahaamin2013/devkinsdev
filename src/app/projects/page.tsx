import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Yveslupitu - Garment Store",
    description:
      "A comprehensive e-commerce platform tailored for a garment store, featuring seamless user experience, secure payment integration, and responsive design to enhance customer engagement.",
    skills: ["UI/UX Design", "Web development", "Mobile Development", "Project management", "Responsive Design"],
    image: "/Yveslupitu.png",
    website: "https://yveslupitu.com",
  },
  {
    id: 2,
    title: "ThryveToday - Medical Trainer",
    description:
      "A cutting-edge medical training platform designed to empower users with personalized health insights, interactive training modules, and seamless integration with wearable devices to promote healthier lifestyles.",
    skills: ["UI/UX Design", "Mobile Development", "Backend Development", "API Integration", "User Testing"],
    image: "/ThryveToday.png",
    website: "https://thryvetoday.com",
  },
  {
    id: 3,
    title: "Great Think Construction",
    description:
      "A modern construction management platform that streamlines project planning, resource allocation, and real-time collaboration, ensuring efficiency and transparency in construction workflows.",
    skills: [
      "UI/UX Design",
      "Web Development",
      "Data Visualization",
      "Performance Optimization",
      "Cross-platform Integration",
    ],
    image: "/Greaththing.png",
    website: "https://greatthink.com",
  },
  // {
  //   id: 4,
  //   title: "Beauty Bugs - Beauty Industry",
  //   description:
  //     "An innovative platform for the beauty industry, offering tools for enhanced customer engagement, streamlined operations, and optimized performance for beauty professionals and businesses.",
  //   skills: ["UI/UX Design", "Web Development", "Performance Optimization"],
  //   image: "/beautybugs.png",
  //   website: "https://beautybugs.com",
  // },
  {
    id: 6,
    title: "Pittsburgh Window Direct",
    description:
      "A modern website for Pittsburgh Window Direct, a company specializing in selling and installing high-quality windows for homes and businesses.",
    skills: ["UI/UX Design", "Web Development", "Performance Optimization"],
    image: "/screencapture-pittsburghwindowdirect-2025-08-12-07_46_12.png",
    website: "https://pittsburghwindowdirect.com",
  },
  {
    id: 7,
    title: "Sajid Al-Qari",
    description:
      "A personal portfolio website showcasing projects and expertise in web development and design.",
    skills: ["Web Development", "UI/UX Design", "Portfolio"],
    image: "/sajid-al-qari.png",
    website: "https://sajid-al-qari.vercel.app/",
  },
  {
    id: 8,
    title: "Patrick Stock Management",
    description:
      "A comprehensive stock management system designed for efficient inventory tracking, organization, and real-time stock updates.",
    skills: ["Web Development", "Backend Development", "Database Management"],
    image: "/patrick-stock-management.png",
    website: "https://patrick-stock-management.vercel.app/",
  },
  {
    id: 4,
    title: "Carpet Area Calculator",
    description:
      "An intuitive tool for calculating carpet area in various room shapes, helping users make informed decisions for flooring and interior design.",
    skills: ["Web Development", "UI/UX Design", "Responsive Design"],
    image: "/carpet-area-calculator.png",
    website: "https://carpet-area-calculator.vercel.app/",
  },
{
  id: 5,
  title: "Costantini Watches — Luxury Watch Boutique",
  description: "E-commerce storefront for high-end luxury watches (Rolex, Omega, Patek Philippe). Features: elegant product galleries, quick view, brand & price filters, secure checkout, responsive layout and SEO optimised product pages to showcase premium inventory.",
  skills: [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "E-commerce (Shopify / Headless)",
    "UI/UX Design",
    "Responsive Design",
    "SEO"
  ],
  image: "/costantini-watches.png",
  website: "https://costantiniwatches.com/"
}
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen mt-10 bg-gradient-to-b from-background to-background/50 text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary/80 uppercase tracking-widest animate-slide-up">
              Featured Work
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight animate-slide-up [animation-delay:100ms]">
            Live Projects
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed animate-slide-up [animation-delay:200ms]">
            Explore our portfolio of innovative solutions across diverse industries, showcasing cutting-edge design and
            development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-scale-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
           
        </div>
      </div>
      <div className=" px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          KSA SportsScope Dashboard For Saudia Ministry
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl text-balance leading-relaxed">
          A comprehensive sports analytics dashboard developed for the Saudi Ministry, providing real-time data visualization, performance metrics, and strategic insights to optimize sports management and athlete development across the kingdom.
        </p>
      </div>
       <video
                                                src='/ksa.mp4'
                                                className="w-screen h-full object-cover"
                                                autoPlay
                                                controls
                                                muted
                                                loop
                                        />
    </main>
  )
}
