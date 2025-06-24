import React from 'react';

const experiences = [
  {
    year: '01/2023–09/2024',
    job: 'Senior Electrochemist',
    company: 'Elestor B.V. (Arnhem, NL)',
    description: [
      'Leading a team of 5 in researching novel platinum-based catalysts for bromine redox flow batteries.',
      'Coordinating synthesis and characterization efforts with internal and external partners.',
      'Conducted electrochemical tests (CV, EIS, charge-discharge) on a three-electrode setup as well as on test stands (2 and three electrodes, with 50 µm Pt wire as pseudo reference electrode).',
      'Contributing to discussions and data analysis about corrosion technology and cell performance within other company departments.',
      'Writing SOPs and other documentation on procedures and tests.',
    ],
  },
  {
    year: '11/2012–11/2022',
    job: 'Application Scientist',
    company: 'Metrohm Autolab (Utrecht, NL)',
    description: [
      'Performed laboratory experiments to write application notes covering different electrochemical domains, like corrosion (following ASTM, NACE, and ISO standards), battery testing (EIS, charge-discharge, GITT, PITT), solar cells (I-V tests, IMVS, IMPS), electrocatalysis (EIS, CV with ECSA calculations), and many others.',
      'Delivered standard operating procedures and QA/QC documentation, following ISO 9001 standard.',
      'Actively contributed to the ASTM G01.11 committee, assisting in developing an ASTM standard for in-situ EIS measurements.',
      'Managed product development for the battery app and the duo coin-cell holder.',
      'Managed the chemical laboratory and demo warehouse.',
      'Delivered global courses, mainly in introduction to electrochemistry, EIS, and how a PGSTAT works, and workshops for researchers and students.',
    ],
  },
  {
    year: '01/2012–06/2012',
    job: 'Postdoctoral Researcher',
    company: 'TU Delft (Delft, NL)',
    description: ['Electrospray technology for drug delivery.'],
  },
  {
    year: '01/2011–01/2012',
    job: 'Postdoctoral Researcher',
    company: 'TU Delft (Delft, NL)',
    description: ['Development of a membrane for Li-ion recovery from battery waste.'],
  },
  {
    year: '01/2010–07/2010',
    job: 'Postdoctoral Researcher',
    company: 'TU Delft, DSM (Delft, NL)',
    description: ['COMSOL calculations on thermal and electrical conductivities in polymer blends for materials used in LED lighting.'],
  },
];

const WorkExperience = () => {
  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-black">
      <div className="max-w-[672px] mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-700 inline-block">
          Work Experience
        </h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold text-green-700">{exp.job}</h3>
            <p className="font-medium">{exp.company}</p>
            <p className="text-sm text-gray-600 mb-2">{exp.year}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-justify">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
