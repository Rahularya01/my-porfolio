import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
