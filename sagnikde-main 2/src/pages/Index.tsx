import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ReviewerSection from "@/components/ReviewerSection";
import AwardsSection from "@/components/AwardsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ResearchSection />
        <PublicationsSection />
        <ReviewerSection />
        <AwardsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
