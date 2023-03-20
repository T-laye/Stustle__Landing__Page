/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo/stustle.png';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-4">
        <div>
          <Link legacyBehavior href="/">
            <a>
              <Image height={18} src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-2 gap-2 sm:flex ">
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100090583722573"
            >
              <div className=" flex w-7 h-7 justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500  rounded-full">
                {' '}
                <BsFacebook size={20} />{' '}
              </div>
            </Link>
            <Link target="_blank" href="https://wa.me/message/JVOKBIKMBAITH1">
              <div className=" w-7 h-7 flex justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500 rounded-full">
                {' '}
                <IoLogoWhatsapp size={20} />{' '}
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://instagram.com/stustle.ng?igshid=ZDdkNTZiNTM="
            >
              <div className=" w-7 h-7 flex justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500 rounded-full">
                {' '}
                <RiInstagramFill size={22} />{' '}
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/stustle/"
              target="_blank"
            >
              <div className=" w-7 h-7 flex justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500    rounded-full ">
                {' '}
                <FaLinkedin size={20} />{' '}
              </div>
            </Link>
          </div>
          <div className="text-right flex flex-col sm:gap-4 sm:flex-row">
            <div>
              <Link
                className="text-gray-3 text-xs hover:text-sm duration-500 hover:text-white hover:font-medium"
                href="/terms"
                target="_blank"
              >
                Terms of Use
              </Link>
            </div>
            <div>
              <Link
                className="text-gray-3 text-xs hover:text-sm duration-500 hover:text-white hover:font-medium"
                href="/faq"
                target="_blank"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-t-gray-3 pt-5 ">
          <p className="text-gray-3 text-center text-xs tracking-wider">
            © Stustle 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
