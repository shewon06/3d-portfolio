import React from 'react';
import { Sparkles, Terminal, Flame, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function PersonalBrand() {
  const { personalBrand } = PORTFOLIO_DATA;
  if (!personalBrand) return null;

  return (
    <section id="brand" className="section" style={{ background: 'var(--bg-secondary)', padding: '8rem 0' }}>
      <div className="container">
        <div className="glass-card" style={{
          padding: '4rem 2.5rem',
          textAlign: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(18, 21, 32, 0.9), rgba(12, 14, 20, 0.95))',
          border: '1px solid var(--border-glass-bright)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 243, 255, 0.15)'
        }}>
          {/* Section Tag */}
          <div className="section-tag" style={{ margin: '0 auto 2rem auto' }}>
            <Sparkles size={14} />
            <span>// CREATIVE TECHNOLOGY MANIFESTO</span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-1px',
            marginBottom: '2rem'
          }}>
            <span className="text-gradient">{personalBrand.headline.toUpperCase()}</span>
          </h2>

          {/* Keywords Ribbon */}
          {personalBrand.keywords && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.8rem',
              maxWidth: '850px',
              margin: '0 auto 2.5rem auto'
            }}>
              {personalBrand.keywords.map((word, idx) => (
                <span
                  key={idx}
                  onMouseEnter={() => soundFx.playHover()}
                  style={{
                    padding: '0.5rem 1.2rem',
                    borderRadius: '30px',
                    background: 'rgba(0, 243, 255, 0.08)',
                    border: '1px solid rgba(0, 243, 255, 0.25)',
                    color: 'var(--cyan-glow)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                >
                  ⚡ {word}
                </span>
              ))}
            </div>
          )}

          {/* Core Focus Interests */}
          {personalBrand.interests && (
            <div style={{
              borderTop: '1px solid var(--border-glass)',
              paddingTop: '2rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1rem'
              }}>
                [ CORE EXPLORATION INTERESTS ]
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
                {personalBrand.interests.map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
