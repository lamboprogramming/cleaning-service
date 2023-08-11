import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clean from '../public/kitchen2.jpg'
import clean3 from '../public/kitchen.jpg'

const imgBanner = () => {
  return (
    <div>
        <div>
       {/* Image & Services */}
       <div>
      <div className="relative block group">
  <div className="relative h-[350px] sm:h-[450px]">
    <Image
      priority
      src={clean}
      alt=""
      className="absolute inset-0 object-cover w-full h-full opacity-100 group-hover:opacity-0"
      
    />

    <Image
      src={clean3}
      alt=""
      className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100"
     
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">

  <Link href='/services'>
    <span
      className="inline-block px-5 py-3 mt-3 text-sm font-medium tracking-wide text-white uppercase bg-black rounded-xl"
    >
      View Our Services
    </span>
    </Link>
  </div>
    </div>
      </div>
  </div>
    </div>
  );
}

export default imgBanner;
