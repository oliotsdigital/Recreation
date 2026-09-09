'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROGRAMS, Program } from '@/data/gymData';
import { useModal } from '@/context/ModalContext';
import { Flame, Clock, Calendar, User, ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Programs (11)' },
  { id: 'calisthenics', label: 'Calisthenics & Workshops' },
  { id: 'strength', label: 'Strength & Powerlifting' },
  { id: 'functional', label: 'Functional & Kids' },
  { id: 'mobility', label: 'Yoga & Animal Flow' },
  { id: 'dance', label: 'Zumba & Bollywood' },
];

export default function ProgramsPage() {
  const { openBookingModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPrograms = PROGRAMS.filter((prog) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'functional') return prog.category === 'functional' || prog.category === 'youth';
    return prog.category === selectedCategory;
  });

  return (
    <div className="section-spacing">
      <div className="site-container">
        {/* Page Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>ATHLETIC CURRICULUM</span>
          </div>
          <h1 className="section-title">Training Programs & Disciplines</h1>
          <p className="section-subtitle">
            Scientific, structured training systems designed to take you from foundational pulling and pushing to elite straight-arm statics and barbell power.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  background: isSelected ? 'var(--accent-gold)' : 'var(--bg-card)',
                  color: isSelected ? 'var(--text-dark)' : 'var(--text-secondary)',
                  border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                  boxShadow: isSelected ? 'var(--shadow-gold)' : 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Programs List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredPrograms.map((prog, idx) => (
            <div
              key={prog.id}
              className="card-interactive responsive-panel-padding responsive-program-grid"
            >
              {/* Media Preview */}
              <div className="responsive-media-box">
                <Image src={prog.image} alt={prog.title} fill style={{ objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    gap: '0.5rem',
                  }}
                >
                  <span className="badge badge-gold">{prog.level}</span>
                  <span className="badge badge-subtle">{prog.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {prog.category.toUpperCase()} DISCIPLINE
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    • {prog.frequency}
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.25rem', color: 'var(--text-white)' }}>
                  {prog.title}
                </h2>

                {/* Highlights */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                    Curriculum Pillars:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.5rem' }}>
                    {prog.highlights.map((high, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                        <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Targeted Skills */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Target Skills Unlocked:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {prog.skillsTargeted.map((skill, sIdx) => (
                      <span key={sIdx} className="badge badge-subtle">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() =>
                      openBookingModal({
                        type: 'class',
                        title: `Reserve Class: ${prog.title}`,
                        subtitle: `${prog.duration} • ${prog.level}`,
                        defaultProgram: prog.title,
                      })
                    }
                    className="btn btn-primary"
                  >
                    <Flame size={16} />
                    <span>Reserve Spot in Class</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() =>
                      openBookingModal({
                        type: 'trial',
                        title: `Free Trial for ${prog.title}`,
                        subtitle: `Experience ${prog.title} at Recreation Cali Club free of charge.`,
                        defaultProgram: prog.title,
                      })
                    }
                    className="btn btn-secondary"
                  >
                    <span>Try with Free Pass</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
