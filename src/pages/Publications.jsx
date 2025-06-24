import React, { useState, useEffect } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';


const publications = [

   {
    title: "Nanostructured Fe\\(_{2}\\)O\\(_{3}\\) and CuO composite electrodes for Li ion batteries synthesized and deposited in one step",
    authors:"E. García-Tamayo, M. Valvo, U. Lafont, C. Locati, D. Munao, E.M. Kelder",	
    image: "/assets/Tamayo2011.jpg", 
    abstract: "Nanostructured composite electrodes based on iron and copper oxides for applications in Li-ion batteries are produced by Electrostatic spray pyrolysis (ESP). The electrodes are directly formed by electrospraying precursor solutions containing either iron or copper salts dissolved in N-methylpyrrolidone (NMP) together with polyvinylidene fluoride (PVdF) as binder. The morphology and the structure of the deposited electrodes are investigated by X-ray diffraction (XRD) and Transmission electron microscopy (TEM), which show that sub-micrometric deposits are formed as a composite of oxide nanoparticles of a few nanometers in a PVdF polymer matrix. Electrochemical characterization by cyclic voltammetry (CV) and galvanostatic charge–discharge tests demonstrate that the conversion reactions in these electrodes enable initial discharge capacities of about 800 mAhg\\(^{-1}\\) and 1550 mAhg\\(^{-1}\\) for CuO and Fe\\(_{2}\\)O\\(_{3}\\), respectively. The capacity retention in both cases needs further improvements.",
    REFERENCE: " Journal of Power Sources, 196, (2011), 6425–6432",
    DOI: "10.1016/j.jpowsour.2011.03.066",
    DOIlink: "https://www.sciencedirect.com/science/article/abs/pii/S0378775311006811?via%3Dihub",
  },  
 
  {
    title: "Nanosized high voltage cathode material LiMg\\(_{0.05}\\)Ni\\(_{0.45}\\)Mn\\(_{1.5}\\)O\\(_{4}\\): Structural, electrochemical and in situ investigation",
    authors:"U. Lafont, C. Locati, W.J.H. Borghols, A. Łasinska, J. Dygas, A.V. Chadwickd, E.M. Kelder",	
    image: "/assets/Lafont2009.jpg", 
    abstract: "In this study a modified solid state synthesis (auto-ignition method) is used to form nanosized spinel type material LiMg\\(_{0.05}\\)Ni\\(_{0.45}\\)Mn\\(_{1.5}\\)O\\(_{4}\\). This material presents a high voltage plateau at 4.75 V vs. Li/Li\\(^{+}\\). Structural and electrochemical characterisations have been performed using a wide range of techniques (TEM, neutron diffraction, galvanostatic measurements, and impedance spectroscopy). Besides, in situ XAS has been performed to monitor the evolution of Ni and Mn oxidation state during Li intercalation. The material presents an ordered cubic spinel structure, good capacity retention upon cycling (131 mAh g\\(^{-1}\\) at C/10 and 117mAh g\\(^{-1}\\) at 1C) and good electronic conductivity (10\\(^{-6}\\) S cm\\(^{-1}\\) at RT). The simultaneous presence of Mn\\(^{3+}\\)/Mn\\(^{4+}\\) in the structure has been investigated and explained by inclusion of disordered nanodomains in the structure.",
    REFERENCE: " Journal of Power Sources, 189, (2009), 179–184",
    DOI: "10.1016/j.jpowsour.2008.09.121",
    DOIlink: "https://www.sciencedirect.com/science/article/abs/pii/S0378775308018922?via%3Dihub",
  },
   
  {
    title: "Interaction between carbon dioxide and ionic liquids: Novel electrolyte candidates for safer Li-ion batteries",
    authors:"Corrado Locati, Ugo Lafont, Cor J. Peters, Erik M. Kelder",	
    image: "/assets/Locati2009.jpg", 
    abstract: "Ionic liquids (ILs) are typically molten salts at temperatures lower than 100 °C. Because of their thermal and electrochemical properties, they are good candidates to replace the state-of-the-art electrolytes used in today’s Li-ion batteries. These commercial batteries often suffer from hazards caused by possible misuse. Elevated voltages and high temperatures usually lead to electrolyte degradation due to parasitic reactions with the electrodes leading to gas (mainly CO\\(_2 \\)) evolution and may then eventually catch fire. Also, ILs are able to dissolve various gas molecules, making it possible to prevent a built-up of an overpressure inside the battery in case of undesired gas evolution. In this work, CO\\(_2 \\) storage in two different ionic liquids, i.e. PYR\\(_{14}\\)TFSI and [BMIm][BF\\(_4 \\)] is studied with regard to their respective Li–salt. Mixtures of ILs plus different concentrations of CO\\(_2 \\) were made. Phase diagrams of the pressure vs. temperature of the systems “liquid + vapour” to liquid transitions are drawn. Data points from 1.5 bar to 70 bar are collected with a Cailletet apparatus. Both of the ILs show good CO\\(_2 \\) dissolution ability; an increase of the temperature leads to an increase of the pressure needed to dissolve similar amounts of CO\\(_2 \\). The presence of a Li-salt hampers gas storage, particularly for PY\\(_{14}\\)TFSI. A model based on the Langmuir adsorption theory is used to describe the solubility of the CO\\(_{2}\\) in [BMIm][BF\\(_4 \\)]. The PYR\\(_{14}\\)TFSI IL does not obey the Langmuir-like solubility behaviour. Hence, the solubility then is described by the formation of discrete bonds between the CO\\(_{2}\\) and the solvent, similarly to the concept of adspecies and surface sites.", 
   REFERENCE: "Journal of Power Sources, 189, (2009), 454–457",
   DOI: "10.1016/j.jpowsour.2008.12.086",
   DOIlink: "https://www.sciencedirect.com/science/article/abs/pii/S0378775308024786?via%3Dihub",
  },

  {
    title: "Mg-doped LiNi\\(_{0.5}\\)Mn\\(_{1.5}\\)O\\(_{4}\\) spinel for cathode materials",	
    authors: "C. Locati, U. Lafont, L. Simonin, F. Ooms, E.M. Kelder", 
    image: "/assets/Locati2007.jpg", 
    abstract: "Lithium-ion batteries are becoming more and more important not only for portable electronic devices, but also in prevision of high power electric vehicles. In such an optic, deep studies regarding all the components of a secondary battery are in development. In this study, high voltage cathode materials have been selected. Crystals with spinel structure have a 3D vacancy pathway suitable for Li-ions transport. The material under study was LiNi\\(_{0.5}\\)Mn\\(_{1.5}\\)O\\(_{4}\\) doped with magnesium replacing the nickel. Various samples were synthesized via three different routes: a solid-state method, a modified sol–gel method and a xerogel method. The structure and morphology of the powders were analyzed with HRTEM and XRD. Electrochemical tests were also performed. A wide range of particle sizes (from micro to nanosize) was the result of the different synthesis routes. Unfortunately pure materials were not always obtained. The electrochemical tests showed improvement of the material’s cyclability, by reducing the particle size. The electrochemical tests further confirmed the existence of a Li\\(_{1+δ}\\)Mn\\(_{2-δ}\\)O\\(_{4}\\) impurity. The results are quite promising, however, further improvement of the purity of the electrode composition are needed.", 
   REFERENCE: "Journal of Power Sources, 174, (2007), 847–851",
   DOI: "10.1016/j.jpowsour.2007.06.196",
   DOIlink: "https://www.sciencedirect.com/science/article/abs/pii/S0378775307013833?via%3Dihub",
  },

  {
    title: "Nanopowders of spinel–type electrode materials for Li–ion batteries",	
    authors: "U. Lafont, C. Locati, E.M. Kelder", 
    image: "/assets/Lafont2006.jpg", 
    abstract: "Nanomaterials are becoming important for use in Li–ion battery electrodes as these can deliver increased capacity and improved power performance. Our work is focused on Mg-doped high-voltage spinel materials, such as LiNi\\(_{0.5}\\)Mn\\(_{1.5}\\)O\\(_{4}\\), in order to improve its stability. LiMg\\(_{δ}\\)Ni\\(_{0.5-δ}\\)Mn\\(_{1.5}\\)O\\(_{4}\\) with δ=0.05, having the cubic spinel  structure (P4\\(_{3}\\)32) were made via four different synthesis routes – a solid-state route, a sol–gel method, a xerogel route and an auto ignition method. The powders were investigated with SEM and TEM analysis. XRD was used to determine the crystallographic structure. Electrochemical tests were performed in CR2320 coin cells built with 1 M LiPF\\(_{6}\\) in EC/EMC/DMC 1:2:2 as electrolyte and metallic Li as negative electrode – cells were measured with a MACCOR cycler. LiMg\\(_{0.05}\\)Ni\\(_{0.45}\\)Mn\\(_{1.5}\\)O\\(_{4}\\) made via the sol–gel and xerogel routes revealed agglomerated nanoparticles with sizes ranging from 10 to 200 nm, whereas the auto ignition method gives particle sizes between 10 and 50 nm. Although agglomerated, often residual LiMn\\(_{2}\\)O\\(_{4}\\) is observed, with increasing concentration going from solid-state, sol–gel, xerogel to auto ignition. Hence, thanks to these different synthesis routes, we are able to obtain particle sizes reaching from 10 to 200 nm, with a narrow particle size distribution. The electrochemical tests of the xerogel particles showed promising results. The auto ignition method show also promising results, however, the impurity phase needs to be suppressed significantly. The sol–gel method, the xerogel route and the auto ignition method show increased capacity retention at high power rates compared to the solid state method.", 
   REFERENCE: "Solid State Ionic, 177, (2006), 3023–3029",
   DOI: "10.1016/j.ssi.2006.07.056",
   DOIlink: "https://www.sciencedirect.com/science/article/abs/pii/S0167273806004346?via%3Dihub",
  },
 
  {
    title: "Probing the Basicity of Regular and Defect Sites of Alkaline Earth Metal Oxide Surfaces by BF\\(_3 \\) Adsorption: A Theoretical Analysis",	
    authors: "Cristiana Di Valentin, Corrado Locati, Gianfranco Pacchioni",
    image: "/assets/DiValentin2004.jpg", 
    abstract: "The basicity of regular and low-coordinate (LC) sites (steps, edges and corners) at the surface of alkaline earths with NaCl structure (MgO, CaO, SrO, and BaO has been investigated by using BF\\(_3 \\) as a probe molecule. B–O and B–F distances; O–B–F bond angles; B–F asymmetric stretching frequencies; O, B and F 1s core-level binding energies; and the interaction energy of adsorbed BF\\(_3 \\) were determined by means of DFT calculations on cluster models. These adsorption properties were compared with those of complexes of BF\\(_3 \\) with molecules with various basicities (water, ammonia, phosphine, etc.). We show that many properties of adsorbed BF\\(_3 \\), and in particular the experimentally accessible shifts in vibrational frequency, in B and F 1s core levels, and in BF\\(_3 \\) desorption temperature, exhibit a linear correlation with the surface basicity as measured by the vertical ionization potential of the oxide anions. On the other hand, shifts of the O 1s core level binding energy do not provide a simple way to detect surface basicity. On a given oxide surface, the differeing basicities of various sites result in measurable differences in adsorption properties. This suggests the potential use of BF\\(_3 \\) as a probe molecule for titrating LC sites on the surface of ionic oxides.",
   REFERENCE: "ChemPhysChem, 5, (2004), 642–651",
   DOI: "DOI:10.1002/cphc.200400006",
   DOIlink: "https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/cphc.200400006",
  },
// Add more entries like this...
 
];


const Publications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);  
  
  return (
    <>
      <h3 className="text-2xl font-semibold text-green-700 mb-6 border-b border-green-500 pb-2">
        Publications
      </h3>

      <p className="text-gray-700 text-md mb-8 text-justify">
        This is the list of scientific publications with me as the author or co-author, in the field of Li-ion battery materials, nanotechnology, and theoretical chemistry.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6 flex flex-col h-full">
              {/* Title + authors */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-justify leading-tight">
                  {pub.title.split(/\\\((.*?)\\\)/g).map((part, i) =>
                    i % 2 === 1 ? <InlineMath key={i} math={part} /> : part
                  )}
                </h4>

                <p className="text-gray-700 text-sm text-justify mt-1">
                  {pub.authors.split(/\\\((.*?)\\\)/g).map((part, i) =>
                    i % 2 === 1 ? <InlineMath key={i} math={part} /> : part
                  )}
                </p>
              </div>

				{pub.image && (
				  <img
					src={pub.image}
					alt={pub.title}
					onClick={() => setSelectedImage(pub.image)}
					className="w-auto max-w-full h-[160px] rounded shadow mx-auto mb-6 cursor-pointer hover:opacity-80 transition"
				  />
				)}

              <div className="text-gray-700 text-sm text-justify leading-tight space-y-2">
                <p>
                  {pub.abstract.split(/\\\((.*?)\\\)/g).map((part, i) =>
                    i % 2 === 1 ? <InlineMath key={i} math={part} /> : part
                  )}
                </p>

                <p className="italic">
                  {pub.REFERENCE.split(/\\\((.*?)\\\)/g).map((part, i) =>
                    i % 2 === 1 ? <InlineMath key={i} math={part} /> : part
                  )}
                </p>

                <p className="mb-0">
                  DOI:{' '}
                  <a
                    href={pub.DOIlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {pub.DOI.replace('DOI:', '')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
		
      </div> {/* closes the .grid container */}

      {/* Zoomed image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-screen-xl w-full px-4">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="w-full h-auto max-h-screen rounded-lg object-contain mx-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-gray-800 bg-opacity-60 rounded-full px-3 py-1 hover:bg-opacity-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Publications;