import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
    return (
        <ServiceComponent
            title="QuickBooks Integration & Bookkeeping"
            description="Streamline your finances with expert QuickBooks setup, integration, and ongoing bookkeeping services."
            features={[
                "QuickBooks Setup & Training",
                "Automated Bank Feeds",
                "Expense & Income Tracking",
                "Invoicing & Payments",
                "Financial Reporting",
            ]}
            serviceDescription="Our QuickBooks services help you take control of your business finances. We handle setup, integration, and ongoing bookkeeping so you can focus on growing your business. Whether you’re new to QuickBooks or need advanced automation, we tailor our solutions to fit your needs."
            contactPageUrl="/contact"
            benefits={[
                {
                    title: "Accurate Financial Records",
                    description:
                        "Ensure your books are always up-to-date and accurate, reducing errors and saving time during tax season.",
                },
                {
                    title: "Time Savings",
                    description:
                        "Automate repetitive bookkeeping tasks and free up your time to focus on running your business.",
                },
                {
                    title: "Better Cash Flow Management",
                    description:
                        "Track income and expenses in real time, helping you make informed financial decisions.",
                },
                {
                    title: "Professional Invoicing",
                    description:
                        "Create and send professional invoices, track payments, and get paid faster.",
                },
                {
                    title: "Custom Reporting",
                    description:
                        "Generate detailed financial reports to gain insights into your business performance.",
                },
                {
                    title: "Seamless Integrations",
                    description:
                        "Connect QuickBooks with your bank, payment processors, and other business tools for a streamlined workflow.",
                },
                {
                    title: "Compliance & Security",
                    description:
                        "Stay compliant with tax regulations and keep your financial data secure.",
                },
                {
                    title: "Expert Support",
                    description:
                        "Get ongoing support and training from QuickBooks professionals whenever you need it.",
                },
            ]}
        />
    )
}
