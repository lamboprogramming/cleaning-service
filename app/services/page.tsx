import React from 'react';
import Features from '@/components/features';
import Nav from '@/components/nav';
import Mobile from '@/components/mobile';
import Header from '@/components/header';
import Footer from '@/components/footer';

const page = () => {
  return (
    <>
    <Nav />
    <div className=''>
      <Header />
      <Features />
      <Mobile />
      <Footer />
      
    </div>
    </>
  );
}

export default page;
