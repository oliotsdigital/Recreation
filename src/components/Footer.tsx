'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { MapPin, Phone, Mail, Clock, Send, Share2, Globe, MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  const { showToast } = useModal();
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast(`Thank you! You are now subscribed to the Calisthenics Blueprint.`);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        marginTop: 'auto',
        position: 'relative',
      }}
    >
      {/* Top Gold Accent Border */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
        }}
      />

      <div className="site-container" style={{ padding: '4.5rem 1.5rem 2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1.5px solid var(--accent-gold)',
                  boxShadow: 'var(--shadow-gold)',
                  backgroundColor: '#000000',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="Recreation Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                    color: 'var(--text-white)',
                  }}
                >
                  RECREATION
                </div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}
                >
                  Cali Fitness Club
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Where gravity is just a suggestion. We blend bodyweight mastery, calisthenics static strength, and functional gym iron to recreate human performance.
            </p>

            <div style={{ fontStyle: 'italic', color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.88rem' }}>
              &ldquo;Let&apos;s Recreate Your Self&rdquo;
            </div>

            <div style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} color="var(--accent-gold)" />
                <span>Pink City Road, Near Euro School, Wakad, Pune</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                <Phone size={15} color="var(--accent-gold)" />
                <a href="tel:7350886383" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 700 }}>+91 73508 86383</a>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <a href="tel:8806404615" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 700 }}>+91 88064 04615</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a
                href="https://instagram.com/recreation_califitnessclub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @recreation_califitnessclub"
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid var(--border-subtle)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-white)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@recreation_califitnessclub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-white)',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link href="/" style={{ color: 'var(--text-secondary)' }}>Home Overview</Link></li>
              <li><Link href="/programs" style={{ color: 'var(--text-secondary)' }}>Facilities & Programs</Link></li>
              <li><Link href="/schedule" style={{ color: 'var(--text-secondary)' }}>Weekly Class Timetable</Link></li>
              <li><Link href="/pricing" style={{ color: 'var(--text-secondary)' }}>Membership Plans & Passes</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--text-secondary)' }}>Free Trial & Location</Link></li>
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-white)',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Disciplines
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>Bar & Ring Calisthenics</li>
              <li>Planche & Front Lever Static Strength</li>
              <li>Explosive Bar Muscle-Up Freestyle</li>
              <li>Gym Free Weights & Hypertrophy</li>
              <li>Gymnastic Mobility & Spine Health</li>
              <li>Teens & Youth Calisthenics Academy</li>
            </ul>
          </div>

          {/* Operating Hours & Newsletter */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-white)',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Club Hours & Updates
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Clock size={16} color="var(--accent-gold)" />
                <span><strong>Mon – Sat (Morning):</strong> 6AM to 12Noon</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
                <span><strong>Mon – Sat (Evening):</strong> 5PM to 10:30PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', paddingLeft: '1.5rem', fontWeight: 700 }}>
                <span>★ Sunday Closed</span>
              </div>
            </div>

            <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                required
                placeholder="Enter email for tips..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: 'var(--bg-pitch)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.6rem 0.8rem',
                  color: 'var(--text-white)',
                  fontSize: '0.85rem',
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="btn btn-primary btn-sm"
                style={{ padding: '0.6rem 0.9rem' }}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Recreation Calisthenics Fitness Club. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Built with Bodyweight Passion & Steel</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* Credit Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          background: 'rgba(8, 9, 12, 0.85)',
          padding: '0.85rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            flexWrap: 'wrap',
          }}
        >
          <span>Made with</span>
          <Heart size={14} color="#ef4444" fill="#ef4444" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
          <span>by</span>
          <strong
            style={{
              color: 'var(--text-primary)',
              fontWeight: 700,
              letterSpacing: '0.03em',
            }}
          >
            Oliots Digital Pvt. Ltd.
          </strong>
        </div>
      </div>
    </footer>
  );
}
