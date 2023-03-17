import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function ContactModal(props) {
  const [openModal, setOpenModal] = useState(true);

  const close = function () {
    return setOpenModal(!openModal);
  };

  return (
    <>
      <div
        onClick={close}
        className={`${
          props.modal === openModal ? styles.contactModalContainer : 'hidden'
        }`}
      >
        <div className={styles.contactModal}>
          <div
            className="absolute top-1 right-2  h-4 w-4  flex items-center justify-center text-2xl rounded-full p-4 cursor-pointer"
            onClick={close}
          >
            x
          </div>
          <div className="flex flex-col mt-2 justify-evenly h-full text-xl text-center w-10/12">
            <p>How would you like to contact us ?</p>
            <div className="flex flex-col items-center justify-between bg-blak text-white text-base sm:flex-row">
              <Link href="https://wa.me/message/JVOKBIKMBAITH1" onClick={close}>
                <button className={styles.btnContactSecondary}>WhatsApp</button>
              </Link>
              <Link href="/form" onClick={close}>
                <button className={styles.btnContactPrimary}>Form</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
