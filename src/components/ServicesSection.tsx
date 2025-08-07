"use client"

import { useState } from "react"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function ServicesSection() {
  // Initialize activeService to null, so no service is selected by default.
  const [activeService, setActiveService] = useState<string | null>(null)

  const services = [
    {
      id: "excel-work-samples",
      name: "Excel Work Samples",
      description: "Fix Excel formulas, VBA macros, automate templates, create dashboards, pivot tables, and data visualization.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "web-development",
      name: "Web Development",
      description: "Create web apps, business websites, SaaS applications using Next.js, React, MongoDB, and more.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "python-data-extraction",
      name: "Python Data Extraction",
      description: "Develop desktop applications and data extraction solutions using Python.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "power-bi-services",
      name: "Power BI Services",
      description: "Design interactive Power BI dashboards, reports, and data models for advanced analytics and seamless reporting.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "financial-modelling-services",
      name: "Financial Modelling Services",
      description: "Build custom financial models, 3-statement models, budgeting, forecasting, and valuation models.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const currentService = services.find((service) => service.id === activeService)

  return (
    <section className="min-h-screen bg-background text-foreground py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Blurry Circles in Background */}
      <div className="absolute bottom-10 right-[100px] w-96 h-96 bg-accent-teal opacity-20 rounded-full filter blur-2xl -z-10"></div>
      <div className="absolute top-20 left-[50px] w-80 h-80 bg-accent-teal opacity-15 rounded-full filter blur-2xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent-teal opacity-10 rounded-full filter blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-teal opacity-10 rounded-full filter blur-2xl -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-teal opacity-15 rounded-full filter blur-2xl -z-10"></div>


      {/* Subtle radial gradient background effect with new color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(0, 211, 243, 0.05) 0%, transparent 50%)",
        }}
      ></div>

      {/* Floating Image (absolute position on the right) */}
      {currentService && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[400px] lg:w-[600px] lg:h-[500px] xl:w-[700px] xl:h-[600px] pointer-events-none z-0 opacity-70 transition-opacity duration-500">
          <Image
            src={currentService.image || "/placeholder.svg"}
            alt={`Illustration for ${currentService.name}`}
            layout="fill"
            objectFit="contain"
            className="p-4" // Add some padding to the image if it's a UI illustration
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Separate and at the top */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Our Service</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What <span className="text-accent-teal">Services</span> We&apos;re Offering
          </h2>
          {/* General description - kept from first screenshot, now under the main header */}
          <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">
            we offer services that can help businesses improve their visibility and business reputation online, expand market
            reach, and increase turnover through effective digital strategies. Following are the services we provide
          </p>
        </div>

        {/* Service List - Full width rows */}
        <div className="w-full space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`py-4 border-b border-border cursor-pointer transition-all duration-300 ease-in-out
              ${activeService === service.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)} // Set to null on mouse leave to clear selection
            >
              <div className="max-w-7xl mx-auto flex items-baseline justify-between px-4 md:px-6 lg:px-8">
                <div className="flex items-baseline flex-wrap gap-x-8">
                  <h3 className="text-3xl md:text-4xl font-semibold pl-4 flex items-baseline">
                    {service.name}
                    {activeService === service.id && (
                      <span className="inline-block w-2 h-2 bg-accent-teal rounded-full ml-4"></span>
                    )}
                  </h3>
                  {activeService === service.id && (
                    <p className="text-muted-foreground text-lg mt-2 md:mt-0 max-w-xl">
                      {service.description}
                    </p>
                  )}
                </div>
                {activeService !== service.id && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground transition-colors duration-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
