import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-customGray">
      <div className="max-w-[672px] mx-auto">
        <img
          src="/assets/corrado.jpg"
          alt="Corrado Locati"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover mx-auto"
        />

        <h1 className="text-4xl font-bold text-green-700 mb-2">Corrado Locati</h1>
        <h2 className="text-lg text-gray-600 mb-6">
          Senior R&D Scientist | Electrochemistry | Material Science | Data Analysis
        </h2>

        <p className="text-gray-700 text-justify leading-relaxed text-md">
          My name is Corrado Locati, I was born in Milan (IT) in 1975, and I live in Utrecht (NL) since 2005. I am a senior R&D scientist and engineer with over 20
          years of experience in <strong>electrochemistry, electrocatalysis, Li-ion batteries, and corrosion</strong>. My work bridges <strong>materials science</strong> with innovative product development, especially in the green energy sector.
          <br /><br />
          Currently, I’m expanding my skill set through the <strong>LSE Career Accelerator in Data Analysis</strong>, focusing on data wrangling, statistical analysis, and tools such as <strong>Python, R, SQL, Excel, and Tableau</strong>. My goal is to combine deep technical knowledge with data-driven decision-making, possibly in the material science and electrochemistry fields.
          <br /><br />
          I am based in Utrecht (NL), but I am <strong>willing to relocate</strong>, to the GCC region, Singapore, Australia or south of Europe.
          <br /><br />
          I love to travel as much as I can, mostly in Europe, Middle East, and south east Asia. I keep myself fit, by doing gym, jogging, and sea activities (scuba diving, snorkeling, surfing, …). I also like to solve physics and chemstry problems from textbooks, I play guitar, and I am learning how to use a DJ set.
        </p>

        <div className="mt-10 w-full flex justify-center">
  <div className="max-w-md w-full text-center">
    <h3 className="text-2xl font-semibold text-green-700 mb-4 border-b-2 border-green-500 pb-2 inline-block">
      Languages
    </h3>
    <ul className="space-y-4 mt-4">
      {[
        { lang: 'Italian', filled: 5 },
        { lang: 'English', filled: 5 },
        { lang: 'Dutch', filled: 3 },
      ].map(({ lang, filled }) => (
        <li key={lang} className="flex items-center justify-between text-left">
          <span>{lang}</span>
          <div className="flex space-x-1">
            {[...Array(filled)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-green-700" />
            ))}
            {[...Array(5 - filled)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full border border-green-700" />
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>


        <div className="mt-8 space-x-4 text-center">
          <a
            href="/assets/Corrado Locati - CV.pdf"
            download
            className="bg-green-700 text-white px-5 py-2 rounded-full shadow hover:bg-green-800 transition"
          >
            Download CV
          </a>

          <a
            href="/contact"
            className="border border-green-700 text-green-700 px-5 py-2 rounded-full shadow hover:bg-green-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
