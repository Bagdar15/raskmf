import ArrowUpRightIcon from './ArrowUpRightIcon.jsx'
import DocumentIcon from './DocumentIcon.jsx'

export default function SupportLetterCard({ letter }) {
  return (
    <a
      className="letter-card"
      href={letter.document}
      target="_blank"
      rel="noreferrer"
      aria-label={`Öppna stödjebrev från ${letter.organisation} i en ny flik`}
    >
      <div className="letter-card__logo">
        <img src={letter.logo} alt={`${letter.organisation} logotyp`} />
      </div>

      <div className="letter-card__footer">
        <h3>{letter.organisation}</h3>
        <span className="letter-card__action" aria-hidden="true">
          <span className="letter-card__action-icon letter-card__action-icon--document"><DocumentIcon /></span>
          <span className="letter-card__action-icon letter-card__action-icon--arrow"><ArrowUpRightIcon /></span>
        </span>
      </div>
    </a>
  )
}
