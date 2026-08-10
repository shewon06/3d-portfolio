import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ordered strictly in the EXACT sequence as the webpage scrolls from top to bottom
  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    PORTFOLIO_DATA.services && { label: 'Services', href: '#services', id: 'services' },
    PORTFOLIO_DATA.technologyStack && { label: 'Tech Stack', href: '#tech-marquee', id: 'tech-marquee' },
    PORTFOLIO_DATA.skillCategories && { label: 'Skills', href: '#skills', id: 'skills' },
    PORTFOLIO_DATA.projects && { label: 'Projects', href: '#projects', id: 'projects' },
    PORTFOLIO_DATA.research && { label: 'Research', href: '#research', id: 'research' },
    PORTFOLIO_DATA.experiences && { label: 'Experience', href: '#experience', id: 'experience' },
    PORTFOLIO_DATA.education && { label: 'Education', href: '#education', id: 'education' },
    PORTFOLIO_DATA.personalBrand && { label: 'Manifesto', href: '#brand', id: 'brand' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ].filter(Boolean);

  const handleAudioToggle = () => {
    const state = soundFx.toggleSound();
    setSoundEnabled(state);
    if (state) soundFx.playSuccess();
  };

  const handleLinkClick = () => {
    soundFx.playClick();
    setMobileOpen(false);
  };

  return (
    <header style={{
      position: 'fixed',
      top: '1.2rem',
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 1rem',
      pointerEvents: 'none'
    }}>
      <div style={{
        background: scrolled ? 'rgba(10, 12, 18, 0.94)' : 'rgba(15, 18, 28, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '40px',
        padding: '0.5rem 1.4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.2rem',
        pointerEvents: 'auto',
        maxWidth: '1200px',
        width: '100%',
        justifyContent: 'space-between',
        transition: 'var(--transition-smooth)',
        boxShadow: scrolled ? '0 15px 35px rgba(0, 0, 0, 0.7)' : '0 10px 30px rgba(0, 0, 0, 0.4)'
      }}>

        {/* Brand Logo */}
        <a href="#hero" onClick={handleLinkClick} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          color: 'var(--text-main)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '0.5px',
          paddingRight: '0.8rem',
          borderRight: '1px solid rgba(255, 255, 255, 0.15)',
          whiteSpace: 'nowrap'
        }}>
          <img
            src="/shewon-logo.png"
            alt="Shewon Hettiarachchi Logo"
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(59, 130, 246, 0.5)',
              boxShadow: '0 0 10px rgba(0, 243, 255, 0.3)'
            }}
          />
          <span>SHEWON.DEV</span>
        </a>

        {/* Desktop Links in Exact Website Scroll Order */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                onMouseEnter={() => soundFx.playHover()}
                style={{
                  color: isActive ? '#ffffff' : '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'var(--transition-fast)',
                  position: 'relative',
                  padding: '0.35rem 0.6rem',
                  borderRadius: '12px',
                  background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                  whiteSpace: 'nowrap'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {/* Audio Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => soundFx.playHover()}
            title={soundEnabled ? "Mute Sound FX" : "Enable Sound FX"}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: soundEnabled ? '#3b82f6' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              transition: 'var(--transition-fast)'
            }}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '5rem',
          left: '1rem',
          right: '1rem',
          background: 'rgba(10, 12, 18, 0.96)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          pointerEvents: 'auto',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  color: isActive ? '#3b82f6' : '#ffffff',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 500,
                  padding: '0.4rem 0'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        .desktop-nav::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
