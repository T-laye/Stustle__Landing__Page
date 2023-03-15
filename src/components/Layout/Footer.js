/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo/stustle.png';

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
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
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
