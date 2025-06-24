import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-gray-800">
      <div className="max-w-[1000px] mx-auto">
	  
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-700 inline-block">
          About Me
        </h2>
      
     	<div className="list-disc ml-5 pl-2 space-y-2 text-gray-700 text-justify">
          My name is Corrado Locati, I was born in Milan (IT) in 1975, and I live in Utrecht (NL) since 2005. I am a senior R&D scientist and engineer with over 20
          years of experience in{" "}
          <strong>electrochemistry, electrocatalysis, Li-ion batteries, and corrosion</strong>. My work
          bridges <strong>materials science</strong> with innovative product
          development, especially in the green energy sector.
          <br />
          Currently, I’m expanding my skill set through the{" "}
          <strong>LSE Career Accelerator in Data Analysis</strong>, focusing on
          data wrangling, statistical analysis, and tools such as{" "}
          <strong>Python, R, SQL, Excel, and Tableau</strong>. My goal is to
          combine deep technical knowledge with data-driven decision-making, possibly in the material science and electrochemistry fields.
          <br />
          I am based in Utrecht (NL), but I am <strong>willing to relocate</strong>,
          to the GCC region, Singapore, Australia or south Europe. 
		  <br />
		  <br />
		  I travel as much as I can, mostly in Europe, Middle East, and south east Asia. I keep myself fit, by doing gym, jogging, and sea activities (scuba diving, snorkeling, surfing). I also like to do physics exercises, to play guitar, and learning how to use a DJ set. 
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

