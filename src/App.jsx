import React, { useState, useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Services from './components/ui/Services';
import TechMarquee from './components/ui/TechMarquee';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import Research from './components/ui/Research';
import Experience from './components/ui/Experience';
import Education from './components/ui/Education';
import PersonalBrand from './components/ui/PersonalBrand';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';
import BackgroundParticles from './components/canvas/BackgroundParticles';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'tech-marquee', 'skills', 'projects', 'research', 'experience', 'education', 'brand', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Entrance Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appeared');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll('.glass-card, .section-title, .section-tag');
    elements.forEach((el) => {
      el.classList.add('animate-fade-up');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Background Star Particle Canvas */}
      <BackgroundParticles />

      {/* Cyber Grid Overlay */}
      <div className="cyber-grid-overlay" />

      {/* Floating Glass Navbar */}
      <Navbar activeSection={activeSection} />
      
      {/* Page Content Sections in Exact Sequential Order */}
      <main>
        <Hero />
        <About />
        <Services />
        <TechMarquee />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Education />
        <PersonalBrand />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
