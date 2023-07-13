import React from 'react';
import Image from 'next/image'
import photo from '../public/kitchen.jpg'
import photo1 from '../public/clean1.jpg'

const bg = () => {
  return (
    <div className='flex justify-center lg:bg-gradient-to-r '>
      <div className='flex flex-col items-center mt-2'>
      <div className='   lg:w-[600px] justify-center  '>
      <Image src={photo} className='relative ' alt="background" />
      </div>

      <div className='pl-4 mt-4'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magni reprehenderit qui commodi libero facere dolores fugit! Sint, quis.</p>
      </div>
      </div>
      
      
      
    </div>
  );
}

export default bg;
