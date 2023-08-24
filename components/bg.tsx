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
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-8 lg:px-6">
        <div className="max-w-screen-lg text-lg text-gray-800 lg:text-xl ">
          <h2 className="mb-6 text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl">Top tier services leaving you feeling like a true champion</h2>
          
          <p className="font-medium leading-8">Exceptional customer service is the cornerstone of a successful business. It not only ensures customer satisfaction but also cultivates brand loyalty and positive word-of-mouth, driven repeat business and sustainable growth</p>
      </div>
      {/* <div className="flex items-center pt-4">
      <button className='px-5 py-3 mt-3 text-sm font-medium tracking-wide text-black uppercase border-2 border-black hover:bg-black/10 rounded-xl'>Request A Quote</button>
      </div> */}
      </div>
      
      
      </section>
   
  </div> 
   
  );
}

export default bg;
