import React from 'react';
import { Brain, Code, Globe, Database, Sparkles, Palette, Building2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Services() {
  const { services } = PORTFOLIO_DATA;
  if (!services || services.length === 0) return null;

  const iconMap = {
    Brain: <Brain size={24} />,
    Code: <Code size={24} />,
    Globe: <Globe size={24} />,
    Database: <Database size={24} />,
    Sparkles: <Sparkles size={24} />,
    Palette: <Palette size={24} />,
    Building2: <Building2 size={24} />
  };

  return (
    <section id="services" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <Sparkles size={14} />
          <span>// SERVICES & CAPABILITIES</span>
        </div>

        <h2 className="section-title">
          WHAT I BUILD & <br />
          <span className="text-gradient">INTELLIGENT SOLUTIONS</span>
        </h2>

        <p className="section-subtitle">
          Transforming ideas into practical digital applications, automated workflows, and scalable technology systems.
        </p>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.8rem'
        }}>
          {services.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              onMouseEnter={() => soundFx.playHover()}
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.12)',
                  border: '1px solid rgba(0, 243, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-glow)',
                  marginBottom: '1.5rem',
                  boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)'
                }}>
                  {iconMap[item.icon] || <Terminal size={24} />}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  marginBottom: '0.8rem',
                  color: 'var(--text-main)'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7
                }}>
                  {item.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.8rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--cyan-glow)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <span>// CAPABILITY #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
