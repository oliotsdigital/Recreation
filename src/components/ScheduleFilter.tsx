'use client';

import React, { useState } from 'react';
import { SCHEDULE_DATA, SCHEDULE_DAYS, ScheduleItem, CLUB_INFO } from '@/data/gymData';
import { useModal } from '@/context/ModalContext';
import { Clock, MapPin, Flame, Calendar, Sun, Moon, ArrowRight, Table, List, Phone, ExternalLink } from 'lucide-react';

const DAYS_ORDER: ScheduleItem['day'][] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const SHORT_DAYS: Record<ScheduleItem['day'], string> = {
  Monday: 'MON',
  Tuesday: 'TUE',
  Wednesday: 'WED',
  Thursday: 'THU',
  Friday: 'FRI',
  Saturday: 'SAT',
  Sunday: 'SUN',
};

export default function ScheduleFilter() {
  const { openBookingModal } = useModal();
  const [viewMode, setViewMode] = useState<'poster' | 'list'>('poster');
  const [selectedDay, setSelectedDay] = useState<ScheduleItem['day']>('Monday');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Group items by day for poster view
  const scheduleByDay = DAYS_ORDER.map((day) => {
    const morning = SCHEDULE_DATA.find((item) => item.day === day && item.slotType === 'Morning');
    const evening = SCHEDULE_DATA.find((item) => item.day === day && item.slotType === 'Evening');
    return {
      day,
      shortDay: SHORT_DAYS[day],
      morning,
      evening,
    };
  });

  const dailyItems = SCHEDULE_DATA.filter((item) => item.day === selectedDay);

  const handleBooking = (item?: ScheduleItem) => {
    if (!item || item.isRest) return;
    openBookingModal({
      type: 'class',
      title: `Reserve: ${item.title}`,
      subtitle: `${item.day} • ${item.time} (${item.slotType} Batch) • ${item.room}`,
      defaultProgram: item.title,
    });
  };

  return (
    <div>
      {/* Top View Toggle & Summary Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="badge badge-gold">OFFICIAL TIMETABLE</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Morning (7:30 AM) & Evening (7:30 PM) Sessions
          </span>
        </div>

        {/* Toggle between Poster Matrix & Daily List */}
        <div
          style={{
            display: 'inline-flex',
            background: 'var(--bg-card)',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <button
            onClick={() => setViewMode('poster')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              background: viewMode === 'poster' ? 'var(--accent-gold)' : 'transparent',
              color: viewMode === 'poster' ? 'var(--text-dark)' : 'var(--text-secondary)',
              transition: 'all var(--transition-fast)',
            }}
          >
            <Table size={16} />
            <span>Weekly Grid View</span>
          </button>

          <button
            onClick={() => setViewMode('list')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              background: viewMode === 'list' ? 'var(--accent-gold)' : 'transparent',
              color: viewMode === 'list' ? 'var(--text-dark)' : 'var(--text-secondary)',
              transition: 'all var(--transition-fast)',
            }}
          >
            <List size={16} />
            <span>Day-by-Day View</span>
          </button>
        </div>
      </div>

      {viewMode === 'poster' ? (
        /* ============================================================ */
        /* POSTER TIMETABLE MATRIX VIEW (RECREATING THE OFFICIAL FLYER) */
        /* ============================================================ */
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(16, 18, 24, 0.95) 0%, rgba(8, 9, 12, 0.98) 100%)',
            borderRadius: 'var(--radius-xl)',
            border: '2px solid rgba(245, 197, 24, 0.35)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 197, 24, 0.08)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Authentic Flyer Header Section */}
          <div
            style={{
              padding: '2.5rem 2rem 2rem',
              textAlign: 'center',
              borderBottom: '1px solid rgba(245, 197, 24, 0.2)',
              position: 'relative',
              background: 'radial-gradient(circle at 50% 20%, rgba(245, 197, 24, 0.12), transparent 70%)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              <span>✦ RECREATION ✦</span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1,
                color: '#f5c518',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textShadow: '0 0 30px rgba(245, 197, 24, 0.45)',
                margin: '0.2rem 0',
              }}
            >
              GYM CLASS
            </div>

            <div
              style={{
                fontFamily: 'cursive, "Brush Script MT", Georgia, serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                color: '#ffffff',
                lineHeight: 1,
                marginTop: '-0.2rem',
                marginBottom: '1rem',
                fontStyle: 'italic',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              Schedule
            </div>

            <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Click on any class block below to reserve your slot directly.
            </p>
          </div>

          {/* Timetable Table Grid (Desktop & Tablet >= 768px) */}
          <div className="desktop-only-table" style={{ overflowX: 'auto', padding: '1.5rem' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: '0 1rem',
                minWidth: '680px',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      width: '140px',
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                      fontWeight: 700,
                    }}
                  >
                    Day
                  </th>
                  <th
                    style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'center',
                      fontSize: '0.95rem',
                      letterSpacing: '0.05em',
                      color: 'var(--accent-gold)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                    }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sun size={18} color="var(--accent-gold)" />
                      <span>7:30 AM – 8:30 AM (Morning)</span>
                    </div>
                  </th>
                  <th
                    style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'center',
                      fontSize: '0.95rem',
                      letterSpacing: '0.05em',
                      color: 'var(--accent-gold)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                    }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Moon size={18} color="var(--accent-gold)" />
                      <span>7:30 PM – 8:30 PM (Evening)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleByDay.map(({ day, shortDay, morning, evening }) => (
                  <tr key={day}>
                    {/* Yellow Beveled Day Header */}
                    <td style={{ verticalAlign: 'middle', padding: '0 0.5rem' }}>
                      <div
                        style={{
                          background: 'var(--accent-gold)',
                          color: '#08090c',
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.45rem',
                          fontWeight: 900,
                          letterSpacing: '0.04em',
                          padding: '0.85rem 1.25rem',
                          borderRadius: '8px 0 0 8px',
                          textAlign: 'center',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 10px rgba(0,0,0,0.35)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)',
                          minHeight: '80px',
                        }}
                      >
                        <span>{shortDay}</span>
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, opacity: 0.85, letterSpacing: '0.02em', textTransform: 'capitalize' }}>
                          {day}
                        </span>
                      </div>
                    </td>

                    {/* Morning Class Slot Card */}
                    <td style={{ verticalAlign: 'middle', padding: '0 0.6rem' }}>
                      {morning && (
                        <div
                          onClick={() => handleBooking(morning)}
                          onMouseEnter={() => setHoveredCard(morning.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                          style={{
                            background: morning.isRest
                              ? 'rgba(255, 255, 255, 0.05)'
                              : hoveredCard === morning.id
                              ? '#ffffff'
                              : '#e9ecef',
                            color: morning.isRest ? 'var(--text-muted)' : '#0f1117',
                            borderRadius: '10px',
                            padding: '1.1rem 1.4rem',
                            textAlign: 'center',
                            cursor: morning.isRest ? 'default' : 'pointer',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                            transform: hoveredCard === morning.id && !morning.isRest ? 'translateY(-3px)' : 'none',
                            boxShadow: morning.isRest
                              ? 'none'
                              : hoveredCard === morning.id
                              ? '0 12px 24px -6px rgba(245, 197, 24, 0.4), 0 6px 0px #b0b7c3'
                              : '0 5px 0px #9da7b5, 0 8px 16px rgba(0,0,0,0.25)',
                            border: hoveredCard === morning.id && !morning.isRest
                              ? '2px solid var(--accent-gold)'
                              : '1px solid rgba(255,255,255,0.8)',
                            position: 'relative',
                            minHeight: '80px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <div
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)',
                              fontWeight: 900,
                              letterSpacing: '0.03em',
                              textTransform: 'uppercase',
                              lineHeight: 1.2,
                              color: morning.isRest ? 'var(--text-muted)' : '#08090c',
                            }}
                          >
                            {morning.title}
                          </div>
                          <div
                            style={{
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              color: morning.isRest ? 'var(--text-muted)' : '#4b5563',
                              marginTop: '0.35rem',
                              letterSpacing: '0.02em',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                            }}
                          >
                            <Clock size={12} color={morning.isRest ? 'var(--text-muted)' : '#d97706'} />
                            <span>{morning.time}</span>
                            {!morning.isRest && (
                              <span style={{ marginLeft: '0.35rem', color: '#16a34a', fontWeight: 800 }}>
                                • Book Slot
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </td>

                    {/* Evening Class Slot Card */}
                    <td style={{ verticalAlign: 'middle', padding: '0 0.6rem' }}>
                      {evening && (
                        <div
                          onClick={() => handleBooking(evening)}
                          onMouseEnter={() => setHoveredCard(evening.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                          style={{
                            background: evening.isRest
                              ? 'rgba(255, 255, 255, 0.05)'
                              : hoveredCard === evening.id
                              ? '#ffffff'
                              : '#e9ecef',
                            color: evening.isRest ? 'var(--text-muted)' : '#0f1117',
                            borderRadius: '10px',
                            padding: '1.1rem 1.4rem',
                            textAlign: 'center',
                            cursor: evening.isRest ? 'default' : 'pointer',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                            transform: hoveredCard === evening.id && !evening.isRest ? 'translateY(-3px)' : 'none',
                            boxShadow: evening.isRest
                              ? 'none'
                              : hoveredCard === evening.id
                              ? '0 12px 24px -6px rgba(245, 197, 24, 0.4), 0 6px 0px #b0b7c3'
                              : '0 5px 0px #9da7b5, 0 8px 16px rgba(0,0,0,0.25)',
                            border: hoveredCard === evening.id && !evening.isRest
                              ? '2px solid var(--accent-gold)'
                              : '1px solid rgba(255,255,255,0.8)',
                            position: 'relative',
                            minHeight: '80px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <div
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)',
                              fontWeight: 900,
                              letterSpacing: '0.03em',
                              textTransform: 'uppercase',
                              lineHeight: 1.2,
                              color: evening.isRest ? 'var(--text-muted)' : '#08090c',
                            }}
                          >
                            {evening.title}
                          </div>
                          <div
                            style={{
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              color: evening.isRest ? 'var(--text-muted)' : '#4b5563',
                              marginTop: '0.35rem',
                              letterSpacing: '0.02em',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                            }}
                          >
                            <Clock size={12} color={evening.isRest ? 'var(--text-muted)' : '#d97706'} />
                            <span>{evening.time}</span>
                            {!evening.isRest && (
                              <span style={{ marginLeft: '0.35rem', color: '#16a34a', fontWeight: 800 }}>
                                • Book Slot
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Native Mobile Card Timetable (< 768px Mobile Phones) */}
          <div className="mobile-only-cards" style={{ padding: '1rem' }}>
            {scheduleByDay.map(({ day, shortDay, morning, evening }) => (
              <div
                key={day}
                style={{
                  background: 'rgba(21, 26, 34, 0.85)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                }}
              >
                {/* Day Flag Header */}
                <div
                  style={{
                    background: 'var(--accent-gold)',
                    color: '#08090c',
                    padding: '0.65rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                  }}
                >
                  <span style={{ fontSize: '1.1rem', letterSpacing: '0.04em' }}>{day.toUpperCase()}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      background: '#08090c',
                      color: 'var(--accent-gold)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                    }}
                  >
                    {shortDay}
                  </span>
                </div>

                {/* Morning & Evening Sessions Stack */}
                <div style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* Morning Slot */}
                  {morning && (
                    <div
                      onClick={() => handleBooking(morning)}
                      style={{
                        background: morning.isRest ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
                        color: morning.isRest ? 'var(--text-muted)' : '#08090c',
                        borderRadius: '8px',
                        padding: '0.85rem 1rem',
                        cursor: morning.isRest ? 'default' : 'pointer',
                        border: morning.isRest ? '1px dashed var(--border-subtle)' : '1.5px solid var(--accent-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: morning.isRest ? 'var(--text-muted)' : '#d97706',
                            textTransform: 'uppercase',
                          }}
                        >
                          <Sun size={13} />
                          <span>Morning • {morning.time}</span>
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 900,
                            fontSize: '1.05rem',
                            marginTop: '0.15rem',
                            color: morning.isRest ? 'var(--text-muted)' : '#08090c',
                          }}
                        >
                          {morning.title}
                        </div>
                      </div>

                      {!morning.isRest && (
                        <span
                          style={{
                            background: 'var(--accent-gold)',
                            color: '#08090c',
                            padding: '0.4rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            flexShrink: 0,
                          }}
                        >
                          Book Slot
                        </span>
                      )}
                    </div>
                  )}

                  {/* Evening Slot */}
                  {evening && (
                    <div
                      onClick={() => handleBooking(evening)}
                      style={{
                        background: evening.isRest ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
                        color: evening.isRest ? 'var(--text-muted)' : '#08090c',
                        borderRadius: '8px',
                        padding: '0.85rem 1rem',
                        cursor: evening.isRest ? 'default' : 'pointer',
                        border: evening.isRest ? '1px dashed var(--border-subtle)' : '1.5px solid var(--accent-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: evening.isRest ? 'var(--text-muted)' : '#7c3aed',
                            textTransform: 'uppercase',
                          }}
                        >
                          <Moon size={13} />
                          <span>Evening • {evening.time}</span>
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 900,
                            fontSize: '1.05rem',
                            marginTop: '0.15rem',
                            color: evening.isRest ? 'var(--text-muted)' : '#08090c',
                          }}
                        >
                          {evening.title}
                        </div>
                      </div>

                      {!evening.isRest && (
                        <span
                          style={{
                            background: 'var(--accent-gold)',
                            color: '#08090c',
                            padding: '0.4rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            flexShrink: 0,
                          }}
                        >
                          Book Slot
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Official Flyer Footer Contact Banner */}
          <div
            style={{
              background: 'linear-gradient(90deg, #090a0e 0%, #151820 50%, #090a0e 100%)',
              borderTop: '2px solid var(--accent-gold)',
              padding: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
              <a
                href={`tel:${CLUB_INFO.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--text-white)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'var(--accent-gold)',
                    color: '#08090c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>CALL US</div>
                  <strong style={{ color: 'var(--accent-gold)', fontSize: '1.1rem' }}>{CLUB_INFO.phone}</strong>
                </div>
              </a>

              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--text-white)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'var(--accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--accent-gold)',
                  }}
                >
                  {/* Camera / Instagram SVG */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>VISIT INSTAGRAM</div>
                  <span style={{ color: 'var(--text-white)', fontSize: '0.95rem' }}>{CLUB_INFO.instagram}</span>
                </div>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', maxWidth: '380px' }}>
              <MapPin size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-white)', textTransform: 'uppercase', fontSize: '0.72rem' }}>CLUB LOCATION</div>
                {CLUB_INFO.address}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ============================================================ */
        /* DAY-BY-DAY LIST VIEW (DETAILED INTERACTIVE CARD MODE)        */
        /* ============================================================ */
        <div>
          {/* Day Selector Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.75rem',
              marginBottom: '2rem',
              scrollbarWidth: 'none',
            }}
          >
            {DAYS_ORDER.map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  style={{
                    padding: '0.75rem 1.4rem',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: isSelected ? 800 : 600,
                    letterSpacing: '0.02em',
                    background: isSelected ? 'var(--accent-gold)' : 'var(--bg-card)',
                    color: isSelected ? 'var(--text-dark)' : 'var(--text-secondary)',
                    border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                    boxShadow: isSelected ? 'var(--shadow-gold)' : 'none',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {day} ({SHORT_DAYS[day]})
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {dailyItems.map((item) => (
              <div
                key={item.id}
                className="card-interactive responsive-card-padding"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  borderLeft: `4px solid ${item.isRest ? 'var(--border-subtle)' : 'var(--accent-gold)'}`,
                }}
              >
                <div style={{ flex: 1, minWidth: 'min(100%, 240px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-gold">
                      {item.slotType === 'Morning' ? '🌅 Morning Batch' : '🌙 Evening Batch'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.isRest ? 'Rest / Open Rig' : `• ${item.spotsAvailable} of ${item.totalSpots} spots left`}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', color: 'var(--text-white)', margin: '0.25rem 0' }}>
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={16} color="var(--accent-gold)" />
                      <strong style={{ color: 'var(--text-white)' }}>{item.time}</strong>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={16} color="var(--accent-gold)" />
                      <span>{item.room}</span>
                    </span>
                  </div>
                </div>

                {!item.isRest ? (
                  <button
                    onClick={() => handleBooking(item)}
                    className="btn btn-primary"
                    style={{ minWidth: 'min(100%, 160px)', flexShrink: 0 }}
                  >
                    <Flame size={16} />
                    <span>Reserve Spot</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <div className="badge badge-subtle">
                    Open Rig / Recovery
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
