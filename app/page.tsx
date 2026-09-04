export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Glavna navigacija">
        <a className="brand" href="#pocetna" aria-label="Dubinski sjaj DK — početna">
          <span className="brand-mark">DK</span>
          <span>Dubinski sjaj</span>
        </a>
        <div className="nav-links">
          <a href="#usluge">Usluge</a>
          <a href="#cjenovnik">Cjenovnik</a>
          <a className="nav-cta" href="https://wa.me/387603402938">Zakaži čišćenje</a>
        </div>
      </nav>
      <section className="hero shell" id="pocetna">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Sarajevo i okolina</p>
          <h1>Vaš namještaj.<br/><em>Ponovo kao nov.</em></h1>
          <p className="lede">Dubinsko čišćenje koje izvlači mrlje, neugodne mirise i bakterije — direktno iz vlakana.</p>
          <div className="hero-actions">
            <a className="button primary" href="https://wa.me/387603402938?text=Zdravo%2C%20%C5%BEelim%20zakazati%20dubinsko%20%C4%8Di%C5%A1%C4%87enje.">Pišite na WhatsApp <span>↗</span></a>
            <a className="button ghost" href="tel:+38761534324">Pozovite 061 534 324</a>
          </div>
          <div className="trust-row" aria-label="Prednosti usluge">
            <span>✓ Brz termin</span><span>✓ Sigurno za porodicu</span><span>✓ Vidljivi rezultati</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="result-card">
            <img src="/dubinski-sjaj-dk-cjenovnik.jpeg" alt="Dubinski sjaj DK čišćenje namještaja i cjenovnik" />
          </div>
          <div className="floating-badge"><strong>100%</strong><span>dubinska<br/>čistoća</span></div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          <div><b>01</b><span>Uklanjamo<br/>duboke mrlje</span></div>
          <div><b>02</b><span>Izvlačimo<br/>bakterije</span></div>
          <div><b>03</b><span>Osvježavamo<br/>svako vlakno</span></div>
          <p>Čistoća koju<br/><em>osjetite.</em></p>
        </div>
      </section>

      <section className="section shell" id="usluge">
        <div className="section-head">
          <div><p className="eyebrow"><span /> Šta čistimo</p><h2>Za svaki kutak<br/>na kojem živite.</h2></div>
          <p>Profesionalna njega tapaciranog namještaja koja vraća svježinu vašem domu, bez kompromisa.</p>
        </div>
        <div className="service-grid">
          <article className="service-card featured"><span className="service-no">01</span><div className="service-icon">▰</div><h3>Sjedeće garniture</h3><p>Trosjedi, dvosjedi i ugaone garniture — temeljito očišćeni od površine do dubine.</p><a href="#cjenovnik">Pogledajte cijene <b>→</b></a></article>
          <article className="service-card"><span className="service-no">02</span><div className="service-icon">▤</div><h3>Madraci</h3><p>Higijenski čišći prostor za spavanje, bez nakupljene prašine i neugodnih mirisa.</p><a href="#cjenovnik">Pogledajte cijene <b>→</b></a></article>
          <article className="service-card"><span className="service-no">03</span><div className="service-icon">◩</div><h3>Fotelje i stolice</h3><p>Precizno čišćenje komad po komad, idealno za domove, urede i ugostiteljske prostore.</p><a href="#cjenovnik">Pogledajte cijene <b>→</b></a></article>
        </div>
      </section>

      <section className="pricing-wrap" id="cjenovnik">
        <div className="shell pricing-layout">
          <div className="pricing-copy"><p className="eyebrow light"><span /> Bez skrivenih troškova</p><h2>Jasne cijene.<br/><em>Besprijekoran rezultat.</em></h2><p>Odaberite uslugu koja vam treba i javite se. Potvrdit ćemo termin i sve detalje direktno s vama.</p><a className="button white" href="https://wa.me/387603402938?text=Zdravo%2C%20zanima%20me%20termin%20za%20dubinsko%20%C4%8Di%C5%A1%C4%87enje.">Provjeri slobodan termin <span>↗</span></a></div>
          <div className="price-card">
            <div className="price-row"><span><i>01</i>Trosjed</span><b>40 <small>KM</small></b></div>
            <div className="price-row hot"><span><i>02</i>Ugaona garnitura</span><b>60 <small>KM</small></b></div>
            <div className="price-row"><span><i>03</i>Madrac</span><b>20 <small>KM</small></b></div>
            <div className="price-row"><span><i>04</i>Dvosjed</span><b>25 <small>KM</small></b></div>
            <div className="price-row"><span><i>05</i>Fotelja</span><b>15 <small>KM</small></b></div>
            <div className="price-row"><span><i>06</i>Stolica <small>po komadu</small></span><b>10 <small>KM</small></b></div>
          </div>
        </div>
      </section>

      <section className="section shell process">
        <div className="section-head"><div><p className="eyebrow"><span /> Jednostavno do čistoće</p><h2>Tri koraka.<br/>Velika razlika.</h2></div></div>
        <div className="steps">
          <article><span>1</span><h3>Javite nam se</h3><p>Pošaljite fotografiju namještaja putem WhatsAppa ili nas pozovite.</p></article>
          <article><span>2</span><h3>Dogovorimo termin</h3><p>Brzo potvrđujemo vrijeme dolaska koje vama najbolje odgovara.</p></article>
          <article><span>3</span><h3>Uživajte u svježini</h3><p>Mi odradimo dubinsko čišćenje, a vi ponovo uživate u svom prostoru.</p></article>
        </div>
      </section>

      <section className="final-cta shell">
        <div><p className="eyebrow light"><span /> Sarajevo i okolina</p><h2>Spremni za<br/><em>novi sjaj?</em></h2></div>
        <div className="contact-stack"><a href="https://wa.me/387603402938"><small>WHATSAPP</small><strong>060 340 2938</strong><span>↗</span></a><a href="tel:+38761534324"><small>VIBER / POZIV</small><strong>061 534 324</strong><span>↗</span></a></div>
      </section>

      <footer className="footer shell"><a className="brand" href="#pocetna"><span className="brand-mark">DK</span><span>Dubinski sjaj</span></a><p>Profesionalno dubinsko čišćenje namještaja.</p><div><a href="https://www.facebook.com/search/top?q=Dubinski%20sjaj%20DK">Facebook</a><a href="https://www.instagram.com/dubinski_sjaj_dk/">Instagram</a></div></footer>
      <div className="mobile-bar"><a href="tel:+38761534324">Pozovi</a><a href="https://wa.me/387603402938">WhatsApp ↗</a></div>
    </main>
  );
}
