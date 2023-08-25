import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png'
import Socials from './socials';

const footer = () => {
  return (
    <div className="">
           {/* Footer */}
    <footer className="">
        
        <div className="max-w-screen-xl pt-8 mx-auto mb-4 text-center">
            <Link href="/" className="flex items-center justify-center text-2xl font-semibold text-black ">
            <Image src={logo} className="transition duration-200 cursor-pointer w-36 sm:hover:scale-125 " alt="Cleaning Logo" />
            </Link>
            <Socials />
        <ul className="flex flex-wrap items-center justify-center mt-2 mb-2 text-black ">
          <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6 ">FAQ</Link>
          </li>
          <li>
              <Link href="/services" className="mr-4 hover:underline md:mr-6">Services</Link>
          </li>
          <li>
              <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">Contact</Link>
          </li>
     
        </ul>
        <span className="text-sm text-black sm:text-center">© 2023-2024 <a href="/" className="hover:underline">Gillespie Holding Group</a>. All Rights Reserved.</span>
        </div>
    </footer>
    </div>
  );
}

export default footer;
