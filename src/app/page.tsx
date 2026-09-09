'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';
import SkillCalculator from '@/components/SkillCalculator';
import {
  Flame,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Target,
  Dumbbell,
  Compass,
  Star,
  ChevronRight,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { PROGRESSION_STEPS, TESTIMONIALS, FAQS, PROGRAMS } from '@/data/gymData';

export default function HomePage() {
  const { openBookingModal } = useModal();

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 0 4.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Background Image with Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <Image
            src="/images/hero-athlete.jpg"
            alt="Recreation Calisthenics Athlete Performing Bar Muscle-Up"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            priority
          />
          {/* Radial & Linear Gradient Veil */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(8, 9, 12, 0.75) 0%, rgba(8, 9, 12, 0.88) 60%, var(--bg-pitch) 100%), radial-gradient(circle at 50% 30%, rgba(245, 197, 24, 0.15), transparent 70%)',
            }}
          />
        </div>

        <div className="site-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          {/* Top Brand Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(245, 197, 24, 0.12)',
              border: '1px solid var(--accent-gold-border)',
              marginBottom: '1.75rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ color: 'var(--accent-gold)', display: 'flex', alignItems: 'center' }}>
              <Flame size={16} />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--accent-gold-light)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              LET&apos;S RECREATE YOUR SELF
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              maxWidth: '960px',
              margin: '0 auto 1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
            }}
          >
            RECREATE YOUR LIMITS. <br />
            <span className="text-gold-gradient">DEFY GRAVITY.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            The ultimate calisthenics & athletic strength club. Master straight-arm static holds, explosive bar muscle-ups, and dense gymnastic muscle with scientific bodyweight progressions.
          </p>

          {/* CTA Group */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <button
              onClick={() =>
                openBookingModal({
                  type: 'trial',
                  title: 'Claim Your Free 60-Min Trial Pass',
                  subtitle: 'Includes mobility evaluation, strength benchmark test, and custom skill roadmap.',
                })
              }
              className="btn btn-primary btn-lg pulse-glow"
            >
              <Flame size={20} />
              <span>Book Free Trial Assessment</span>
              <ArrowRight size={18} />
            </button>

            <Link href="/programs" className="btn btn-secondary btn-lg">
              <span>View Training Programs</span>
            </Link>

            <Link href="/schedule" className="btn btn-secondary btn-lg">
              <Calendar size={18} color="var(--accent-gold)" />
              <span>View Schedule</span>
            </Link>
          </div>

          {/* Trust Pillars */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem 2.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--accent-gold)" />
              <span>Zero pull-up beginners to world-class athletes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={18} color="var(--accent-gold)" />
              <span>Custom heavy steel rigs & Olympic gymnastics rings</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="var(--accent-gold)" />
              <span>Joint-safety & tendon longevity protocols</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER STRIP */}
      <section
        style={{
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          padding: '2.5rem 0',
        }}
      >
        <div className="site-container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Gravity Defied</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">11+</div>
              <div className="stat-label">Specialized Disciplines</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">2,500+</div>
              <div className="stat-label">Members Transformed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Skills Unlocked (Muscle-Ups & Levers)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ETHOS / PHILOSOPHY */}
      <section className="section-spacing">
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Visual Column */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--accent-gold-border)',
                boxShadow: 'var(--shadow-gold)',
                minHeight: '420px',
              }}
            >
              <Image
                src="/images/planche.jpg"
                alt="Full Planche On Parallettes at Recreation Cali Club"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(8, 9, 12, 0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                  <Sparkles size={16} color="var(--accent-gold)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                    THE CALISTHENICS ADVANTAGE
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-white)' }}>
                  Bodyweight mastery produces tendon resilience and relative strength that standard weight machines cannot replicate.
                </p>
              </div>
            </div>

            {/* Copy Column */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
                THE RECREATION PHILOSOPHY
              </div>
              <h2 style={{ marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Where Gymnastic Precision Meets <br />
                <span className="text-gold-gradient">Raw Athletic Strength</span>
              </h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                At Recreation Calisthenics Fitness Club, we reject ordinary workouts where you sit on machines staring at screens. We believe the human body is designed to hang, climb, invert, hold straight-arm levers, and move through space with effortless power.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--accent-gold-dim)',
                      border: '1px solid var(--accent-gold-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '0.2rem' }}>
                      Skill-First Progression System
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Every workout targets measurable skills: Australian rows turn into strict pull-ups, pull-ups become chest-to-bar snaps, and snaps become strict muscle-ups.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--accent-gold-dim)',
                      border: '1px solid var(--accent-gold-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Dumbbell size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '0.2rem' }}>
                      Hybrid Weight Overload
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      We combine dip belts, Olympic barbells, kettlebells, and heavy deadlifts to build dense muscle and prevent posterior chain imbalances.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--accent-gold-dim)',
                      border: '1px solid var(--accent-gold-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '0.2rem' }}>
                      Tendon & Joint Longevity
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Straight-arm strength requires slow, methodical tendon conditioning. We build indestructible wrists, elbows, and rotator cuffs.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/programs" className="btn btn-primary">
                  <span>Explore All Programs</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/schedule" className="btn btn-secondary">
                  <span>Weekly Schedule</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DISCIPLINES GRID */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="site-container">
          <div className="section-header">
            <div className="section-eyebrow">
              <Zap size={14} />
              <span>TRAINING PILLARS</span>
            </div>
            <h2 className="section-title">Master the Art of Movement</h2>
            <p className="section-subtitle">
              Whether you are chasing your first chin-up or dialing in an Olympic rings iron cross, our structured disciplines get you there.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
            }}
          >
            {PROGRAMS.slice(0, 3).map((prog) => (
              <div key={prog.id} className="card-interactive" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <Image src={prog.image} alt={prog.title} fill style={{ objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                  >
                    <span className="badge badge-gold">{prog.level}</span>
                    <span className="badge badge-subtle">{prog.duration}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-white)' }}>
                  {prog.title}
                </h3>

                <div style={{ marginBottom: '1.5rem', marginTop: 'auto' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Skills Targeted:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {prog.skillsTargeted.map((skill, idx) => (
                      <span key={idx} className="badge badge-subtle" style={{ fontSize: '0.75rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() =>
                      openBookingModal({
                        type: 'class',
                        title: `Reserve: ${prog.title}`,
                        defaultProgram: prog.title,
                      })
                    }
                    className="btn btn-outline-gold btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Reserve Class</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/programs" className="btn btn-secondary">
              <span>View All 11 Specialized Disciplines</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILL PROGRESSION LADDER */}
      <section className="section-spacing">
        <div className="site-container">
          <div className="section-header">
            <div className="section-eyebrow">
              <Sparkles size={14} />
              <span>THE RECREATION MASTERY PATH</span>
            </div>
            <h2 className="section-title">From First Pull-Up to Planche</h2>
            <p className="section-subtitle">
              Calisthenics is not random. It is an exact science of biomechanical progression. Here is how you climb the ladder:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {PROGRESSION_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="card-interactive responsive-card-padding"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {/* Level Title */}
                <div style={{ flex: '1 1 min(100%, 220px)' }}>
                  <span className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>
                    {step.level}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {step.focus}
                  </p>
                </div>

                {/* Skills tags */}
                <div style={{ flex: '2 1 min(100%, 320px)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {step.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.4rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                        }}
                      >
                        <CheckCircle2 size={15} color="var(--accent-gold)" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SKILL CALCULATOR (EMBEDDED) */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="site-container">
          <SkillCalculator />
        </div>
      </section>

      {/* FACILITY SHOWCASE */}
      <section className="section-spacing">
        <div className="site-container">
          <div className="section-header">
            <div className="section-eyebrow">
              <Flame size={14} />
              <span>THE ARENA</span>
            </div>
            <h2 className="section-title">Built for Gravity Defiers</h2>
            <p className="section-subtitle">
              Engineered with industrial steel rigs, competition rings, high bars, parallettes, sprint turf, and Olympic platforms.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '340px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-card)',
              }}
            >
              <Image src="/images/facility.jpg" alt="Main Calisthenics Rig Arena" fill style={{ objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(8, 9, 12, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>Steel Rig & Parallel Bars Zone</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Custom multi-tier calisthenics rigs with thick-grip bars and chalk stations.</p>
                </div>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                height: '340px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-card)',
              }}
            >
              <Image src="/images/rings.jpg" alt="Olympic Gymnastic Rings Station" fill style={{ objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(8, 9, 12, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>Olympic Gymnastic Rings Arena</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Ceiling-mounted birchwood rings with strap markers for micro-adjustments.</p>
                </div>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                height: '340px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-card)',
              }}
            >
              <Image src="/images/planche.jpg" alt="Parallettes & Free Weights Gym" fill style={{ objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(8, 9, 12, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>Parallettes & Inversion Studio</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Low & medium parallettes, mirror balance walls, and padded tumble mats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="site-container">
          <div className="section-header">
            <div className="section-eyebrow">
              <Star size={14} />
              <span>COMMUNITY STORIES</span>
            </div>
            <h2 className="section-title">Real Athletes. Real Gravity Defied.</h2>
            <p className="section-subtitle">
              Read how everyday professionals transformed into high-flying calisthenics athletes at Recreation.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
            }}
          >
            {TESTIMONIALS.map((test, idx) => (
              <div
                key={idx}
                className="card-interactive"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
                    {[...Array(test.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={16} fill="var(--accent-gold)" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-white)' }}>{test.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{test.role}</div>
                  <div className="badge badge-gold" style={{ marginTop: '0.5rem', fontSize: '0.72rem' }}>
                    {test.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 50%, rgba(245, 197, 24, 0.18), transparent 75%), var(--bg-pitch)',
            zIndex: 0,
          }}
        />

        <div className="site-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            START YOUR TRANSFORMATION
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', maxWidth: '780px', margin: '0 auto 1.25rem' }}>
            Ready to <span className="text-gold-gradient">Recreate Yourself</span>?
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
            Book your 60-minute Free Trial Assessment today. No membership required. Step inside our arena, test your bodyweight baseline, and map your path to flight.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button
              onClick={() =>
                openBookingModal({
                  type: 'trial',
                  title: 'Claim Your Free 60-Min Trial Pass',
                  subtitle: 'Includes mobility evaluation, strength benchmark test, and custom skill roadmap.',
                })
              }
              className="btn btn-primary btn-lg pulse-glow"
            >
              <Flame size={20} />
              <span>Claim Free 60-Min Assessment</span>
              <ArrowRight size={18} />
            </button>

            <Link href="/pricing" className="btn btn-secondary btn-lg">
              <span>View Membership Tiers</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
