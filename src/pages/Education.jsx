import React from 'react';

const timeline = [
   {
    year: "2024–2025",
    title: "Career Accelerator in Data Analysis",
	institution: "The London School of Economica and Political Sciences (London, UK)",
    description:
      "Comprehensive training in data wrangling, statistical analysis, predictive analysis, A/B testing, decision tree analysis, wordcloud, using Excel, Python, R, SQL, and Tableau. Hands-on collaboration with industry partners.",
  },
  {
    year: "2006–2012",
    title: "PhD in Chemical Engineering",
	institution: "TU Delft (Delft, NL)",
    description:
      "Thesis: Interaction between High-Voltage Cathode Materials and Ionic Liquids for Novel Li-Ion Batteries. Focus: Synthesis, structural characterization (XRD), and electrochemical characterization of high-voltage nanostructured cathode nanomaterials. Study in interface between the cathode material and commercial electrolytes, as well as ionic liquids. building of coin cell and pouch cell batteries were built, and tested with mainly CV, charge/discharge, and EIS. In-depth research on combining electrochemical techniques with X-ray absorption spectroscopy (EXAFS, XANES).",
  },
  {
    year: "2005–2006",
    title: "Second-Level Master in Material Science for Micro and Nanotechnologies",
	institution: "Istituto Universitation Scuolse Superiori (Pavia, IT)",
    description:
      "Synthesis, structural characterization (XRD), and electrochemical characterization (CV, charge/discharge, EIS) of high-voltage nanostructured cathode nanomaterials.",
  },
  {
    year: "1995–2004",
    title: "Master’s Degree in Material Science",
	institution: "Milano-Bicocca University (Milan, IT)",
    description:
      "Acquired both theoretical and practical knowledge in semiconductors, polymers, synthesis and characterization of materials. Thesis: Interaction of Boron Trifluoride with Defective Sites of Binary Oxides for catalysis applications (theoretical chemistry).",
  },
];

const Education = () => {
  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-black">
      
	  <div className="max-w-[672px] mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-700 inline-block">
          Education
        </h2>
        <div>
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 relative pl-6">
              {/* Dot */}
              <div className="absolute left-0 top-2 w-4 h-4 -translate-x-1/2"></div>

              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="text-green-700 font-medium">{item.title}</p>
			  <p className="text-green-700 font-medium">{item.institution}</p>
              <p className="text-gray-700 text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Education;
