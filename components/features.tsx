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

<div className='flex pt-4 font-sans tracking-wide bg-white'>
  <div className='flex flex-wrap items-start justify-evenly'>
    
    {/* Div 1*/}
  <div className='flex h-[200px] w-[300px] p-2 shadow-lg m-2 justify-center bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-95% rounded-xl'>
    <Link legacyBehavior href="/services/service1">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={materials} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black'>Standard Deep </span>
      <span className='text-lg font-bold text-black'>Cleaning</span>
    </p>
    </Link>
  </div>
  
    {/* Div 2*/}
  <div className='flex h-[200px] w-[300px] p-2 shadow-lg m-2 justify-center bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-95% rounded-xl   '>
  <Link legacyBehavior href="/services/service2">
    <p className='flex flex-col items-center cursor-pointer '>
      <Image src={estate} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black '>Home & </span>
      <span className='text-lg font-bold text-black'>Commercial Cleaning</span>
    </p>
    </Link>
  </div>
  
    {/* Div 3*/}
  <div className='flex h-[200px] w-[300px] p-2 shadow-lg m-2 justify-center bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-95% rounded-xl '>
  <Link legacyBehavior href="/services/service3">
    <p className='flex flex-col items-center cursor-pointer '>
      <Image src={moving} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black'>Relocation</span>
      <span className='text-lg font-bold text-black'>Cleaning</span>
    </p>
    </Link>
  </div>
    {/* Div 4*/}
  <div className='flex h-[200px] w-[300px] p-2 shadow-lg m-2 justify-center bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-95% rounded-xl '>
  <Link legacyBehavior href="/services/service4">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={office} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black'>Rental</span>
      <span className='text-lg font-bold text-black'>Property Cleaning</span>
    </p>
    </Link>
  </div>
  
    {/* Div 5*/}
  <div className='flex h-[200px] w-[300px] p-2 shadow-lg m-2 justify-center bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-95% rounded-xl '>
  <Link legacyBehavior href="/services/service5">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={outdoor} className='h-[65%] mb-2' alt="/"  />
      <span className='text-lg font-bold text-black'>Outdoor & </span>
      <span className='text-lg font-bold text-black'>Patio Cleaning</span>
    </p>
    </Link>
  </div>
    {/* Div 6*/}
  <div className='flex h-[200px] w-[300px] p-2 shadow-lg m-2 justify-center bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-95% rounded-xl '>
  <Link legacyBehavior href="/services/service6">
    <p className='flex flex-col items-center cursor-pointer'>
      <Image src={vacuum} className='h-[65%] mb-2' alt="/" />
      <span className='text-lg font-bold text-black'>Miscellaneous / </span>
      <span className='text-lg font-bold text-black'>One Time Cleaning</span>
    </p>
    </Link>
  </div>







  </div>
</div>
  );
};

export default Features;