'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Flame, CheckCircle, Send, ShieldCheck } from 'lucide-react';

export default function ContactForm() {
  const { showToast } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: 'Beginner (0-2 pull-ups)',
    goal: 'First Strict Pull-up & Muscle-Up',
    date: '',
    timeSlot: 'Morning 07:00 AM',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast(`Trial request confirmed for ${formData.name}! Our team will connect shortly.`);
  };

  return (
    <div
      className="glass-panel responsive-panel-padding"
      style={{
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--accent-gold-border)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      {!submitted ? (
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>
              <Flame size={14} />
              <span>Complimentary 60-Min Pass</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.5rem' }}>
              Book Your Free Assessment
            </h3>
            <p style={{ fontSize: '0.95rem' }}>
              Experience the energy of Recreation Cali Club with zero pressure. Our training faculty will assess your mobility, pull/push mechanics, and map out your personalized roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  required
                  type="text"
                  className="form-input"
                  placeholder="e.g. Jordan Scott"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">
                  Phone / WhatsApp *
                </label>
                <input
                  id="contact-phone"
                  required
                  type="tel"
                  className="form-input"
                  placeholder="+91 73508 86383"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">
                Email Address *
              </label>
              <input
                id="contact-email"
                required
                type="email"
                className="form-input"
                placeholder="jordan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-experience">
                  Current Fitness Level
                </label>
                <select
                  id="contact-experience"
                  className="form-select"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="Beginner (0-2 pull-ups)">Foundational Beginner (0-2 pull-ups)</option>
                  <option value="Intermediate (5-10 pull-ups)">Intermediate (5-10 strict pull-ups)</option>
                  <option value="Advanced (12+ pull-ups, muscle-up ready)">Advanced (12+ pull-ups, chasing muscle-up)</option>
                  <option value="Elite Calisthenics Athlete">Elite (Working on Planche / Levers)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-goal">
                  Target Skill
                </label>
                <select
                  id="contact-goal"
                  className="form-select"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                >
                  <option value="First Strict Pull-up & Muscle-Up">First Strict Pull-up & Muscle-Up</option>
                  <option value="Full Planche & Front Lever">Full Planche & Front Lever</option>
                  <option value="Freestanding Handstand">Freestanding Handstand & Balance</option>
                  <option value="Weighted Calisthenics & Strength">Weighted Calisthenics & Dense Hypertrophy</option>
                  <option value="Pancake & Thoracic Mobility">Pancake & Thoracic Mobility</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-date">
                  Preferred Date
                </label>
                <input
                  id="contact-date"
                  type="date"
                  className="form-input"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-timeslot">
                  Preferred Slot
                </label>
                <select
                  id="contact-timeslot"
                  className="form-select"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                >
                  <option value="Morning 06:30 AM - 09:30 AM">Morning (06:30 AM - 09:30 AM)</option>
                  <option value="Midday 12:00 PM - 02:00 PM">Midday (12:00 PM - 02:00 PM)</option>
                  <option value="Evening 05:30 PM - 08:30 PM">Evening (05:30 PM - 08:30 PM)</option>
                  <option value="Saturday Morning Masterclass">Saturday Morning (09:00 AM)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                Additional Questions or Goals
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                rows={3}
                placeholder="Let us know about previous training, injuries, or goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <Flame size={18} />
              <span>Submit & Claim Free Trial Pass</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <ShieldCheck size={16} color="var(--accent-gold)" />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                100% Free • No credit card required • Instant SMS confirmation
              </span>
            </div>
          </form>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--accent-gold-dim)',
              border: '2px solid var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: 'var(--accent-gold)',
            }}
          >
            <CheckCircle size={44} />
          </div>

          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            APPLICATION RECEIVED
          </div>
          <h3 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            You&apos;re On the Roster, {formData.name}!
          </h3>
          <p style={{ maxWidth: '480px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            We have reserved your Free Trial Assessment. Our coaching team will WhatsApp you on <strong>{formData.phone}</strong> within 2 hours with your entrance code and warm-up guide.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-secondary"
          >
            Book Another Session or Update Info
          </button>
        </div>
      )}
    </div>
  );
}
