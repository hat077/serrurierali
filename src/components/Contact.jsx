import { Mail, MapPin, PhoneCall } from 'lucide-react';

export function Contact({ t, businessInfo, language }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-card">
        <div className="contact-card__content">
          <span className="eyebrow">{t.nav.contact}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>

          <div className="contact-list">
            <a href={businessInfo.phoneHref} className="contact-item">
              <span className="contact-item__icon">
                <PhoneCall size={18} />
              </span>
              <span>
                <strong>{t.contact.phoneLabel}</strong>
                <small>{businessInfo.phoneDisplay}</small>
              </span>
            </a>

            <a href={`mailto:${businessInfo.email}`} className="contact-item">
              <span className="contact-item__icon">
                <Mail size={18} />
              </span>
              <span>
                <strong>{t.contact.email}</strong>
                <small>{businessInfo.email}</small>
              </span>
            </a>

            {businessInfo.serviceAreas.length > 0 && (
              <div className="contact-item">
                <span className="contact-item__icon">
                  <MapPin size={18} />
                </span>
                <span>
                  <strong>{t.contact.serviceArea}</strong>
                  <small>
                    {businessInfo.serviceAreas
                      .map((area) => (language === 'fr' ? area.fr : area.en))
                      .join(', ')}
                  </small>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
