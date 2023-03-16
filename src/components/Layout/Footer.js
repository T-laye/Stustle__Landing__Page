/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo/stustle.png';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link legacyBehavior href="/">
            <a>
              <Image height={22} src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="w-52">
          <ul className="text-gray-3 text-xs flex flex-col gap-1 mt-2 ">
            <li>Terms of service</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="flex gap-2 mt-4 mb-8">
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100090583722573"
          >
            <div className=" flex w-7 h-7 justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500  rounded-full">
              {' '}
              <BsFacebook size={24} />{' '}
            </div>
          </Link>
          <Link target="_blank" href="https://wa.me/message/JVOKBIKMBAITH1">
            <div className=" w-7 h-7 flex justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500 rounded-full">
              {' '}
              <IoLogoWhatsapp size={24} />{' '}
            </div>
          </Link>
          <Link target="_blank" href="/">
            <div className=" w-7 h-7 flex justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500 rounded-full">
              {' '}
              <FaTwitter size={24} />{' '}
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/company/stustle/"
            target="_blank"
          >
            <div className=" w-7 h-7 flex justify-center items-center text-gray-3 hover:text-white hover:scale-110 duration-500    rounded-full ">
              {' '}
              <FaLinkedin size={24} />{' '}
            </div>
          </Link>
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
