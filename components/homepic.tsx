import React from 'react';
import Image from 'next/image';
import s1 from '../public/services/s1.jpg';
import s2 from '../public/services/s2.jpg';
import s3 from '../public/services/s3.jpg';
import s4 from '../public/services/s14.jpg';
import s5 from '../public/services/s5.jpg';
import s6 from '../public/services/s9.jpg';
import s7 from '../public/services/s7.jpg';
import s8 from '../public/services/s8.jpg';
import s9 from '../public/services/s10.jpg';
import s10 from '../public/services/s6.jpg';
;

const homepic = () => {
  return (
    <div className='p-2 lg:block'>
    {/* Grid 1 */}
    <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-3 ">
      
      <div className="grid rounded-xl ">
        <Image src={s2} alt="#" className="rounded-xl" />
      </div>

      <div className="grid rounded-xl ">
        <Image src={s3} alt="#" className="rounded-xl" />
      </div>
      
      <div className="grid rounded-xl">
        <Image src={s4} alt="#" className="rounded-xl" />
      </div> 
      
      <div className="grid sm:hidden">
        <Image src={s5} alt="#" className="rounded-xl" />
      </div> 
      
    </div>
    
    {/* Grid 2 */}
    <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-3 ">
    <div className="grid rounded-xl">
        <Image src={s5} alt="#" className="rounded-xl" />
      </div>

      <div className="grid rounded-xl ">
        <Image src={s6} alt="#" className="rounded-xl" />
      </div>

      <div className="grid rounded-xl ">
        <Image src={s7} alt="#" className="rounded-xl" />
      </div>
      
      <div className="grid rounded-xl">
        <Image src={s8} alt="#" className="rounded-xl" />
      </div>
      
      <div className="grid rounded-xl ">
        <Image src={s9} alt="#" className="rounded-xl" />
      </div>
      
      <div className="grid ">
        <Image src={s10} alt="#" className="rounded-xl"/>
      </div>
    </div>
   </div> 
  );
}

export default homepic;
