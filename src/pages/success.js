/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import success from '../../public/icons/success.png';

export default function SuccessPage() {
  return (
    <div className="text-black flex flex-col  items-center justify-center bg-white h-screen   text-center p-2">
      <div className="lg:shadow-md shadow-md p-10 rounded-3xl gap-4 flex flex-col  items-center justify-center">
        <div>
          <Image height={100} src={success} alt="Success" />
        </div>
        <h1 className="text-4xl">Request Submitted!!!</h1>
        <p className="text-xl">
          Your request is being processed, we would reach you Asap
        </p>
        <Link className="underline underline-offset-4" href="/">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
