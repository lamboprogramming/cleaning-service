import React from 'react';
import Nav from '@/components/nav';
import Link from 'next/link';





const page = () => {
  return (
    <>
    <Nav/>
    
     {/* Headline */}
     <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Residential / Commercial</h1>
        <Link href="/services" className="inline-flex items-center justify-between px-4 py-2 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
           <span className="text-sm font-medium">Click to see more services</span> 
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </Link>
       
     
    </div>
    {/* Content Start */}
    <div className="grid gap-4 p-4 font-sans leading-8 tracking-wide ">
        
        <div>
        <ul className="pl-6 leading-10  list-disc list-outside text-[15px] sm:text-[18px]">
          {/* General */}
        <h3 className="text-2xl font-bold text-blue-500 dark:text-white">General Areas:</h3>
          
          <li>Dry floor cleaning using a vacuum cleaner and broom.</li>
          <li>Wet cleaning of floors, baseboards, and window sills.</li>
          <li>Cleaning of glass surfaces and mirrors.</li>
          <li>Dusting accessories, interior items, home and household appliances, and design elements (vases, picture frames, photo frames, etc).</li>
          <li>Cleaning all types of furniture, including table tops, shelves, closets, cabinets, and other surfaces.</li>
          <li>Taking out the trash, washing waste baskets, and storage spaces.</li>
          </ul>
        </div>
        
         <div>
         <ul className="pl-6 leading-10  list-disc list-outside text-[15px] sm:text-[18px] rounded-xl mt-8 border-4 border-transparent">
          {/* Kitchen */}
          <h3 className="mt-2 text-2xl font-bold text-blue-500 dark:text-white">Kitchen:</h3>

          <li>Washing dishes by hand or dishwasher (duration may vary based upon the number of dishes).Please avoid leaving expensive or fragile dishes for us to clean.</li>
          <li>Washing the refrigerator inside and outside, including the freezer.</li>
          <li>Wiping down the stove top.</li>
          <li>Washing the microwave inside and outside.</li>
          <li>Dusting and wiping down kitchen appliances (duration may vary depending on the amount of appliances).</li>
          <li>Taking out the trash (limited to 1-2 trash bags).</li>
          <li>Cleaning out the trash can.</li>
          <li>Scrubbing and disinfecting the sink.</li>
          <li>Wiping down the windowsills.</li>
          </ul>
         </div>

          <div>
          <ul className="pl-6 leading-10  list-disc list-outside text-[15px] sm:text-[18px] shadow-sm rounded-xl mb-8">
          {/* Bathroom */}
          <h3 className="mt-2 text-2xl font-bold text-blue-500 dark:text-white">BATHROOM</h3>

          <li>Deep cleaning of shower/bathtub.</li>
          <li>Deep cleaning and disinfection of faucets, sinks, and toilets.</li>
          <li>Wiping down mirrors.</li>
          <li>Wiping down cabinets.</li>
          <li>Emptying trash and washing the trash can.</li>
          <li>Cleaning and wiping down wall and floor tiles.</li>
          </ul>
          </div>
          
          <div>
          <ul className="pl-6 leading-10  list-disc list-outside text-[15px] sm:text-[18px] shadow-sm rounded-xl mb-8">
          {/* BedRoom */}
          <h3 className="mt-8 mb-2 text-2xl font-bold text-blue-500 dark:text-white">SLEEPING & LIVING:</h3>

          <li>Wiping down window sills and ledges.</li>
          <li>Furniture surfaces dusted and cleaned.</li>
          <li>floors and upholstery vacuumed and given extra attention.</li>
          <li>Wiping down cabinets.</li>
          <li>Emptying trash and washing the trash can.</li>
          <li>Cleaning and wiping down wall and floor tiles.</li>
          <p className='mt-4 text-blue-700 text-semibold'>*We cannot move furniture, but we will try to reach any visible places either by hand or with an extension duster. It is presumed that the home will be in order to facilitate the cleaning*</p>
          </ul>
          </div>
          
          
       
        <div className='pt-4 ml-6'>
        <p className='font-semibold'>WE CANNOT PROVIDE SERVICES FOR:</p>
        <ul className=" sm:pl-6 leading-8  list-disc list-inside text-[15px] font-bold">
          <li>Moving heavy furniture and appliances.</li>
          <li>Cleaning high bulbs and ceiling fans.</li>
          <li>Handling pet waste.</li>
        </ul>
        </div>
        <p className="flex justify-center mt-4 font-semibold">*Please note, if you have piles here and there, that should be organized, or if the place is cluttered, please add extra time for organizing.</p>
      </div>
   

   
    
    </>
  );
}

export default page;
