import { Menu, PhoneCall, X } from 'lucide-react';
import { useState } from 'react';
import { BrandLogo } from './BrandLogo';

export function Navbar({ language, setLanguage, t, businessInfo, isPrivacyPage = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: isPrivacyPage ? '/#accueil' : '#accueil', label: t.nav.accueil },
    { href: isPrivacyPage ? '/#services' : '#services', label: t.nav.services },
    { href: isPrivacyPage ? '/#about' : '#about', label: t.nav.about },
    { href: isPrivacyPage ? '/#contact' : '#contact', label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label={t.nav.navigationLabel}>
        <a href={isPrivacyPage ? '/' : '#accueil'} className="brand" aria-label={`${businessInfo.name} — ${t.nav.accueil}`}>
          <BrandLogo name={businessInfo.name} />
        </a>

        <div className={`nav-panel ${isOpen ? 'nav-panel--open' : ''}`}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <div className="language-switch" aria-label="Language selector">
            <button
              type="button"
              className={language === 'fr' ? 'is-active' : ''}
              onClick={() => setLanguage('fr')}
              aria-label="Choisir le français"
            >
              FR
            </button>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <a className="btn btn--primary navbar__phone" href={businessInfo.phoneHref}>
            <PhoneCall size={18} />
            <span>{t.nav.phoneLabel}</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.menu}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
