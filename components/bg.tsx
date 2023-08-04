import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import photo from '../public/kitchen.jpg'
import photo1 from '../public/clean1.jpg'
import Champ from '../public/clean3.jpg'
import Footer from './footer';
import Stats from '../components/stats';


const bg = () => {
  return (
    <div className='bg-green-100'>

      {/* Hero */}
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white ">Cleaning that puts the extra in extra-ordinary</h1>
            <p className="max-w-2xl mb-4 font-light leading-7 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">Our dedicated team of skilled professionals is committed to delivering exceptional results that go beyond expectations. Unlike other cleaning companies, we personalize our approach to suit your unique needs. Whether it&apos;s residential cleaning, commercial maintenance, or specialized deep cleaning, our tailored solutions are designed to fit seamlessly into your schedule and budget.</p>
            <p className="max-w-2xl mb-6 font-light leading-7 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">With years of experience, state-of-the-art equipment, and eco-friendly cleaning solutions, we ensure every nook and cranny in your space is thoroughly sanitized and rejuvenated.</p>
      
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contact Us 
            </Link> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={Champ} className='w-full rounded-xl'  alt="mockup"/>
        </div>                
        </div>
      </section>
      
    
      
      {/* Stats */}
    <Stats />
    
    
    </div>
  );
}

export default bg;
