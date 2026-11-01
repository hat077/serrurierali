import { BrandLogo } from './BrandLogo';

export function Footer({ t, businessInfo, language, isPrivacyPage = false }) {
  const navLinks = [
    { href: isPrivacyPage ? '/#accueil' : '#accueil', label: t.nav.accueil },
    { href: isPrivacyPage ? '/#services' : '#services', label: t.nav.services },
    { href: isPrivacyPage ? '/#about' : '#about', label: t.nav.about },
    { href: isPrivacyPage ? '/#contact' : '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href={isPrivacyPage ? '/' : '#accueil'} className="brand brand--footer" aria-label={`${businessInfo.name} — ${t.nav.accueil}`}>
            <BrandLogo name={businessInfo.name} />
          </a>
          <p>{t.footer.description}</p>
        </div>

        <div>
          <h3>{t.footer.navigation}</h3>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t.footer.contactDetails}</h3>
          <ul className="footer-meta">
            <li>
              <a href={businessInfo.phoneHref}>{businessInfo.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </li>
            {businessInfo.serviceAreas.map((area) => (
              <li key={area.fr}>{language === 'fr' ? area.fr : area.en}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <span>{t.footer.copyright}</span>
        <a href="/privacy-policy" aria-current={isPrivacyPage ? 'page' : undefined}>
          {t.footer.privacy}
        </a>
      </div>
    </footer>
  );
}
