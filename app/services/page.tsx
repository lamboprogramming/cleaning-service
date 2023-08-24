import React from 'react';
import Features from '@/components/features';
import Nav from '@/components/nav';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Testimonials from '@/components/testimonials';

import Questions from '@/components/questions';
import PicBanner from '@/components/picBanner';


const page = () => {
  return (
    <div className="">
    <Nav />
      <Header />
      <Features />
      <PicBanner />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
