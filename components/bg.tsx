import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import clean from '../public/kitchen.jpg'
import Socials from '../components/socials';
import img1 from '../public/Champion.png'
import Nav from './nav';
import clean3 from '../public/bedroom.jpg'


const bg = () => {
  return (
    <div className=''>

        <section className="bg-slate-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-lg text-gray-800 lg:text-xl ">
          <h2 className="mb-6 text-4xl font-bold leading-10 tracking-wide text-gray-900 sm:text-5xl">We believe in always putting our clients needs first</h2>
          
          <p className="font-medium leading-8">Exceptional customer service is the cornerstone of a successful business. It not only ensures customer satisfaction but also cultivates brand loyalty and positive word-of-mouth, driven repeat business and sustainable growth</p>
          <br />
          <p className="font-semibold leading-8 ">Follow us on Thumbtack, Facebook, & Instagram  </p>
   
      </div>
      <Socials/>
      </div>
     
      </section>

   
  </div> 
   
  );
}

export default bg;
