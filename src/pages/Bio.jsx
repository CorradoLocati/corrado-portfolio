import React from 'react';

const timeline = [
  {
    year: "2008–2023",
    title: "Senior R&D Scientist / Engineer",
    description:
      "Developed innovative solutions in electrochemistry, corrosion, and Li-ion batteries across international teams. Led R&D initiatives in green energy technologies and product development.",
  },
  {
    year: "2024–2025",
    title: "Career Accelerator in Data Analysis – LSE",
    description:
      "Upskilling with statistical data analysis, data cleaning, Python, R, SQL, Excel, and Tableau. Applied analytical thinking to practical projects for real-world companies.",
  },
  {
    year: "Current",
    title: "Seeking New Opportunities",
    description:
      "Open to relocation, including GCC countries. Motivated to combine scientific expertise and data analysis for a greener, smarter world.",
  },
];

const Bio = () => {
  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-black">
      
	  <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-700 inline-block">
          Bio
        </h2>
        <div>
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 relative pl-6">
              {/* Dot */}
              <div className="absolute left-0 top-2 w-4 h-4 -translate-x-1/2"></div>

              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="text-green-700 font-medium">{item.title}</p>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Bio;
