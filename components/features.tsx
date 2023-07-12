import Link from 'next/link'
import Image from 'next/image'
import c1 from '../public/deep.jpg'
import c2 from '../public/bathroom.jpg'
import c3 from '../public/gloves.jpg'
import c4 from '../public/moving.jpg'
import c5 from '../public/kitchen.jpg'
import c6 from '../public/pool.jpg'

const Features = () => {
  return (
    <> 
        <div className="grid items-center grid-cols-3 gap-4 p-4 bg-yellow-200">
      {/* Card 1 */}
      <div className="p-2 bg-white rounded-lg shadow-md">
  <Image src={c1} alt="Service 1" className="object-fit w-full mb-4 rounded-lg h-[100%] overflow-hidden" />
  <h2 className="mb-2 text-xl font-bold">Standard / Deep Clean</h2>
  <p className="text-gray-700">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium blandit neque ac efficitur.
  </p>
  <p className="pt-4">
    <Link legacyBehavior href="/services/service1">
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More</button>
    </Link>
  </p>
</div>


      {/* Card 2 */}
      <div className="p-2 bg-white rounded-lg shadow-md ">
        <Image src={c2} alt="Service 2" className="object-cover w-full mb-4 rounded-lg h-[50%]" />
        <h2 className="mb-2 text-xl font-bold">Home / Commercial Clean</h2>
        <p className="text-gray-700">Sed eu nisi ac purus dictum pulvinar. Suspendisse eget augue at dui iaculis congue. Suspendisse eget augue at.</p>
        <p className='pt-4'>
        <Link legacyBehavior href="/services/service2">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More
        </button>
        </Link>
        </p>
      </div>
        {/* Card 3 */}
      <div className="p-2 bg-white rounded-lg shadow-md ">
        <Image src={c4} alt="Service 3" className="object-contain w-full mb-4 rounded-lg h-[100%]" />
        <h2 className="mb-2 text-xl font-bold">Move In / Move Out</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium blandit neque ac efficitur.</p>
        <p className='pt-4'>
        <Link legacyBehavior href="/services/service3">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More
        </button>
        </Link>
        </p>
      </div>

        </div>


                        {/* Col 2 */}
        
        <div className="grid items-center gap-4 p-4 md:grid-cols-3">
          
          {/* Card 4 */}
          <div className="p-2 bg-white rounded-lg shadow-md ">
          <Image src={c5} alt="Service 4" className="object-contain w-full mb-4 rounded-lg h-[100%]" />
          <h2 className="mb-2 text-xl font-bold">Airbnb / Rental Properties</h2>
          <p className="text-gray-700">Sed eu nisi ac purus dictum pulvinar. Suspendisse eget augue at dui iaculis congue. Suspendisse eget augue at.</p>
          <p className='pt-4'>
          <Link legacyBehavior href="/services/service4">
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More
            </button>
          </Link>
          </p>
        </div>
               
            {/* Card 5 */}
        <div className="p-2 bg-white rounded-lg shadow-md ">
          <Image src={c6} alt="Service 5" className="object-contain w-full mb-4 rounded-lg h-[100%]" />
          <h2 className="mb-2 text-xl font-bold">Outdoor / Patio</h2>
          <p className="text-gray-700">Fusce eleifend arcu non dui bibendum convallis. Duis scelerisque consectetur ex, in efficitur ante aliquam nec.</p>
          <p className='pt-4'>
          <Link legacyBehavior href="/services/service5">
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More
          </button>
          </Link>
          </p>
        </div>

            {/* Card 6 */}
          <div className="p-2 bg-white rounded-lg shadow-md ">
            <Image src={c3} alt="Service 6" className="object-contain w-full mb-4 rounded-lg h-[100%]" />
            <h2 className="mb-2 text-xl font-bold">Recurring / One Time</h2>
            <p className="text-gray-700">Fusce eleifend arcu non dui bibendum convallis. Duis scelerisque consectetur ex, in efficitur ante aliquam nec.</p>
            <p className='pt-4'>
            <Link legacyBehavior href="/services/service6">
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Read More
              </button>
          </Link>
            </p>
        </div>
        
       
   

      {/* Card 5 */}

      </div>

  

 

    </>
  );
};

export default Features;