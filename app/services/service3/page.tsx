import React from 'react';

const page = () => {
  return (
    <div className="grid gap-4 p-4 leading-8 tracking-wide lg:grid-cols-4">
    {/* Area 1 */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Home (All Rooms)</h2>
      <ul className="pl-6 list-disc list-inside">
        <li>Dust furniture and surfaces throughout entire home</li>
        <li>Sweep and mop floors</li>
        <li>Make beds</li>
        <li>Wipe down walls</li>
        <li>Vacuum carpets and area rugs</li>
        <li>Sanitize door knobs and light switches</li>
        <li>Empty all garbages</li>
      </ul>
    </div>
    {/* Area 2 */}
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
     {/* Area 3 */}
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
     {/* Area 4 */}
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
  );
}

export default page;
