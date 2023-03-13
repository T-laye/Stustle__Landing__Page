/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import serviceDetails from '../../serviceDetails';

export default function Service() {
  const renderService = serviceDetails.map((serv, i) => {
    return (
      <div
        key={i}
        className="w-36 px-4 py-8 mx-auto  max-h-40 bg-gray-0 flex flex-col justify-center items-start rounded-lg hover:shadow-md hover:bg-white hover:duration-700 lg:"
      >
        <div className="relative h-8 w-8 ">
          <div className="icon">
            <Image src={serv.icon} alt="icons" />
          </div>
          <div className="bk"></div>
        </div>
        <h3>{serv.title}</h3>
        <p className="text-xs">{serv.description}</p>
      </div>
    );
  });

  return (
    <section id="services">
      <div>
        <h2>Our Services</h2>
        <div>
          <div className="flex flex-wrap gap-4 justify-center md:grid grid-cols-4 md:gap-6 lg:w-4/6 md:w-6/7 mx-auto  ">
            {renderService}
          </div>
        </div>
      </div>
    </section>
  );
}
