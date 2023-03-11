import Header from './Header';
import About from './main/About';
import Hero from './main/Hero';
import How from './main/How';
import Service from './main/Service';

export default function Main() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <About />
      <Service />
      <How />
      <h1>Get task off your hands</h1>
    </main>
  );
}
