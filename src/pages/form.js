import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo/stustle.png';
import Footer from '@/components/Layout/Footer';
import styles from '../styles/Home.module.css';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/router';

export default function FormScreen() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_STUSTLE_REQUESTS
  );

  const router = useRouter();

  if (state.succeeded) {
    router.push('/success');
  }

  return (
    <>
      <header className="mx-auto container bg-white p-6 md:w-1/2   lg:w-1/3">
        <div>
          <Link legacyBehavior href="/">
            <a>
              <Image height={22} width={107} src={logo} alt="Stustle Logo" />
            </a>
          </Link>
        </div>
      </header>
      <div className=" px-6 bg-white container mx-auto py-4 md:w-1/2  lg:w-1/3 ">
        <div className="w-3/4 mb-10">
          <h2 className="text-4xl text-left text-black mb-4">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-base leading-5">
            Please fill and submit the form below.
          </p>
        </div>
        <form
          name="request"
          method="POST"
          className=" items-center mb-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              autoFocus
              required
              name="fullName"
              type="text"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              required
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Preferred Mode of Contact</label>
            <div className="flex gap-4 items-center ">
              <input
                required
                name="contact"
                type="radio"
                id="whatsapp"
                value="Whatsapp"
              />
              <label className="m-0" htmlFor="whatsapp">
                Whatsapp
              </label>
            </div>
            <div className="flex gap-4 items-center ">
              <input name="contact" type="radio" id="call" value="Call" />
              <label className="m-0" htmlFor="call">
                Call
              </label>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              required
              name="phone"
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message">Description</label>
            <textarea
              required
              rows="4"
              cols="20"
              name="message"
              type="text"
              id="message"
              placeholder="Please kindly describe your request"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              disabled={state.submitting}
              className={`${styles.btnPrimary} mt-10 w-full`}
            >
              Submit
            </button>
          </div>
          <ValidationError errors={state.errors} />
        </form>
      </div>
      <Footer />
    </>
  );
}
