import React from 'react';
import Link from 'next/link'
import { SiThumbtack } from 'react-icons/si'
import { FaFacebookSquare }  from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'


const socials = () => {
  return (
    <div className='flex flex-row justify-between pt-6 text-6xl tracking-wide sm:justify-evenly'>
      
      <Link href='https://www.thumbtack.com/ca/san-diego/house-cleaning/champion-cleaning-llc/service/457493064825454607'>
      <div className='transition duration-200 cursor-pointer hover:scale-125'>
        <SiThumbtack />
      </div>
      </Link>

      <Link href='https://www.facebook.com/championcleaning4/'>
      <div className='transition duration-200 cursor-pointer hover:scale-125'>
         <FaFacebookSquare />
       </div>
      </Link>

      <Link href='https://www.instagram.com/championcleaningllc/?hl=en'>
      <div className='transition duration-200 cursor-pointer hover:scale-125'>
         <FaInstagramSquare />
       </div>
      </Link>
    </div>
  );
}

export default socials;
