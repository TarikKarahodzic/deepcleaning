import { whatsapp } from "../lib/site";
import { Brand } from "./Brand";

export function Footer() {
  return <><footer className="container footer"><Brand /><p>Čistoća koju osjetite.</p><div><a href="https://www.instagram.com/dubinski_sjaj_dk/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com/search/top?q=Dubinski%20sjaj%20DK" target="_blank" rel="noreferrer">Facebook ↗</a></div><small>© 2026 Dubinski sjaj DK · Sarajevo</small></footer><div className="mobile-booking"><a href="tel:+38761534324">Pozovi</a><a href={whatsapp()}>Dogovori čišćenje ↗</a></div></>;
}
