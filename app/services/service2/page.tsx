import React from 'react';
import Nav from '@/components/nav';




const page = () => {
  return (
    <>
    <Nav/>
    <div className="container">
    {/* GRID #1 */}
    
    <div className="grid gap-4 p-4 leading-8 tracking-wide lg:grid-cols-2">
      {/* STANDARD/DEEP */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Standard Deep Clean</h2>
        <ul className="pl-6 list-disc list-inside">
          <li>Dust and polish furniture and surfaces</li>
          <li>Sweep and mop floors</li>
          <li>Make beds</li>
          <li>Wipe down walls</li>
          <li>Vacuum carpets and area rugs</li>
          <li>Sanitize door knobs and light switches</li>
          <li>Empty all garbages</li>
        </ul>
      </div>
      {/* KITCHEN */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Kitchen</h2>
      <ul className="pl-6 list-disc list-inside">
        <li>
          Clean/Disinfect sink, countertops, backsplashes, and cabinet doors
        </li>
        <li>Wipe down exterior of appliances</li>
        <li>Clean interior and exterior of microwave</li>
        <li>Wash floors and vacuum rugs</li>
        <li>Clean stove top area</li>
        <li>Wash dirty dishes</li>
        <li>Empty all garbages</li>
      </ul>
    </div>
       {/* BATHROOM */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Bathroom</h2>
      <ul className="pl-6 list-disc list-inside">
        <li>Wipe-wash-polish sinks, shower/tub</li>
        <li>Wipe-wash-polish toilets</li>
        <li>Wipe down cabinet doors and countertop</li>
        <li>Clean mirrors</li>
        <li>Empty all garbages</li>
        
      </ul>
    </div>
       {/* LIVING/DINING  */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Living Room</h2>
      <ul className="pl-6 list-disc list-inside">
        <li>Dust and polish furniture</li>
        <li>Vacuum and mop floors</li>
        <li>Clean windows and window sills</li>
        <li>Empty all garbages</li>
      </ul>
    </div>
    </div>

    {/* GRID # 2 */}
    
    <div className="grid gap-4 p-4 leading-8 tracking-wide lg:grid-cols-2">
      {/* RELOCATION*/}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Relocation Cleaning</h2>
        <ul className="pl-6 list-disc list-inside">
          <li>Dust furniture and surfaces of entire residence</li>
          <li>Sweep, scrub, and mop floors</li>
          <li>Wash interior/exterior of cabinets & drawers</li>
          <li>Clean interior/exterior of vanities, louvres, and closets</li>
          <li>Vacuum carpets and area rugs</li>
          <li>Wipe down and polish stove top, oven, microwave, and other kitchen appliances</li>
          <li>Clean and polish the inside and outside of refrigerator and freezer, including cleaning and defrosting</li>
          <li>Dust all blinds, ceiling fans, light fixtures, and light switches</li>
          <li>Degrease and remove grime from all necessary areas in the kitchen, pantry, and dining room</li>
          <li>Empty all garbages</li>
        </ul>
      </div>
      {/* OFFICE*/}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Office/Commercial Cleaning</h2>
      <ul className="pl-6 list-disc list-inside">
        <li>Dusting, wiping down, washing of all reachable surfaces</li>
        <li>Cleaning and dusting of office equipment</li>
        <li>Cleaning inside and outside of kitchen appliances</li>
        <li>Basic cleaning of the bathroom</li>
        <li>Vacuuming and polishing of the floors, thorough vacuuming of the carpets.</li>
        <li>Our office cleaning services cover all possible office areas as following: common areas, bullpens, corridors, cubicles, private work areas, kitchens, bathrooms, break areas, conference halls, boardrooms, lobbies, reception, etc.</li>
      </ul>
    </div>
       {/* Area 2 */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Bathroom</h2>
      <ul className="pl-6 list-disc list-inside">
        <li>Wipe-wash-polish sinks, shower/tub</li>
        <li>Wipe-wash-polish toilets</li>
        <li>Wipe down cabinet doors and countertop</li>
        <li>Clean mirrors</li>
        <li>Empty all garbages</li>
        
      </ul>
    </div>
       {/* Area 3 */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Living Room</h2>
      <ul className="pl-6 list-disc list-inside">
        <li>Dust and polish furniture</li>
        <li>Vacuum and mop floors</li>
        <li>Clean windows and window sills</li>
        <li>Empty all garbages</li>
      </ul>
    </div>
  
    </div>
    </div>
    </>
  );
}

export default page;
