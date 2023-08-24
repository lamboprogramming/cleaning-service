'use client'
import React, { useState } from 'react';
import { BiHappyBeaming } from 'react-icons/bi'
import { BsCalendarDate } from 'react-icons/bs'
import { FaCommentsDollar } from 'react-icons/fa'

const Timeline = () => {

const [showMore, setShowMore] = useState(false);

  return (
    <div className='m-8'>
      
<ol className="items-center sm:flex">
    <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 text-5xl dark:ring-gray-700 shrink-0">
                    <BsCalendarDate />
                </div>
                <div className="hidden w-full h-2 sm:flex "></div>
            </div>
            <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">24/7 Champion Cleaning</h3>

                {/* Initial part of the text */}
                <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Weekly, Biweekly, Monthly or One-Time Cleaning Visits Available.
                </div>

                {/* Read More section */}
                <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {showMore ? (
                        <>
                            Don&apos;t stress about your pets or children: our products are environmentally friendly and provide a safe clean. We take care of your space with the same care as if it were our own. We leave your sanctuary spotless so that you can focus on the rest of your life.
                            <button
                                onClick={() => setShowMore(false)}
                                className="text-blue-500 hover:underline focus:outline-none"
                            >
                                <span className="ml-1">Read Less</span>
                            </button>
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
                    <BiHappyBeaming />
                </div>
                <div className="hidden w-full h-2 sm:flex "></div>
            </div>
            <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">100% Customer Satisfaction</h3>

                {/* Initial part of the text */}
                <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                We&apos;re driven by a passion for ensuring your space receives the care it deserves.
                </div>

                {/* Read More section */}
                <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {showMore ? (
                        <>
                          With open lines of communication, flexible solutions, and a commitment to exceeding expectations, we&apos;re not just cleaning spaces; we&apos;re building lasting relationships. Your delight is our ultimate achievement, and we&apos;re here to ensure that every interaction with our team leaves you with a smile of satisfaction.
                            <button
                                onClick={() => setShowMore(false)}
                                className="text-blue-500 hover:underline focus:outline-none"
                            >
                                 <span className="ml-1">Read Less</span>
                            </button>
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
                    <FaCommentsDollar />
                </div>
                <div className="hidden w-full h-2 sm:flex "></div>
            </div>
            <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">Affording Prices</h3>

                {/* Initial part of the text */}
                <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Embracing a clean and organized space shouldn&apos;t come at a high cost.
                </div>

                {/* Read More section */}
                <div className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {showMore ? (
                        <>
                          We prioritize transparency, providing you with straightforward pricing options that align with your needs. With our affordable rates and unwavering commitment, you can trust us to transform your space into a haven of cleanliness and comfort without the financial worry.
                            <button
                                onClick={() => setShowMore(false)}
                                className="text-blue-500 hover:underline focus:outline-none"
                            >
                                <span className="ml-2">Read Less</span>
                            </button>
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

   
  
</ol>

    </div>
  );
}

export default Timeline;
