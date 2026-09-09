'use client';

import React from 'react';
import ScheduleFilter from '@/components/ScheduleFilter';
import { useModal } from '@/context/ModalContext';
import { Calendar, Clock, Flame, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function SchedulePage() {
  const { openBookingModal } = useModal();

  return (
    <div className="section-spacing">
      <div className="site-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Calendar size={14} />
            <span>OFFICIAL TIMETABLE</span>
          </div>
          <h1 className="section-title">Gym Class Schedule</h1>
          <p className="section-subtitle">
            Daily Morning (7:30 AM – 8:30 AM) & Evening (7:30 PM – 8:30 PM) sessions at Recreation Calisthenics Club, Pink City Road, Wakad, Pune.
          </p>
        </div>

        {/* Schedule Filter Component */}
        <ScheduleFilter />

        {/* Facility Guidelines & Open Rig Box */}
        <div
          style={{
            marginTop: '4.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
          }}
        >
          <div className="card-interactive">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Flame size={18} color="var(--accent-gold)" />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>
                Open Rig Jam Sessions
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              Looking for free-flow practice? Open Rig Jams allow athletes to train individual moves, film form checks, and exchange spotting techniques with experienced athletes present.
            </p>
            <button
              onClick={() =>
                openBookingModal({
                  type: 'class',
                  title: 'Open Rig Jam Access',
                  subtitle: 'Join athletes for non-structured skill practice and guided spotting.',
                  defaultProgram: 'Community Open Rig Jam',
                })
              }
              className="btn btn-secondary btn-sm"
            >
              <span>Join Open Rig Jam</span>
            </button>
          </div>

          <div className="card-interactive">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <ShieldAlert size={18} color="var(--accent-gold)" />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>
                Rig Etiquette & Chalk Rules
              </h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li>• Liquid or block chalk is provided at all high-bar stations.</li>
              <li>• Always check bar clearance before attempting 360 spins.</li>
              <li>• Crash mats must be deployed for ring inverts and muscle-up learning.</li>
              <li>• Wipe down steel bars and wooden parallettes after heavy sessions.</li>
            </ul>
          </div>

          <div className="card-interactive">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <HelpCircle size={18} color="var(--accent-gold)" />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>
                First Time Visiting?
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              If you have never trained calisthenics on specialized rigs, we recommend starting with our complimentary 60-Minute Free Assessment with our training faculty.
            </p>
            <button
              onClick={() =>
                openBookingModal({
                  type: 'trial',
                  title: 'First-Timer Free Assessment Pass',
                })
              }
              className="btn btn-primary btn-sm"
            >
              <span>Book First Assessment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
