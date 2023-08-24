import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clean from '../public/services/s10.jpg'
import clean3 from '../public/kitchen2.jpg'


const imgBanner = () => {
  return (
    <div className="">
        <div>
       {/* Image & Services */}
       <div>
      <div className="relative block group">
  <div className="relative h-[350px] sm:h-[450px]">
    <Image
      priority
      src={clean3}
      alt=""
      className="absolute inset-0 object-cover w-full h-full opacity-100 group-hover:opacity-0"
      
    />

    <Image
      src={clean}
      alt=""
      className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100"
     
    />
  </div>


    </div>
      </div>
  </div>
  <div>
   
  </div>
    </div>
  );
}

export default imgBanner;