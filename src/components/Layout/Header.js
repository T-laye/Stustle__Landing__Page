/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../styles/Home.module.css';
import logo from '../../../public/logo/stustle.png';
import mobileNav from '../../../public/icons/menu.svg';
import mobileNavClose from '../../../public/icons/close-circle.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  // open and close nav
  const { asPath } = useRouter();
  // console.log(asPath);

  const [openNav, setOpenNav] = useState(false);

  const open = () => {
    setOpenNav(!openNav);
    // console.log(openNav);
  };

  return (
    <header className="">
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image width={107} height={22} src={logo} alt="Stustle logo" />
        </div>
        <div onClick={open}>
          <Image
            src={!openNav ? mobileNav : mobileNavClose}
            alt="Hamburger menu"
          />
        </div>
      </div>
      <nav
        onClick={open}
        className={`${styles.navItems} ${
          openNav ? '' : 'translate-x-full'
        } transition-all duration-500 `}
      >
        <ol className="w-full h-2/3 bg-black-trans   flex flex-col gap-10 items-center text-2xl  my-auto">
          <Link href="#hero" scroll={false}>
            <li
              className={`${
                asPath === '/#hero' ? 'text-primary' : 'text-white'
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="#about" scroll={false}>
            <li
              className={`${
                asPath === '/#about' ? 'text-primary' : 'text-white'
              }`}
            >
              About us
            </li>
          </Link>
          <Link href="#services" scroll={false}>
            <li
              className={`${
                asPath === '/#services' ? 'text-primary' : 'text-white'
              }`}
            >
              Our Services
            </li>
          </Link>
          <Link href="#how" scroll={false}>
            <li
              className={`${
                asPath === '/#how' ? 'text-primary' : 'text-white'
              }`}
            >
              How it works
            </li>
          </Link>
          <li className="text-sm">
            <button className={styles.btnPrimary}>Request a Service</button>
          </li>
        </ol>
      </nav>
    </header>
  );
}
