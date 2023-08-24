'use client'
import React, { useState } from 'react';
import { BiHappyBeaming } from 'react-icons/bi'
import { BsCalendarDate } from 'react-icons/bs'

const Timeline = () => {

const [showMore, setShowMore] = useState(false);
  return (
    <div className='m-8'>
      
<ol className="items-center sm:flex">
    <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 text-5xl dark:ring-gray-700 shrink-0">
            <BsCalendarDate/>
        </div>
        <div className="hidden w-full h-2 sm:flex "></div>
    </div>
    <div className="mt-3 sm:pr-8">
        <h3 className="text-lg font-semibold text-gray-900 ">24/7 Premium Cleaning</h3>
        
        {/* Initial part of the text */}
        <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Weekly, Biweekly, Monthly or One-Time Cleaning Visits Available.
        </div>
        
        {/* Read More section */}
        <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {showMore ? (
                <>
                    Additional text that can be shown when Read More is clicked.
                    You can put as much content as you want here.
                </>
            ) : (
                <button
                    onClick={() => setShowMore(true)}
                    className="text-blue-500 hover:underline focus:outline-none"
                >
                    Read More
                </button>
            )}
        </div>
    </div>
    </li>

    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 text-5xl dark:ring-gray-700 shrink-0">
             
                <BiHappyBeaming/>
            </div>
            <div className="hidden w-full h-2 sm:flex "></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 ">Customer Satisfaction</h3>
           
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Email us to book a cleaning visit. Select your terms and receive a booking confirmation.</p>
        </div>
    </li>
    
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 text-5xl dark:ring-gray-700 shrink-0">
             
                <BiHappyBeaming/>
            </div>
            <div className="hidden w-full h-2 sm:flex "></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 ">Customer Satisfaction</h3>
           
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
  
</ol>

    </div>
  );
}

export default Timeline;
