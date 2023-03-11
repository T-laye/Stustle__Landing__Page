import Head from 'next/head';
import React from 'react';
import Footer from './Layout/Footer';

import Main from './Layout/Main';

export default function Layout({ title }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' | Stustle' : ' Stustle'}</title>
        <meta name="description" content="Service Rendering Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Main />
        <Footer />
      </div>
    </>
  );
}
