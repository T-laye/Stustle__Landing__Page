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
        <div className="w-36  px-4 pt-4 pb-8 mx-auto  h-48 bg-gray-0 flex flex-col justify-start items-start rounded-lg hover:shadow-md hover:bg-white hover:duration-700 xl:scale-150 lg:scale-110 xl:mt-14  ">
          <div className=" w-full flex justify-start  ">
            <div className="bk text-black">{serv.icon}</div>
          </div>
          <h4 className="text-sm font-medium mt-2">{serv.title}</h4>
          <p className="text-xs text-gray-2 leading-4 mt-0 mb-0">
            {serv.description}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <section id="services">
      <div className="flex flex-col items-center">
        <h2>Our Services</h2>
        <p className="text-center text-lg">The services we offer:</p>
        <div>
          <div className="flex flex-wrap gap-6 justify-center mt-6 md:grid grid-cols-3 md:gap-6 xl:gap-x-48 xl:gap-y-20 xl:mb-14 lg:gap-x-20 lg:gap-y-10 lg:mt-8 lg:w-5/6 sm:gap-x-2 md:w-6/7 mx-auto">
            {renderService}
          </div>
        </div>
      </div>
      <ContactModal modal={openModal} />
    </section>
  );
}
