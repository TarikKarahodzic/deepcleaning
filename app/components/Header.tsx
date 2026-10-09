"use client";

import { useEffect, useState } from "react";
import { whatsapp } from "../lib/site";
import { Brand } from "./Brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return <>
    <div className="announcement"><span>SARAJEVO</span> Čistoća koju osjetite. <a href="tel:+38761534324">061 534 324</a></div>
    <header className="header"><nav className={`container navigation ${menuOpen ? "is-menu-open" : ""}`} aria-label="Glavna navigacija">
      <Brand />
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="navigation">
        <a href="#usluge" onClick={closeMenu}><span>01</span>Usluge i cijene</a>
        <a href="#pristup" onClick={closeMenu}><span>02</span>Naš pristup</a>
        <a href="#kontakt" onClick={closeMenu}><span>03</span>Kontakt</a>
        <a className="mobile-menu-booking" href={whatsapp()} onClick={closeMenu}><span>Dogovorite svoj termin</span><strong>Dogovori čišćenje</strong><b aria-hidden="true">↗</b></a>
        <div className="mobile-menu-meta"><span>Dubinski sjaj DK</span><a href="tel:+38761534324">061 534 324</a></div>
      </div>
      <a className="nav-book" href={whatsapp()}>Dogovori termin <span>↗</span></a>
      <button className="menu-toggle" aria-controls="navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}><span /><span /><span /></button>
    </nav></header>
  </>;
}
