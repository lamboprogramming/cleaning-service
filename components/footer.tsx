import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Champion from '../public/Champion.png'

const footer = () => {
  return (
    <>
           {/* Footer */}
    <footer className="mb-4 bg-white ">
        <div className="max-w-screen-xl pt-2 mx-auto text-center">
            <a href="#" className="flex items-center justify-center text-2xl font-semibold text-black ">
           {/* <Image src={} /> */}
          Champion Cleaning
            </a>
      
        <ul className="flex flex-wrap items-center justify-center mt-2 mb-2 text-black ">
          <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">FAQ</Link>
          </li>
          <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">Services</Link>
          </li>
          <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">Contact</Link>
          </li>
          <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">Blog</Link>
          </li>
          <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">Careers</Link>
          </li>
          <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6"></Link>
          </li>
          <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6"></Link>
          </li>
        </ul>
        <span className="text-sm text-black sm:text-center">© 2023-2024 <a href="/" className="hover:underline">Champion Cleaning</a>. All Rights Reserved.</span>
        </div>
    </footer>
    </>
  );
}

export default footer;
