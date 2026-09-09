'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Award, Zap, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export default function SkillCalculator() {
  const { openBookingModal } = useModal();
  const [pullUps, setPullUps] = useState<number>(5);
  const [dips, setDips] = useState<number>(8);
  const [pushUps, setPushUps] = useState<number>(15);
  const [handstand, setHandstand] = useState<string>('wall'); // none, wall, 5s, 30s

  // Compute tier and score
  const handstandScore = handstand === 'none' ? 0 : handstand === 'wall' ? 10 : handstand === '5s' ? 20 : 35;
  const rawScore = Math.min(100, Math.round((pullUps * 2.5) + (dips * 1.8) + (pushUps * 0.8) + handstandScore));

  let rank = 'Kinetic Builder';
  let badgeColor = 'badge-subtle';
  let targetSkill = 'Strict Bar Muscle-Up';
  let recommendedProgram = 'Calisthenics Foundations & Pull Mastery';
  let advice = 'You have a healthy base of push/pull endurance! Time to coordinate explosive pulling mechanics to get over the bar.';

  if (rawScore < 30) {
    rank = 'Foundational Recruit';
    badgeColor = 'badge-subtle';
    targetSkill = 'First 8 Strict Pull-ups & Deep Ring Dips';
    recommendedProgram = 'Calisthenics Foundations & Bodyweight Basics';
    advice = 'Focus on eccentric lowers, scapular retraction, and hollow body holds. Our structured foundations track will build your first 10 clean pull-ups.';
  } else if (rawScore < 60) {
    rank = 'Kinetic Athlete';
    badgeColor = 'badge-gold';
    targetSkill = 'Strict Bar Muscle-Up & 20s L-Sit';
    recommendedProgram = 'Bar Muscle-Up & Dynamic Freestyle';
    advice = 'Your relative strength is prime. We will refine your chest-to-bar snap and false grip so you can master the muscle-up.';
  } else if (rawScore < 85) {
    rank = 'Bar & Ring Specialist';
    badgeColor = 'badge-gold';
    targetSkill = 'Full Front Lever & Freestanding Handstand';
    recommendedProgram = 'Static Strength: Planche & Front Lever Lab';
    advice = 'Exceptional bodyweight capacity! You are ready for straight-arm torque protocols, front lever eccentrics, and parallette tuck planches.';
  } else {
    rank = 'Elite Gravity Defier';
    badgeColor = 'badge-gold';
    targetSkill = 'Full Planche, Maltese & Iron Cross';
    recommendedProgram = 'Static Strength & Masterclass Clinics';
    advice = 'World-class base strength! Work directly with our master training faculty on straight-arm locked tendon loading and competitive street workout routines.';
  }

  return (
    <div
      className="glass-panel responsive-panel-padding"
      style={{
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--accent-gold-border)',
        boxShadow: 'var(--shadow-lg), 0 0 40px rgba(245, 197, 24, 0.08)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>
          <Zap size={14} />
          <span>Interactive Skill Matrix</span>
        </div>
        <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', marginBottom: '0.5rem' }}>
          Calisthenics Level & Potential Evaluator
        </h3>
        <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '0.95rem' }}>
          Input your current baseline bodyweight numbers to discover your calisthenics rank, projected skill unlock, and personalized training curriculum.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {/* Sliders Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Pull-ups */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Strict Dead-Hang Pull-Ups</label>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '1.1rem' }}>
                {pullUps} {pullUps === 25 ? '+ Reps' : 'Reps'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              value={pullUps}
              onChange={(e) => setPullUps(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              <span>0 reps</span>
              <span>12 reps</span>
              <span>25+ reps</span>
            </div>
          </div>

          {/* Parallel Bar Dips */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Parallel Bar Dips</label>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '1.1rem' }}>
                {dips} {dips === 35 ? '+ Reps' : 'Reps'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="35"
              value={dips}
              onChange={(e) => setDips(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              <span>0 reps</span>
              <span>15 reps</span>
              <span>35+ reps</span>
            </div>
          </div>

          {/* Pushups */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Full Range Push-Ups</label>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '1.1rem' }}>
                {pushUps} {pushUps === 50 ? '+ Reps' : 'Reps'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={pushUps}
              onChange={(e) => setPushUps(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              <span>0 reps</span>
              <span>25 reps</span>
              <span>50+ reps</span>
            </div>
          </div>

          {/* Handstand Level */}
          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              Current Handstand & Balance Level
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {[
                { id: 'none', label: 'Cannot do handstand' },
                { id: 'wall', label: 'Wall Assisted Hold' },
                { id: '5s', label: 'Freestanding 3-5 Sec' },
                { id: '30s', label: 'Solid 20s+ Handstand' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setHandstand(item.id)}
                  style={{
                    padding: '0.55rem 0.6rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-sm)',
                    border: `1px solid ${handstand === item.id ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                    background: handstand === item.id ? 'var(--accent-gold-dim)' : 'var(--bg-pitch)',
                    color: handstand === item.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    textAlign: 'center',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div
          className="responsive-card-padding"
          style={{
            background: 'var(--bg-pitch)',
            border: '1px solid var(--accent-gold-border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-gold)',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                Athlete Assessment Rank
              </span>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--text-white)', marginTop: '2px' }}>
                {rank}
              </h4>
            </div>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--accent-gold-dim)',
                border: '2px solid var(--accent-gold)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent-gold)', lineHeight: 1 }}>
                {rawScore}
              </span>
              <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                SCORE
              </span>
            </div>
          </div>

          {/* Target Skill highlight */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
              🎯 Recommended Next Skill Unlock
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '2px' }}>
              {targetSkill}
            </div>
          </div>

          {/* Program Match */}
          <div style={{ marginBottom: '1.25rem', fontSize: '0.85rem' }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: '3px' }}>Recommended Track:</div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{recommendedProgram}</div>
          </div>

          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            {advice}
          </p>

          <button
            onClick={() =>
              openBookingModal({
                type: 'trial',
                title: `Assessment for ${rank}`,
                subtitle: `Targeting: ${targetSkill}. Book your free trial to review this blueprint with our training faculty.`,
                defaultProgram: recommendedProgram,
              })
            }
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <Flame size={16} />
            <span>Unlock This Training Path</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
