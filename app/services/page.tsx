import React from 'react';
import Features from '@/components/features';
import Nav from '@/components/nav';
import Mobile from '@/components/mobile';
import Header from '@/components/header';
import Footer from '@/components/footer';

import s1 from '../../public/kitchen.jpg'
import Testimonials from '@/components/testimonials';


const page = () => {
  return (
    <>
    <Nav />
    <div className=''>
      <Header />

   

      <Features />
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg ">
        <blockquote className="max-w-2xl mx-auto text-gray-500 ">
            
            <p className="my-4 text-xl leading-9 sm:text-2xl sm:leading-10">Customer satisfaction is the reason that we joined this business. We are passionate about putting smiles on our client&apos;s faces. When we clean we do so with joy knowing that we have the opportunity to make a difference in someone&apos; life. Sometimes the cleaning can become too much, that&apos;s where we come in!</p>
        </blockquote>   
    </figure>
      <div className="hidden sm:block">
     
      </div>
      
      <Testimonials />
      <Footer />
      <Mobile />
      
    </div>

   
    </>
  );
}

export default page;
