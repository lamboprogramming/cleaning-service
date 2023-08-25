import Link from 'next/link'
import Image from 'next/image'
import spray from '../public/illustrate/cleaning-spray.svg'
import office from '../public/illustrate/office-building.svg'
import cleaning from '../public/illustrate/cleaning.svg'
import moving from '../public/illustrate/moving.svg'
import outdoor from '../public/illustrate/outdoor.svg'
import house from '../public/illustrate/house.svg'
import materials from '../public/illustrate/cleaning-materials.svg'
import vacuum from '../public/illustrate/vacuum.svg'
import estate from '../public/illustrate/estate.svg'
import { GiVacuumCleaner } from 'react-icons/gi'

const Features = () => {
  return (
<div className="pt-4 pb-4 ">
<h1 className='flex justify-center font-medium tracking-tight text-gray-700 text-7xl'>
      <GiVacuumCleaner/> 
      </h1>
      <div className='flex justify-center text-2xl font-medium tracking-wide lg:text-4xl sm:text-3xl'>
        <h2>Services</h2>
      </div>
{/* Features */}
<div className='flex items-center pt-4 tracking-wider justify-evenly rounded-xl'>
  <div className='flex flex-wrap '>
    
    {/* Div 1*/}
  <div className='flex h-[200px] sm:w-[300px] p-2 shadow-md m-2 justify-center  rounded-xl cursor-pointer font-medium border-2 border-gray-900 bg-yellow-50 hover:bg-black/10'>
    <Link legacyBehavior href="/services/service1">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={materials} className='h-[65%] mb-2' alt="/"  />
      <span className='text-xl text-gray-700'>Standard / Deep </span>
      <span className='text-xl text-gray-700'>Clean</span>
    </p>
    </Link>
    
  </div>

  
    {/* Div 2*/}
  <div className='flex h-[200px] sm:w-[300px] p-2 shadow-md m-2 justify-center  rounded-xl font-medium border-gray-900 border-2 bg-yellow-50 hover:bg-black/10'>
  <Link legacyBehavior href="/services/service2">
    <p className='flex flex-col items-center cursor-pointer '>
      <Image src={estate} className='h-[65%] mb-2' alt="/"  />
      <span className='text-xl text-gray-700 '>Residential / Commercial </span>
      <span className='text-xl text-gray-700 f'> Clean</span>
    </p>
    </Link>
  </div>
  
    {/* Div 3*/}
    <div className='flex h-[200px] w-full sm:w-[300px] p-2 shadow-md m-2 justify-center  rounded-xl font-medium   border-gray-900 border-2 bg-yellow-50 hover:bg-black/10'>
  <Link legacyBehavior href="/services/service3">
    <p className='flex flex-col items-center cursor-pointer '>
      <Image src={moving} className='h-[65%] mb-2' alt="/"  />
      <span className='text-xl text-gray-700 '>Move In / Move Out </span>
      <span className='text-xl text-gray-700'> Clean</span>
    </p>
    </Link>
    </div>
  
    {/* Div 4*/}
  <div className='flex h-[200px] sm:w-[300px] p-2 shadow-md m-2 justify-center  rounded-xl font-medium  border-gray-900 border-2 bg-yellow-50 hover:bg-black/10'>
  <Link legacyBehavior href="/services/service4">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={office} className='h-[65%] mb-2' alt="/"  />
      <span className='text-xl text-gray-700'>AirBnB / Rental Property</span>
      <span className='text-xl text-gray-700'>Clean</span>
    </p>
    </Link>
  </div>
  
    {/* Div 5*/}
  <div className='flex h-[200px] sm:w-[300px]  p-2 shadow-md m-2 justify-center  rounded-xl font-medium border-gray-900 border-2 bg-yellow-50 hover:bg-black/10'>
  <Link legacyBehavior href="/services/service5">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={outdoor} className='h-[65%] mb-2' alt="/"  />
      <span className='text-xl text-gray-700'>Outdoor / Patio </span>
      <span className='text-xl text-gray-700'>Clean</span>
    </p>
    </Link>
  </div>
  








  </div>
</div>

</div>
  );
};

export default Features;