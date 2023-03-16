/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Footer from '@/components/Layout/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo/stustle.png';

export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQ | Stustle</title>
        <meta name="description" content="Service Rendering Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/stusleFavicon.png" />
      </Head>
      <div className="bg-white min-h-screen px-12 pb-28 pt-6">
        <div>
          <Link href="/">
            <Image height={24} src={logo} alt="Stustle Logo" />
          </Link>
        </div>
        <div className="  flex flex-col items-center lg:px-36 mt-10 mx-auto">
          <h1 className=" text-center text-2xl font-medium mb-2 ">
            Frequently Asked Questions
          </h1>
          <p className="text-justify text-base">
            <strong>Q: What services do you provide?</strong>
            <br />
            A: We offer a wide range of services, including Grocery shopping,
            meal prep, laundry, cleaning, assignments, and more. We can help
            with almost any domestic chore or errand you need assistance with.
            <br />
            <br />
            <strong> Q: How do I book your services?</strong>
            <br />
            A: You can book our services online through our website or reaching
            us on whatsapp. Simply choose the services you need, give detailed
            descriptions. We'll confirm your booking and send a reminder before
            your scheduled appointment.
            <br />
            <br />
            <strong> Q: Are your services available in my area?</strong>
            <br />
            A: We currently serve within Delta State. If you're not sure if we
            serve your area, please contact us to find out.
            <br />
            <br />
            <strong> Q: How much do your services cost?</strong>
            <br />
            A: Our pricing varies depending on the service and the amount of
            time required to complete the task. We offer competitive rates and
            transparent pricing, so you'll always know exactly what you're
            paying for.
            <br />
            <br />
            <strong> Q: Are your staff background checked?</strong>
            <br />
            A: Yes, all of our staff members undergo a thorough background check
            before they are hired. We take safety and security very seriously
            and want our clients to feel confident and comfortable with the
            people we send to their homes.
            <br />
            <br />
            <strong>
              {' '}
              Q: What if I need to reschedule or cancel my appointment?{' '}
            </strong>
            <br />
            A: You can reschedule or cancel your appointment once before the
            scheduled appointment time without incurring any fees. If you need
            to cancel or reschedule while the Stustler is already about to
            commence the task, there may be a cancellation fee.
            <br />
            <br />
            <strong> Q: What if I'm not satisfied with the service?</strong>
            <br />
            A: We strive to provide high-quality services and complete customer
            satisfaction. If for any reason you're not satisfied with the
            service, please let us know as soon as possible so we can make it
            right.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
