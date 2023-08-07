"use client"
import Image from 'next/image'
import Link from 'next/link'
import Champ from '../public/clean3.jpg'
import Features from '@/components/features'
import Nav from '@/components/nav'
import Bg from '@/components/bg'
import Mobile from '@/components/mobile'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import Header from '@/components/header'
import Socials from '@/components/socials'






export default function Home() {
  return (
    <>
    <Nav />
    <div className='bg-white'>
      
      
      {/* Hero Section */}
      <Bg />
      {/* <Socials /> */}
      <div className='md:hidden'>
      <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={Champ} className='w-full '  alt="mockup"/>
      </div>  
      </div>
    
      <Testimonials />
    
      {/* Mobile */}
      
      <Footer />
      
  
    
    </div>
    <Mobile />
    </>
  )
 
}
