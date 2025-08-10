import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Palette, Code, Briefcase } from "lucide-react"
import AboutSection from "@/components/about"
import ReviewsSection from "@/components/reviews-section"
import { AnimatedSection } from "@/components/animated-section"
import OurStory from "@/components/our-story"

export default function Component() {
  const services = [
    {
      category: "Design",
      icon: Palette,
      items: ["Graphic Design", "Brand Visuals", "App Design", "Web Design", "3D Modeling"],
    },
    {
      category: "Development",
      icon: Code,
      items: ["Web Development", "App Development", "Shopify Websites", "Ecommerce Websites"],
    },
    {
      category: "Business Solutions",
      icon: Briefcase,
      items: ["Video Editing", "Video Content", "QuickBooks", "Accounting"],
    },
  ]

  return (
    <div className="min-h-screen mt-[50px] bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Office For hero section.jpg"
          alt="Modern office space with diverse team collaborating"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative py-12 z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Empowering Businesses, Inspiring Innovation
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            We are Devkins, a full-service digital agency dedicated to transforming ideas into digital excellence.
          </p>
          <Button size="lg" className="bg-[#00b8db] hover:bg-[#00a5c7] text-white px-8 py-3 text-lg">
            Get In Touch
          </Button>
        </div>
      </section>
<AboutSection />
      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-[#00b8db]">Mission</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge technology solutions, unlocking their growth potential by
                connecting them with passionate and skilled engineers. We strive to deliver innovative and impactful
                digital experiences.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-[#00b8db]">Vision</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be the leading digital partner, envisioning a future where technology seamlessly integrates with
                human creativity to solve real-world problems and create meaningful digital experiences that make a
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    <AnimatedSection animationType="zoomIn">
          <OurStory />
        </AnimatedSection>
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Devkins offers a wide range of services across design, development, and business solutions to meet your
              unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((category, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-3">
                    <category.icon className="w-8 h-8 text-[#00b8db]" />
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#00b8db]">&bull;</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ReviewsSection />

      {/* Simple CTA */}
      <section className="py-16 mt-7 bg-[#00b8db] -mb-5 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Lets create something amazing together.</p>
          <a href="/contact" tabIndex={-1} className="inline-block">
            <Button size="lg" variant="secondary" className="bg-white text-[#00b8db] hover:bg-gray-100 px-8 py-3 text-lg">
              Start Your Project
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
