import { ArrowRight, Clock3, LockKeyhole, PhoneCall, ShieldCheck } from 'lucide-react';

export function Hero({ t, businessInfo }) {
  const isEmergencyEnabled = businessInfo.features.emergencySection;
  const StatusIcon = isEmergencyEnabled && businessInfo.emergencyAvailabilityConfirmed
    ? Clock3
    : LockKeyhole;
  const featureList = [
    { icon: LockKeyhole, label: t.hero.feature1 },
    { icon: ShieldCheck, label: t.hero.feature2 },
    { icon: PhoneCall, label: t.hero.feature3 },
  ];

  return (
    <section id="accueil" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow hero__availability">
            <StatusIcon size={15} />
            {isEmergencyEnabled && businessInfo.emergencyAvailabilityConfirmed
              ? `${t.emergency.availability}: ${businessInfo.emergencyAvailability}`
              : isEmergencyEnabled
                ? t.hero.emergencyBadge
                : t.hero.badge}
          </span>
          <h1>{isEmergencyEnabled ? t.hero.title : t.hero.generalTitle}</h1>
          <p className="hero__subtitle">
            {isEmergencyEnabled ? t.hero.subtitle : t.hero.generalSubtitle}
          </p>
          <p className="hero__text">{isEmergencyEnabled ? t.hero.text : t.hero.generalText}</p>

          <div className="hero__actions">
            <a href={businessInfo.phoneHref} className="btn btn--primary hero__call">
              <PhoneCall size={18} />
              <span>{isEmergencyEnabled ? t.hero.primary : t.hero.generalPrimary}</span>
            </a>
            <a href="#services" className="btn btn--secondary">
              <span>{isEmergencyEnabled ? t.hero.secondary : t.hero.generalSecondary}</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <a href={businessInfo.phoneHref} className="hero__contact">
            <PhoneCall size={16} />
            <span>{businessInfo.phoneDisplay}</span>
          </a>

          <div className="hero__features" aria-label={t.hero.featuresLabel}>
            {featureList.map(({ icon: Icon, label }) => (
              <span key={label}>
                <Icon size={16} />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={businessInfo.heroImage}
            alt={t.hero.imageAlt}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
