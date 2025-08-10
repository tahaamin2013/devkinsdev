import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
    return (
        <ServiceComponent
            title="3D Modeling Services"
            description="Transform your ideas into stunning 3D models for visualization, prototyping, and production."
            features={[
                "Custom 3D Model Creation",
                "Product Visualization",
                "Architectural Modeling",
                "3D Rendering & Animation",
                "File Optimization for Printing",
            ]}
            serviceDescription="Our 3D Modeling services bring your concepts to life with high-quality, accurate, and visually compelling models. Whether you need product prototypes, architectural visualizations, or assets for animation and printing, we deliver tailored solutions to meet your needs."
            contactPageUrl="/contact"
            benefits={[
                {
                    title: "Precision & Detail",
                    description:
                        "Receive meticulously crafted 3D models that capture every detail of your vision.",
                },
                {
                    title: "Versatile Applications",
                    description:
                        "Use your models for marketing, prototyping, animation, AR/VR, or 3D printing.",
                },
                {
                    title: "Photorealistic Rendering",
                    description:
                        "Showcase your products or designs with lifelike renders and animations.",
                },
                {
                    title: "Fast Turnaround",
                    description:
                        "Get your 3D models delivered quickly without compromising on quality.",
                },
                {
                    title: "Collaborative Process",
                    description:
                        "Work closely with our experts to refine and perfect your models.",
                },
                {
                    title: "Optimized for Performance",
                    description:
                        "Receive models optimized for your intended platform, ensuring smooth performance.",
                },
                {
                    title: "Confidential & Secure",
                    description:
                        "Your ideas and data are handled with the utmost confidentiality and security.",
                },
                {
                    title: "Expert Support",
                    description:
                        "Benefit from guidance and support throughout your 3D modeling project.",
                },
            ]}
        />
    )
}
