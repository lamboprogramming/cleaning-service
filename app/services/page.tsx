import React from 'react';
import Features from '@/components/features';
import Nav from '@/components/nav';
import Mobile from '@/components/mobile';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Socials from '@/components/socials';
import Image from 'next/image';
import c1 from '../../public/hallway.jpg'
const page = () => {
  return (
    <>
    <Nav />
    <div className='bg-yellow-50'>
      <Header />
 
      <Features />
    
      <Mobile />
      <Footer />
      
    </div>
    </>
  );
}

export default page;
