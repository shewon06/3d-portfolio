import React, { useEffect, useState } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { soundFx } from '../../utils/sound';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#040508',
      borderTop: '1px solid var(--border-glass)',
      padding: '3rem 0 2rem 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--cyan-glow)',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800
            }}>
              <Terminal size={18} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem' }}>
              SHEWON HETTIARACHCHI <span style={{ color: 'var(--cyan-glow)' }}>// CREATIVE TECHNOLOGIST</span>
            </span>
          </div>

          {/* UTC Clock Readout */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--cyan-glow)',
            background: 'rgba(0, 243, 255, 0.06)',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            border: '1px solid rgba(0, 243, 255, 0.2)'
          }}>
            SYSTEM TIME: {timeStr || 'LOADING...'}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} Shewon Hettiarachchi. Built with AI, React, Three.js, WebGL & Modern CSS.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Creative Technology. Intelligent Solutions.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
