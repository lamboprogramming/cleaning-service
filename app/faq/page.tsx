import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Nav from '@/components/nav';
import Footer from '@/components/footer';

 {/* Standard Clean, Vacation Rental, Airbnb, Vrbo */}
              {/* General Cleaning, Deep cleaning, Carpet, Office, Tile */}
              {/* Home , apartment & condo, Move in, Move out, Special Event */}
              {/* Recurring services? */}
const page = () => {
  return (
    <>
    <Nav/>
    <div className="container grid grid-cols-1 text-sm md:text-xl">
    <h1 className='pt-4 text-3xl font-bold '>Frequently Asked Questions</h1>
    
      <div className="grid m-8 ">
     

        {/* Item 0 */}
        <Accordion type="single" collapsible>
          <h1 className='flex justify-center font-bold'>GETTING STARTED</h1>
        <AccordionItem value="item-0" >
          <AccordionTrigger className='bg-slate-200'>1. What type of cleanings do you offer?</AccordionTrigger>
            <AccordionContent className='text-lg'>
            We provide variety of services:
            <br/>
            Residential Cleaning & Sanitizing, Apartment Cleaning & Sanitizing, Move In / Move Out Cleaning, One-Time Cleans,
            Post Construction Clean,
            Office Cleaning,
            Pool Cleaning,
            Vacation Rentals,
            Corporate Office,
            Short Term Rentals (Airbnb, Vrbo)
            <br />
            <br />

            Don&apos;t see the service you are looking for? Give us a call! We will work to accommodate your needs!
            </AccordionContent>
        </AccordionItem>
        </Accordion>

      
        {/* Item 1 */}
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-lg'>2. Do you bring your own cleaning supplies?</AccordionTrigger>
            <AccordionContent className='text-lg'>
            Yes! We provide all the cleaning supplies necessary - However, if you prefer, you can provide cleaning products and cleaning solutions that you want our cleaners to use!

            </AccordionContent>
        </AccordionItem>
        </Accordion>

        {/* Item 2 */}
        <Accordion className='py-2'  type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger>3. Do I need to be home while you are cleaning?</AccordionTrigger>
            <AccordionContent className='text-lg'>
            No, you do not need to be home while we are cleaning, as long as we have a way to enter. Most clients leave us with a door code or a hidden key. If you are home, we will gladly work around you.
            </AccordionContent>
        </AccordionItem>
        </Accordion>

        {/* Item 3 */}
        <Accordion className='py-2'  type="single" collapsible>
        <AccordionItem value="item-3">
          <AccordionTrigger>4. What if I need to cancel or reschedule my visit?</AccordionTrigger>
            <AccordionContent className='text-lg'>
            We require a minimum of 24 hours notice to cancel or reschedule your visit to avoid fees. Rescheduling will be determined by our availability and the client will be charged a fee.
            </AccordionContent>
        </AccordionItem>
        </Accordion>

        {/* Item 4 */}
        <Accordion className='py-2'  type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>5. Do I need to do anything to prepare for my cleaning visit?</AccordionTrigger>
              <AccordionContent className='text-lg'>
                The answer is No because Cleaning is our job.
                
                <br />
                <br />
                 If you feel it is absolutely necessary, it would be helpful to have beds made & any laundry/toys clear of the floors.
                <br />
                <br />
                 However, there is absolutely no obligation to have anything clean before we come.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Item 5 */}
        <Accordion className='py-2'  type="single" collapsible>
          <AccordionItem value="item-5">
            <AccordionTrigger>6. What if I am not satisfied with the clean?</AccordionTrigger>
              <AccordionContent className='text-lg'>
              Champion Cleaning offers a 100% Satisfaction Guarantee. Please inform us by email or phone and provide photos of any dissatisfaction within 24hrs of your cleaning visit to qualify.
              <br />
              <br />
              This provides you with the opportunity to have us come back to fix the tasks.  The fix-up visit time & date will be in accordance with our availability.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Item 6 */}
        <Accordion className='py-2'  type="single" collapsible>
          <AccordionItem value="item-6">
            <AccordionTrigger>7. What if I have pets in my home?</AccordionTrigger>
              <AccordionContent className='text-lg'>
              We welcome your furry friends! We are used to working around home pets. If you have an indoor pet, please notify us upon booking. We ask that you have them in a kennel or confined in a specific area while we clean, if at all possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Item 7 */}
        <Accordion className='py-2'  type="single" collapsible>
          <AccordionItem value="item-7">
            <AccordionTrigger>8. Do I need to sign a contract?</AccordionTrigger>
              <AccordionContent className='text-lg'>
              No, you are not bound to a contract. We want you to WANT us there!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Item 8 */}
        <Accordion className='py-2'  type="single" collapsible>
          <AccordionItem value="item-8">
            <AccordionTrigger>9. Are you licensed and insured?</AccordionTrigger>
              <AccordionContent className='text-lg'>
              Yes, we have a necessary license as well as general liability coverage!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Item 9 */}
        <Accordion className='py-2'  type="single" collapsible>
          <AccordionItem value="item-9">
            <AccordionTrigger>10. What does standard cleaning generally cost in San Diego?</AccordionTrigger>
              <AccordionContent className='text-lg'>
              Our prices are stated upfront because transparency is important to us. However, what a  cleaning will cost usually depends on a number of factors stemming from the size or condition of the home or business, what is being cleaned, the number of rooms and spaces, and it&apos;s condition.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Item 10 */}
        <Accordion className='py-2'  type="single" collapsible>
          <AccordionItem value="item-10">
            <AccordionTrigger>11. How do I pay for the service</AccordionTrigger>
              <AccordionContent className='text-lg'>
              We accept card/zelle/venmo/check or cash. We will charge card transactions only after the clean.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
      </div>

    </div>
    <Footer />
    </>
  );
}

export default page;
