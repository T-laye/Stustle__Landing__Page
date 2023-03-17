import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo/stustle.png';
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
        <div className="flex underline align-bottom underline-offset-2 justify-between">
          <Link legacyBehavior href="/">
            <a>
              <Image height={22} width={107} src={logo} alt="Stustle Logo" />
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a>return to home</a>
          </Link>
        </div>
      </header>
      <div className=" px-6 bg-white container mx-auto py-4 md:w-1/2  lg:w-1/3 ">
        <div className="w-3/4 mb-10">
          <h2 className="text-4xl text-left text-black mb-4">Request Form</h2>
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
            <label htmlFor="fullName">Name</label>
            <input
              autoFocus
              required
              name="fullName"
              type="text"
              id="fullName"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email address (optional)"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Location</label>
            <input
              required
              name="location"
              type="text"
              id="location"
              placeholder="Enter your location"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              required
              name="phone"
              pattern="[0-9]{11}"
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
            <ValidationError
              prefix="Phone Number"
              field="phone"
              errors={state.errors}
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
              className={`${styles.btnPrimary}  mt-10 w-full`}
            >
              Submit
            </button>
          </div>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </>
  );
}
