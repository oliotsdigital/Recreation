'use client';

import React, { useState } from 'react';
import PricingCalculator from '@/components/PricingCalculator';
import { FAQS, GYM_TIMINGS, CLUB_INFO } from '@/data/gymData';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function PricingPage() {
  const { openBookingModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const PRICING_FAQS = [
    {
      question: 'How do the bonus offer months work (e.g. +6 Months on 6-Month Plan)?',
      answer: 'When you enroll in our promotional durations (like the 6-Month plan @ ₹12,000/-), you receive an immediate 6 additional months at zero cost, granting you 12 continuous months of access. That brings your effective rate down to just ₹1,000/- per month!',
    },
    {
      question: 'What are the official daily gym timings?',
      answer: 'Recreation Calisthenics Club is open Monday To Saturday across two batches: Morning from 6:00 AM to 12:00 Noon, and Evening from 5:00 PM to 10:30 PM. The facility is closed on Sundays for deep rig maintenance and athlete muscle recovery.',
    },
    {
      question: 'Are there any separate registration or admission fees?',
      answer: 'No. All rates listed in our Fee Structure (1 Month ₹3500/-, 2 Months ₹6000/-, 5 Months ₹9000/-, 6 Months ₹12000/-, 12 Months ₹14000/-) are transparent and all-inclusive.',
    },
    {
      question: 'Can I do a trial session before deciding on a duration?',
      answer: 'Yes! We encourage every newcomer to claim a complimentary 60-minute movement and strength assessment to experience the equipment, rigs, and coaching community before enrolling.',
    },
    {
      question: 'How do I reach the front desk for payment or installment queries?',
      answer: 'You can directly call or WhatsApp our facility managers at 7350886383 or 8806404615, or visit us at Pink City Road, Near Euro School, Wakad, Pune.',
    },
  ];

  return (
    <div className="section-spacing">
      <div className="site-container">
        {/* Interactive Pricing Component with Official Timetable Matrix & Timings */}
        <PricingCalculator />

        {/* FAQs */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 style={{ fontSize: '2rem' }}>Membership Details & Guidelines</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-interactive"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    cursor: 'pointer',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-white)' }}>
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={20}
                      color="var(--accent-gold)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform var(--transition-fast)',
                        flexShrink: 0,
                        marginLeft: '1rem',
                      }}
                    />
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '1rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Strip */}
          <div
            style={{
              marginTop: '3rem',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(245, 197, 24, 0.08)',
              border: '1px solid var(--accent-gold-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <div style={{ fontWeight: 800, color: 'var(--text-white)' }}>Need help choosing the right plan?</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Speak with our coaching counselors: <strong>7350886383</strong> / <strong>8806404615</strong>
              </div>
            </div>
            <button
              onClick={() =>
                openBookingModal({
                  type: 'trial',
                  title: 'Claim 60-Min Movement Assessment',
                  subtitle: 'Visit Recreation Cali Club, Pink City Road, Wakad.',
                })
              }
              className="btn btn-primary btn-sm"
            >
              <span>Book Free Trial</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
