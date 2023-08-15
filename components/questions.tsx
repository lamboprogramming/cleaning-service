import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TbMessageCircleQuestion } from 'react-icons/tb'
const questions = () => {
  return (
    <div className='p-4 m-4 rounded-3xl bg-slate-100 '>
       
      <h1 className='flex justify-center font-medium tracking-tight text-gray-700 text-7xl'>
      <TbMessageCircleQuestion/> 
      </h1>
      {/* <h2 className='flex justify-center text-3xl font-medium'>FAQ</h2> */}
        
      
        {/* Accordion of questions */}
    <div className="grid grid-cols-1 text-lg ">
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
    </div>
  );
}

export default questions;
