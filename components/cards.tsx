import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import c1 from '../public/clean1.jpg'
import c2 from '../public/bathroom.jpg'
import c3 from '../public/gloves.jpg'
import c4 from '../public/moving.jpg'
import c5 from '../public/kitchen.jpg'
import c6 from '../public/pool.jpg'


const cards = () => {
  return (
  <div className='flex flex-col items-center sm:flex-wrap md:justify-between sm:flex-row sm:flex-shrink-1 sm:flex-grow-1'>
    <div className="p-8 space-y-8 bg-white rounded-lg shadow-md sm:flex sm:p-4 sm:space-y-0 sm:space-x-4 lg-space-x-0">
      
      {/* Card 1 */}
    <div className="items-center p-2 flex-inline"> 
    {/* Parent Div for Image Centering */}
    <div className="flex-1"> 
      <div className="flex justify-center "> 
        <Image src={c1} alt="Service 1" width={350} className=" rounded-2xl" />
      </div>
    </div>
    <div className="flex-1 pt-4">
      <h2 className="mb-2 text-xl font-bold">Standard / Deep</h2>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium blandit neque ac efficitur.
      </p>
      <p className="pt-4">
        <Link legacyBehavior href="/services/service1">
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More</button>
        </Link>
      </p>
    </div>
    </div>
  
      {/* Card 2 */}
    <div className="items-center flex-inline"> 
    {/* Parent Div for Image Centering */}
    <div className="flex-1 "> 
      <div className="flex justify-center "> 
        <Image src={c2} alt="Service 1" width={350} className=" rounded-2xl" />
      </div>
    </div>
    <div className="flex-1 pt-4">
    <h2 className="mb-2 text-xl font-bold ">Home / Commercial</h2>
    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium blandit neque ac efficitur.</p>
 
      <p className='pt-4'>
        <Link legacyBehavior href="/services/service2">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More
        </button>
        </Link>
        </p>
    </div>
    </div>
  
      {/* Card 3 */}
    <div className="items-center flex-inline"> 
    {/* Parent Div for Image Centering */}
    <div className="flex-1"> 
      <div className="flex justify-center"> 
        <Image src={c1} alt="Service 3" width={350} className=" rounded-2xl" />
      </div>
    </div>
    <div className="flex-1 pt-4">
      <h2 className="mb-2 text-xl font-bold">Move In / Move Out</h2>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium blandit neque ac efficitur.</p>
        <p className='pt-4'>
        <Link legacyBehavior href="/services/service3">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More
        </button>
        </Link>
        </p>
    </div>
    </div>
  
    </div>


  </div>
  
  );
}

export default cards;
