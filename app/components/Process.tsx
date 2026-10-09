import { whatsapp } from "../lib/site";

const steps = [
  ["Pošaljite fotografiju", "Pokažite nam namještaj koji želite očistiti. Dovoljna je poruka na WhatsApp ili Viber."],
  ["Dogovorimo detalje", "Zajedno potvrđujemo uslugu, lokaciju i slobodan termin koji vam odgovara."],
  ["Prepustite nama čišćenje", "Dolazimo na dogovorenu adresu i pažljivo čistimo vaš namještaj. Dajemo vam upute za sušenje."],
];

export function Process() {
  return <section className="process-section container section"><div className="process-intro" data-reveal><p className="eyebrow">03 / OD PORUKE DO SVJEŽINE</p><h2>Vi napravite plan.<br /><em>Mi očistimo tragove.</em></h2><a className="button" href={whatsapp()}>Javite nam se <span>↗</span></a></div><div className="steps">{steps.map(([title, description], index) => <article data-reveal key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>;
}
