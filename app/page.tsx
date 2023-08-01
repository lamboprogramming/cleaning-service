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






export default function Home() {
  return (
    <div className='container'>
      {/* Navbar */}
      <Nav />
      
      {/* Hero Section */}
      <Bg />

      {/* Features */}
     
       
      
 
      {/* <Features />
      <Cards/> */}
    
    </div>
  )
 
}
