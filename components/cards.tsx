import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { MdGroups } from 'react-icons/md'
import Champ from '../public/clean3.jpg'
import C2 from '../public/kitchen.jpg'

const cards = () => {
  return (
 
<div className="grid grid-cols-1 border border-gray-200 shadow-sm md:mb-12">
  {/* First Fig */}
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">About Us</h3>
            <p className="my-4 text-lg leading-9">&quot;The company was inspired by the idea of providing another stream of income for my family and creating generational wealth. I am an Active Duty Air Force father of 2, looking to help our local community by providing quality cleaning throughout the San Diego area. I have a 5 years of cleaning experience in the hotel industry and 4 years experience cleaning.&quot;</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Chris Bookie</div>
                <div className="text-lg text-gray-500 dark:text-gray-400">Founder at Champion Cleaning Services LLC</div>
            </div>
        </figcaption>    
    </figure>
    
               {/* <Socials /> */}
      <div className='lg:hidden'>
      <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={Champ} className='w-full '  alt="mockup"/>
      </div>  
      </div>
      
    {/* Second fig */}
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Mission</h3>

            <p className="my-4 text-lg leading-9">Customer satisfaction is the reason that we joined this business. We are passionate about putting smiles on our client&apos;s faces. When we clean we do so with joy knowing that we have the opportunity to make a difference in someone&apos; life. Sometimes the cleaning can become too much, that&apos;s where we come in!</p>
        </blockquote>   
    </figure>
    <div className='lg:hidden'>
      <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={C2} className='w-full '  alt="mockup"/>
      </div>  
      </div>


</div>

  
  );
}

export default cards;
