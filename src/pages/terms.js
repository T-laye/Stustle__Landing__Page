/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Footer from '@/components/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo/stustle.png';

export default function Terms() {
  return (
    <>
      <div className="bg-white min-h-screen px-12 pb-28 pt-6">
        <div>
          <Link href="/">
            <Image height={24} src={logo} alt="Stustle Logo" />
          </Link>
        </div>
        <div className="  flex flex-col items-center lg:px-16 mt-10 mx-auto">
          <h1 className=" text-center text-2xl font-medium mb-2 ">
            Terms and Conditions
          </h1>
          <p className="text-justify text-base">
            Welcome to Stustle. These terms of service govern your use of our
            website and services. By accessing or using our website or services,
            you agree to these Terms.
            <br />
            <br />
            Services We provide a variety of errand and domestic chore services,
            including but not limited to grocery shopping, laundry, cleaning,
            food services, assignments and more. We strive to complete these
            services with the utmost care and quality. Payment Payment for our
            services would be agreed upon by you and the Company, as it depends
            on the type of service going to be rendered.
            <br />
            <br />
            We accept various payment methods, including cash, transfer, and
            gift cards. You agree to pay all charges associated with your use of
            our services. Cancellations and Refunds If you need to cancel a
            scheduled service, please contact us as soon as possible. We
            understand that things come up and we will do our best to
            accommodate your needs. If you cancel within 24 hours of the
            scheduled service, you may be subject to a cancellation fee. Refunds
            are handled on a case-by-case basis.
            <br />
            <br />
            Liability We take great care in providing our services, but we
            cannot be held liable for any damages or losses that may occur as a
            result of our services. You agree to indemnify and hold harmless the
            Company, its owners, employees, and agents from any claims or
            damages arising out of your use of our services.
            <br />
            <br />
            Confidentiality We respect your privacy and will keep all
            information regarding your services confidential. We will not
            disclose any of your personal information without your consent,
            except as required by law. Disclaimer of Warranties We make no
            representations or warranties, express or implied, regarding the
            quality or reliability of our services.
            <br />
            <br />
            We provide our services "as is" and without warranty of any kind.
            Termination We reserve the right to terminate these Terms at any
            time for any reason. Upon termination, you must immediately cease
            all use of our services and website. Governing Law These Terms are
            governed by the laws of the state where the Company is located.
            Changes to Terms We may modify these Terms at any time without prior
            notice. Your continued use of our website or services after any
            changes to these Terms constitutes your acceptance of the new Terms.
            Thank you for choosing Stustle.
            <br />
            <br />
            We look forward to serving you!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
