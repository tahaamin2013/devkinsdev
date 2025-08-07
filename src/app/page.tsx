import AboutSection from "@/components/about";
import CoreTechnologies from "@/components/core-technologies";
import ContactForm from "@/components/EmailForm";
// import MeetPrincipals from "@/components/Meetour";
import HomepageCarousel from "@/components/page";
import ProductivitySection from "@/components/productivity-section";
import ReviewsSection from "@/components/reviews-section";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/why-choose-section";

export default function Home() {
  return (
    <div >
      <HomepageCarousel />
      {/* <MeetPrincipals />  */}
<ServicesSection />

      <AboutSection />
      <CoreTechnologies />
      <ProductivitySection />
      <ReviewsSection />
            <WhyChooseSection />
      <ContactForm />
    </div>
  );
}
