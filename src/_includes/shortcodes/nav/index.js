const nav = () => {
  return `
  <header class="site-header">
    <div class="logo">Logo</div>

    <button class="site-nav-toggle" aria-label="Hauptnavigation öffnen" aria-expanded="false">
      &#9776;
    </button>

    <nav class="site-nav" aria-label="Hauptnavigation">
      <ul>
        <li><a href="#" title="Home">Startseite</a></li>
        <li><a href="#" title="Gallery">Arbeiterstrandbadstraße</a></li>
        <li><a href="#" title="About">Wirtschaft & Finanzen</a></li>
        <li><a href="#" title="Contact">Kontakt</a></li>
    </nav>
  </header>
  `;
};

module.exports = nav;