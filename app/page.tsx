"use client"
import Image from 'next/image'
import Link from 'next/link'
import Champ from '@Champion.png'
import Banner from '@/components/banner'
import Features from '@/components/features'
import Nav from '@/components/nav'
import pic from '../public/gloves.jpg'




export default function Home() {
  return (
    <div>
      <Nav />
{/* Content Section */}
      <div className='grid grid-cols-3'>
        <div className='col-span-2 col-start-1 m-4'>
          <p>
        Deep Cleaning NYC is a perfect solution when you need more thorough cleaning than usual. For example, it can be perfect when you are preparing for some Holiday or waiting for the guests. Deep cleaning after the party is a good choice as well. You will need more focused and detailed cleaning in these cases. And it will be more useful than regular or daily cleaning, too. Also, if you are not used to the regular professional cleaning at your home, it is high time to try deep cleaning NYC services. It is a great option if you have never used any cleaning services before, too.

        <br/>
        <br/>

        Deep Cleaning NYC is a perfect solution when you need more thorough cleaning than usual. For example, it can be perfect when you are preparing for some Holiday or waiting for the guests. Deep cleaning after the party is a good choice as well. You will need more focused and detailed cleaning in these cases. And it will be more useful than regular or daily cleaning, too. Also, if you are not used to the regular professional cleaning at your home, it is high time to try deep cleaning NYC services. It is a great option if you have never used any cleaning services before, too.
        </p>
        </div>
        <div className='m-4 '>
          <p>
            <Image src={pic} width="300" alt="photo"/>
          </p>
        </div>
      </div>
      
    
    </div>

  )
}
