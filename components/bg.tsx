import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import photo from '../public/kitchen.jpg'
import photo1 from '../public/clean1.jpg'
import Champ from '../public/clean3.jpg'
import Footer from './footer';
import Stats from '../components/stats';
import Socials from '../components/socials';


const bg = () => {
  return (
    <div className='bg-green-100'>

      {/* Hero */}
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:py-4">
        <div className="mr-auto leading-8 place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-wide text-gray-900 md:text-5xl xl:text-6xl">Our Cleaning Puts The Extra in Extra-ordinary</h1>
            <p className="max-w-2xl mt-4 mb-2 font-medium leading-7 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">Our dedicated team of skilled professionals is committed to delivering exceptional results that go beyond expectations. Unlike other cleaning companies, we personalize our approach to suit your unique needs. Our tailored solutions are designed to fit seamlessly into your schedule and budget.</p>
          
            <p className="max-w-2xl mt-6 mb-6 font-medium leading-7 text-gray-500 md: lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">With years of experience, state-of-the-art equipment, and eco-friendly cleaning solutions, we ensure every nook and cranny in your space is thoroughly sanitized and our clients are satisfied</p>
          <div>
          <Link href="https://dot.cards/championcleaning" className="inline-flex items-center mb-4 font-medium cursor-pointer text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Check us out on social media
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </Link> 
            <Socials />
          </div>
            
  
            
       
      
      
        </div>
        <div className="hidden lg:mt-4 lg:col-span-5 lg:flex">
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
