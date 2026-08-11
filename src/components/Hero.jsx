import HeroMosaic from './HeroMosaic.jsx'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="hero__inner">
        <div className="hero__brand" aria-label="RASK, Medicinska Föreningen">
          RASK <span>•</span> MF
        </div>

        <div className="hero__content">
          <h1 id="page-title">
            Rekrytering av <span>studenter</span> till kliniska prövningar
          </h1>
        </div>
      </div>

      <div className="hero__panel" aria-hidden="true">
        <HeroMosaic orientation="portrait" />
        <HeroMosaic orientation="landscape" />
      </div>
    </section>
  )
}
