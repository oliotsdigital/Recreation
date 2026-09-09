'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Flame, Compass, Car, Train } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="section-spacing">
      <div className="site-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Flame size={14} />
            <span>VISIT RECREATION CALI CLUB</span>
          </div>
          <h1 className="section-title">Claim Your Free Trial & Visit Us</h1>
          <p className="section-subtitle">
            Experience the arena in person. Schedule your complimentary 60-minute movement assessment or reach out to our team with any questions.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact & Booking Form */}
          <ContactForm />

          {/* Right: Facility Information & Map Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Club Info Card */}
            <div className="card-interactive responsive-card-padding">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-white)' }}>
                Club Headquarters
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <MapPin size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-white)', display: 'block' }}>Facility Address</strong>
                    <span>Pink City Road, Near Euro School, Wakad, Pune</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Phone size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-white)', display: 'block' }}>Call or WhatsApp</strong>
                    <div>
                      <a href="tel:7350886383" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 700 }}>
                        +91 73508 86383
                      </a>
                      <span style={{ color: 'var(--text-muted)', margin: '0 0.5rem' }}>/</span>
                      <a href="tel:8806404615" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 700 }}>
                        +91 88064 04615
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Mail size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-white)', display: 'block' }}>Direct Inquiries</strong>
                    <span>club@recreationcaliclub.com</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Clock size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-white)', display: 'block' }}>Gym Timings (Mon – Sat)</strong>
                    <span>Morning: 6:00 AM – 12:00 Noon</span><br />
                    <span>Evening: 5:00 PM – 10:30 PM</span><br />
                    <span style={{ color: '#ef4444', fontWeight: 700 }}>Sunday Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Map Display */}
            <div
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-card)',
                background: '#0d1017',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
              }}
            >
              {/* Background grid pattern simulating modern dark map */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'radial-gradient(#262d3d 1px, transparent 1px), radial-gradient(#262d3d 1px, #0d1017 1px)',
                  backgroundSize: '24px 24px',
                  opacity: 0.5,
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--accent-gold)',
                    color: 'var(--text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem',
                    boxShadow: 'var(--shadow-gold-hover)',
                  }}
                >
                  <MapPin size={26} />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginBottom: '0.25rem' }}>
                  Recreation Cali Arena
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Easy highway access & free member parking on-site
                </p>
              </div>
            </div>

            {/* Commute Info */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Car size={20} color="var(--accent-gold)" />
                <div style={{ fontSize: '0.82rem' }}>
                  <strong style={{ color: 'var(--text-white)', display: 'block' }}>Free Parking</strong>
                  <span>65 designated member spots</span>
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Train size={20} color="var(--accent-gold)" />
                <div style={{ fontSize: '0.82rem' }}>
                  <strong style={{ color: 'var(--text-white)', display: 'block' }}>Transit Accessible</strong>
                  <span>2 blocks from Metro Station</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
