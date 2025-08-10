import AboutSection from "@/components/about";
import { AnimatedSection } from "@/components/animated-section";
import CoreTechnologies from "@/components/core-technologies";
import ContactForm from "@/components/EmailForm";
import OurStory from "@/components/our-story";
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
 <AnimatedSection animationType="fadeIn">
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection animationType="slideFromLeft">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection animationType="slideFromRight">
        <CoreTechnologies />
      </AnimatedSection>

      <AnimatedSection animationType="zoomIn">
        <ProductivitySection />
      </AnimatedSection>

        <AnimatedSection animationType="zoomIn">
          <OurStory />
        </AnimatedSection>

      <AnimatedSection animationType="rotateIn">
        <ReviewsSection />
      </AnimatedSection>

      <AnimatedSection animationType="fadeIn">
        <WhyChooseSection />
      </AnimatedSection>

      <AnimatedSection animationType="slideFromLeft">
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
