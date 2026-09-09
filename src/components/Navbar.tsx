'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useModal } from '@/context/ModalContext';
import { Menu, X, Flame, ChevronRight } from 'lucide-react';

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

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        width: '100%',
        backgroundColor: scrolled ? 'rgba(8, 9, 12, 0.92)' : 'rgba(8, 9, 12, 0.7)',
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-white)',
              borderRadius: 'var(--radius-sm)',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '78px',
            left: 0,
            right: 0,
            bottom: 0,
            maxHeight: 'calc(100vh - 78px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            backgroundColor: 'rgba(8, 9, 12, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 899,
            padding: '1.5rem 1.25rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-subtle)',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'var(--accent-gold-dim)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isActive ? 'var(--accent-gold-border)' : 'var(--border-subtle)'}`,
                    color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} color={isActive ? 'var(--accent-gold)' : 'var(--text-muted)'} />
                </Link>
              );
            })}
          </div>

          <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal({ type: 'trial', title: 'Book Free Trial Assessment' });
              }}
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '1rem', padding: '0.85rem' }}
            >
              <Flame size={18} />
              <span>Claim Free Assessment Pass</span>
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Call / WhatsApp:{' '}
              <a href="tel:7350886383" style={{ color: 'var(--accent-gold)', fontWeight: 800, textDecoration: 'none' }}>
                +91 73508 86383
              </a>
            </p>
          </div>
        </div>
      )}

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
  );
}
