import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <div>
        {/* Heading */}
      <section className="bg-yellow-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 md:text-lg lg:text-xl ">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Top tier services leaving you feeling like a true champion</h2>
          
          <p className="mb-4 font-medium">Discover the difference our meticulous attention to detail can make. Embrace a cleaner, healthier environment with our superior cleaning services. Contact us today for a spotless transformation!</p>
          <Link href="/contact" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:hover:text-primary-700 md:pt-4">
          <button type="button" className="py-2.5 px-8 mr-2 mb-2 text-[16px] font-medium text-yellow-100 focus:outline-none bg-gray-800 rounded-full border border-gray-200  hover:text-yellow-200 focus:z-10 focus:ring-4 focus:ring-gray-200 tracking-wide">Get a Quote</button>
          </Link>
      </div>
      </div>
      </section>
    </div>
  );
}

export default header;
