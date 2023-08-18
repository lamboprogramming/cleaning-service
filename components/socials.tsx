import React from 'react';
import Link from 'next/link'
import { SiThumbtack } from 'react-icons/si'
import { FaFacebookSquare }  from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'


const socials = () => {
  return (
    <>
    <div className='mt-4 '>
    <h1 className='flex justify-center font-medium tracking-tight text-gray-700 text-7xl'>
      <MdPhoneIphone/> 
      </h1>
      <div className='flex justify-center mt-4 text-2xl font-medium tracking-wide lg:text-3xl '>
        <h2>Social Media</h2>
      </div>
    </div>
    <div className='flex flex-row m-8 mt-4 text-6xl text-black border-2 border-black rounded-full justify-evenly '>
 
    
      <Link href='https://www.thumbtack.com/ca/san-diego/house-cleaning/champion-cleaning-llc/service/457493064825454607'>
      <div className='m-4 transition duration-200 cursor-pointer sm:hover:scale-125'>
        <SiThumbtack />
      </div>
      </Link>

      <Link href='https://www.facebook.com/championcleaning4/'>
      <div className='m-4 transition duration-200 cursor-pointer sm:hover:scale-125'>
         <FaFacebookSquare />
         
       </div>
      </Link>

      <Link href='https://www.instagram.com/championcleaningllc/?hl=en'>
      <div className='m-4 transition duration-200 cursor-pointer sm:hover:scale-125'>
         <FaInstagramSquare />
       </div>
      </Link>
    </div>
    </>
  );
}

export default socials;
