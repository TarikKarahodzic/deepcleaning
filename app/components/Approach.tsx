export function Approach() {
  return <section className="approach container section" id="pristup">
    <div className="approach-content" data-reveal><h2>Ne trebate novi namještaj.<br />Treba mu <em>novi početak.</em></h2><div className="approach-detail"><p>Jutarnja kafa. Filmske večeri. Mali porodični neredi. Vaš namještaj je dio svega toga. Dubinskim čišćenjem njegujemo tkaninu i pomažemo ukloniti nakupljenu prljavštinu i neugodne mirise.</p><div className="approach-points"><span><CheckIcon /> Pažnja prema tkanini</span><span><CheckIcon /> Čišćenje u vašem domu</span><span><CheckIcon /> Dogovor direktno s nama</span></div></div></div>
  </section>;
}

function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m7 12.5 3.1 3L17 8.7" /></svg>;
}
