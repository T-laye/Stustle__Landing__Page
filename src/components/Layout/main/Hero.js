// import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import styles from '../../../styles/Home.module.css';

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  const open_modal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className="  ">
          <h1
            data-aos="zoom-out"
            data-aos-delay="700"
            className="text-white text-5xl text-center leading-tight font-bold tracking-wide mb-2"
          >
            Get <span className="text-primary">tasks</span> off your hands
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-white px-6  text-center text-sm font-normal tracking-wider"
          >
            On your busy days rely on us. We run so you can relax.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className="flex flex-col mt-8 items-center"
        >
          <Link href="" onClick={open_modal}>
            <button className={styles.btnPrimary}>Request a Service</button>
          </Link>

          <Link href="/#about" scroll={false}>
            <button className={styles.btnSecondary}>Learn More</button>
          </Link>
        </div>
        {/* <div className={styles.scroll}>
          <div></div>
        </div> */}
      </section>

      {/* Desktop Hero Page */}

      <section id="home" className={styles.heroDesktop}>
        <div className="w-1/2  ">
          <h1
            data-aos="fade-right"
            data-aos-delay="700"
            className="text-white text-7xl text-left leading-12  font-bold tracking-wide mb-4"
          >
            Get <span className="text-primary">tasks</span> off your hands
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-white  text-left text-lg font-normal tracking-wider leading-6"
          >
            On your busy days rely on us.
            <br /> We run so you can relax.
          </p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="700"
          className="flex items-center mt-8 gap-4"
        >
          <Link href="" onClick={open_modal}>
            <button className={styles.btnPrimary}>Request a Service</button>
          </Link>
          <Link href="/#about" scroll={false}>
            <button className={styles.btnSecondary}>Learn More</button>
          </Link>
        </div>
        {/* <div className={styles.scroll}>
          <div></div>
        </div> */}
      </section>
      <ContactModal modal={openModal} />
    </>
  );
}
