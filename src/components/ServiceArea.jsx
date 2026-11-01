import { MapPin } from 'lucide-react';

export function ServiceArea({ t, businessInfo, language }) {
  if (businessInfo.serviceAreas.length === 0) {
    return null;
  }

  return (
    <section className="section service-area-section">
      <div className="container service-area-card">
        <div className="service-area-card__heading">
          <span className="service-card__icon">
            <MapPin size={24} />
          </span>
          <div>
            <span className="eyebrow eyebrow--dark">{t.serviceArea.eyebrow}</span>
            <h2>{t.serviceArea.title}</h2>
            <p>{t.serviceArea.intro}</p>
          </div>
        </div>

        <ul className="service-area-list">
          {businessInfo.serviceAreas.map((area) => (
            <li key={area.fr}>{language === 'fr' ? area.fr : area.en}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
