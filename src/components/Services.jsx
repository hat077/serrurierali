import {
  DoorOpen,
  KeyRound,
  Lock,
  LockKeyhole,
  PhoneCall,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const iconMap = {
  DoorOpen,
  Lock,
  ShieldCheck,
  KeyRound,
  Wrench,
  LockKeyhole,
};

function ServiceCards({ services, language }) {
  return (
    <div className="service-grid">
      {services.map((service) => {
        const Icon = iconMap[service.icon] || ShieldCheck;
        const title = language === 'fr' ? service.titleFr : service.titleEn;
        const description = language === 'fr' ? service.descriptionFr : service.descriptionEn;

        return (
          <article key={service.titleFr} className="service-card">
            <div className="service-card__icon">
              <Icon size={26} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function Services({
  t,
  services,
  businessInfo,
  language,
}) {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow eyebrow--dark">{t.nav.services}</span>
          <h2>{t.services.title}</h2>
          <p className="services-audience">{t.services.audience}</p>
        </div>

        {businessInfo.features.services && (
          <ServiceCards services={services} language={language} />
        )}

        <p className="services-pricing">{t.services.pricingMessage}</p>
        <div className="section-cta">
          <a href={businessInfo.phoneHref} className="btn btn--primary">
            <PhoneCall size={18} />
            {t.services.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
