/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import errand from '../../../../public/icons/errand.png';
import { useInView } from 'react-intersection-observer';

export default function How() {
  const { ref: box_2, inView: box_2_visible } = useInView();
  const { ref: box_3, inView: box_3_visible } = useInView();

  return (
    <section id="how">
      <h2>How It Works</h2>
      <div className="flex flex-col items-center mt-10 gap-8 mb-12  ">
        <div
          // ref={active}
          className={`max-w-lg min-h-32 px-6 py-7 duration-700  rounded-lg border ${
            box_2_visible ? 'border-gray-3' : 'border-primary-dark border-2'
          } relative`}
        >
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} alt="icon" />
            </div>
            <div className="bk"></div>
          </div>
          <h3>Contact us</h3>
          <p className="text-sm">
            Reach us by clicking on the Request for a service button or contact
            any of our mobile line
          </p>
          <div className={box_2_visible && !box_3_visible ? 'line' : ''}></div>
        </div>
        <div
          ref={box_2}
          className={`max-w-lg min-h-32 px-6 py-7  duration-700  rounded-lg border relative  ${
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
          <h3>Description</h3>
          <p className="text-sm">
            Give a detailed description of the services you need, stating the
            time and location
          </p>
          <div className={box_3_visible ? 'line' : ''}></div>
        </div>
        <div
          ref={box_3}
          className={`max-w-lg min-h-32 px-6 py-7  duration-700  rounded-lg border relative  ${
            box_3_visible ? 'border-primary-dark border-2' : 'border-gray-3'
          }`}
        >
          <div className="relative h-8 w-8 ">
            <div className="icon">
              <Image src={errand} alt="icon" />
            </div>
            <div className="bk"></div>
          </div>
          <h3>Service Delivered</h3>
          <p className="text-sm">
            Relax and have your request Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure quia earum adipisci corporis veniam,
            consequatur enim ratione voluptates. Fuga dolore distinctio, veniam
            reiciendis voluptas cupiditate nesciunt libero, quisquam sunt nihil
            esse nemo eos, at itaque animi optio vel aliquam aliquid neque dicta
            quibusdam delectus necessitatibus vero provident? Cupiditate, nemo
            deleniti?
          </p>
        </div>
      </div>
    </section>
  );
}
