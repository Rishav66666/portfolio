import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DataMindset from "@/components/DataMindset";
import EducationTimeline from "@/components/EducationTimeline";
import CertificationGrid from "@/components/CertificationGrid";
import AchievementSection from "@/components/AchievementSection";
import AIChatbot from "@/components/AIChatbot";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecruiterSnapshot />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Projects />
        <DataMindset />
        <EducationTimeline />
        <CertificationGrid />
        <AchievementSection />
        <AIChatbot />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
