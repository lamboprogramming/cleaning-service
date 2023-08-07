"use client"
import Image from 'next/image'
import Link from 'next/link'
import Champ from '../public/clean3.jpg'
import Banner from '@/components/banner'
import Features from '@/components/features'
import Nav from '@/components/nav'
import pic from '../public/gloves.jpg'
import { Montserrat } from 'next/font/google'
import Cards from '@/components/cards'
import Bg from '@/components/bg'
import Mobile from '@/components/mobile'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import Header from '@/components/header'
import Socials from '@/components/socials'
import Carousel from '@/components/carousel'





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
        {/* <Carousel /> */}
    
      <Testimonials />
    
      {/* Mobile */}
      
      <Footer />
      
  
    
    </div>
    <Mobile />
    </>
  )
 
}
