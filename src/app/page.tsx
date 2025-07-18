import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { AchievementsSection } from "@/sections/Achievements";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { EducationSection } from "@/sections/Education"; // Changed import
import { Footer } from "@/sections/Footer";
import { AIChat } from "@/components/AIChat";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <AchievementsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <EducationSection/> {/* Changed from ContactSection */}
      <Footer/>
      <AIChat/>
    </div>
  );
}
