/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import serviceDetails from '../../serviceDetails';

export default function Service() {
  const renderService = serviceDetails.map((serv, i) => {
    return (
      <div
        key={i}
        className="w-36 px-4 py-8 mx-auto  min-h-40 bg-gray-0 flex flex-col justify-start items-start rounded-lg hover:shadow-md hover:bg-white hover:duration-700 xl:scale-150 lg:scale-110 xl:mt-14  "
      >
        <div className="relative h-8 w-8 ">
          <div className="icon">
            <Image src={serv.icon} alt="icons" />
          </div>
          <div className="bk"></div>
        </div>
        <h4 className="text-sm font-medium">{serv.title}</h4>
        <p className="text-xs">{serv.description}</p>
      </div>
    );
  });

  return (
    <section id="services">
      <div>
        <h2>Our Services</h2>
        <div>
          <div className="flex flex-wrap gap-4 justify-center md:grid grid-cols-4 md:gap-6 xl:gap-x-48 xl:gap-y-20 xl:mb-14 lg:gap-x-20 lg:gap-y-10 lg:mt-8 lg:w-4/6 sm:gap-x-2 md:w-6/7 mx-auto  ">
            {renderService}
          </div>
        </div>
      </div>
    </section>
  );
}
