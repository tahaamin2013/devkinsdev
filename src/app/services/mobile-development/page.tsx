import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
    return (
        <ServiceComponent
            title="Mobile App Development"
            description="Build high-quality, scalable mobile applications tailored to your business needs for iOS and Android platforms."
            features={[
                "iOS & Android Development",
                "Cross-Platform Solutions",
                "UI/UX Design",
                "App Store Deployment",
                "API Integration",
            ]}
            serviceDescription="Our mobile development services cover the entire app lifecycle, from concept and design to development, deployment, and ongoing support. We leverage the latest technologies to deliver robust, user-friendly mobile applications that help you engage your audience and grow your business."
            contactPageUrl="/contact"
            benefits={[
                {
                    title: "Custom Solutions",
                    description:
                        "Get mobile apps tailored to your unique business requirements and goals.",
                },
                {
                    title: "Cross-Platform Expertise",
                    description:
                        "Reach more users with apps that work seamlessly on both iOS and Android devices.",
                },
                {
                    title: "User-Centric Design",
                    description:
                        "Delight your users with intuitive interfaces and engaging experiences.",
                },
                {
                    title: "Scalable Architecture",
                    description:
                        "Build apps that grow with your business and handle increasing user demand.",
                },
                {
                    title: "Fast Time-to-Market",
                    description:
                        "Accelerate your app launch with efficient development processes and proven frameworks.",
                },
                {
                    title: "Ongoing Support",
                    description:
                        "Rely on our team for maintenance, updates, and feature enhancements post-launch.",
                },
                {
                    title: "Integration Capabilities",
                    description:
                        "Connect your app with third-party services, APIs, and backend systems.",
                },
                {
                    title: "App Store Compliance",
                    description:
                        "Ensure your app meets all guidelines for smooth approval and publishing.",
                },
            ]}
        />
    )
}
