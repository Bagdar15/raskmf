import { supportLetters } from '../data/supportLetters.js'
import SupportLetterCard from './SupportLetterCard.jsx'

export default function SupportLetters() {
  return (
    <section id="stodjebrev" className="letters" aria-labelledby="letters-title">
      <div className="letters__heading">
        <h2 id="letters-title">Stödjebrev</h2>
      </div>

      <div className="letters__grid">
        {supportLetters.map((letter) => (
          <SupportLetterCard key={letter.organisation} letter={letter} />
        ))}
      </div>
    </section>
  )
}
