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
        <div className=" w-52">
          <p className="text-sm text-white mt-3 text-base tracking-wide w-52">
            Stustle is a service company laoajc kac jacnjjkasc kcjns a service
          </p>
        </div>
        <div className="flex gap-2 mt-4 mb-8">
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
          <div className=" w-6 h-6 rounded-full bg-gray-1"></div>
        </div>
        <div className="border-t border-t-white pt-5 ">
          <p className="text-white text-center text-xs tracking-wider">
            © Stustle 2023{' '}
          </p>
        </div>
      </div>
    </footer>
  );
}
