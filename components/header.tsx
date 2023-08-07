import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <div>
        {/* Heading */}
        <section className="bg-green-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Top notch services that leave you feeling like a true champion</h2>
          
          <p className="mb-4 font-medium">Discover the difference our meticulous attention to detail can make. Embrace a cleaner, healthier environment with our superior cleaning services. Contact us today for a spotless transformation!</p>
          <Link href="/services" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Learn more
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>
  </div>
      </section>
    </div>
  );
}

export default header;
