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

const montserrat= Montserrat({ 
  subsets: ['latin'],
  weight: ['500'],
})




export default function Home() {
  return (
    <>
    <nav>
      <Nav />
    </nav>
    <main className={montserrat.className}>
      
{/* Content Section */}
      {/* <Bg /> */}
        
       
      
      
      <Features />
      {/* <Cards/> */}
    
    </main>
    </>
  )
 
}
