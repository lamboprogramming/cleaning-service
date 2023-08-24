import React from 'react';
import Features from '@/components/features';
import Nav from '@/components/nav';
import Header from '@/components/header';
import Footer from '@/components/footer';
import s1 from '../../public/kitchen.jpg'
import Testimonials from '@/components/testimonials';

import Questions from '@/components/questions';
import PicBanner from '@/components/picBanner';


const page = () => {
  return (
    <div className="">
    <Nav />
      <Header />
      <Features />
      
      <Testimonials />
      <PicBanner />
      <Footer />
    </div>
  );
}

export default page;
