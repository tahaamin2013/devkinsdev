"use client"

import Image from "next/image"
import { useState } from "react"

interface Project {
    id: number
    title: string
    description: string
    skills: string[]
    image?: string
    website?: string
    video?: string
}

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isImageClicked, setIsImageClicked] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
                <div
                        className={`group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/10 ${
                                isImageClicked ? "flex flex-col-reverse" : ""
                        }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => window.open(project.website, "_blank")}
                >
                        <div
                                className={`relative w-full transition-all duration-700 ease-out ${
                                        isImageClicked ? "h-32 order-last" : "h-64"
                                }`}
                                onClick={(e) => {
                                        e.stopPropagation()
                                        setIsModalOpen(true)
                                }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                                e.stopPropagation()
                                                setIsModalOpen(true)
                                        }
                                }}
                        >
                                <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                                     <div className="relative h-full w-[500px] transition-all duration-700 ease-out opacity-100 translate-x-0 animate-in fade-in slide-in-from-right-8">
                                     </div>
                                     {project.video ? (
                                        <video
                                                src={project.video}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                        />
                                     ) : (
                                        <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                fill
                                                className="object-cover w-full h-full transition-all duration-7000 ease-in-out object-top hover:object-bottom"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                     )}
                                </div>
                        </div>

                        <div className={`p-6 space-y-4 transition-all duration-700 ${isImageClicked ? "pt-4 pb-4" : ""}`}>
                                <h3 className="text-xl font-bold line-clamp-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                </h3>

                                <p
                                        className={`text-sm text-muted-foreground group-hover:text-foreground/70 transition-all duration-300 ${
                                                isImageClicked ? "line-clamp-2" : "line-clamp-3"
                                        }`}
                                >
                                        {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                        {project.skills.slice(0, 3).map((skill, index) => (
                                                <span
                                                        key={index}
                                                        className="inline-block px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full transition-all duration-300 hover:bg-primary/20 hover:scale-105 group-hover:translate-y-0"
                                                        style={{
                                                                opacity: isHovered ? 1 : 0.8,
                                                                transform: isHovered ? `translateY(0px)` : `translateY(0px)`,
                                                        }}
                                                >
                                                        {skill}
                                                </span>
                                        ))}
                                        {project.skills.length > 3 && (
                                                <span className="inline-block px-3 py-1.5 text-xs font-medium text-muted-foreground bg-muted/50 rounded-full transition-all duration-300 group-hover:bg-muted/80 group-hover:text-foreground">
                                                        +{project.skills.length - 3} more
                                                </span>
                                        )}
                                </div>

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                </div>
                        </div>
                </div>
        </>
    )
}
