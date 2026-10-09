"use client";

import { useState } from "react";
import { serviceCategories, services, whatsapp } from "../lib/site";

export function Services() {
  const [category, setCategory] = useState("Sve usluge");
  const visibleServices = services.filter(item => category === "Sve usluge" || item.category === category);
  return <section className="services-section section" id="usluge"><div className="container">
    <div className="section-heading" data-reveal><div><p className="eyebrow">02 / USLUGE I CIJENE</p><h2>Šta danas<br /><em>osvježavamo?</em></h2></div><p>Od jedne fotelje do cijele garniture.<br />Odaberite svoj komad, mi ćemo ostalo.</p></div>
    <div className="filter-bar" aria-label="Filtriraj usluge">{serviceCategories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="service-grid">{visibleServices.map(item => <a className="service-card" href={whatsapp(`Zdravo, zanima me čišćenje: ${item.name}. Koji su slobodni termini?`)} key={item.name}><div className="service-top"><span>{item.category}</span><b aria-hidden="true">↗</b></div><h3>{item.name}</h3><p>{item.detail}</p></a>)}</div>
    <div className="pricing-note"><a href={whatsapp("Zdravo, mogu li poslati fotografiju namještaja za dogovor o čišćenju?")}>Niste sigurni? Pošaljite nam fotografiju ↗</a></div>
  </div></section>;
}
