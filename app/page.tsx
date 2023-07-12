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

const montserrat= Montserrat({ 
  subsets: ['latin'],
  weight: ['500'],
})




export default function Home() {
  return (
    <main className={montserrat.className}>
      <Nav />
{/* Content Section */}
      <div className='grid grid-cols-3 bg-slate-100'>
        
        {/* <div className='grid col-span-2 col-start-1 m-4 {montserrat.className} self-center items-center justify-items-center justify-center' >
          <p className='text-2xl leading-10 tracking-widest '>
        <span className='text-3xl font-bold'>Champion</span> Cleaning is a perfect solution when you need more thorough cleaning than usual. For example, it can be perfect when you are preparing for some Holiday or waiting for the guests. Deep cleaning after the party is a good choice as well. 
        </p>
        </div> */}
      
      </div>
      {/* <Features /> */}
      <Cards/>
    
    </main>

  )
}
