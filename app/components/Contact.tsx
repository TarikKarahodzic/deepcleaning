import { whatsapp } from "../lib/site";

export function Contact() {
  return <section className="contact-section" id="kontakt"><div className="container contact-inner"><div data-reveal><p className="eyebrow">DUBINSKI SJAJ DK · SARAJEVO</p><h2>Hajde da vaš dom<br /><em>ponovo prodiše.</em></h2><p>Pošaljite nam poruku. Dogovorimo vaš sljedeći svježi početak.</p></div><div className="contact-options" data-reveal><a href={whatsapp()}><span>WhatsApp<strong>060 340 2938</strong></span><b>↗</b></a><a href="viber://chat?number=%2B38761534324"><span>Viber<strong>061 534 324</strong></span><b>↗</b></a></div></div></section>;
}
