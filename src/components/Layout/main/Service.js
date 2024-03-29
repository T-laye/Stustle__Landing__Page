import ContactModal from '@/components/ContactModal';

import Link from 'next/link';
import { useState } from 'react';
import serviceDetails from '../../serviceDetails';

export default function Service() {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    setOpenModal(!openModal);
  };

  const renderService = serviceDetails.map((serv, i) => {
    return (
      <Link href="/#service" key={i} onClick={open}>
        <div className="bg-gray-0 rounded-lg hover:shadow-md hover:bg-white hover:duration-700 h-72 w-52 py-6 px-6 flex flex-col justify-start  ">
          <div className=" w-full flex justify-start  ">
            <div className="bk text-black">{serv.icon}</div>
          </div>
          <h4 className="text-base font-medium mt-2 max-[380px]:text-xl">
            {serv.title}
          </h4>
          <p className="text-sm text-gray-2 leading-2 tracking-wider mt-0 mb-0 max-[380px]:text-base">
            {serv.description}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <section id="services">
      <div className="flex flex-col items-center">
        <h2 data-aos="fade-up" data-aos-delay="300">
          Our Services
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center text-lg"
        >
          These are some of the services we render:
        </p>
        <div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            // className="max-[380px]:flex-col  flex  gap-6 justify-center mt-6 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-48 xl:gap-y-20 xl:mb-14 lg:gap-x-20 lg:gap-y-10 lg:mt-8 lg:w-5/6 sm:gap-x-2 md:w-6/7 mx-auto"
            className="mt-6 flex gap-12 flex-wrap justify-evenly bg-primay w-full "
          >
            {renderService}
          </div>
        </div>
      </div>
      <ContactModal modal={openModal} />
    </section>
  );
}
