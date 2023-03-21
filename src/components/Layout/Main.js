import Header from './Header';
import About from './main/About';
import Hero from './main/Hero';
import How from './main/How';
import Service from './main/Service';
// import LiveChat from '../LiveChat';
import ContactModal from '../ContactModal';
import Spinner from '../Spinner';
// import { useRouter } from 'next/router';
// import { useState } from 'react';

export default function Main() {
  return (
    <main className="bg-white relative">
      <Header />
      <Hero />
      <About />
      <Service />
      <How />
      {/* <LiveChat /> */}
      <ContactModal />
      <Spinner />
    </main>
  );
}
