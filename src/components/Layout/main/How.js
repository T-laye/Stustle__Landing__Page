/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import errand from '../../../../public/icons/errand.png';
// import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function How() {
  const { ref: box_2, inView: box_2_visible } = useInView();
  const { ref: box_3, inView: box_3_visible } = useInView();

  return (
    <section id="how">
      <h2>How It Works</h2>
      <div className="flex flex-col items-center  gap-8 mb-12  ">
        <div
          // ref={active}
          className={`min-w-80 min-h-32 px-6 py-7  rounded-lg border ${
            box_2_visible ? 'border-gray-3' : 'border-primary-dark border-2'
          } relative`}
        >
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} alt="icon" />
            </div>
            <div className="bk"></div>
          </div>
          <h3>Errand</h3>
          <p className="text-sm">
            Stustle is a service company laoajc kac jacnjjkasc kcjns a service
          </p>
          <div className={box_2_visible && !box_3_visible ? 'line' : ''}></div>
        </div>
        <div
          ref={box_2}
          className={`min-w-80 min-h-32 px-6 py-7  rounded-lg border relative  ${
            box_2_visible && !box_3_visible
              ? 'border-primary-dark border-2'
              : 'border-gray-3'
          }`}
        >
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} alt="icon" />
            </div>
            <div className="bk"></div>
          </div>
          <h3>Errand</h3>
          <p className="text-sm">
            Stustle is a service company laoajc kac jacnjjkasc kcjns a service
          </p>
          <div className={box_3_visible ? 'line' : ''}></div>
        </div>
        <div
          ref={box_3}
          className={`min-w-80 min-h-32 px-6 py-7  rounded-lg border relative  ${
            box_3_visible ? 'border-primary-dark border-2' : 'border-gray-3'
          }`}
        >
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} alt="icon" />
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
