import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import c1 from '../public/clean1.jpg'
import c2 from '../public/bathroom.jpg'
import c3 from '../public/gloves.jpg'
import c4 from '../public/moving.jpg'
import c5 from '../public/kitchen.jpg'
import c6 from '../public/pool.jpg'


const cards = () => {
  return (
 
<div className="grid grid-cols-1 mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12">
  
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our History</h3>
            <p className="my-4 leading-9">My company was inspired by the idea of providing another stream of income for my family and creating generational wealth. I am an Active Duty Air Force father of 2, looking to help our local community by providing quality cleaning throughout the San Diego area. I have a 5 years of cleaning experience in the hotel industry and 4 years experience cleaning</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <Image className="rounded-full w-9 h-9" src={c1} alt="profile picture" width={100} height={100}/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Chris Bookie</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Founder at Champion Cleaning Services LLC</div>
            </div>
        </figcaption>    
    </figure>
    
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Priority</h3>
            <p className="my-4 leading-9">Customer satisfaction is the reason that we joined this business. We are passionate about putting smiles our client&apos;s faces and letting them know that their</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <Image className="rounded-full w-9 h-9" src={c1} alt="profile picture" width={100} height={100}/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>

    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
            <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <Image className="rounded-full w-9 h-9" src={c1} width={100} height={100} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>
    
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
            <p className="my-4">You have many examples that can be used to create a fast prototype for your team.&quote;</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <Image className="rounded-full w-9 h-9" src={c1} alt="profile picture" width={100} height={100}/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
</div>

  
  );
}

export default cards;
