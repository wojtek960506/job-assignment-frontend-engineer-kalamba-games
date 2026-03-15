import "./Footer.css"

export const Footer = (): JSX.Element => {
  return (
    <footer className="main-layout-footer">
      <h2>Conduit</h2>
      <p>
        Job assignment for frontend developer at <a
          className="company-link"
          href="https://kalambagames.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kalamba Games
        </a>
      </p>
      <p className="author-name">Wojciech Zieliński</p>
    </footer>
  )
}