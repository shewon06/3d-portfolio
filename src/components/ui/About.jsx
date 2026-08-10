import React from 'react';
import { Sparkles, Layers, Brain, Palette, Compass, Zap, Eye, Music, BookOpen, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function About() {
  const { profile, stats, research, education } = PORTFOLIO_DATA;

  const iconMap = {
    Sparkles: <Sparkles size={24} className="icon-glow" />,
    Layers: <Layers size={24} className="icon-glow" />,
    Brain: <Brain size={24} className="icon-glow" />,
    Palette: <Palette size={24} className="icon-glow" />
  };

  const principles = [
    { title: "AI & Intelligent Automation", desc: "Building practical AI-powered workflows, intelligent systems, and prompt engineering solutions.", icon: <Brain size={22} /> },
    { title: "Software & Web Engineering", desc: "Developing reliable software applications, relational SQL databases, and modern web interfaces.", icon: <Zap size={22} /> },
    { title: "Creative Technology & UI/UX", desc: "Combining programming, digital branding, and visual design for engaging user experiences.", icon: <Eye size={22} /> },
    { title: "Research & Continuous Learning", desc: "Exploring AI healthcare diagnostics, cloud cybersecurity, and emerging technology trends.", icon: <BookOpen size={22} /> }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <Sparkles size={14} />
          <span>// ABOUT & PHILOSOPHY</span>
        </div>

        <h2 className="section-title">
          CREATIVE TECHNOLOGY & <br />
          <span className="text-gradient">INTELLIGENT DIGITAL SOLUTIONS</span>
        </h2>

        <p className="section-subtitle">
          Combining software engineering, artificial intelligence, relational databases, and creative design to solve real-world problems.
        </p>

        {/* Top Grid: Bio Card + Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>

          {/* Bio Story Card */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              marginBottom: '1.2rem',
              color: 'var(--cyan-glow)'
            }}>
              BIOGRAPHY & VISION
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              {profile.bio}
            </p>
            <div style={{
              padding: '1.2rem',
              borderRadius: '12px',
              background: 'rgba(0, 243, 255, 0.05)',
              border: '1px solid rgba(0, 243, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Full Name</div>
                <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{profile.fullName}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Location</div>
                <div style={{ fontWeight: 700, color: 'var(--purple-glow)' }}>{profile.location}</div>
              </div>
            </div>
          </div>

          {/* 4-Block Stats Counter Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.2rem'
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card"
                onMouseEnter={() => soundFx.playHover()}
                style={{
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  color: idx % 2 === 0 ? 'var(--cyan-glow)' : 'var(--purple-glow)',
                  marginBottom: '0.8rem'
                }}>
                  {iconMap[stat.icon] || <Sparkles size={24} />}
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  marginBottom: '0.2rem'
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Principles Matrix */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              onMouseEnter={() => soundFx.playHover()}
              style={{ padding: '1.8rem' }}
            >
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '12px',
                background: 'rgba(0, 243, 255, 0.1)',
                border: '1px solid rgba(0, 243, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cyan-glow)',
                marginBottom: '1.2rem'
              }}>
                {item.icon}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                marginBottom: '0.6rem',
                color: 'var(--text-main)'
              }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Research & Education Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {/* Research */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--cyan-glow)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <BookOpen size={20} />
              <span>RESEARCH FOCUS AREAS</span>
            </h3>
            {research.map((res, i) => (
              <div key={i} style={{ marginBottom: '1.2rem', borderBottom: i < research.length - 1 ? '1px dashed var(--border-glass)' : 'none', paddingBottom: '1.2rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>{res.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--purple-glow)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>{res.area}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {res.topics.map((t, k) => (
                    <span key={k} style={{ fontSize: '0.72rem', background: 'rgba(0, 243, 255, 0.06)', color: 'var(--cyan-glow)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--purple-glow)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={20} />
              <span>ACADEMIC BACKGROUND</span>
            </h3>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: '1.2rem', borderBottom: i < education.length - 1 ? '1px dashed var(--border-glass)' : 'none', paddingBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{edu.qualification}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--cyan-glow)', fontFamily: 'var(--font-mono)' }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--purple-glow)', fontWeight: 600, marginBottom: '0.4rem' }}>{edu.institution}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
