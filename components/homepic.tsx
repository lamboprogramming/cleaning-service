import React from 'react';
import Image from 'next/image';
import s1 from '../public/services/s1.jpg';
import s2 from '../public/services/s2.jpg';
import s3 from '../public/services/s3.jpg';
import s4 from '../public/services/s4.jpg';
import s5 from '../public/services/s5.jpg';
import s6 from '../public/services/s9.jpg';
import s7 from '../public/services/s7.jpg';
import s8 from '../public/services/s8.jpg';
import s9 from '../public/services/s10.jpg';
import s10 from '../public/services/s6.jpg';
;

const homepic = () => {
  return (
    <div className='p-2 bg-white lg:block'>
    {/* Grid 1 */}
    <div className="grid grid-cols-2 gap-2 m-4">
      
      <div className="grid ">
        <Image src={s2} alt="#" />
      </div>

      <div className="grid ">
        <Image src={s3} alt="#" />
      </div>
      
      <div className="grid">
        <Image src={s4} alt="#" />
      </div> 
      
      <div className="grid">
        <Image src={s5} alt="#" />
      </div> 
      
    </div>
    
    {/* Grid 2 */}
    <div className="grid grid-cols-2 gap-2 m-4">
    <div className="grid">
        <Image src={s5} alt="#" />
      </div>

      <div className="grid ">
        <Image src={s6} alt="#" />
      </div>

      <div className="grid ">
        <Image src={s7} alt="#" />
      </div>
      
      <div className="grid">
        <Image src={s8} alt="#" />
      </div>
      
      <div className="grid ">
        <Image src={s9} alt="#" />
      </div>
      
      <div className="grid">
        <Image src={s10} alt="#" />
      </div>
    </div>
   </div> 
  );
}

export default homepic;
