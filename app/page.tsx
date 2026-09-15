"use client";

import { useEffect, useRef, useState } from "react";

const prices = [
  ["Trosjed", "40"], ["Ugaona garnitura", "60"], ["Madrac", "20"],
  ["Dvosjed", "25"], ["Fotelja", "15"], ["Stolica / komad", "10"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    els.forEach((el) => observer.observe(el));

    const move = (event: PointerEvent) => {
      if (!heroRef.current) return;
      const box = heroRef.current.getBoundingClientRect();
      heroRef.current.style.setProperty("--mx", `${event.clientX - box.left}px`);
      heroRef.current.style.setProperty("--my", `${event.clientY - box.top}px`);
    };
    const hero = heroRef.current;
    hero?.addEventListener("pointermove", move);
    return () => { observer.disconnect(); hero?.removeEventListener("pointermove", move); };
  }, []);

  return (
    <main>
      <header className="topbar">
        <nav className="nav shell" aria-label="Glavna navigacija">
          <a className="brand" href="#pocetna" aria-label="Dubinski sjaj DK — početna">
            <span className="brand-mark"><i>DK</i><b>✦</b></span>
            <span className="brand-type"><strong>DUBINSKI SJAJ</strong><small>PROFESIONALNO ČIŠĆENJE</small></span>
          </a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#rezultat" onClick={() => setMenuOpen(false)}>Rezultat</a>
            <a href="#usluge" onClick={() => setMenuOpen(false)}>Usluge</a>
            <a href="#cjenovnik" onClick={() => setMenuOpen(false)}>Cjenovnik</a>
          </div>
          <a className="nav-cta magnetic" href="https://wa.me/387603402938?text=Zdravo%2C%20%C5%BEelim%20zakazati%20dubinsko%20%C4%8Di%C5%A1%C4%87enje."><span>WhatsApp</span><b>↗</b></a>
          <button className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Otvori meni" aria-expanded={menuOpen}><i/><i/></button>
        </nav>
      </header>

      <section className="hero" id="pocetna" ref={heroRef}>
        <div className="hero-noise" />
        <div className="orb orb-a"/><div className="orb orb-b"/>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="availability hero-in"><span className="pulse"/> Primamo nove termine · Sarajevo</div>
            <h1 className="hero-in delay-1"><span>Vratite</span><br/><em>čistoću.</em><br/><span>Osjetite</span> razliku.</h1>
            <p className="hero-lede hero-in delay-2">Profesionalno dubinsko čišćenje koje vraća svježinu namještaju — i mir vašem domu.</p>
            <div className="hero-actions hero-in delay-3">
              <a className="button button-blue" href="https://wa.me/387603402938?text=Zdravo%2C%20%C5%BEelim%20zakazati%20dubinsko%20%C4%8Di%C5%A1%C4%87enje."><span>Zakaži čišćenje</span><b>↗</b></a>
              <a className="phone-link" href="tel:+38761534324"><small>ILI POZOVITE</small><strong>061 534 324</strong></a>
            </div>
          </div>

          <div className="hero-stage hero-in delay-2">
            <div className="hero-photo"><img src="/og.png" alt="Profesionalno dubinsko čišćenje namještaja" /></div>
            <div className="clean-meter"><span><i/> DUBINSKA ČISTOĆA</span><strong>100<small>%</small></strong></div>
            <div className="floating-note"><b>✦</b><span>Bez mrlja.<br/>Bez mirisa.</span></div>
            <div className="hero-ring"><span>SARAJEVO · DK · SJAJ · </span></div>
          </div>
        </div>
        <div className="marquee" aria-hidden="true"><div>ČISTOĆA KOJU OSJETITE <b>✦</b> DUBINSKO ČIŠĆENJE <b>✦</b> BRZO · KVALITETNO · POUZDANO <b>✦</b> ČISTOĆA KOJU OSJETITE <b>✦</b> DUBINSKO ČIŠĆENJE <b>✦</b></div></div>
      </section>

      <section className="result section" id="rezultat">
        <div className="shell result-grid">
          <div className="result-copy" data-reveal>
            <p className="kicker">01 / REZULTAT</p>
            <h2>Nije samo čisto.<br/><em>Osjeti se.</em></h2>
            <p>Izvlačimo prljavštinu iz dubine vlakana, uklanjamo neugodne mirise i osvježavamo tkaninu. Rezultat vidite odmah.</p>
            <div className="micro-features"><span><b>✓</b> Dubinske mrlje</span><span><b>✓</b> Neugodni mirisi</span><span><b>✓</b> Prašina i bakterije</span></div>
          </div>
          <div className="before-after" data-reveal>
            <img src="/dubinski-sjaj-dk-cjenovnik.jpeg" alt="Prije i poslije dubinskog čišćenja namještaja" />
            <div className="image-shade"/>
            <span className="label before">PRIJE</span><span className="label after">POSLIJE</span>
            <div className="scan-line"><i>↔</i></div>
          </div>
        </div>
      </section>

      <section className="services section" id="usluge">
        <div className="shell">
          <div className="section-title" data-reveal><p className="kicker">02 / USLUGE</p><h2>Sve što volite.<br/><em>Ponovo svježe.</em></h2><p>Precizna njega za svaki komad namještaja.</p></div>
          <div className="service-list">
            <article data-reveal><span className="service-num">01</span><div className="service-symbol">▱</div><div><h3>Sjedeće garniture</h3><p>Trosjedi, dvosjedi i ugaone garniture.</p></div><a href="#cjenovnik" aria-label="Cijene sjedećih garnitura">↗</a></article>
            <article data-reveal><span className="service-num">02</span><div className="service-symbol">▤</div><div><h3>Madraci</h3><p>Dubinska higijena za mirniji san.</p></div><a href="#cjenovnik" aria-label="Cijene madraca">↗</a></article>
            <article data-reveal><span className="service-num">03</span><div className="service-symbol">◩</div><div><h3>Fotelje i stolice</h3><p>Komad po komad, detalj po detalj.</p></div><a href="#cjenovnik" aria-label="Cijene fotelja i stolica">↗</a></article>
          </div>
        </div>
      </section>

      <section className="pricing section" id="cjenovnik">
        <div className="pricing-glow"/>
        <div className="shell pricing-grid">
          <div className="pricing-intro" data-reveal><p className="kicker light">03 / CJENOVNIK</p><h2>Bez sitnih<br/>slova.</h2><p>Poštene cijene. Profesionalan rezultat. Termin dogovarate direktno s nama.</p><a className="button button-white" href="https://wa.me/387603402938?text=Zdravo%2C%20zanima%20me%20slobodan%20termin."><span>Provjeri termin</span><b>↗</b></a></div>
          <div className="price-panel" data-reveal>
            <div className="panel-top"><span>DK / SARAJEVO</span><span>CIJENE U KM</span></div>
            {prices.map(([name, price], i) => <div className="price-row" key={name}><i>{String(i + 1).padStart(2, "0")}</i><strong>{name}</strong><b>{price}<small>KM</small></b></div>)}
            <div className="panel-foot"><span>BRZO</span><i>✦</i><span>KVALITETNO</span><i>✦</i><span>POUZDANO</span></div>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="shell">
          <div className="section-title centered" data-reveal><p className="kicker">04 / KAKO RADI</p><h2>Od poruke do<br/><em>novog sjaja.</em></h2></div>
          <div className="process-line">
            <article data-reveal><span>1</span><div><small>PRVI KORAK</small><h3>Pošaljite fotografiju</h3><p>Javite se na WhatsApp i pokažite nam šta čistimo.</p></div></article>
            <article data-reveal><span>2</span><div><small>DRUGI KORAK</small><h3>Dogovorimo termin</h3><p>Biramo vrijeme dolaska koje vama odgovara.</p></div></article>
            <article data-reveal><span>3</span><div><small>TREĆI KORAK</small><h3>Uživajte u čistoći</h3><p>Mi vraćamo svježinu, vi uživate u prostoru.</p></div></article>
          </div>
        </div>
      </section>

      <section className="contact shell" data-reveal>
        <div className="contact-orb">✦</div>
        <div><p className="kicker light">SARAJEVO I OKOLINA</p><h2>Vaš novi sjaj<br/>počinje <em>ovdje.</em></h2></div>
        <div className="contact-links"><a href="https://wa.me/387603402938"><span><small>WHATSAPP</small><strong>060 340 2938</strong></span><b>↗</b></a><a href="tel:+38761534324"><span><small>VIBER / POZIV</small><strong>061 534 324</strong></span><b>↗</b></a></div>
      </section>

      <footer className="footer shell"><a className="brand" href="#pocetna"><span className="brand-mark"><i>DK</i><b>✦</b></span><span className="brand-type"><strong>DUBINSKI SJAJ</strong><small>PROFESIONALNO ČIŠĆENJE</small></span></a><p>© 2026 DUBINSKI SJAJ DK</p><div><a href="https://www.facebook.com/search/top?q=Dubinski%20sjaj%20DK">FB ↗</a><a href="https://www.instagram.com/dubinski_sjaj_dk/">IG ↗</a></div></footer>
      <div className="mobile-bar"><a href="tel:+38761534324">Pozovi</a><a href="https://wa.me/387603402938">WhatsApp <b>↗</b></a></div>
    </main>
  );
}
