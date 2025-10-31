import React, { useEffect, useRef, useState } from 'react';

export default function NeoNav(): JSX.Element {
  const [mobileActive, setMobileActive] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function openMobileMenu() {
      setMobileActive(true);
      document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
      setMobileActive(false);
      document.body.style.overflow = '';
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileActive) closeMobileMenu();
    }

    function onResize() {
      if (window.innerWidth > 992 && mobileActive) closeMobileMenu();
    }

    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [mobileActive]);

  function toggleMobile() {
    setMobileActive(v => {
      const next = !v;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }

  function closeMobile() {
    setMobileActive(false);
    document.body.style.overflow = '';
  }

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setActiveHref(href);
    closeMobile();
    const target = document.querySelector(href) as HTMLElement | null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <div className="floating-elements" aria-hidden>
        <div className="floating-circle" />
        <div className="floating-circle" />
        <div className="floating-circle" />
      </div>

      <nav className="navbar-container" aria-label="Main Navigation">
        <div className="navbar">
          <a href="#home" className="navbar-brand" onClick={e => handleNavClick(e, '#home')}>
            <div className="logo-icon" />
            <span className="brand-text">NeoNav</span>
          </a>

          <ul className="navbar-nav" id="navbarNav">
            <li className="nav-item">
              <a href="#home" className={`nav-link ${activeHref === '#home' ? 'active' : ''}`} onClick={e => handleNavClick(e, '#home')}>
                {/* <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg> */}
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className={`nav-link ${activeHref === '#about' ? 'active' : ''}`} onClick={e => handleNavClick(e, '#about')}>
                {/* <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg> */}
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className={`nav-link ${activeHref === '#services' ? 'active' : ''}`} onClick={e => handleNavClick(e, '#services')}>
                {/* <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg> */}
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className={`nav-link ${activeHref === '#portfolio' ? 'active' : ''}`} onClick={e => handleNavClick(e, '#portfolio')}>
                {/* <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 3h6v4"></path>
                  <path d="m22 7-10-4-10 4"></path>
                </svg> */}
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={`nav-link ${activeHref === '#contact' ? 'active' : ''}`} onClick={e => handleNavClick(e, '#contact')}>
                {/* <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg> */}
                <span>Contact</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#cta" className="cta-button" onClick={e => handleNavClick(e, '#cta')}>
                Get Started
              </a>
            </li>
          </ul>

          <button className={`mobile-toggle ${mobileActive ? 'active' : ''}`} id="mobileToggle" onClick={toggleMobile} aria-expanded={mobileActive} aria-controls="mobileMenu">
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </nav>

      <div ref={overlayRef} className={`mobile-menu-overlay ${mobileActive ? 'active' : ''}`} id="mobileMenuOverlay" onClick={closeMobile} />

      <div ref={menuRef} className={`mobile-menu ${mobileActive ? 'active' : ''}`} id="mobileMenu" aria-hidden={!mobileActive}>
        <div className="mobile-menu-header">
          <a href="#home" className="mobile-menu-brand" onClick={e => handleNavClick(e, '#home')}>
            <div className="logo-icon" />
            <span className="brand-text">NeoNav</span>
          </a>
          <button className="mobile-menu-close" id="mobileMenuClose" onClick={closeMobile} aria-label="Close menu">
            <span>×</span>
          </button>
        </div>

        <ul className="mobile-menu-nav">
          {['#home', '#about', '#services', '#portfolio', '#contact'].map(href => (
            <li key={href} className="mobile-menu-item">
              <a href={href} className={`mobile-menu-link ${activeHref === href ? 'active' : ''}`} onClick={e => handleNavClick(e, href)}>
                {/* reuse simple icon */}
                <svg className="mobile-menu-icon" viewBox="0 0 24 24" aria-hidden>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                <span>{href.replace('#', '')}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-cta">
          <a href="#cta" className="mobile-cta-button" onClick={e => handleNavClick(e, '#cta')}>Get Started</a>
        </div>
      </div>
    </>
  );
}
