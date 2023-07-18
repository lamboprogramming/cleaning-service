"use client"
import Image from 'next/image'
import Link from 'next/link'
import Champ from '@Champion.png'
import Banner from '@/components/banner'
import Features from '@/components/features'
import Nav from '@/components/nav'
import pic from '../public/gloves.jpg'
import { Montserrat } from 'next/font/google'
import Cards from '@/components/cards'
import Bg from '@/components/bg'






export default function Home() {
  return (
    <div className="">
    <nav>
      <Nav />
    </nav>
    <main>
      
{/* Content Section */}
      {/* <Bg /> */}
        
       
      
      <div className="">
      <Features />
      </div>
      <Cards/>
    
    </main>
    </div>
  )
 
}
