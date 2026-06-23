"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Ember Particles ─── */
function EmberParticles({ count = 20 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const particles = Array.from({ length: count }).map(() => ({
    w: 2 + Math.random() * 4,
    h: 2 + Math.random() * 4,
    isGold: Math.random() > 0.5,
    x: 10 + Math.random() * 80,
    dur: 5 + Math.random() * 6,
    delay: Math.random() * 8,
  }));

  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      pointerEvents: 'none', zIndex: 1,
    }}>
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${p.w}px`,
          height: `${p.h}px`,
          borderRadius: '50%',
          background: p.isGold
            ? 'radial-gradient(circle, #C9A84C, #8B0000)'
            : 'radial-gradient(circle, #FF4500, #8B0000)',
          left: `${p.x}%`,
          bottom: '-10px',
          animation: `ember-rise ${p.dur}s ease-in-out ${p.delay}s infinite`,
          opacity: 0,
          boxShadow: '0 0 6px rgba(201,168,76,0.3)',
        }} />
      ))}
    </div>
  );
}

/* ─── SVG Icons ─── */
const IconPlay = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
  </svg>
);
const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);
const IconYouTube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const IconMusic = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);
const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const IconSpotify = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);
const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

/* ─── Logo SVG ─── */
const DaicoLogo = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size * 0.625} viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cercle fond */}
    <circle cx="160" cy="100" r="70" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
    {/* Kanji gauche */}
    <text x="20" y="130" fontFamily="'Shippori Mincho',serif" fontSize="70" fontWeight="800" fill="rgba(201,168,76,0.5)">笑</text>
    {/* Kanji droit */}
    <text x="225" y="130" fontFamily="'Shippori Mincho',serif" fontSize="70" fontWeight="800" fill="rgba(201,168,76,0.5)">宗</text>
    {/* Katana blade */}
    <line x1="60" y1="155" x2="255" y2="45" stroke="#D8C870" strokeWidth="3" strokeLinecap="round"/>
    {/* Garde tsuba */}
    <ellipse cx="220" cy="62" rx="12" ry="7" transform="rotate(-28 220 62)" fill="#C9A84C" stroke="#E8D080" strokeWidth="1"/>
    {/* Poignée */}
    <rect x="228" y="38" width="48" height="14" rx="3" transform="rotate(-28 228 38)" fill="#2a1a0a" stroke="#C9A84C" strokeWidth="1"/>
    {/* Texture poignée */}
    <line x1="240" y1="47" x2="244" y2="37" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    <line x1="250" y1="43" x2="254" y2="33" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    <line x1="260" y1="40" x2="264" y2="30" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    {/* As de pique */}
    <g transform="translate(130, 62)">
      <rect x="0" y="0" width="52" height="68" rx="4" fill="#F5EAB0" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5"/>
      <path d="M26 10 C26 10 10 26 10 34 C10 42 18 44 22 40 C20 46 14 52 14 52 L38 52 C38 52 32 46 30 40 C34 44 42 42 42 34 C42 26 26 10 26 10Z" fill="#1a1a1a"/>
      <text x="5" y="16" fontFamily="serif" fontSize="12" fontWeight="800" fill="#1a1a1a">A</text>
      <text x="5" y="28" fontFamily="serif" fontSize="10" fill="#1a1a1a">♠</text>
    </g>
    {/* KATANA text */}
    <text x="160" y="18" fontFamily="'Rajdhani',sans-serif" fontSize="14" fontWeight="700" fill="#C9A84C" textAnchor="middle" letterSpacing="6">KATANA</text>
    {/* AMIRI text */}
    <text x="160" y="192" fontFamily="'Rajdhani',sans-serif" fontSize="14" fontWeight="700" fill="#C9A84C" textAnchor="middle" letterSpacing="6">AMIRI</text>
    {/* Coins décoratifs */}
    <line x1="10" y1="10" x2="30" y2="10" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
    <line x1="10" y1="10" x2="10" y2="30" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
    <line x1="290" y1="10" x2="310" y2="10" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
    <line x1="310" y1="10" x2="310" y2="30" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
    <line x1="10" y1="190" x2="30" y2="190" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
    <line x1="10" y1="170" x2="10" y2="190" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
    <line x1="290" y1="190" x2="310" y2="190" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
    <line x1="310" y1="170" x2="310" y2="190" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8"/>
  </svg>
);

/* ─── Katana Divider ─── */
const KatanaDivider = () => (
  <div className="relative flex items-center py-8">
    <div style={{
      flex: 1,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #C9A84C 50%, transparent)',
    }} />
    <div style={{
      width: '12px',
      height: '12px',
      background: '#C9A84C',
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      margin: '0 16px',
      flexShrink: 0,
    }} />
    <div style={{
      flex: 1,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #C9A84C 50%, transparent)',
    }} />
  </div>
);

/* ─── Section Label ─── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="font-street" style={{
    color: '#8B0000',
    fontSize: '0.75rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }}>
    <span style={{ color: '#C9A84C' }}>◆</span>
    {children}
    <span style={{ color: '#C9A84C' }}>◆</span>
  </div>
);

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(4,4,4,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
    }}>
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <DaicoLogo size={60} />
      </a>
      <div className="font-street" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {['musique', 'videos', 'bio', 'contact'].map((id) => (
          <a key={id} href={`#${id}`} style={{
            color: 'rgba(240,237,232,0.7)',
            textDecoration: 'none',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,232,0.7)')}
          >{id}</a>
        ))}
        <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem', padding: '8px 20px' }}>
          Booking
        </a>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="hero" className="scanlines" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(139,0,0,0.12) 0%, transparent 60%), #080808',
    }}>
      {/* Kanji background watermarks */}
      <span className="kanji-bg animate-float" style={{ top: '10%', left: '-2%', '--rot': '-5deg' } as React.CSSProperties}>斬</span>
      <span className="kanji-bg animate-float" style={{ bottom: '5%', right: '-1%', '--rot': '8deg', animationDelay: '2s', fontSize: 'clamp(60px,10vw,130px)' } as React.CSSProperties}>刃</span>
      <span className="kanji-bg animate-float" style={{ top: '40%', right: '5%', '--rot': '-3deg', animationDelay: '4s', fontSize: 'clamp(40px,7vw,90px)' } as React.CSSProperties}>魂</span>

      {/* Ember particles */}
      <EmberParticles count={24} />

      {/* Diagonal slash decoration */}
      <div style={{
        position: 'absolute',
        top: '0', left: '0', right: '0', bottom: '0',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          width: '200%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 40%, rgba(232,208,128,0.8) 50%, rgba(201,168,76,0.4) 60%, transparent 100%)',
          top: '65%',
          left: '-50%',
          transform: 'rotate(-12deg)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.5s ease 0.8s',
        }} />
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '120px 24px 60px',
        maxWidth: '900px',
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '32px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s ease',
        }}>
          <DaicoLogo size={120} />
        </div>

        {/* Subtitle label */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.2s',
        }}>
          <SectionLabel>Afrodrill · Drill Bénin · AMIRI</SectionLabel>
        </div>

        {/* Main title */}
          <h1 className="font-display" style={{
          fontSize: 'clamp(52px, 12vw, 130px)',
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          marginTop: '16px',
          marginBottom: '8px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease 0.3s',
          position: 'relative',
        }}>
          <span className="animate-glitch text-gold-gradient animate-flicker" data-text="DAÏCO" style={{ position: 'relative', display: 'inline-block' }}>DAÏCO</span>
          <br />
          <span style={{ color: '#F0EDE8', WebkitTextStroke: '1px rgba(201,168,76,0.3)' }}>CHUP</span>
        </h1>

        {/* Amiri tagline */}
        <p className="font-street" style={{
          fontSize: 'clamp(14px, 2.5vw, 22px)',
          color: '#8B0000',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '8px',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.9s ease 0.5s',
        }}>
          ── AMIRI coupe tout ──
        </p>

        <p className="font-street" style={{
          fontSize: 'clamp(12px, 2vw, 16px)',
          color: 'rgba(240,237,232,0.5)',
          letterSpacing: '0.1em',
          marginBottom: '48px',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.9s ease 0.6s',
        }}>
          Le son qui tranche. La lame qui groove.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s ease 0.7s',
        }}>
          <a href="#musique" className="btn-primary">
            <IconPlay /> Écouter maintenant
          </a>
          <a href="#videos" className="btn-secondary">
            Voir les clips
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 1s ease 1.2s',
          color: '#C9A84C',
        }}>
          <div className="font-street" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</div>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
            animation: 'blood-drip 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}

/* ─── MUSIQUE ─── */
function Musique() {
  return (
    <section id="musique" style={{
      background: 'linear-gradient(180deg, #080808 0%, #100505 40%, #080808 100%)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background kanji */}
      <span className="kanji-bg" style={{ top: '20%', left: '2%', opacity: 0.05 }}>音</span>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionLabel>Streaming</SectionLabel>
        <h2 className="font-display text-gold-gradient" style={{
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: 800,
          marginBottom: '8px',
        }}>
          La Musique
        </h2>
        <p className="font-street" style={{
          color: 'rgba(240,237,232,0.5)',
          letterSpacing: '0.05em',
          marginBottom: '48px',
        }}>
          Stream. Écoute. Ressens l'univers AMIRI.
        </p>

        {/* Audiomack embed */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(201,168,76,0.2)',
          padding: '4px',
          marginBottom: '24px',
        }}>
          <iframe
            title="Daïco Chup sur Audiomack"
            src="https://audiomack.com/embed/daico-chup/song/dorimin-drill?background=1&theme=dark"
            width="100%"
            height="252"
            frameBorder="0"
            allow="encrypted-media"
            style={{ display: 'block', background: '#080808' }}
          />
        </div>

        {/* Platform links */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="https://audiomack.com/daico-chup" target="_blank" rel="noopener noreferrer" className="platform-badge">
            <IconMusic /> Audiomack
            <IconExternal />
          </a>
          <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="platform-badge">
            <IconSpotify /> Spotify
            <IconExternal />
          </a>
          <a href="https://www.qobuz.com" target="_blank" rel="noopener noreferrer" className="platform-badge">
            <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>Q</span> Qobuz
            <IconExternal />
          </a>
        </div>

        {/* Track list teaser */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '32px' }}>
          <p className="font-street" style={{ color: 'rgba(240,237,232,0.4)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Tracks en vedette
          </p>
          {[
            { title: 'DORIMIN DRILL', desc: 'Le cut qui a tout lancé' },
            { title: 'Djandjou 2K6', desc: 'Afrodrill pur — rythme et lame' },
          ].map((track, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span className="font-street" style={{ color: '#8B0000', fontSize: '0.75rem', minWidth: '20px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="font-street" style={{ fontWeight: 700, letterSpacing: '0.05em', color: '#F0EDE8', fontSize: '0.95rem' }}>
                    {track.title}
                  </div>
                  <div style={{ color: 'rgba(240,237,232,0.4)', fontSize: '0.75rem', marginTop: '2px' }}>
                    {track.desc}
                  </div>
                </div>
              </div>
              <a href="https://audiomack.com/daico-chup" target="_blank" rel="noopener noreferrer" style={{
                color: '#C9A84C',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}>
                <IconPlay /> Écouter
              </a>
            </div>
          ))}
        </div>
      </div>

      <KatanaDivider />
    </section>
  );
}

/* ─── VIDÉOS ─── */
function Videos() {
  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'DORIMIN DRILL',
      label: 'Clip officiel',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Djandjou 2K6',
      label: 'Clip officiel',
    },
  ];

  return (
    <section id="videos" style={{
      background: '#080808',
      padding: '80px 24px 100px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span className="kanji-bg" style={{ top: '10%', right: '2%', opacity: 0.05 }}>映</span>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <SectionLabel>Clips</SectionLabel>
        <h2 className="font-display text-gold-gradient" style={{
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: 800,
          marginBottom: '48px',
        }}>
          Les Vidéos
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {videos.map((v, i) => (
            <div key={i} className="video-frame" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0,
                background: 'linear-gradient(135deg, transparent 70%, rgba(139,0,0,0.3))',
                zIndex: 1,
                pointerEvents: 'none',
                width: '100%', height: '100%',
              }} />
              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${v.id}?modestbranding=1&rel=0&color=red`}
                title={v.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block' }}
              />
              <div style={{
                padding: '14px 16px',
                background: 'rgba(10,5,5,0.9)',
                borderTop: '1px solid rgba(201,168,76,0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div className="font-street" style={{ fontWeight: 700, color: '#F0EDE8', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                    {v.title}
                  </div>
                  <div className="font-street" style={{ color: '#8B0000', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {v.label}
                  </div>
                </div>
                <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#C9A84C', fontSize: '0.75rem' }}>
                  <IconExternal />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://www.youtube.com/@daicochup" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <IconYouTube /> Voir toute la chaîne
          </a>
        </div>
      </div>

      <KatanaDivider />
    </section>
  );
}

/* ─── BIO ─── */
function Bio() {
  return (
    <section id="bio" style={{
      background: 'linear-gradient(180deg, #080808 0%, #0d0202 50%, #080808 100%)',
      padding: '80px 24px 100px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Big AMIRI watermark */}
      <div className="font-display" style={{
        position: 'absolute',
        fontSize: 'clamp(100px, 20vw, 260px)',
        fontWeight: 800,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,0,0,0.2)',
        filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.15)) drop-shadow(0 0 25px rgba(255,0,0,0.1)) drop-shadow(0 0 50px rgba(139,0,0,0.08))',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        AMIRI
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <SectionLabel>L&apos;artiste</SectionLabel>
        <h2 className="font-display text-gold-gradient" style={{
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: 800,
          marginBottom: '48px',
        }}>
          Qui est Daïco Chup?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>
          <div>
                <p style={{
                  color: 'rgba(240,237,232,0.8)',
                  lineHeight: 1.8,
                  fontSize: '0.95rem',
                  marginBottom: '24px',
                }}>
                  <span className="font-display" style={{ color: '#C9A84C', fontWeight: 700, fontSize: '1.2em' }}>D</span>aïco Chup forge sa propre voie dans le paysage musical africain.
                  Né du Bénin, il fusionne l&apos;énergie brute de la{' '}
                  <span style={{ color: '#C9A84C' }}>drill</span> avec les rythmiques africaines
                  pour créer un son qu&apos;on appelle <span style={{ color: '#C9A84C' }}>afrodrill</span> — tranchant, cinématique, sans compromis.
                </p>
                <p style={{
                  color: 'rgba(240,237,232,0.6)',
                  lineHeight: 1.8,
                  fontSize: '0.9rem',
                }}>
                  Son univers tourne autour de <strong style={{ color: '#8B0000' }}>AMIRI</strong>,
                  le nom de son katana. La lame comme métaphore du son : propre, précis, définitif.
                  Chaque track est un coup porté. Chaque beat, une cicatrice.
                </p>
              </div>

              <div>
                <p style={{
                  color: 'rgba(240,237,232,0.6)',
                  lineHeight: 1.8,
                  fontSize: '0.9rem',
                  marginBottom: '24px',
                }}>
                  Influencé par la discipline et l&apos;esthétique du Japon féodal autant que par
                  les rues de Cotonou, Daïco construit une identité visuelle et sonore qui n&apos;appartient qu&apos;à lui.
                </p>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  {[
                    { num: '1K+', label: 'Vues YouTube' },
                    { num: '186', label: 'Plays Audiomack' },
                    { num: '∞', label: 'Potentiel' },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div className="font-display text-gold-gradient" style={{ fontSize: '2rem', fontWeight: 800 }}>{s.num}</div>
                      <div className="font-street" style={{ color: 'rgba(240,237,232,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
          </div>
        </div>
      </div>

      <KatanaDivider />
    </section>
  );
}

/* ─── RÉSEAUX ─── */
function Reseaux() {
  const links = [
    { icon: <IconInstagram />, label: 'Instagram', handle: '@daico_chup', url: 'https://www.instagram.com/daico_chup', color: '#E1306C' },
    { icon: <IconTikTok />, label: 'TikTok', handle: '@daico_chup', url: 'https://www.tiktok.com/@daico_chup', color: '#69C9D0' },
    { icon: <IconYouTube />, label: 'YouTube', handle: 'Daïco Chup', url: 'https://www.youtube.com/@daicochup', color: '#FF0000' },
    { icon: <IconMusic />, label: 'Audiomack', handle: 'daico-chup', url: 'https://audiomack.com/daico-chup', color: '#FF7700' },
  ];

  return (
    <section id="reseaux" style={{
      background: '#080808',
      padding: '80px 24px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <SectionLabel>Suivre</SectionLabel>
        <h2 className="font-display text-gold-gradient" style={{
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 800,
          marginBottom: '12px',
        }}>
          Rejoins l&apos;univers
        </h2>
        <p className="font-street" style={{ color: 'rgba(240,237,232,0.4)', marginBottom: '48px', letterSpacing: '0.05em' }}>
          Suis AMIRI sur toutes les plateformes
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link"
              style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ color: link.color }}>{link.icon}</span>
                <span className="font-street" style={{ letterSpacing: '0.1em', fontSize: '0.9rem' }}>{link.label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'rgba(240,237,232,0.3)', fontSize: '0.8rem' }}>{link.handle}</span>
                <IconExternal />
              </div>
            </a>
          ))}
        </div>
      </div>

      <KatanaDivider />
    </section>
  );
}

/* ─── NEWSLETTER ─── */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: 'Nouvelle inscription newsletter Daïco Chup' }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" style={{
      background: 'linear-gradient(180deg, #080808 0%, #0d0202 60%, #080808 100%)',
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span className="kanji-bg" style={{ bottom: '-5%', left: '50%', transform: 'translateX(-50%)', opacity: 0.04 }}>通</span>

      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <SectionLabel>Rester connecté</SectionLabel>
        <h2 className="font-display" style={{
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          marginBottom: '12px',
          color: '#F0EDE8',
        }}>
          Entre dans le clan <span className="text-gold-gradient">AMIRI</span>
        </h2>
        <p style={{
          color: 'rgba(240,237,232,0.5)',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          marginBottom: '40px',
        }}>
          Nouveaux sons, dates de concerts, contenus exclusifs.
          Reçois l&apos;intel directement.
        </p>

        {status === 'done' ? (
          <div style={{
            padding: '24px',
            border: '1px solid rgba(201,168,76,0.4)',
            background: 'rgba(201,168,76,0.05)',
          }}>
            <div className="font-display text-gold-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
              Bienvenue dans le clan ◆
            </div>
            <p style={{ color: 'rgba(240,237,232,0.6)', fontSize: '0.85rem' }}>
              AMIRI te garde informé. Reste à l&apos;écoute.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                className="input-field"
                style={{ flex: 1, borderRight: 'none' }}
              />
              <button type="submit" className="btn-primary" style={{
                clipPath: 'none',
                borderLeft: 'none',
                flexShrink: 0,
                padding: '14px 24px',
              }}>
                {status === 'sending' ? '...' : <><IconMail /> S&apos;inscrire</>}
              </button>
            </div>
            {status === 'error' && (
              <p style={{ color: '#8B0000', fontSize: '0.8rem', textAlign: 'left' }}>
                Erreur — réessaie ou écris directement à daicochup@gmail.com
              </p>
            )}
            <p style={{ color: 'rgba(240,237,232,0.25)', fontSize: '0.7rem' }}>
              Pas de spam. Désinscription en 1 clic. Ton email reste entre nous.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─── CONTACT / BOOKING ─── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'Demande de booking Daïco Chup' }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{
      background: '#080808',
      padding: '80px 24px 120px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span className="kanji-bg" style={{ top: '20%', right: '-2%', opacity: 0.05 }}>契</span>

      <div style={{ maxWidth: '660px', margin: '0 auto' }}>
        <SectionLabel>Booking & Contact</SectionLabel>
        <h2 className="font-display text-gold-gradient" style={{
          fontSize: 'clamp(28px, 5vw, 56px)',
          fontWeight: 800,
          marginBottom: '12px',
        }}>
          Travailler avec Daïco
        </h2>
        <p style={{
          color: 'rgba(240,237,232,0.5)',
          fontSize: '0.9rem',
          marginBottom: '48px',
          lineHeight: 1.7,
        }}>
          Concerts, collaborations, features, interviews.
          AMIRI est disponible pour ceux qui méritent la lame.
        </p>

        {status === 'done' ? (
          <div style={{
            padding: '32px',
            border: '1px solid rgba(139,0,0,0.5)',
            background: 'rgba(139,0,0,0.05)',
            textAlign: 'center',
          }}>
            <div className="font-display" style={{ color: '#C9A84C', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>
              Message reçu ◆
            </div>
            <p style={{ color: 'rgba(240,237,232,0.6)', fontSize: '0.85rem' }}>
              On te répond dès que possible. AMIRI est patient.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="font-street" style={{ color: 'rgba(240,237,232,0.4)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Nom / Promoteur
                </label>
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="Ton nom" className="input-field" />
              </div>
              <div>
                <label className="font-street" style={{ color: 'rgba(240,237,232,0.4)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Email
                </label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required
                  placeholder="contact@mail.com" className="input-field" />
              </div>
            </div>
            <div>
              <label className="font-street" style={{ color: 'rgba(240,237,232,0.4)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Objet & Message
              </label>
              <textarea name="message" value={form.message} onChange={handleChange} required
                placeholder="Concert, collab, feature... Décris ta demande."
                rows={5}
                className="input-field"
                style={{ resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Envoi...' : 'Envoyer la demande'}
              </button>
              <span style={{ color: 'rgba(240,237,232,0.25)', fontSize: '0.75rem' }}>ou</span>
              <a href="https://www.instagram.com/daico_chup" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '13px 20px' }}>
                <IconInstagram /> DM Instagram
              </a>
            </div>
            {status === 'error' && (
              <p style={{ color: '#8B0000', fontSize: '0.8rem' }}>
                Erreur d&apos;envoi — contacte directement sur Instagram.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer style={{
      background: '#040404',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: '20px' }}>
        <DaicoLogo size={60} />
      </div>
      <div className="font-display text-gold-gradient" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>
        DAÏCO CHUP
      </div>
      <div className="font-street" style={{ color: 'rgba(240,237,232,0.3)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px' }}>
        AMIRI · Afrodrill · Bénin
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
        {[
          { href: 'https://www.instagram.com/daico_chup', icon: <IconInstagram /> },
          { href: 'https://www.tiktok.com/@daico_chup', icon: <IconTikTok /> },
          { href: 'https://www.youtube.com/@daicochup', icon: <IconYouTube /> },
          { href: 'https://audiomack.com/daico-chup', icon: <IconMusic /> },
        ].map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" style={{
            color: 'rgba(240,237,232,0.4)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,232,0.4)')}
          >{l.icon}</a>
        ))}
      </div>
      <p style={{ color: 'rgba(240,237,232,0.2)', fontSize: '0.7rem' }}>
        © {new Date().getFullYear()} Daïco Chup. Tous droits réservés. AMIRI ne dort jamais.
      </p>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Musique />
        <Videos />
        <Bio />
        <Reseaux />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
