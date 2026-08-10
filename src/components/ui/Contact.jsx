import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Contact() {
  const { profile, contact } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playClick();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundFx.playSuccess();

      // Trigger Cyber Confetti Blast
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f3ff', '#a855f7', '#f59e0b', '#22c55e']
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <Mail size={14} />
          <span>// INITIATE CONTACT</span>
        </div>

        <h2 className="section-title">
          LET'S COLLABORATE & <br />
          <span className="text-gradient">BUILD INTELLIGENT EXPERIENCES</span>
        </h2>

        <p className="section-subtitle">
          Open to creative technology projects, AI application development, software engineering opportunities, and digital innovation concepts.
        </p>

        {/* 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem'
        }}>

          {/* Left Column: Direct Info & Social Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            
            {/* Info Cards */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--cyan-glow)',
                marginBottom: '1.5rem'
              }}>
                COMMUNICATION CHANNELS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid rgba(0, 243, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan-glow)'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Direct Email</div>
                    <a href={`mailto:${contact.email}`} style={{ fontWeight: 600, color: 'var(--text-main)', textDecoration: 'none' }}>
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4ade80'
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Phone / WhatsApp</div>
                    <a href={contact.whatsapp} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: '#4ade80', textDecoration: 'none' }}>
                      {contact.phone} (0705505052)
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--purple-glow)'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Location</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{profile.location}</div>
                  </div>
                </div>

                {/* Response SLA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-glow)'
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Response SLA</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Guaranteed within 24 hours</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                // DIRECT CONNECT & MATRIX
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {contact?.whatsapp && (
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => soundFx.playClick()}
                    style={{
                      flex: 1,
                      padding: '0.8rem 1.2rem',
                      borderRadius: '10px',
                      background: 'rgba(34, 197, 94, 0.12)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      color: '#4ade80',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <MessageSquare size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}

                {contact?.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => soundFx.playClick()}
                    style={{
                      flex: 1,
                      padding: '0.8rem 1.2rem',
                      borderRadius: '10px',
                      background: 'rgba(15, 18, 28, 0.8)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--cyan-glow)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Interactive Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem 0'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '2px solid #22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22c55e',
                  marginBottom: '1.5rem',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.8rem', color: '#4ade80' }}>
                  TRANSMISSION RECEIVED!
                </h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '400px', marginBottom: '2rem' }}>
                  Thank you for reaching out, Shewon will respond to your message shortly!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  color: 'var(--text-main)',
                  marginBottom: '0.5rem'
                }}>
                  SEND DIRECT MESSAGE TO SHEWON HETTIARACHCHI
                </h3>

                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-glow)', marginBottom: '0.4rem' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '8px',
                      background: 'rgba(7, 8, 12, 0.6)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-glow)', marginBottom: '0.4rem' }}>
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '8px',
                      background: 'rgba(7, 8, 12, 0.6)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-glow)', marginBottom: '0.4rem' }}>
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, collaboration, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '8px',
                      background: 'rgba(7, 8, 12, 0.6)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  {loading ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>TRANSMIT MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
