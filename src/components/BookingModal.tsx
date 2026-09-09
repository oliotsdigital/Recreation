'use client';

import React, { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { X, CheckCircle, Calendar, Clock, User, Phone, Mail, Award } from 'lucide-react';

export default function BookingModal() {
  const { modalData, closeBookingModal, showToast } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Muscle-Up & Explosive Pulling',
    date: '',
    timeSlot: 'Morning (07:00 AM - 10:00 AM)',
    program: '',
    notes: '',
  });

  useEffect(() => {
    if (modalData.isOpen) {
      setSubmitted(false);
      setFormData((prev) => ({
        ...prev,
        program: modalData.defaultProgram || modalData.defaultPlan || 'Calisthenics Foundations',
      }));
    }
  }, [modalData]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalData.isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalData.isOpen, closeBookingModal]);

  if (!modalData.isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast(`Success! Your session for ${formData.name || 'Athlete'} is reserved.`);
  };

  return (
    <div className="modal-overlay" onClick={closeBookingModal} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={closeBookingModal}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                {modalData.type === 'trial' && 'FREE 60-MIN ASSESSMENT'}
                {modalData.type === 'class' && 'SPOT RESERVATION'}
                {modalData.type === 'membership' && 'MEMBERSHIP ENROLLMENT'}
                {modalData.type === 'coach' && 'PRIVATE MENTORSHIP INQUIRY'}
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>
                {modalData.title || 'Recreate Your Limits'}
              </h2>
              <p style={{ fontSize: '0.9rem' }}>
                {modalData.subtitle || 'Step onto the rigs at Recreation Calisthenics Club. No ego, just discipline and gravity.'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="booking-name">
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="booking-name"
                    required
                    type="text"
                    className="form-input"
                    placeholder="e.g. Alex Hunter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="booking-phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="booking-phone"
                    required
                    type="tel"
                    className="form-input"
                    placeholder="+91 73508 86383"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="booking-email">
                    Email Address *
                  </label>
                  <input
                    id="booking-email"
                    required
                    type="email"
                    className="form-input"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="booking-goal">
                  Primary Calisthenics / Fitness Goal
                </label>
                <select
                  id="booking-goal"
                  className="form-select"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                >
                  <option value="Muscle-Up & Explosive Pulling">Unlock Muscle-Up & Explosive Pulling</option>
                  <option value="Full Planche & Straight-Arm Levers">Master Full Planche & Front Lever</option>
                  <option value="Handstand & Balance Control">Freestanding Handstand & Inversions</option>
                  <option value="Foundational Bodyweight Power">First Strict Pull-up & Dip Foundation</option>
                  <option value="Hybrid Iron Strength & Gym Hypertrophy">Hybrid Weighted Calisthenics & Gym Iron</option>
                  <option value="Mobility & Joint Health">Gymnastic Mobility & Spine Health</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="booking-date">
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="booking-timeslot">
                    Preferred Time Window
                  </label>
                  <select
                    id="booking-timeslot"
                    className="form-select"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option value="Morning (06:30 AM - 10:00 AM)">Morning (06:30 AM - 10:00 AM)</option>
                    <option value="Midday (12:00 PM - 02:00 PM)">Midday (12:00 PM - 02:00 PM)</option>
                    <option value="Evening (05:00 PM - 08:30 PM)">Evening (05:00 PM - 08:30 PM)</option>
                    <option value="Weekend Open Jam">Weekend Open Rig Jam</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="booking-notes">
                  Current Training Experience / Injuries (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  className="form-textarea"
                  placeholder="Tell us about your pull-up count, gymnastics background, or any joint considerations..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={2}
                />
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: '1', minWidth: '180px' }}>
                  Confirm My Reservation
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeBookingModal}
                >
                  Cancel
                </button>
              </div>

              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  🔒 Zero spam. We contact you via WhatsApp / phone to confirm your rig slot.
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
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
              <CheckCircle size={38} />
            </div>

            <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
              RESERVATION CONFIRMED
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
              Welcome to the Club, {formData.name || 'Athlete'}!
            </h2>
            <p style={{ maxWidth: '440px', margin: '0 auto 1.75rem', fontSize: '0.95rem' }}>
              Your pass has been logged. Our training team will message you on <strong>{formData.phone || 'your phone'}</strong> with your entry PIN and gym arrival checklist.
            </p>

            <div
              style={{
                background: 'var(--bg-pitch)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                textAlign: 'left',
                marginBottom: '2rem',
                fontSize: '0.875rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Track / Goal:</span>
                <span style={{ fontWeight: 600, color: 'var(--accent-gold)' }}>{formData.goal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Slot Window:</span>
                <span style={{ fontWeight: 600 }}>{formData.timeSlot}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                <span>Recreation Cali Fitness Club, Main Arena</span>
              </div>
            </div>

            <button className="btn btn-primary" onClick={closeBookingModal} style={{ width: '100%' }}>
              Got It - Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
