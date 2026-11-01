import { ArrowRight, PhoneCall, MessageSquareText, ShieldCheck } from 'lucide-react';

export function HowItWorks({ t }) {
  const steps = [
    { icon: PhoneCall, title: t.process.steps[0], description: t.process.stepDescriptions[0] },
    { icon: MessageSquareText, title: t.process.steps[1], description: t.process.stepDescriptions[1] },
    { icon: ShieldCheck, title: t.process.steps[2], description: t.process.stepDescriptions[2] },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow eyebrow--dark">{t.process.title}</span>
          <h2>{t.process.title}</h2>
        </div>

        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div className="step-card" key={title}>
              <div className="step-card__number">0{index + 1}</div>
              <div className="step-card__icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < steps.length - 1 && (
                <div className="step-card__arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
