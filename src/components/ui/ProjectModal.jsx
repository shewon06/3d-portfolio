import React from 'react';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundFx } from '../../utils/sound';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          border: '1px solid var(--border-glass-bright)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 243, 255, 0.2)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(15, 18, 28, 0.8)',
            border: '1px solid var(--border-glass)',
            color: 'var(--text-main)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Category Badge */}
        <div className="section-tag" style={{ marginBottom: '1rem' }}>
          <Sparkles size={12} />
          <span>{project.category} // PROJECT ARCHITECTURE</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          fontWeight: 800,
          marginBottom: '1rem',
          color: 'var(--cyan-glow)'
        }}>
          {project.title}
        </h3>

        {/* Project Image */}
        <div style={{
          width: '100%',
          height: '320px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          position: 'relative',
          border: '1px solid var(--border-glass)'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Description */}
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '1.8rem'
        }}>
          {project.fullDescription || project.description}
        </p>

        {/* Metrics Grid */}
        {project.metrics && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '1.8rem',
            padding: '1.2rem',
            background: 'rgba(0, 243, 255, 0.04)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 243, 255, 0.15)'
          }}>
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  {key}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--purple-glow)' }}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--cyan-glow)',
                background: 'rgba(0, 243, 255, 0.08)',
                padding: '0.35rem 0.8rem',
                borderRadius: '6px',
                border: '1px solid rgba(0, 243, 255, 0.2)'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Link Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            onClick={() => soundFx.playClick()}
          >
            <ExternalLink size={16} />
            <span>LAUNCH LIVE DEMO</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            onClick={() => soundFx.playClick()}
          >
            <GithubIcon size={16} />
            <span>VIEW SOURCE CODE</span>
          </a>
        </div>

      </div>
    </div>
  );
}
