import React from 'react';
import Image from 'next/image'
import photo from '../public/kitchen.jpg'
import photo1 from '../public/clean1.jpg'

const bg = () => {
  return (
    <div className='flex justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-95% '>
      <div className='flex flex-col items-center pt-2'>
      <div className='justify-center  lg:w-full'>
      <Image src={photo} className='relative ' alt="background" />
      </div>

    
      </div>
      
      
      
    </div>
  );
}

export default bg;
