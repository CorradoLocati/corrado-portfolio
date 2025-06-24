const conferenceData = [
  {
    date: "17–19/06/2019",
    name: "Advanced electrochemical techniques",
    where: "CREATE Tower, NUS Singapore",
    what: "School with Prof. Adrian Fisher (University of Cambridge, UK) and  Prof. Frank Marken (University of Bath, UK)",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a pgstat works",
      "Presentation on how to troubleshoot electrochemical systems",
      "help with laboratory experiments"
    ],
    website: "https://www.cares.cam.ac.uk/news-single/?postid=940&news-single"
  },
  {
    date: "03–07/12/2018",
    name: "Masterclass Electrochemistry course",
    where: "Monash University Melbourne (AU)",
    what: "Conference School with Dr. Adrian Fisher (University of Cambridge, UK), Prof. Alan Bond (Monash University, Australia), Dr. Jie Zhang (Monash University, Australia)",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a pgstat works",
      "Presentation on how to troubleshoot electrochemical systems"
    ],
    website: ""
  },
  {
    date: "15–16/11/2018",
    name: "nanoGe – HOPV18 – impedance spectroscopy school",
    where: "Castellon (ES)",
    what: "School",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.nanoge.org/ISSchool/home"
  },
  {
    date: "21–24/08/2018",
    name: "CSC21 course on Corrosion Science & Corrosion Control for Infrastructure",
    where: "TU Delft (NL)",
    what: "School",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a Pgstat works",
      "Presentation on how to troubleshoot electrochemical systems"
    ],
    website: "https://www.tudelft.nl/en/ceg/about-faculty/departments/materials-mechanics-management-design-3md/sections-labs/materials-environment/events-m-e/csc2i"
  },
  {
    date: "05–06/03/2018",
    name: "Advanced electrochemical techniques",
    where: "CREATE Tower, NUS Singapore",
    what: "School with Prof. Adrian Fisher (University of Cambridge, UK) and  Prof. Frank Marken (University of Bath, UK)",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a Pgstat works",
      "Presentation on how to troubleshoot electrochemical systems",
      "help with laboratory experiments"
    ],
    website: "https://www.cares.cam.ac.uk/news-single/?postid=940&news-single"
  },
  {
    date: "11–16/11/2017",
    name: "ASTM",
    where: "Atlanta (GE)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on EIS models for corrosion"
    ],
    website: ""
  },
  {
    date: "27/08-09/01/2017",
    name: "ISE 68th Annual Meeting",
    where: "Providence (RI)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.ise-online.org/app/uploads/68-Annual-program.pdf"
  },
  {
    date: "11–14/09/2016",
    name: "Giornate dell'elettrochimica Italiana (Days of Italian electrochemistry)",
    where: "Gargnano, Brescia (IT)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.soc.chim.it/en/node/1291"
  },
  {
    date: "21–26/08/2016",
    name: "ISE 67th Annual Meeting",
    where: "Den Haag (NL)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.ise-online.org/app/uploads/67th_Annual_meeting_program.pdf"
  },
  {
    date: "28–07/06/2016",
    name: "nanoGe – HOPV16",
    where: "Swansea (UK)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.nanoge.org/HOPV16/home"
  },
  {
    date: "19–24/06/2016",
    name: "EIS – 10th international symposium on EIS",
    where: "A Toxa (ES)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.eis2023.cn/static/upload/EIS2016.pdf"
  },
  {
    date: "04–09/10/2015",
    name: "ISE 66th Annual Meeting",
    where: "Taipei (Tw)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.ise-online.org/app/uploads/66th_Annual_meeting_program.pdf"
  },
  {
    date: "28–09/08/2015",
    name: "Leibnitz institute for solid state and material research",
    where: "Dresden (DE)",
    what: "Summer School spectroelectrochemistry",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a pgstat works",
      "Presentation on how to troubleshoot electrochemical systems"
    ],
    website: "https://www.ifw-dresden.de/news-events/scientific-events/summer-school-spectroelectrochemistry"
  },
  {
    date: "10–11/08/2015",
    name: "Advanced electrochemical techniques",
    where: "CREATE Tower, NUS Singapore",
    what: "School with Prof. Adrian Fisher (University of Cambridge, UK) and Prof. Frank Marken (University of Bath, UK)",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a pgstat works",
      "Presentation on how to troubleshoot electrochemical systems",
      "Help with laboratory experiments"
    ],
    website: "https://www.cares.cam.ac.uk/news-single/?postid=940&news-single"
  },
  {
    date: "11–13/05/2015",
    name: "nanoGe – HOPV15",
    where: "Rome (IT)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.nanoge.org/HOPV15/hopv15"
  },
  {
    date: "07–10/09/2014",
    name: "ECL international meeting on electrogenerated chemiluminescence",
    where: "Bertinoro (IT)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.ceub.it/events/event/ecl2014-international-meeting-on-electrogenerated-chemiluminescence/?lang=en"
  },
  {
    date: "23–30/08/2013",
    name: "Leibnitz institute for solid state and material research",
    where: "Dresden (DE)",
    what: "Summer School spectroelectrochemistry",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a pgstat works",
      "Presentation on how to troubleshoot electrochemical systems"
    ],
    website: "https://www.ifw-dresden.de/news-events/scientific-events/summer-school-spectroelectrochemistry"
  },
  {
    date: "05–08/05/2013",
    name: "nanoGe – HOPV13",
    where: "Seville (ES)",
    what: "Conference",
    role: "Metrohm Autolab",
    contribution: "",
    website: "https://www.nanoge.org/HOPV13/home"
  },
  {
    date: "17–18/01/2013",
    name: "Electrochemistry winter school",
    where: "Bath (UK)",
    what: "Winter school",
    role: "Metrohm Autolab",
    contribution: [
      "Presentation on how a pgstat works",
      "Presentation on how to troubleshoot electrochemical systems"
    ],
    website: ""
  },
  {
    date: "09–14/10/2011",
    name: "220th ECS meeting",
    where: "Boston (MA)",
    what: "Conference",
    role: "TU Delft Ph.D.",
    contribution: [
      "Presentation: An Electrochemical Study of High Voltage Cathode Materials in Contact with Mixtures of Ionic Liquid and Commercial Electrolyte. (Locati-B11-14580)",
      "Presentation: Development of an Electro Active Membrane for Lithium Recovery by Electrochemical Means. (Locati-G1-14750)"
    ],
    website: "https://www.electrochem.org/220"
  },
  {
    date: "19–21/10/2009",
    name: "SLONANO",
    where: "Ljubljana (Sl)",
    what: "Conference",
    role: "TU Delft Ph.D.",
    contribution: "",
    website: "https://www.fmf.uni-lj.si/en/news/news/24612/slonano-2009/"
  },
  {
    date: "02–03/02/2009",
    name: "Duthc Polymer Days",
    where: "Lunteren (NL)",
    what: "Conference",
    role: "",
    contribution: [
      "Presentation: Towards a model for CO<sub>2</sub> absorption into ionic liquids"
    ],
    website: "https://ptn.nu/about-dutch-polymer-days/"
  },
  {
    date: "09–11/06/2008",
    name: "ILED",
    where: "Rome (IT)",
    what: "Conference",
    role: "TU Delft Ph.D.",
    contribution: "",
    website: ""
  },
  {
    date: "18–23/06/2006",
    name: "IMLB (international meeting on Li-ion batteries)",
    where: "Biarritz (Fr)",
    what: "Conference",
    role: "TU Delft Ph.D.",
    contribution: "",
    website: "https://plus.cobiss.net/cobiss/adz/en/bib/3835418"
  }
];

const Conferences = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold text-green-700 mb-6 border-b border-green-500 pb-2">
        Conferences and Schools
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-sm">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-2 border border-gray-300 font-semibold">Date</th>
              <th className="p-2 border border-gray-300 font-semibold">Name</th>
              <th className="p-2 border border-gray-300 font-semibold">Where</th>
              <th className="p-2 border border-gray-300 font-semibold">What</th>
              <th className="p-2 border border-gray-300 font-semibold">Student or Employee</th>
              <th className="p-2 border border-gray-300 font-semibold">My Contributions</th>
              <th className="p-2 border border-gray-300 font-semibold">Website</th>
            </tr>
          </thead>
          <tbody>
            {conferenceData.map((conf, idx) => (
              <tr key={idx} className="even:bg-gray-100">
                <td className="p-2 border border-gray-300 font-semibold whitespace-nowrap">{conf.date}</td>
                <td className="p-2 border border-gray-300">{conf.name}</td>
                <td className="p-2 border border-gray-300">{conf.where}</td>
                <td className="p-2 border border-gray-300">{conf.what}</td>
                <td className="p-2 border border-gray-300">{conf.role}</td>
                <td className="p-2 border border-gray-300">
                  {Array.isArray(conf.contribution) ? (
                    <ul className="list-disc ml-5 space-y-1">
                      {conf.contribution.map((item, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/CO2/g, "CO<sub>2</sub>")
                              .replace(/O2/g, "O<sub>2</sub>")
                              .replace(/Li\+/, "Li<sup>+</sup>")
                          }}
                        />
                      ))}
                    </ul>
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: conf.contribution.replace(/CO2/g, "CO<sub>2</sub>")
                          .replace(/O2/g, "O<sub>2</sub>")
                          .replace(/Li\+/, "Li<sup>+</sup>")
                      }}
                    />
                  )}
                </td>
                <td className="p-2 border border-gray-300">
                  {conf.website ? (
                    <a
                      href={conf.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Link
                    </a>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Conferences;