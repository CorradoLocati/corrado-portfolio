import React from 'react';

const skills = [
  {
    type: 'Data Analyst',
    items: [
      'Python: numpy, pandas, matplotlib, seaborn, statsmodels, sklearn, math, scipy, wordcloud, nltk, textblob, collections',
      'R: tidyverse, dplyr, skimr, DataExplorer, ggplot2, psych',
      'SQL, Octave, Tableau',
      'Microsoft Office: Word, Excel, PowerPoint',
    ],
  },
  {
    type: 'Material Science',
    items: [
      'Electrochemical Techniques: CV, EIS, GITT, PITT, LP, PDP and many others. Extensive use of Potentiostats/Galvanostats Metrohm Autolab and BioLogic.',
      'Structural characterization of materials: with SEM, EDX, XRD, XAS and others.',
      'Thermodynamic techniques (DSC, TGA), and others.',
      'Organic and inorganic synthesis of materials, lab work and lab maintenance.',
      'Theoretical chemistry: Gaussian98 for ab-initio calculations. Python and Fortran77 for molecular dynamics calculations.',
    ],
  },
  {
    type: 'Product Development & Management',
    items: ['Miro', 'Asana'],
  },
  {
    type: 'Social and Working Skills',
    items: [
      'Teamwork, Problem Solving, Communication, Adaptability, Planning, Self-Management, Observation, Decision Making, Collaboration, Diplomacy, Empathy, Professionalism',
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-black">
      <div className="max-w-[672px] mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-700 inline-block">
          Skills
        </h2>
        {skills.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{category.type}</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-justify">
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
