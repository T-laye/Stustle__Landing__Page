/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import serviceDetails from '../../serviceDetails';

export default function Service() {
  const renderService = serviceDetails.map((serv, i) => {
    return (
      <Link href="/">
        <div
          key={i}
          className="w-40  px-4 py-8 mx-auto  h-48 bg-gray-0 flex flex-col justify-start items-start rounded-lg hover:shadow-md hover:bg-white hover:duration-700 xl:scale-150 lg:scale-110 xl:mt-14  "
        >
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={serv.icon} alt="icons" />
            </div>
            <div className="bk"></div>
          </div>
          <h4 className="text-sm font-medium">{serv.title}</h4>
          <p className="text-xs leading-4 mt-0 mb-0">{serv.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <section id="services">
      <div className="flex flex-col items-center">
        <h2>Our Services</h2>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          magni?
        </p>
        <div>
          <div className="flex flex-wrap gap-4 justify-center mt-6 md:grid grid-cols-4 md:gap-6 xl:gap-x-48 xl:gap-y-20 xl:mb-14 lg:gap-x-20 lg:gap-y-10 lg:mt-8 lg:w-5/6 sm:gap-x-2 md:w-6/7 mx-auto">
            {renderService}
          </div>
        </div>
      </div>
    </section>
  );
}
