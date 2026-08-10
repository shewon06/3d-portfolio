import React from 'react';
import { GraduationCap, Calendar, Award, Building } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Education() {
  const { education } = PORTFOLIO_DATA;
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <GraduationCap size={14} />
          <span>// ACADEMIC FOUNDATION</span>
        </div>

        <h2 className="section-title">
          EDUCATION & <br />
          <span className="text-gradient">HIGHER QUALIFICATIONS</span>
        </h2>

        <p className="section-subtitle">
          Software engineering higher studies, computing fundamentals, database systems, and foundational technology education.
        </p>

        {/* Education Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              onMouseEnter={() => soundFx.playHover()}
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Period Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--cyan-glow)',
                  background: 'rgba(0, 243, 255, 0.08)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 243, 255, 0.22)',
                  marginBottom: '1.2rem'
                }}>
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>

                {/* Qualification Title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  color: 'var(--text-main)'
                }}>
                  {item.qualification}
                </h3>

                {/* Institution */}
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--violet-glow)',
                  marginBottom: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Building size={16} />
                  <span>{item.institution}</span>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}>
                  {item.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-dim)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <Award size={14} style={{ color: 'var(--cyan-glow)' }} />
                <span>QUALIFICATION VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
