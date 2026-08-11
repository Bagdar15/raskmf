export default function Hero() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="hero__inner">
        <div className="hero__brand" aria-label="RASK, Medicinska Föreningen">
          RASK <span>•</span> MF
        </div>

        <div className="hero__content">
          <h1 id="page-title">
            Rekrytering av <span>studenter</span> för kliniska prövningar
          </h1>
        </div>
      </div>

      <div className="hero__panel" aria-hidden="true">
        <svg className="hero__art" viewBox="0 0 520 760" preserveAspectRatio="xMidYMid slice">
          <g className="hero__mosaic">
            <rect width="520" height="760" fill="#842433" />

            <rect width="260" height="130" fill="#e6b9be" />
            <path d="M0 0h130a130 130 0 0 1-130 130Z" fill="#a84554" />
            <path d="M130 0h130v130A130 130 0 0 1 130 0Z" fill="#f6f2ef" />
            <rect x="260" width="260" height="130" fill="#6b1825" />
            <circle cx="390" cy="0" r="130" fill="#c97882" />

            <rect y="130" width="130" height="130" fill="#f6f2ef" />
            <path d="M0 260a130 130 0 0 1 130-130v130Z" fill="#c97882" />
            <rect x="130" y="130" width="130" height="130" fill="#a84554" />
            <circle cx="195" cy="195" r="65" fill="#e6b9be" />
            <rect x="260" y="130" width="130" height="130" fill="#e6b9be" />
            <path d="M260 260a130 130 0 0 1 130-130v130Z" fill="#f6f2ef" />
            <rect x="390" y="130" width="130" height="130" fill="#f6f2ef" />
            <circle cx="520" cy="195" r="65" fill="#a84554" />

            <rect y="260" width="260" height="130" fill="#d7959d" />
            <path d="M0 260a130 130 0 0 1 130 130H0Z" fill="#6b1825" />
            <path d="M130 260a130 130 0 0 1 130 130H130Z" fill="#f6f2ef" />
            <rect x="260" y="260" width="260" height="130" fill="#a84554" />
            <circle cx="390" cy="325" r="65" fill="#e6b9be" />

            <rect y="390" width="130" height="130" fill="#f6f2ef" />
            <circle cx="65" cy="455" r="65" fill="#a84554" />
            <rect x="130" y="390" width="130" height="130" fill="#6b1825" />
            <path d="M130 390a130 130 0 0 1 130 130H130Z" fill="#c97882" />
            <rect x="260" y="390" width="130" height="130" fill="#f6f2ef" />
            <path d="M260 520a130 130 0 0 1 130-130v130Z" fill="#d7959d" />
            <rect x="390" y="390" width="130" height="130" fill="#e6b9be" />
            <path d="M390 390a130 130 0 0 1 130 130H390Z" fill="#842433" />

            <rect y="520" width="260" height="130" fill="#c97882" />
            <circle cx="130" cy="520" r="130" fill="#f6f2ef" />
            <rect x="260" y="520" width="260" height="130" fill="#6b1825" />
            <path d="M260 520a130 130 0 0 1 130 130H260Z" fill="#a84554" />
            <path d="M390 650a130 130 0 0 1 130-130v130Z" fill="#d7959d" />

            <rect y="650" width="130" height="110" fill="#842433" />
            <path d="M0 650h130v110A110 110 0 0 1 0 650Z" fill="#e6b9be" />
            <rect x="130" y="650" width="130" height="110" fill="#f6f2ef" />
            <circle cx="195" cy="705" r="55" fill="#a84554" />
            <rect x="260" y="650" width="260" height="110" fill="#c97882" />
            <path d="M260 650a130 130 0 0 1 130 110H260Z" fill="#6b1825" />
          </g>
        </svg>
      </div>
    </section>
  )
}
