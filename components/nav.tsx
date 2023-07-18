'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Champion.png';
import { Montserrat } from 'next/font/google';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-16 font-mono bg-white">
      <div className="container flex items-center justify-between p-4 mx-auto flex-shrink-1 flex-grow-1">
        <div className="flex items-center">
          <div className="">
             
              {/* <a>
                <Image src={logo} alt="Logo" width={} />
              </a> */}
            
          </div>
          <div className="text-lg font-bold tracking-wide text-black sm:relative sm:flex ">
          <Link legacyBehavior href="/">
            Champion Cleaning Services
          </Link> 
          </div>
        </div>

        <div className="flex items-center ">
          {/* Nav */}
        <ul className="hidden py-2 font-bold tracking-wide sm:flex">
        <li>
              <Link legacyBehavior href="/">
                <a className="block px-4 py-2 text-black hover:text-blue-500">
                  Home
                </a>
              </Link>
            </li>
          <li>
            <Link legacyBehavior href="/services">
              <a className="block px-4 py-2 text-black hover:text-blue-500">
                Services
              </a>
            </Link>
        <ul className="dropdown-menu">
          <li>
            <a href="/services/service1">Standard Cleaning 🧼🧽</a>
          </li>
          <li>
            <a href="/services/service2">Home / Commercial 🏡🏢</a>
          </li>
          <li>
            <a href="/services/service3">Relocation Cleaing 🚚📦</a>
          </li>
          <li>
            <a href="/services/service4">Rental Property 🏖️</a>
          </li>
          <li>
            <a href="/services/service5">Outdoor / Patio 🍂🌳</a>
          </li>
          <li>
            <a href="/services/service6">Miscellaneous / One Time 🔂</a>
          </li>
        </ul>
          </li>

            <li>
              <Link legacyBehavior href="/faq">
                <a className="block px-4 py-2 text-black hover:text-blue-500">
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="block px-4 py-2 text-black hover:text-blue-500">
                  About
                </a>
              </Link>
            </li>
          </ul>
          {/* Nav */}

         
     {/* hamburger */}
          <div className="ml-4 sm:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={handleMenuToggle}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex justify-center text-lg border md:hidden">
          <ul className="py-2 m-2 ">
            <li className=''>
              <Link legacyBehavior href="/services">
                <a className="block px-4 py-2 text-black hover:text-blue-500">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/faq">
                <a className="block px-4 py-2 text-black hover:text-blue-500">
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="block px-4 py-2 text-black hover:text-blue-500">
                  About
                </a>
              </Link>
            </li>
            <div>
            <Link legacyBehavior href="/contact">
          <button 
            className="block px-4 py-2 text-black hover:text-blue-500"
          >
            Get A Quote
          </button>
          </Link>
          </div>
            <li>
            <a href="tel:+1234567890" className="block px-4 py-2 text-blue-500">
              +1 (234) 567-890
            </a>
          </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;