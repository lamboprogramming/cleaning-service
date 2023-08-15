import React from 'react';
import Features from '@/components/features';
import Nav from '@/components/nav';
import Mobile from '@/components/mobile';
import Header from '@/components/header';
import Footer from '@/components/footer';

import s1 from '../../public/kitchen.jpg'
import Testimonials from '@/components/testimonials';
import Carousel from '@/components/carousel';


const page = () => {
  return (
    <>
    <Nav />
    <div className=''>
      <Header />

   

      <Features />
      {/* Carousel */}
      <Carousel />
      
      <Testimonials />
      <Footer />
      <Mobile />
      
    </div>

   
    </>
  );
}

export default page;
