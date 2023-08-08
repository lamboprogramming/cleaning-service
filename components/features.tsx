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

const Features = () => {
  return (
<div className="mb-8 ">

{/* Features */}
<div className='flex items-center pt-4 tracking-wider sm:mt-8 rounded-xl '>
  <div className='flex flex-wrap items-start justify-evenly '>
    
    {/* Div 1*/}
  <div className='flex h-[200px] sm:w-[300px] p-2 shadow-md m-2 justify-center bg-yellow-100 rounded-xl'>
    <Link legacyBehavior href="/services/service1">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={materials} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black'>Standard / Deep </span>
      <span className='text-lg font-bold text-black'>Clean</span>
    </p>
    </Link>
    
  </div>

  
    {/* Div 2*/}
  <div className='flex h-[200px] sm:w-[300px] p-2 shadow-md m-2 justify-center bg-yellow-100 rounded-xl   '>
  <Link legacyBehavior href="/services/service2">
    <p className='flex flex-col items-center cursor-pointer '>
      <Image src={estate} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black '>Residential / Commercial </span>
      <span className='text-lg font-bold text-black'> Clean</span>
    </p>
    </Link>
  </div>
  
    {/* Div 3*/}
    <div className='flex h-[200px] w-full sm:w-[300px] p-2 shadow-md m-2 justify-center bg-yellow-100 rounded-xl   '>
  <Link legacyBehavior href="/services/service3">
    <p className='flex flex-col items-center cursor-pointer '>
      <Image src={moving} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black '>Move In / Move Out </span>
      <span className='text-lg font-bold text-black'> Clean</span>
    </p>
    </Link>
  </div>
    {/* Div 4*/}
  <div className='flex h-[200px] sm:w-[300px] p-2 shadow-md m-2 justify-center bg-yellow-100 rounded-xl '>
  <Link legacyBehavior href="/services/service4">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={office} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black'>AirBnB / Rental Property</span>
      <span className='text-lg font-bold text-black'>Clean</span>
    </p>
    </Link>
  </div>
  
    {/* Div 5*/}
  <div className='flex h-[200px] sm:w-[300px]  p-2 shadow-md m-2 justify-center bg-yellow-100 rounded-xl '>
  <Link legacyBehavior href="/services/service5">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={outdoor} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black'>Outdoor / Patio </span>
      <span className='text-lg font-bold text-black'>Clean</span>
    </p>
    </Link>
  </div>
    {/* Div 6*/}
  <div className='flex h-[200px] sm:w-[300px] p-2 shadow-md m-2 justify-center bg-yellow-100 rounded-xl '>
  <Link legacyBehavior href="/services/service6">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={vacuum} className='h-[65%] mb-2' alt="/" />
      <span className='text-lg font-bold text-black'>Recurring / One Time</span>
      <span className='text-lg font-bold text-black'>Clean</span>
    </p>
    </Link>
  </div>







  </div>
</div>

</div>
  );
};

export default Features;