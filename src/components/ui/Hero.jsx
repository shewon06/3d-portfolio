import React from 'react';
import { ArrowRight, MapPin, Sparkles, Brain, Cpu, ShieldCheck } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import Hero3DCanvas from '../canvas/Hero3DCanvas';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Hero() {
  const { profile, contact } = PORTFOLIO_DATA;

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: '8.5rem',
      paddingBottom: '3rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'transparent'
    }}>
      {/* Background Constellation & Star Particles */}
      <Hero3DCanvas />

      <div className="container" style={{ zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>

          {/* Left Column: Editorial Headline & Content */}
          <div>
            {/* Top Status & Location Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                background: 'rgba(30, 41, 59, 0.7)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: '#93c5fd',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }} />
                <span>✦ OPEN TO CREATIVE TECHNOLOGY PROJECTS</span>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <MapPin size={13} />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Large Editorial Headline */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.6rem, 5.8vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              marginBottom: '1.6rem'
            }}>
              Building <br />
              Intelligent Digital <br />
              <span className="text-gradient">Experiences.</span>
            </h1>

            {/* Subtitle with Highlighted Keywords */}
            <p style={{
              fontSize: 'clamp(1.02rem, 1.6vw, 1.2rem)',
              color: '#94a3b8',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
              maxWidth: '580px',
              fontWeight: 400
            }}>
              <strong style={{ color: '#ffffff', fontWeight: 600 }}>{profile.name}</strong> — {profile.role} bridging software engineering, <strong style={{ color: '#ffffff', fontWeight: 600 }}>Artificial Intelligence</strong>, relational databases, and <strong style={{ color: '#ffffff', fontWeight: 600 }}>creative technology</strong>.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: '#ffffff',
                  color: '#000000',
                  padding: '0.85rem 1.8rem',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-heading)',
                  textDecoration: 'none',
                  transition: 'var(--transition-bounce)',
                  boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)'
                }}
              >
                <span>View Case Studies</span>
                <ArrowRight size={16} />
              </a>

              {contact?.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Creative Modern High-Tech Portrait Frame */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            
            {/* Outer Cyber Aura Glow */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              borderRadius: '24px',
              padding: '10px',
              background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.35) 0%, rgba(168, 85, 247, 0.25) 50%, rgba(59, 130, 246, 0.4) 100%)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 243, 255, 0.25)',
              transition: 'var(--transition-smooth)'
            }} className="glass-card">

              {/* Portrait Image Container */}
              <div style={{
                width: '100%',
                height: '480px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                background: '#0c0e14'
              }}>
                <img
                  src="/shewon-profile.jpg"
                  alt="Shewon Hettiarachchi - Creative Technologist"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'contrast(1.05) brightness(1.02)',
                    transition: 'transform 0.6s ease'
                  }}
                />

                {/* Subtle Holographic Shimmer Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(7, 8, 11, 0.85) 100%)',
                  pointerEvents: 'none'
                }} />

                {/* Cyber Corner Data Marker */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--cyan-glow)',
                  background: 'rgba(7, 8, 11, 0.75)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 243, 255, 0.3)',
                  letterSpacing: '1px'
                }}>
                  [ SHEWON.DEV // VERIFIED ]
                </div>
              </div>

            </div>

            {/* Floating Info Pill 1 (Top Right) */}
            <div className="glass-card float-element" style={{
              position: 'absolute',
              top: '-5%',
              right: '-4%',
              padding: '0.75rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              zIndex: 3,
              borderRadius: '30px',
              background: 'rgba(12, 14, 20, 0.9)',
              border: '1px solid var(--border-glass-bright)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(0, 243, 255, 0.15)',
                color: 'var(--cyan-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Brain size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>CORE FOCUS</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>AI & Automation</div>
              </div>
            </div>

            {/* Floating Info Pill 2 (Bottom Left) */}
            <div className="glass-card float-element" style={{
              position: 'absolute',
              bottom: '5%',
              left: '-6%',
              padding: '0.75rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              zIndex: 3,
              borderRadius: '30px',
              background: 'rgba(12, 14, 20, 0.9)',
              border: '1px solid var(--border-glass-bright)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
              animationDelay: '2.5s'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(168, 85, 247, 0.15)',
                color: 'var(--violet-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>ROLE</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Creative Technologist</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Metrics Ribbon */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '2.2rem',
        marginTop: '3.5rem',
        zIndex: 2
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>
                {profile.experienceYears}<span style={{ color: '#3b82f6' }}>+</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '1px', marginTop: '0.2rem' }}>
                YEARS BUILDING
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>
                {profile.completedProjects}<span style={{ color: '#3b82f6' }}>+</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '1px', marginTop: '0.2rem' }}>
                PROJECTS & WORKS
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>
                {profile.codeCommits}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '1px', marginTop: '0.2rem' }}>
                CODE COMMITS
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>
                {profile.clientsSatisfied}<span style={{ color: '#3b82f6' }}>+</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '1px', marginTop: '0.2rem' }}>
                SATISFIED CLIENTS
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
