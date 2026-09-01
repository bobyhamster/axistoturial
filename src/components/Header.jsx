export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Axis Tutorials home">

        <img
          className="brand-mark"
          src="/images/axislogo.svg"
          alt=""
        />

        <span className="brand-name">
          AXIS<br />
          TUTORIALS
        </span>

      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a className="active" href="#tutorials">Tutorials</a>
        <a href="#authors">Authors</a>
         <a
    className="language-switch"
    href="https://axistoturialru.vercel.app/"
  >
    RU
  </a>
      </nav>
    </header>
  );
}