import React from 'react';
import styles from '../../../styles/Home.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div></div>
      <div className="  ">
        <h1 className="text-white text-5xl text-center leading-tight  font-bold tracking-wide mb-2">
          Get <span className="text-primary">tasks</span> off your hands
        </h1>
        <p className="text-white px-6  text-center text-lg font-normal tracking-wider">
          On your lazy days rely on us ! We run so you can relax
        </p>
      </div>
      <div className="flex flex-col mt-8">
        <button className={styles.btnPrimary}>Request a Service</button>
        <button className={styles.btnSecondary}>Learn More</button>
      </div>
      <div className={styles.scroll}>
        <div></div>
      </div>
    </section>
  );
}
