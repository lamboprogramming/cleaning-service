"use client"
import Image from 'next/image'
import Link from 'next/link'
import Champ from '../public/clean3.jpg'
import Nav from '@/components/nav'
import Bg from '@/components/bg'
import Mobile from '@/components/mobile'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import Cards from '@/components/cards'






export default function Home() {
  return (
    <>
    <Nav />
    <div className='bg-white'>
      
      
      {/* Hero Section */}
      <Bg />
      <Cards />
   

    
      <Testimonials />
    
      {/* Mobile */}
      
      <Footer />
      
  
    
    </div>
    <Mobile />
    </>
  )
 
}
