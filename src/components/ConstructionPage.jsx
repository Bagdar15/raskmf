import { useState } from 'react'
import HeroMosaic from './HeroMosaic.jsx'

const passwordHash = '36d668f41023a152694e08b85fa69635a8bae0bf1dac089553582217541b360c'

async function hashPassword(password) {
  const data = new TextEncoder().encode(password)
  const digest = await crypto.subtle.digest('SHA-256', data)

  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export default function ConstructionPage({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsChecking(true)
    setError('')

    const submittedHash = await hashPassword(password)

    if (submittedHash === passwordHash) {
      onUnlock()
      return
    }

    setError('Fel lösenord. Försök igen.')
    setPassword('')
    setIsChecking(false)
  }

  return (
    <main className="construction">
      <section className="construction__content" aria-labelledby="construction-title">
        <div className="hero__brand" aria-label="RASK, Medicinska Föreningen">
          RASK <span>•</span> MF
        </div>

        <div className="construction__body">
          <p className="construction__eyebrow">Webbplatsen förbereds</p>
          <h1 id="construction-title">Under construction...</h1>

          <form className="construction__form" onSubmit={handleSubmit}>
            <label htmlFor="site-password">Lösenord</label>
            <div className="construction__field">
              <input
                id="site-password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                autoFocus
                required
              />
              <button type="submit" disabled={isChecking}>
                {isChecking ? 'Kontrollerar...' : 'Fortsätt'}
              </button>
            </div>
            <p className="construction__error" aria-live="polite">{error}</p>
          </form>
        </div>
      </section>

      <div className="hero__panel construction__panel" aria-hidden="true">
        <HeroMosaic orientation="portrait" />
        <HeroMosaic orientation="landscape" />
      </div>
    </main>
  )
}
