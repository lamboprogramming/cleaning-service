import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/nav';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Mobile from '@/components/mobile';

const page = () => {
  return (
    <>
    <Nav />
    <Header />
    <div className='container mt-12 mb-8'>
     
      {/* form */}
    <form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 " placeholder="Jane" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 " placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip code</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 " placeholder="00000" required/>
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>

    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5 " placeholder="john.doe@company.com" required/>
    </div> 

    {/* email */}
    <div className="mb-4">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Date of cleaning</label>
    <div className="relative max-w-sm">
    
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg className="w-6 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input  type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Select date" />
    </div>
    </div>



    
    <div className="mb-6">
        <label htmlFor="cleaning_service" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of Cleaning Service</label>
        <select id="cleaning_service" name="cleaning_service" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5" required>
            <option value="" disabled>Select type of cleaning service</option>
            <option value="standard">Standard / Deep Clean</option>
            <option value="deep">Residential / Commercial Clean</option>
            <option value="move_in_out">Move In / Move Out</option>
            <option value="office">Airbnb / Rental Property Clean</option>
            <option value="commercial">Outdoor / Patio Clean</option>
            <option value="special">Recurring Clean</option>
            <option value="special">One Time Clean</option>
        </select>
    </div>
   
    <div className="mb-6">
        <label htmlFor="bedrooms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Bedrooms</label>
        <select id="bedrooms" name="bedrooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5" required>
            <option value="" disabled>Select number of bedrooms</option>
            <option value="0">none</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
        </select>
    </div>
    <div className="mb-6">
        <label htmlFor="bathrooms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Bathrooms</label>
        <select id="bathrooms" name="bathrooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2.5" required>
            <option value="" disabled>Select number of bathrooms</option>
            <option value="0">none</option>
            <option value="1">1 Bathroom</option>
            <option value="1.5">1.5 Bathrooms</option>
            <option value="2">2 Bathrooms</option>
            <option value="2.5">2.5 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
        </select>
    </div>

    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 d " required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-gray-700 hover:underline ">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-gray-700 bg-yellow-100 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center ">Submit</button>
    </form>




    </div>
    <Footer />
    <Mobile />
    </>
  );
}

export default page;
