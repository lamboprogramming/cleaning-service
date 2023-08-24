import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clean1 from '../public/services/s1.jpg'
import clean2 from '../public/services/s2.jpg'
import clean3 from '../public/services/s4.jpg'
import clean4 from '../public/services/s8.jpg'
import clean5 from '../public/services/s9.jpg'
import clean6 from '../public/services/s10.jpg'

const carousel = () => {
  return (
    <div>


<div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={clean6} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={clean2} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={clean3} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={clean5} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={clean1} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={clean4} alt=""/>
        </div>
    </div>


    </div>
  );
}

export default carousel;
