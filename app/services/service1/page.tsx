import React from 'react';
import Nav from '@/components/nav'

const page = () => {
  return (
   <div className='container'>
    <Nav />
       <div className='grid grid-rows-2 gap-8 p-4 font-sans md:grid-cols-4'>
        {/* Item */}
          <div className='grid h-40 mb-8 text-black lg:mb-0'>
            <h1 className='text-xl font-bold justify-self-center'>KITCHEN</h1>
            <p className='font-serif text-lg leading-10 tracking-wider justify-self-center'>
              Sanitize countertops, sink & backsplash, Wash exterior of appliances & interior microwave
              Wash any dirty dishes
            </p>
            <br/>
            <p className='font-serif text-lg leading-10 tracking-wider justify-self-center'>
              Wipe down table legs, chairs, barstools, wipe down cabinet exterior Wash under sink by garbage
            </p>
          </div>
        {/* Item */}
          <div className='grid h-40 mt-12 text-black sm:mt-0'>
            <h1 className='text-xl font-bold justify-self-center'>BATHROOM</h1>
            <p className='font-serif text-lg leading-10 tracking-wider justify-self-center'>
            Wipe-wash-polish sinks, tub/shower Wipe-wash-polish toilets, base & bowl Clean mirrors
            </p>
            <br/>
            <p className='font-serif text-lg leading-10 tracking-wider justify-self-center'>
            Wipe down cabinet exterior, Polish all chrome surfaces, Wipe down baseboards
            </p>
          </div>
        {/* Item */}
          <div className='grid h-40 text-black '>
            <h1 className='text-xl font-bold justify-self-center'>Kitchen</h1>
            <p className='font-serif text-lg tracking-wider justify-self-center'>
              Sanitize countertops, sink & backsplash, Wash exterior of appliances & interior microwave
              Wash any dirty dishes
            </p>
          </div>
        {/* Item */}
          <div className='grid h-40 text-black '>
            <h1 className='text-xl font-bold justify-self-center'>Kitchen</h1>
            <p className='font-serif text-lg tracking-wider justify-self-center'>
              Sanitize countertops, sink & backsplash, Wash exterior of appliances & interior microwave
              Wash any dirty dishes
            </p>
          </div>
         
       </div>
   </div>
  
  );
}

export default page;
