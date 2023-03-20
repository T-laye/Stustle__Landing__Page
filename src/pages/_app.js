import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
