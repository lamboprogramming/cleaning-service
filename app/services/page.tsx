import React from 'react';
import Features from '@/components/features';
import Nav from '@/components/nav';
import Mobile from '@/components/mobile';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Socials from '@/components/socials';
import Image from 'next/image';


const page = () => {
  return (
    <>
    <Nav />
    <div className='bg-yellow-50'>
      <Header />
      <Features />
      <Footer />
      
    </div>
    <Mobile />
    </>
  );
}

export default page;
