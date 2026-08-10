import React from 'react';
import { Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function TechMarquee() {
  const { technologyStack } = PORTFOLIO_DATA;
  if (!technologyStack || technologyStack.length === 0) return null;

  // Duplicate items for continuous seamless loop
  const marqueeItems = [...technologyStack, ...technologyStack];

  return (
    <section id="tech-marquee" className="section" style={{ padding: '4rem 0', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '2rem' }}>
        <div className="section-tag" style={{ marginBottom: '0.5rem' }}>
          <Cpu size={14} />
          <span>// TECHNOLOGY STACK & TOOLS</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800 }}>
          CORE TECH MARQUEE
        </h3>
      </div>

      {/* Infinite Marquee Track Container */}
      <div className="marquee-container" style={{
        display: 'flex',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem 0'
      }}>
        <div className="marquee-track" style={{
          display: 'flex',
          gap: '1.2rem',
          whiteSpace: 'nowrap',
          animation: 'scrollMarquee 35s linear infinite'
        }}>
          {marqueeItems.map((tech, idx) => (
            <div
              key={idx}
              className="glass-card"
              onMouseEnter={() => soundFx.playHover()}
              style={{
                padding: '0.75rem 1.6rem',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'var(--transition-bounce)'
              }}
            >
              <span style={{ color: 'var(--cyan-glow)' }}>⚡</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
