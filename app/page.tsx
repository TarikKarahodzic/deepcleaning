import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { RevealObserver } from "./components/RevealObserver";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <main>
      <RevealObserver />
      <Header />
      <Hero />
      <Approach />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
