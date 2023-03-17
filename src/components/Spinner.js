/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import spinnerLogo from '../../public/spinnerLogo.png';

export default function Spinner() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    loading && (
      <div className="fixed bottom-50% animate-pulse left-50%">
        <Image width={50} height={50} src={spinnerLogo} alt="logo spinner" />
      </div>
    )
  );
}
