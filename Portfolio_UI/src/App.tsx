import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './features/hero/HeroSection';
import { AboutSection } from './features/about/AboutSection';
import { ProjectsSection } from './features/projects/ProjectsSection';
import { CertificationsSection } from './features/certifications/CertificationsSection';
import { ExperienceSection } from './features/experience/ExperienceSection';
import { SkillsSection } from './features/skills/SkillsSection';
import { ContactSection } from './features/contact/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
