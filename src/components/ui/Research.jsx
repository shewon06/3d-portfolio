import React from 'react';
import { BookOpen, Sparkles, Shield, Activity, GitBranch } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Research() {
  const { research } = PORTFOLIO_DATA;
  if (!research || research.length === 0) return null;

  return (
    <section id="research" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <BookOpen size={14} />
          <span>// SCIENTIFIC & TECHNICAL RESEARCH</span>
        </div>

        <h2 className="section-title">
          EMERGING TECHNOLOGY & <br />
          <span className="text-gradient">ACADEMIC INVESTIGATIONS</span>
        </h2>

        <p className="section-subtitle">
          In-depth exploratory research examining artificial intelligence in healthcare diagnostics and multi-cloud cybersecurity innovation.
        </p>

        {/* Research Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem'
        }}>
          {research.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              onMouseEnter={() => soundFx.playHover()}
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Scientific Data Marker Header */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    background: 'rgba(168, 85, 247, 0.12)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    color: 'var(--violet-glow)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem'
                  }}>
                    <Activity size={13} />
                    <span>RESEARCH DOMAIN #{idx + 1}</span>
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--cyan-glow)'
                  }}>
                    [ ACADEMIC STUDY ]
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  marginBottom: '0.8rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>

                {/* Research Area */}
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--cyan-glow)',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  Focus: {item.area}
                </div>

                {/* Topics Matrix */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    Key Focus Topics:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.topics.map((topic, k) => (
                      <span
                        key={k}
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-main)',
                          background: 'rgba(59, 130, 246, 0.08)',
                          padding: '0.3rem 0.7rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Indicator */}
              <div style={{
                paddingTop: '1.2rem',
                borderTop: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                fontFamily: 'var(--font-mono)'
              }}>
                <span>STATUS: RESEARCH COMPLETED</span>
                <GitBranch size={15} style={{ color: 'var(--cyan-glow)' }} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
