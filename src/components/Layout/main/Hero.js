// import Link from 'next/link';
import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.css';

export default function Hero() {
  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className="  ">
          <h1 className="text-white text-5xl text-center leading-tight font-bold tracking-wide mb-2">
            Get <span className="text-primary">tasks</span> off your hands
          </h1>
          <p className="text-white px-6  text-center text-sm font-normal tracking-wider">
            On your lazy days rely on us ! We run so you can relax
          </p>
        </div>
        <div className="flex flex-col mt-8">
          <Link
            href="https://tawk.to/chat/640f16a231ebfa0fe7f2456c/1grdf0rhm "
            target="_blank"
          >
            <button className={styles.btnPrimary}>Request a Service</button>
          </Link>

          <button className={styles.btnSecondary}>Learn More</button>
        </div>
        <div className={styles.scroll}>
          <div></div>
        </div>
      </section>
      <section id="home" className={styles.heroDesktop}>
        <div className="w-1/2  ">
          <h1 className="text-white text-7xl text-left leading-14  font-bold tracking-wide mb-2">
            Get <span className="text-primary">tasks</span> off your hands
          </h1>
          <p className="text-white  text-left text-lg font-normal tracking-wider leading-3">
            On your lazy days rely on us ! We run so you can relax
          </p>
        </div>
        <div className="flex items-center mt-8 gap-4">
          <Link
            href="https://tawk.to/chat/640f16a231ebfa0fe7f2456c/1grdf0rhm "
            target="_blank"
          >
            <button className={styles.btnPrimary}>Request a Service</button>
          </Link>
          <button className={styles.btnSecondary}>Learn More</button>
        </div>
        <div className={styles.scroll}>
          <div></div>
        </div>
      </section>
    </>
  );
}
