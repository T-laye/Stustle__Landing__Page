/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import errand from '../../../../public/icons/errand.png';

export default function How() {
  return (
    <section>
      <h2>How It Works</h2>
      <div className="flex flex-col items-center  ">
        <div className="min-w-80 min-h-32 px-6 py-7  rounded-lg border border-primary-dark ">
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} />
            </div>
            <div className="bk"></div>
          </div>
          <h3>Errand</h3>
          <p className="text-sm">
            Stustle is a service company laoajc kac jacnjjkasc kcjns a service
          </p>
        </div>
        <div className="h-8 border  "></div>
        <div className="min-w-80 min-h-32 px-6 py-7  rounded-lg border border-gray-3 ">
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} />
            </div>
            <div className="bk"></div>
          </div>
          <h3>Errand</h3>
          <p className="text-sm">
            Stustle is a service company laoajc kac jacnjjkasc kcjns a service
          </p>
        </div>
        <div className="h-8 border  "></div>
        <div className="min-w-80 min-h-32 px-6 py-7  rounded-lg border border-gray-3 ">
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} />
            </div>
            <div className="bk"></div>
          </div>
          <h3>Errand</h3>
          <p className="text-sm">
            Stustle is a service company laoajc kac jacnjjkasc kcjns a service
          </p>
        </div>
      </div>
    </section>
  );
}
