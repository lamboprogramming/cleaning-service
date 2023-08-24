import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/nav';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Testimonials from '@/components/testimonials';
import ImgBanner from '@/components/imgBanner';

const page = () => {
  return (
    <>
    <Nav />
            {/* Heading */}
      <section className="bg-slate-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-lg text-gray-900 lg:text-xl ">
          <h2 className="mb-6 text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl ">Excellence in customer service is our commitment to you</h2>
          
          <p className="mb-4 font-medium"> At Champion Cleaning, we take pride in our unwavering dedication to prompt and responsive customer service, ensuring your needs are met with efficiency and care.</p>
      
      </div>
      </div>
      </section>

    <div className='container mt-12 mb-8'>
     
      {/* form */}
    <form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="Jane" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Address</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="123 Main Street" required/>
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Zip code</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="92124" required/>
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="619-000-0000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>

    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5 " placeholder="john.doe@company.com" required/>
    </div> 

    {/* email */}
    <div className="mb-4">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Date of cleaning</label>
    <div className="relative max-w-sm">
    
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg className="w-6 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input  type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Select date" />
    </div>
    </div>



    
    <div className="mb-6">
        <label htmlFor="cleaning_service" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Type of service</label>
        <select id="cleaning_service" name="cleaning_service" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" required>
            <option value="" disabled>Select type of cleaning service</option>
            <option value="standard">Standard / Deep Clean</option>
            <option value="deep">Residential / Commercial Clean</option>
            <option value="move_in_out">Move In / Move Out</option>
            <option value="office">Airbnb / Rental Property Clean</option>
            <option value="commercial">Outdoor / Patio Clean</option>
        </select>
    </div>
    <div className="mb-6">
        <label htmlFor="cleaning_service" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Recurring or One Time</label>
        <select id="cleaning_service" name="cleaning_service" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" required>
            <option value="" disabled>Select one</option>
            <option value="standard">One Time Clean</option>
            <option value="deep">Weekly</option>
            <option value="move_in_out">Bi-weekly</option>
            <option value="office">Monthly</option>
        </select>
    </div>
   
    <div className="mb-6">
        <label htmlFor="bedrooms" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Number of bedrooms</label>
        <select id="bedrooms" name="bedrooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" required>
            <option value="" disabled>Select number of bedrooms</option>
            <option value="0">Bedroom not included</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
           
        </select>
    </div>
    <div className="mb-6">
        <label htmlFor="bathrooms" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Number of bathrooms</label>
        <select id="bathrooms" name="bathrooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg  rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" required>
            <option value="" disabled>Select number of bathrooms</option>
            <option value="0">Bathroom not included</option>
            <option value="1">1 Bathroom</option>
            <option value="1.5">1.5 Bathrooms</option>
            <option value="2">2 Bathrooms</option>
            <option value="2.5">2+ Bathrooms</option>
          
        </select>
    </div>
    <div className="mb-6">
    <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg ">Additional Comments or Requests</label>
    <textarea id="comments" name="comments"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-full p-2.5" rows={4} placeholder="Feel free to share any specific requirements or preferences here."></textarea>
</div>

    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 d " required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 sm:text-lg ">I agree with the <a href="#" className="text-gray-700 hover:underline ">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-gray-700 bg-slate-100 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-lg  w-full sm:w-auto px-8 py-2.5 text-center ">Submit</button>
    </form>




    </div>
    <ImgBanner />
    <Testimonials />
    <Footer />
    
    </>
  );
}

export default page;
