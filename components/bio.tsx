import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clean from '../public/kitchen.jpg'
import clean3 from '../public/bedroom.jpg'
import s1 from '../public/services/s9.jpg'
import s2 from '../public/services/s10.jpg'
import s3 from '../public/services/s6.jpg'
import s4 from '../public/services/s2.jpg'
import { Slabo_13px } from 'next/font/google';

const bio = () => {
  return (
 
<div className="grid shadow-sm md:mb-12">
  {/* Col 1 */}
  <div>
    <figure className="flex flex-col p-6 text-lg tracking-wider bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r ">
        <blockquote className="max-w-5xl mx-auto mb-4 font-light text-gray-700 lg:mb-6 ">
            
            <p className="my-4 leading-10 ">&quot;The company was inspired by the idea of providing another stream of income for my family and creating generational wealth. I am an Active Duty Air Force father of 2, looking to help our local community by providing quality cleaning throughout the San Diego area.  I have 6 years of cleaning experience in the hotel industry and 5 years experience cleaning homes, apartments, condos, rentals, airbnbs, and commercial buildings.</p>
            <p className="my-4 leading-10 ">I&apos;m family oriented and really enjoy helping people. The goal is to always give 100% effort and excellent customer service while building rapport and partnerships with my customers. When you hire a <span className="font-semibold">Champion Cleaner</span>, you will be more than satisfied with our efficiency and professionalism.&quot;</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            
            <div className="space-y-0.5 font-medium text-left">
                <div>- Chris Bookie</div>
                <div className="text-sm text-gray-500 ">Founder at Champion Cleaning Services LLC</div>
            </div>
        </figcaption>    
    </figure>
  </div>
</div>

  
  );
}

export default bio;
