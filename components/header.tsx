import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <div>
        {/* Heading */}
      <section className="bg-yellow-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-lg text-gray-900 lg:text-xl ">
          <h2 className="mb-6 text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl ">There is no better feeling than having a clean space</h2>
          
          <p className="mb-4 font-medium">Discover the difference our meticulous attention to detail can make. Embrace a cleaner, healthier environment with our superior cleaning services. Contact us today for a spotless transformation!</p>
          <Link href="/contact" className="inline-flex items-center font-medium md:pt-4">
          <button type="button" className="px-5 py-3 mt-3 text-sm font-medium tracking-wide text-black uppercase border-2 border-black hover:bg-black/10 rounded-xl">Request A Quote</button>
          </Link>
      </div>
      </div>
      </section>
    </div>
  );
}

export default header;
