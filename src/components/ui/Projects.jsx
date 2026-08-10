import React, { useState } from 'react';
import { Layers, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique categories dynamically
  const uniqueCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleFilterClick = (cat) => {
    soundFx.playClick();
    setFilter(cat);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <Layers size={14} />
          <span>// FEATURED PROJECTS & EXPERIMENTS</span>
        </div>

        <h2 className="section-title">
          SOFTWARE, AI & <br />
          <span className="text-gradient">CREATIVE TECHNOLOGY PROJECTS</span>
        </h2>

        <p className="section-subtitle">
          Explore AI automation lab experiments, relational SQL database architectures, thermal printer software tools, and creative business initiatives.
        </p>

        {/* Dynamic Category Filters */}
        <div style={{
          display: 'flex',
          gap: '0.6rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {uniqueCategories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                onMouseEnter={() => soundFx.playHover()}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '30px',
                  background: isActive ? 'var(--cyan-glow)' : 'rgba(15, 18, 28, 0.8)',
                  color: isActive ? '#000' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--cyan-glow)' : '1px solid var(--border-glass)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'var(--transition-bounce)',
                  boxShadow: isActive ? '0 0 20px rgba(0, 243, 255, 0.5)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              onMouseEnter={() => soundFx.playHover()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: '16px'
              }}
            >
              {/* Image Preview Container */}
              <div style={{
                position: 'relative',
                height: '220px',
                overflow: 'hidden',
                borderBottom: '1px solid var(--border-glass)'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                />

                {/* Top Category & Type Badges */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    background: 'rgba(7, 8, 12, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--cyan-glow)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px'
                  }}>
                    {project.category}
                  </div>
                  {project.type && (
                    <div style={{
                      background: 'rgba(168, 85, 247, 0.85)',
                      backdropFilter: 'blur(10px)',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px'
                    }}>
                      {project.type}
                    </div>
                  )}
                </div>

                {/* Quick Action Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(7, 8, 12, 0.65)',
                  backdropFilter: 'blur(4px)',
                  opacity: 0,
                  transition: 'var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem'
                }}
                className="card-hover-overlay"
                >
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedProject(project);
                    }}
                    className="btn btn-primary"
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
                  >
                    <Eye size={16} />
                    <span>INSPECT PROJECT</span>
                  </button>
                </div>
              </div>

              {/* Card Body Content */}
              <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  marginBottom: '0.8rem',
                  color: 'var(--text-main)'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  flex: 1,
                  lineHeight: 1.6
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--purple-glow)',
                        background: 'rgba(168, 85, 247, 0.08)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(168, 85, 247, 0.2)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-glass)'
                }}>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedProject(project);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--cyan-glow)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span>View Architecture</span>
                    <Eye size={14} />
                  </button>

                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--text-muted)' }}
                        title="GitHub Repository"
                        onClick={() => soundFx.playClick()}
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--cyan-glow)' }}
                        title="Live Demo"
                        onClick={() => soundFx.playClick()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .glass-card:hover .card-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
