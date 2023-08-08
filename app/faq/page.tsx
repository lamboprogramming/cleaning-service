import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/testimonials';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Mobile from '@/components/mobile';


const page = () => {
  return (
    <>
    <Nav/>
      {/* Header */}
      <section className="bg-yellow-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-lg text-gray-700 lg:text-xl ">
          <h2 className="mb-4 text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl">We believe in always putting our clients needs first</h2>
          
          <p className="mb-4 font-medium">Exceptional customer service is the cornerstone of a successful business. It not only ensures customer satisfaction but also cultivates brand loyalty and positive word-of-mouth, driven repeat business and sustainable growth</p>
          <Link href="/contact" className="inline-flex items-center font-bold tracking-wide text-gray-900 md:pt-4">
          <button type="button" className="py-2.5 px-8 mr-2 mb-2 text-[16px] font-medium text-yellow-100 focus:outline-none bg-gray-700 rounded-full border border-gray-200  hover:bg-yellow-50 focus:z-10 focus:ring-4 focus:ring-gray-20 tracking-wide hover:text-gray-700">Contact Us</button>
            
          </Link>
      </div>
      </div>
      </section>
      
         
    {/* Accordion of questions */}
    <div className="container grid grid-cols-1 text-lg ">
      <div className="grid m-4">
        {/* Ques 1 */}
        <Accordion type="single" collapsible>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>What should the customer know about your pricing (e.g., discounts, fees)?</AccordionTrigger>
         
            <AccordionContent className='text-lg text-gray-700 '>
            We offer discounted rates for recurring customers.
      
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
        {/* Ques 2 */}
        <Accordion type="single" collapsible className='mt-2'>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>What is your typical process for working with a new customer?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-700 '>
            Building rapport is key. Making the customers feel comfortable helps the project run smoothly.
           
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
        {/* Ques 3 */}
        <Accordion type="single" collapsible className='mt-4 tracking-wider'>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>What education and/or training do you have that relates to your work?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-700'>
            5 years of experience in the hotel industry. Servicing hotel rooms, cleaning common areas and assisting with customer requests.
           
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
        {/* Ques 4 */}
        <Accordion type="single" collapsible className='mt-4 tracking-wider'>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>How did you get started doing this type of work?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-700'>
            Prior experience in the hotel industry. Decided to put those skills to good use through Champion Cleaning.
           
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
        {/* Ques 5 */}
        <Accordion type="single" collapsible className='mt-4 tracking-wider'>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>What types of customers have you worked with?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-700'>
            We have worked with all types of customers throughout San Diego and the surrounding areas.
           
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
        {/* Ques 6 */}
        <Accordion type="single" collapsible className='mt-4 tracking-wider'>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>Describe a recent project you are fond of. How long did it take?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-700'>
            Standard/Deep Cleanings are in high demand jobs. They can range in length based on the size of the project. It’s a great feeling to see customers satisfied with the outcome of our work.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
        {/* Ques 7 */}
        <Accordion type="single" collapsible className='mt-4 tracking-wider'>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>Any advice for a customer looking to hire a provider in your area of work?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-700'>
            Cleanings are unique because they range in customer expectation. Be detailed in what you want providers to accomplish so that the message is clear.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
        {/* Ques 8 */}
        <Accordion type="single" collapsible className='mt-4 tracking-wider'>
         
        <AccordionItem value="item-0" >
          <AccordionTrigger className='leading-8 decoration-popover'>What should customers consider when talking to professionals about their project?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-700'>
            Please be as detailed as possible of what you want professionals to accomplish.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
      </div>

    </div>
    <Testimonials />
    <Footer />
    <Mobile />
    </>
  );
}

export default page;
