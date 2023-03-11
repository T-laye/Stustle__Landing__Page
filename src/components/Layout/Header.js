/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../styles/Home.module.css';
import logo from '../../../public/logo/stustle.png';
import mobileNav from '../../../public/icons/menu.svg';
import Image from 'next/image';

export default function Header() {
  // console.log(logo);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image width={107} height={22} src={logo} alt="Stustle logo" />
      </div>
      <nav>
        <Image src={mobileNav} />
      </nav>
    </header>
  );
}
