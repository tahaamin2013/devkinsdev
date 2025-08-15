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
import Head from "next/head";

export default function Home() {
  return (
    <div >
            <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
     crossOrigin="anonymous"></script>
     <meta name="google-adsense-account" content="ca-pub-9571755808195636"/>

        </Head>
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
