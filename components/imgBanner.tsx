import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clean from '../public/services/s11.jpg'
import clean3 from '../public/kitchen.jpg'


const imgBanner = () => {
  return (
    <div className="">
        <div>
       {/* Image & Services */}
       <div>
      <div className="relative block group">
  <div className="relative h-[350px] sm:h-[450px]">

    <Image
      src={clean3}
      priority
      alt=""
      className="absolute object-cover w-full h-full "
     
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
