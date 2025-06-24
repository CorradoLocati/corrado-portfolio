import React from 'react';
import Publications from '../pages/Publications';
import Conferences from '../pages/Conferences';

const RnD = () => {
  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-gray-800">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-green-700 inline-block">
          Research & Development
        </h2>

        {/* Publications Section */}
        <div className="mb-20">
          <Publications />
        </div>

        {/* Conferences Section */}
        <div className="mb-20">
          <Conferences />
        </div>
      </div>
    </section>
  );
};

export default RnD;
