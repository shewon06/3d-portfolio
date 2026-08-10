import React from 'react';
import { Briefcase, Calendar, CheckCircle2, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <Briefcase size={14} />
          <span>// CAREER & RECORD</span>
        </div>

        <h2 className="section-title">
          WORK EXPERIENCE & <br />
          <span className="text-gradient">PROFESSIONAL ROLES</span>
        </h2>

        <p className="section-subtitle">
          Proven history across business technology support, digital systems, marketing execution, graphic design, house planning, and software engineering.
        </p>

        {/* Timeline Container */}
        <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px dashed var(--border-glass-bright)' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              onMouseEnter={() => soundFx.playHover()}
              style={{
                marginBottom: '2.5rem',
                padding: '2.2rem',
                position: 'relative'
              }}
            >
              {/* Timeline Glowing Node Marker */}
              <div style={{
                position: 'absolute',
                left: '-2.45rem',
                top: '2.2rem',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: idx === 0 ? 'var(--cyan-glow)' : 'var(--violet-glow)',
                boxShadow: `0 0 15px ${idx === 0 ? 'var(--cyan-glow)' : 'var(--violet-glow)'}`,
                border: '3px solid var(--bg-primary)'
              }} />

              {/* Top Row: Period Badge & Company */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Calendar size={16} style={{ color: 'var(--cyan-glow)' }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--cyan-glow)',
                    background: 'rgba(0, 243, 255, 0.08)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 243, 255, 0.2)'
                  }}>
                    {exp.period}
                  </span>
                </div>

                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--violet-glow)'
                }}>
                  @ {exp.company}
                </div>
              </div>

              {/* Position Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 800,
                marginBottom: '0.8rem',
                color: 'var(--text-main)'
              }}>
                {exp.role}
              </h3>

              {/* Description */}
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {exp.description}
              </p>

              {/* Key Projects if present */}
              {exp.keyProjects && exp.keyProjects.length > 0 && (
                <div style={{
                  marginBottom: '1.5rem',
                  padding: '1rem 1.2rem',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.06)',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <div style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--cyan-glow)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <FolderGit2 size={14} />
                    <span>KEY PROJECTS UNDERTAKEN:</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {exp.keyProjects.map((proj, pIdx) => (
                      <div key={pIdx} style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                        • <strong>{proj.name}</strong> <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({proj.location})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Responsibilities */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {exp.responsibilities.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--cyan-glow)', marginTop: '0.2rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Accomplishments if present */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {exp.achievements.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--violet-glow)', marginTop: '0.2rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
