import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
    return (
        <ServiceComponent
            title="Shopify Web Development"
            description="Build powerful, scalable, and visually appealing Shopify stores tailored to your brand and business goals."
            features={[
                "Custom Shopify Theme Development",
                "Store Setup & Configuration",
                "App Integration & Customization",
                "Performance Optimization",
                "Shopify SEO Best Practices",
            ]}
            serviceDescription="Our Shopify Web Development services help you launch and grow your online store with a focus on performance, usability, and conversion. From custom theme design and app integrations to store setup and ongoing support, we ensure your Shopify site stands out and delivers results."
            contactPageUrl="/contact"
            benefits={[
                {
                    title: "Tailored Store Design",
                    description:
                        "Get a unique Shopify store that reflects your brand and engages your customers.",
                },
                {
                    title: "Seamless Integrations",
                    description:
                        "Connect your store with essential apps and third-party services for enhanced functionality.",
                },
                {
                    title: "Mobile-Optimized Experience",
                    description:
                        "Reach customers on any device with responsive, fast-loading Shopify themes.",
                },
                {
                    title: "Conversion-Focused Approach",
                    description:
                        "Boost sales with optimized user flows, clear calls-to-action, and streamlined checkout processes.",
                },
                {
                    title: "Ongoing Support",
                    description:
                        "Benefit from continuous improvements, updates, and expert support as your business grows.",
                },
                {
                    title: "Scalable Solutions",
                    description:
                        "Easily expand your store’s capabilities as your product catalog and customer base grow.",
                },
                {
                    title: "Secure & Reliable",
                    description:
                        "Ensure your store is safe, stable, and compliant with Shopify’s best practices.",
                },
                {
                    title: "Data-Driven Insights",
                    description:
                        "Leverage analytics and reporting to make informed decisions and drive business growth.",
                },
            ]}
        />
    )
}
