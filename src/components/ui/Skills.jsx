import React, { useState } from 'react';
import { Cpu, Terminal, Palette, Box, Flame, Code, Zap, Volume2, CheckCircle, Feather, Activity, Brain, Bot, Workflow, Globe, Database, RefreshCw, Shield, Monitor, Layout, MousePointer, Network, Share2, GitBranch, Settings, PenTool, Image, Megaphone, FileText, Server, Sparkles } from 'lucide-react';
import SkillOrbs3D from '../canvas/SkillOrbs3D';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { soundFx } from '../../utils/sound';

export default function Skills() {
  const { skillCategories, technologyStack, services } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const iconMap = {
    Brain: <Brain size={18} />,
    Bot: <Bot size={18} />,
    Zap: <Zap size={18} />,
    Sparkles: <Sparkles size={18} />,
    Code: <Code size={18} />,
    Workflow: <Workflow size={18} />,
    Cpu: <Cpu size={18} />,
    Terminal: <Terminal size={18} />,
    Globe: <Globe size={18} />,
    Palette: <Palette size={18} />,
    Code2: <Code size={18} />,
    Database: <Database size={18} />,
    Layers: <Cpu size={18} />,
    RefreshCw: <RefreshCw size={18} />,
    Shield: <Shield size={18} />,
    Monitor: <Monitor size={18} />,
    Layout: <Layout size={18} />,
    MousePointer: <MousePointer size={18} />,
    Network: <Network size={18} />,
    Share2: <Share2 size={18} />,
    GitBranch: <GitBranch size={18} />,
    Settings: <Settings size={18} />,
    PenTool: <PenTool size={18} />,
    Image: <Image size={18} />,
    Megaphone: <Megaphone size={18} />,
    FileText: <FileText size={18} />,
    Server: <Server size={18} />
  };

  const handleTabChange = (id) => {
    soundFx.playClick();
    setActiveTab(id);
  };

  const currentCategory = skillCategories.find(c => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-tag">
          <Cpu size={14} />
          <span>// TECH MATRIX & 3D WEBGL ORBS</span>
        </div>

        <h2 className="section-title">
          SKILL MATRIX & <br />
          <span className="text-gradient">3D INTERACTIVE CANVAS</span>
        </h2>

        <p className="section-subtitle">
          Hover over the 3D WebGL spheres or switch categories to explore AI automation, software engineering, databases, networking, and creative tech capabilities.
        </p>

        {/* 2-Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'flex-start',
          marginBottom: '3.5rem'
        }}>

          {/* Left Column: Skill Matrix & Category Tabs */}
          <div>
            {/* Category Tabs */}
            <div style={{
              display: 'flex',
              gap: '0.6rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {skillCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    onMouseEnter={() => soundFx.playHover()}
                    style={{
                      padding: '0.55rem 1rem',
                      borderRadius: '10px',
                      background: isActive ? 'linear-gradient(135deg, rgba(0, 243, 255, 0.2), rgba(168, 85, 247, 0.2))' : 'rgba(15, 18, 28, 0.8)',
                      border: isActive ? '1px solid var(--cyan-glow)' : '1px solid var(--border-glass)',
                      color: isActive ? 'var(--cyan-glow)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      boxShadow: isActive ? '0 0 15px rgba(0, 243, 255, 0.25)' : 'none'
                    }}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Skill Progress Bar Matrix */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {currentCategory.skills.map((skill, index) => (
                  <div key={index} onMouseEnter={() => soundFx.playHover()}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: 'var(--cyan-glow)' }}>{iconMap[skill.icon] || <Sparkles size={18} />}</span>
                        <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{skill.name}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--purple-glow)' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: '7px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        borderRadius: '4px',
                        background: 'linear-gradient(90deg, var(--cyan-glow), var(--purple-glow))',
                        boxShadow: '0 0 10px var(--cyan-glow)',
                        transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive WebGL Stage */}
          <div className="glass-card" style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1.2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--cyan-glow)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              [ REALTIME WEBGL STAGE ]
            </div>

            <SkillOrbs3D />

            <div style={{
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
              textAlign: 'center',
              marginTop: '0.5rem',
              fontFamily: 'var(--font-mono)'
            }}>
              💡 Drag to rotate stage • Hover tech spheres for highlight
            </div>
          </div>

        </div>

        {/* Technology Stack Pills Banner */}
        {technologyStack && (
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--cyan-glow)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1rem'
            }}>
              // FULL TECHNOLOGY & PLATFORM STACK
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {technologyStack.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '20px',
                    background: 'rgba(0, 243, 255, 0.08)',
                    border: '1px solid rgba(0, 243, 255, 0.25)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
