import { privacyPolicy } from '../data/privacyPolicy';

export function PrivacyPolicy({ language }) {
  const content = privacyPolicy[language];

  return (
    <main className="privacy-page">
      <article className="container privacy-card" aria-labelledby="privacy-title">
        <span className="eyebrow eyebrow--dark">Serrurier Ali</span>
        <h1 id="privacy-title">{content.title}</h1>

        <dl className="privacy-meta">
          <div>
            <dt>{content.lastUpdatedLabel}</dt>
            <dd>{content.lastUpdated}</dd>
          </div>
          <div>
            <dt>{content.responsiblePersonLabel}</dt>
            <dd>{content.responsiblePersonTitle}</dd>
          </div>
          <div>
            <dt>{content.contactLabel}</dt>
            <dd>{content.contactInfo}</dd>
          </div>
        </dl>

        <section className="privacy-policy-text" aria-label={content.title}>
          <p>{content.policyText}</p>
        </section>
      </article>
    </main>
  );
}
