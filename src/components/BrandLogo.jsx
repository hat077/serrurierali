export function BrandLogo({ name }) {
  return (
    <>
      <svg
        className="brand__icon"
        viewBox="0 0 52 60"
        role="img"
        aria-label={`${name} shield monogram`}
      >
        <path
          className="brand__shield"
          d="M26 3 47 11v17c0 13-8.3 22.8-21 29C13.3 50.8 5 41 5 28V11L26 3Z"
        />
        <path
          className="brand__shield-line"
          d="M26 8 42 14v14c0 10.1-6.1 18.1-16 23.4C16.1 46.1 10 38.1 10 28V14l16-6Z"
        />
        <text className="brand__monogram" x="26" y="34" textAnchor="middle">
          SA
        </text>
      </svg>
      <span className="brand__copy">
        <span className="brand__name">{name}</span>
        <span className="brand__tagline">SÉCURITÉ • SERRURERIE</span>
      </span>
    </>
  );
}
