import {
  Building2,
  Clock3,
  HeartHandshake,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

const iconSet = [Clock3, ShieldCheck, UserRound, MessageSquareText, HeartHandshake, Building2];

export function WhyChooseUs({ t, businessInfo, language }) {
  const confirmedDetails = [
    businessInfo.licensingAndInsurance,
    businessInfo.experienceAndQualifications,
  ]
    .filter((detail) => detail.confirmed)
    .map((detail) => detail[language])
    .filter(Boolean);

  const responseTime = businessInfo.emergencyResponseTime.confirmed
    ? businessInfo.emergencyResponseTime[language]
    : '';
  const hasVerifiedDetails = responseTime || confirmedDetails.length > 0;

  return (
    <section className="section trust-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow eyebrow--dark">{t.reasons.title}</span>
          <h2>{t.reasons.title}</h2>
          <p>{t.reasons.intro}</p>
        </div>

        <div className="reason-grid">
          {t.reasons.list.map((reason, index) => {
            const Icon = iconSet[index % iconSet.length];

            return (
              <div className="reason-card" key={reason}>
                <div className="reason-card__icon">
                  <Icon size={24} />
                </div>
                <p>{reason}</p>
                {index === 0 && businessInfo.emergencyAvailabilityConfirmed && (
                  <span className="availability-badge availability-badge--confirmed">
                    {`${t.emergency.availability}: ${businessInfo.emergencyAvailability}`}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="trust-section__cta">
          <div className="trust-section__details">
            <p>{t.reasons.contactPrompt}</p>
            {hasVerifiedDetails && (
              <>
                {responseTime && <p>{`${t.reasons.responseTime}: ${responseTime}`}</p>}
                {confirmedDetails.length > 0 && (
              <ul>
                {confirmedDetails.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
                )}
              </>
            )}
          </div>
          <a className="btn btn--primary" href={businessInfo.phoneHref}>
            <PhoneCall size={18} />
            {t.emergency.callNow}
          </a>
        </div>
      </div>
    </section>
  );
}
