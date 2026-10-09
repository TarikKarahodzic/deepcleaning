"use client";

import { useState } from "react";
import { whatsapp } from "../lib/site";
import { Brand } from "./Brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="announcement"><span>SARAJEVO</span> Čistoća koju osjetite. <a href="tel:+38761534324">061 534 324</a></div>
    <header className="header"><nav className="container navigation" aria-label="Glavna navigacija">
      <Brand />
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="navigation"><a href="#usluge" onClick={closeMenu}>Usluge i cijene</a><a href="#pristup" onClick={closeMenu}>Naš pristup</a><a href="#kontakt" onClick={closeMenu}>Kontakt</a></div>
      <a className="nav-book" href={whatsapp()}>Dogovori termin <span>↗</span></a>
      <button className="menu-toggle" aria-controls="navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}>{menuOpen ? "Zatvori" : "Meni"}</button>
    </nav></header>
  </>;
}
