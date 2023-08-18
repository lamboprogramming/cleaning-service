import React from 'react';
import Link from 'next/link'
import { SiThumbtack } from 'react-icons/si'
import { FaFacebookSquare }  from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'


const socials = () => {
  return (
    <div className='flex flex-row p-4 mt-4 text-6xl text-black justify-evenly '>
    
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
  );
}

export default socials;
