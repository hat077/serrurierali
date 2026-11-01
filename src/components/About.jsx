export function About({ t }) {
  return (
    <section id="about" className="section section--alt">
      <div className="container about-grid">
        <div className="about__content">
          <span className="eyebrow eyebrow--dark">{t.nav.about}</span>
          <h2>{t.about.title}</h2>
          <p>{t.about.intro}</p>
          <p>{t.about.body}</p>
        </div>
      </div>
    </section>
  );
}
