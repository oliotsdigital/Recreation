'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useModal } from '@/context/ModalContext';
import { Menu, X, Flame, ChevronRight, Phone } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Programs & Facilities', href: '/programs' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Pricing & Passes', href: '/pricing' },
  { name: 'Free Trial', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { openBookingModal } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          width: '100%',
          backgroundColor: scrolled ? 'rgba(8, 9, 12, 0.92)' : 'rgba(8, 9, 12, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(245, 197, 24, 0.2)' : 'var(--border-subtle)'}`,
          transition: 'all var(--transition-normal)',
        }}
      >
        <div
          className="site-container-wide"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '78px',
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '46px',
                height: '46px',
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
                alt="Recreation Cali Fitness Club Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  color: 'var(--text-white)',
                }}
              >
                RECREATION
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  marginTop: '3px',
                }}
              >
                Cali Fitness Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color var(--transition-fast)',
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent-gold)',
                        borderRadius: '2px',
                        boxShadow: 'var(--shadow-gold)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => openBookingModal({ type: 'trial', title: 'Claim Your Free 60-Min Trial' })}
              className="btn btn-primary btn-sm cta-header-btn"
              style={{ display: 'none' }}
            >
              <Flame size={16} />
              <span>Book Free Trial</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                background: mobileMenuOpen ? 'rgba(245, 197, 24, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                border: `1.5px solid ${mobileMenuOpen ? 'var(--accent-gold)' : 'var(--border-card)'}`,
                color: mobileMenuOpen ? 'var(--accent-gold)' : 'var(--text-white)',
                borderRadius: 'var(--radius-sm)',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.2s ease',
              }}
              className="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 900px) {
            .desktop-nav {
              display: flex !important;
            }
            .cta-header-btn {
              display: inline-flex !important;
            }
            .mobile-hamburger-btn {
              display: none !important;
            }
          }
        `}</style>
      </header>

      {/* Standalone Full-Screen Mobile Drawer (Rendered outside header to escape backdrop-filter containing block) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            backgroundColor: 'rgba(8, 9, 12, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          {/* Drawer Top Navigation Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '78px',
              padding: '0 1.25rem',
              borderBottom: '1px solid var(--border-subtle)',
              flexShrink: 0,
              background: 'rgba(15, 18, 24, 0.6)',
            }}
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '42px',
                  height: '42px',
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
                  alt="Recreation Cali Fitness Club Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                    color: 'var(--text-white)',
                  }}
                >
                  RECREATION
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}
                >
                  Cali Fitness Club
                </span>
              </div>
            </Link>

            {/* High-visibility Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Navigation"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1.5px solid var(--border-highlight)',
                color: 'var(--text-white)',
                borderRadius: 'var(--radius-sm)',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.5rem 1.25rem 2.5rem',
              gap: '2rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.05rem 1.2rem',
                      borderRadius: 'var(--radius-md)',
                      background: isActive ? 'var(--accent-gold-dim)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${isActive ? 'var(--accent-gold-border)' : 'var(--border-subtle)'}`,
                      color: isActive ? 'var(--accent-gold)' : 'var(--text-white)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.12rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all var(--transition-fast)',
                      minHeight: '52px',
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={20} color={isActive ? 'var(--accent-gold)' : 'var(--text-muted)'} />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions & Helpdesk */}
            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal({ type: 'trial', title: 'Book Free Trial Assessment' });
                }}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                }}
              >
                <Flame size={20} />
                <span>Claim Free Assessment Pass</span>
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  paddingTop: '0.5rem',
                }}
              >
                <Phone size={16} color="var(--accent-gold)" />
                <span>Call / WhatsApp:</span>
                <a
                  href="tel:7350886383"
                  style={{ color: 'var(--accent-gold)', fontWeight: 800, textDecoration: 'none' }}
                >
                  +91 73508 86383
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
