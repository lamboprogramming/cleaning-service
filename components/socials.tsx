import React from 'react';
import Link from 'next/link'
import { SiThumbtack } from 'react-icons/Si'
import { FaFacebookSquare }  from 'react-icons/Fa'
import { FaInstagramSquare } from 'react-icons/Fa'


const socials = () => {
  return (
    <div className='flex flex-row justify-between p-6 text-6xl tracking-wide sm:justify-evenly'>
      
      <Link href='https://www.thumbtack.com/ca/san-diego/house-cleaning/champion-cleaning-llc/service/457493064825454607'>
      <div className='cursor-pointer '><h3><SiThumbtack /></h3>
      
      </div>
      </Link>

      <Link href='https://www.facebook.com/championcleaning4/'>
      <div className='cursor-pointer'> <h3><FaFacebookSquare /></h3>
     
       </div>
      </Link>

      <Link href='https://www.instagram.com/championcleaningllc/?hl=en'>
      <div className='cursor-pointer'> <h3> <FaInstagramSquare /></h3>
      
       </div>
      </Link>
    </div>
  );
}

export default socials;
