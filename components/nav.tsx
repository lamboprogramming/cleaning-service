'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Champion.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex items-center">
          <div className="mr-4">
             
              {/* <a>
                <Image src={logo} alt="Logo" width={} />
              </a> */}
            
          </div>
          <div className="text-lg font-bold">
          <Link legacyBehavior href="/">
            Champion Cleaning Services
          </Link> 
          </div>
        </div>

        <div className="flex items-center">
          {/* Nav */}
        <ul className="hidden py-2 sm:flex">
        <li>
              <Link legacyBehavior href="/">
                <a className="block px-4 py-2 text-gray-800 hover:text-blue-500">
                  Home
                </a>
              </Link>
            </li>
          <li>
            <Link legacyBehavior href="/services">
              <a className="block px-4 py-2 text-gray-800 hover:text-blue-500">
                Services
              </a>
            </Link>
        <ul className="dropdown-menu">
          <li>
            <a href="/services/service1">Standard/Deep Clean 🧼🧽</a>
          </li>
          <li>
            <a href="/services/service2">Home/Commercial 🏡🏢</a>
          </li>
          <li>
            <a href="/services/service3">Move In/Move Out 🚚📦</a>
          </li>
          <li>
            <a href="/services/service4">AirBnB/Rental Properties 🏖️</a>
          </li>
          <li>
            <a href="/services/service5">Outdoor/Patio 🍂🌳</a>
          </li>
          <li>
            <a href="/services/service6">Recurring/One Time 🔂</a>
          </li>
        </ul>
          </li>

            <li>
              <Link legacyBehavior href="/faq">
                <a className="block px-4 py-2 text-gray-800 hover:text-blue-500">
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="block px-4 py-2 text-gray-800 hover:text-blue-500">
                  About
                </a>
              </Link>
            </li>
          </ul>
          {/* Nav */}

          <div className="mr-4">
            <a href="tel:+1234567890" className="text-blue-500">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <Link legacyBehavior href="/contact">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Get a Quote
          </button>
          </Link>
          </div>
          <div className="ml-4 sm:hidden">
            <button
              className="text-gray-800 focus:outline-none"
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
        <div className="bg-white md:hidden">
          <ul className="py-2">
            <li>
              <Link legacyBehavior href="/services">
                <a className="block px-4 py-2 text-gray-800 hover:text-blue-500">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/faq">
                <a className="block px-4 py-2 text-gray-800 hover:text-blue-500">
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="block px-4 py-2 text-gray-800 hover:text-blue-500">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;