import { useInView } from 'react-intersection-observer';
import { FiSmartphone } from 'react-icons/fi';
import { TbFileDescription } from 'react-icons/tb';
import { RiRunLine } from 'react-icons/ri';

export default function How() {
  const { ref: box_2, inView: box_2_visible } = useInView();
  const { ref: box_3, inView: box_3_visible } = useInView();

  return (
    <section id="how">
      <h2>How It Works</h2>
      <div className="flex flex-col items-center mt-10 gap-8 mb-12 mx-auto  max-w-lg">
        <div
          // ref={active}
          className={`w-full  min-h-32 px-6 pt-4 pb-7 duration-700  rounded-lg border ${
            box_2_visible ? 'border-gray-3' : 'border-primary-dark border-2'
          } relative`}
        >
          <div className="h-full w-full flex justify-start  ">
            <div className="bk">
              <FiSmartphone size={24} />
            </div>
          </div>
          <h3>Contact us</h3>
          <p className="text-sm">
            Reach us by clicking on the Request button or any of the servive
            button. Choose your preferred mode of contact (WhatsApp or form){' '}
          </p>
          <div className={box_2_visible && !box_3_visible ? 'line' : ''}></div>
        </div>
        <div
          ref={box_2}
          className={`w-full min-h-32 px-6 py-7  duration-700  rounded-lg border relative  ${
            box_2_visible && !box_3_visible
              ? 'border-primary-dark border-2'
              : 'border-gray-3'
          }`}
        >
          <div className="h-full w-full flex justify-start  ">
            <div className="bk">
              <TbFileDescription size={24} />
            </div>
          </div>
          <h3>Describe your Service</h3>
          <p className="text-sm">
            Give a detailed description of the services you need, stating the
            time and location. A stustler(customer service agent) person would
            be available to recieve your request.
          </p>
          <div className={box_3_visible ? 'line' : ''}></div>
        </div>
        <div
          ref={box_3}
          className={` w-full min-h-32 px-6 py-7  duration-700  rounded-lg border relative  ${
            box_3_visible ? 'border-primary-dark border-2' : 'border-gray-3'
          }`}
        >
          <div className="h-full w-full flex justify-start  ">
            <div className="bk">
              <RiRunLine size={24} />
            </div>
          </div>
          <h3>Service Delivered</h3>
          <p className="text-sm">
            Relax as our stustler agent gets your service done.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}
