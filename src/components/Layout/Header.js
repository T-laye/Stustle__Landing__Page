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
import ContactModal from '../ContactModal';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  const open_modal = () => {
    setOpenModal(!openModal);
  };

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
          <Link legacyBehavior href="/">
            <a>
              <Image width={107} height={22} src={logo} alt="Stustle logo" />
            </a>
          </Link>
        </div>
        <div onClick={open} className="cursor-pointer lg:hidden">
          <Image
            src={!openNav ? mobileNav : mobileNavClose}
            alt="Hamburger menu"
          />
        </div>
        <nav className="hidden lg:flex">
          <ol className="flex bg-black-trans text-white text-base items-center gap-8 ">
            <li
              className={`hover:text-primary duration-300 ${
                asPath === '/#home' ? 'text-primary' : 'text-white'
              }`}
            >
              <Link href="#home" scroll={false}>
                Home
              </Link>
            </li>
            <li
              className={`hover:text-primary duration-300 ${
                asPath === '/#about' ? 'text-primary' : 'text-white'
              }`}
            >
              <Link href="#about" scroll={false}>
                About us
              </Link>
            </li>
            <li
              className={`hover:text-primary duration-300 ${
                asPath === '/#how' ? 'text-primary' : 'text-white'
              }`}
            >
              <Link href="#how" scroll={false}>
                How it works
              </Link>
            </li>
            <li className="text-sm">
              <Link href={asPath} onClick={open_modal}>
                <button className={styles.btnPrimary}>Request a Service</button>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <nav
        onClick={open}
        className={`${styles.navItems} ${
          openNav ? '' : 'translate-x-full'
        } transition-all duration-500 lg:hidden`}
      >
        <ol className="w-full h-2/3 bg-black-trans flex   flex-col gap-10 items-center text-xl  my-auto  ">
          <li
            className={`${asPath === '/#hero' ? 'text-primary' : 'text-white'}`}
          >
            <Link href="#hero" scroll={false}>
              Home
            </Link>
          </li>
          <li
            className={`${
              asPath === '/#about' ? 'text-primary' : 'text-white'
            }`}
          >
            <Link href="#about" scroll={false}>
              About us
            </Link>
          </li>
          <li
            className={`${
              asPath === '/#services' ? 'text-primary' : 'text-white'
            }`}
          >
            <Link href="#services" scroll={false}>
              Our Services
            </Link>
          </li>
          <li
            className={`${asPath === '/#how' ? 'text-primary' : 'text-white'}`}
          >
            <Link href="#how" scroll={false}>
              How it works
            </Link>
          </li>
          <li className="text-sm">
            <Link href={asPath} onClick={open_modal}>
              <button className={styles.btnPrimary}>Request a Service</button>
            </Link>
          </li>
        </ol>
      </nav>
      <ContactModal modal={openModal} />
    </header>
  );
}
