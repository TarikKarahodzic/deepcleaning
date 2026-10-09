import { whatsapp } from "../lib/site";

export function Hero() {
  return <section className="hero container" id="pocetna">
    <div className="hero-heading"><div className="hero-title"><h1>Omiljeno mjesto.<br /><em>Ponovo svježe.</em></h1></div><div className="hero-intro"><p>Život ostavlja tragove.<br />Mi brinemo da vaš namještaj<br />opet bude mjesto za uživanje.</p><a className="text-link" href="#usluge">Otkrij naše usluge <span>↓</span></a></div></div>
    <div className="hero-scene"><img src="/dk-living-room.png" alt="Svijetla dnevna soba s krem sofom i plavim jastukom" fetchPriority="high" width="1536" height="1024" /><div className="scene-caption"></div><a className="hero-booking" href={whatsapp()}><span>Vrijeme je za<br /><strong>malo svježine.</strong></span><b aria-hidden="true">↗</b><small>Dogovori čišćenje na WhatsAppu</small></a></div>
    <div className="hero-bottom"><span>Garniture</span><i /><span>Madraci</span><i /><span>Fotelje i stolice</span><a href="#usluge">Pogledaj cjenovnik ↓</a></div>
  </section>;
}
