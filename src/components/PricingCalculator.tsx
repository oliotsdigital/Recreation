'use client';

import React from 'react';
import { CLUB_FEES, GYM_TIMINGS, CLUB_INFO, FeeTier } from '@/data/gymData';
import { useModal } from '@/context/ModalContext';
import { Flame, Clock, Phone, ArrowRight, Gift, Calendar, AlertCircle } from 'lucide-react';

export default function PricingCalculator() {
  const { openBookingModal } = useModal();

  const handleEnroll = (tier: FeeTier) => {
    openBookingModal({
      type: 'membership',
      title: `Enroll: ${tier.duration} Plan (₹${tier.amountFormatted})`,
      subtitle: `${tier.duration} Access ${tier.offer !== '-' ? `• ${tier.offer} FREE Bonus (${tier.totalMonths} Mos Total)` : ''} • Recreation Cali Club`,
      defaultPlan: `${tier.duration} Membership (₹${tier.amountFormatted})`,
    });
  };

  return (
    <div>
      {/* ========================================================= */}
      {/* AUTHENTIC OFFICIAL FEE STRUCTURE TABLE (FLYER RECREATION) */}
      {/* ========================================================= */}
      <div style={{ marginBottom: '4rem' }}>
        <div
          style={{
            background: 'var(--bg-surface)',
            border: '2px solid rgba(245, 197, 24, 0.35)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {/* Table Header Bar */}
          <h1
            style={{
              background: 'var(--accent-gold)',
              color: '#08090c',
              padding: '1.25rem 1.5rem',
              margin: 0,
              textAlign: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.2rem, 3vw, 1.65rem)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Recreation Cali Fitness Club Fee Structure
          </h1>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'center',
                minWidth: '600px',
              }}
            >
              <thead>
                <tr style={{ background: '#121620', borderBottom: '2px solid rgba(245, 197, 24, 0.25)' }}>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--text-white)', fontWeight: 800, fontSize: '0.95rem' }}>Duration</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.95rem' }}>Amount</th>
                  <th style={{ padding: '1rem 1.25rem', color: '#4ade80', fontWeight: 800, fontSize: '0.95rem' }}>Offer</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--text-white)', fontWeight: 800, fontSize: '0.95rem' }}>Per Month Cost</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.95rem' }}>Reserve</th>
                </tr>
              </thead>
              <tbody>
                {CLUB_FEES.map((tier, idx) => {
                  const isHighlight = tier.bestValue;
                  return (
                    <tr
                      key={tier.id}
                      style={{
                        borderBottom: '1px solid var(--border-subtle)',
                        background: isHighlight
                          ? 'rgba(245, 197, 24, 0.07)'
                          : idx % 2 === 0
                          ? 'transparent'
                          : 'rgba(255, 255, 255, 0.02)',
                        transition: 'background var(--transition-fast)',
                      }}
                    >
                      {/* Duration */}
                      <td style={{ padding: '1.1rem 1.25rem', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-white)' }}>
                        {tier.duration}
                        {isHighlight && (
                          <span className="badge badge-gold" style={{ marginLeft: '0.5rem', fontSize: '0.65rem' }}>
                            BEST VALUE
                          </span>
                        )}
                      </td>

                      {/* Amount */}
                      <td style={{ padding: '1.1rem 1.25rem', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.25rem', color: 'var(--accent-gold)' }}>
                        ₹{tier.amountFormatted}
                      </td>

                      {/* Offer */}
                      <td style={{ padding: '1.1rem 1.25rem' }}>
                        {tier.offer !== '-' ? (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              background: 'rgba(34, 197, 94, 0.15)',
                              border: '1px solid rgba(34, 197, 94, 0.35)',
                              color: '#4ade80',
                              padding: '0.3rem 0.75rem',
                              borderRadius: 'var(--radius-sm)',
                              fontWeight: 800,
                              fontSize: '0.85rem',
                            }}
                          >
                            <Gift size={13} />
                            <span>{tier.offer}</span>
                          </span>
                        ) : (
                          <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>—</span>
                        )}
                      </td>

                      {/* Per Month Cost */}
                      <td style={{ padding: '1.1rem 1.25rem', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: tier.perMonthCost ? 'var(--text-white)' : 'var(--text-muted)' }}>
                        {tier.perMonthCost ? `₹${tier.perMonthFormatted}` : '—'}
                      </td>

                      {/* Booking CTA */}
                      <td style={{ padding: '1.1rem 1.25rem' }}>
                        <button
                          onClick={() => handleEnroll(tier)}
                          className={`btn btn-sm ${isHighlight ? 'btn-primary' : 'btn-secondary'}`}
                        >
                          <span>Select Plan</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GYM TIMINGS & CONTACT NO SHOWCASE (TABLE 2 RECREATION)    */}
      {/* ========================================================= */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {/* Gym Timings Card */}
        <div
          className="glass-panel responsive-card-padding"
          style={{
            border: '2px solid var(--accent-gold-border)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div
            style={{
              background: 'var(--accent-gold)',
              color: '#08090c',
              padding: '0.65rem 1rem',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '1.15rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Gym Timings
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Morning Batch */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={18} color="var(--accent-gold)" />
                <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>Morning Session</span>
              </div>
              <strong style={{ color: 'var(--accent-gold)', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                {GYM_TIMINGS.morning}
              </strong>
            </div>

            {/* Evening Batch */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={18} color="var(--accent-gold)" />
                <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>Evening Session</span>
              </div>
              <strong style={{ color: 'var(--accent-gold)', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                {GYM_TIMINGS.evening}
              </strong>
            </div>

            {/* Days Active */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(245, 197, 24, 0.08)',
                border: '1px solid var(--accent-gold-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Calendar size={18} color="var(--accent-gold)" />
                <span style={{ fontWeight: 700, color: 'var(--text-white)' }}>Workout Days</span>
              </div>
              <strong style={{ color: 'var(--accent-gold-light)', fontSize: '1rem', textTransform: 'uppercase' }}>
                {GYM_TIMINGS.days}
              </strong>
            </div>

            {/* Sunday Closed Alert */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1.5px solid rgba(239, 68, 68, 0.4)',
                color: '#f87171',
                fontWeight: 900,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              <AlertCircle size={18} />
              <span>Sunday Closed</span>
            </div>
          </div>
        </div>

        {/* Contact Numbers Showcase */}
        <div
          className="glass-panel responsive-card-padding"
          style={{
            border: '2px solid var(--accent-gold-border)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--text-white)',
                border: '1px solid var(--border-subtle)',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '1.15rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Contact No & Facility Helpdesk
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Questions about membership tiers, custom enrollment, or scheduling a visit? Call or WhatsApp our team directly:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Primary Phone */}
              <a
                href={`tel:${CLUB_INFO.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(245, 197, 24, 0.1)',
                  border: '1.5px solid var(--accent-gold)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--accent-gold)',
                      color: '#08090c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      PRIMARY CONTACT
                    </div>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--text-white)', fontFamily: 'var(--font-display)' }}>
                      {CLUB_INFO.phone}
                    </strong>
                  </div>
                </div>
                <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
                  CALL NOW
                </span>
              </a>

              {/* Secondary Phone */}
              <a
                href={`tel:${CLUB_INFO.secondaryPhone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-card)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.12)',
                      color: 'var(--accent-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      HELPDESK / ALTERNATE
                    </div>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--text-white)', fontFamily: 'var(--font-display)' }}>
                      {CLUB_INFO.secondaryPhone}
                    </strong>
                  </div>
                </div>
                <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                  CALL NOW
                </span>
              </a>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() =>
                openBookingModal({
                  type: 'trial',
                  title: 'Book Free Movement Assessment',
                  subtitle: 'Visit Recreation Calisthenics Club at Pink City Road, Wakad.',
                })
              }
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Flame size={16} />
              <span>Claim Free Assessment Pass</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
