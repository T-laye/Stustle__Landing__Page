/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import errand from '../../../../public/icons/errand.png';

export default function Service() {
  return (
    <section>
      <div>
        <h2>Our Services</h2>
        <div>
          <div>
            <div className="w-36 px-4 py-8  max-h-40 bg-gray-0 flex flex-col justify-center items-start rounded-lg hover:shadow-md">
              <div className="relative h-8 w-8 ">
                <div className="icon">
                  <Image src={errand} />
                </div>
                <div className="bk"></div>
              </div>
              <h3 className="text-base font-medium mb-0">Errand</h3>
              <p className="text-xs">
                Stustle is a service company laoajc kac jacnjjkasc kcjn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
