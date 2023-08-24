import React from 'react';
import Link from 'next/link'
import { SiThumbtack } from 'react-icons/si'
import { FaFacebookSquare }  from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'


const socials = () => {
  return (
    <>
    {/* <div className='mt-4 '>
    <h1 className='flex justify-center font-medium tracking-tight text-gray-700 text-7xl'>
      <MdPhoneIphone/> 
      </h1>
      <div className='flex justify-center mt-4 text-2xl font-medium tracking-wide lg:text-3xl '>
        <h2>Social Media</h2>
      </div>
    </div> */}
    <div className='flex flex-row justify-center m-4 space-x-12 text-3xl text-black rounded-xl '>
 
    
      <Link href='https://www.thumbtack.com/ca/san-diego/house-cleaning/champion-cleaning-llc/service/457493064825454607'>
      <div className='transition duration-200 cursor-pointer sm:hover:scale-125'>
        <SiThumbtack />
      </div>
      </Link>

      <Link href='https://www.facebook.com/championcleaning4/'>
      <div className='transition duration-200 cursor-pointer sm:hover:scale-125'>
         <FaFacebookSquare />
         
       </div>
      </Link>

      <Link href='https://www.instagram.com/championcleaningllc/?hl=en'>
      <div className='transition duration-200 cursor-pointer sm:hover:scale-125'>
         <FaInstagramSquare />
       </div>
      </Link>
    </div>
    </>
  );
}

export default socials;
