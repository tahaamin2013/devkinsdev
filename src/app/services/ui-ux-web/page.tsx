import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
    return (
        <ServiceComponent
            title="UI/UX Web Design"
            description="Create visually stunning and highly usable web interfaces that engage users and drive business results."
            features={[
                "Responsive Web Design",
                "User Research & Personas",
                "Wireframing & Prototyping",
                "Interaction Design",
                "Usability Testing",
            ]}
            serviceDescription="Our UI/UX Web Design services focus on crafting seamless digital experiences that delight users and achieve your business objectives. From initial research and ideation to prototyping, testing, and final implementation, we ensure every aspect of your website is optimized for usability, accessibility, and visual appeal."
            contactPageUrl="/contact"
            benefits={[
                {
                    title: "User-Centered Approach",
                    description:
                        "We prioritize your users’ needs to create intuitive and enjoyable web experiences.",
                },
                {
                    title: "Modern Aesthetics",
                    description:
                        "Benefit from clean, contemporary designs that reflect your brand identity.",
                },
                {
                    title: "Mobile-First Design",
                    description:
                        "Reach users on any device with responsive layouts and adaptive interfaces.",
                },
                {
                    title: "Improved Engagement",
                    description:
                        "Increase conversions and retention with thoughtfully designed user journeys.",
                },
                {
                    title: "Accessibility Compliance",
                    description:
                        "Ensure your website is usable by everyone, meeting WCAG and ADA standards.",
                },
                {
                    title: "Iterative Prototyping",
                    description:
                        "Validate ideas early and often with interactive prototypes and user feedback.",
                },
                {
                    title: "Performance Optimization",
                    description:
                        "Deliver fast-loading, efficient web experiences for all users.",
                },
                {
                    title: "Collaborative Process",
                    description:
                        "Work closely with our team throughout the design process for the best results.",
                },
            ]}
        />
    )
}
