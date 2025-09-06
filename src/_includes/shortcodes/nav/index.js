const nav = () => {
  return `
  <header class="site-header">
    <div class="logo">Logo</div>

    <button class="site-nav-toggle" aria-label="Open Navigation" aria-expanded="false">
      &#9776;
    </button>

    <nav class="site-nav" role="navigation">
      <a href="#" title="Home">Startseite</a>
      <a href="#" title="Gallery">Arbeiterstrandbadstraße</a>
      <a href="#" title="About">Wirtschaft & Finanzen</a>
      <a href="#" title="Contact">Kontakt</a>
    </nav>
  </header>
  `;
};

module.exports = nav;