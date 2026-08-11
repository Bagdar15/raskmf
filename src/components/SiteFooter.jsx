import ArrowUpRightIcon from './ArrowUpRightIcon.jsx'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <span>RASK</span>
        <span aria-hidden="true">•</span>
        <a
          href="https://medicinskaforeningen.se/"
          target="_blank"
          rel="noreferrer"
          aria-label="Besök Medicinska Föreningens webbplats"
        >
          Medicinska Föreningen
          <ArrowUpRightIcon />
        </a>
      </div>
      <span className="site-footer__year">© {currentYear}</span>
    </footer>
  )
}
