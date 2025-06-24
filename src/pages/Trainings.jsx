import React from "react";

const trainings = [
  {
    title: "Video Production for Marketing & Training",
    organization: "Metrohm Autolab",
    location: "Utrecht, NL",
    date: "12/2021",
    type: "Training",
  },
  {
    title: "Product Management Bootcamp",
    organization: "Tarigo",
    location: "Leeds, UK",
    date: "03/2021",
    type: "Training with certificate",
  },
  {
    title: "Voltammetry Basics",
    organization: "Metrohm AG",
    location: "Herisau, CH",
    date: "02/2018",
    type: "Training with certificate",
  },
  {
    title: "Teaching Course",
    organization: "Metrohm AG",
    location: "Herisau, CH",
    date: "07/2016",
    type: "Training with certificate",
  },
  {
    title: "Business Presentation Skills",
    organization: "Van Kessel Trainings",
    location: "Loosdrecht, NL",
    date: "01/2015",
    type: "Training with certificate",
  },
  {
    title: "Spectroelectrochemistry Summer School",
    organization: "IFW Leibniz Dresden",
    location: "Dresden, DE",
    date: "08/2013",
    type: "Training with certificate",
  },
  {
    title: "Electrochemistry Winter School",
    organization: "University of Bath",
    location: "Bath, UK",
    date: "01/2013",
    type: "Training with certificate",
  },
  {
    title: "Scientific Writing in English PROM4",
    organization: "TU Delft",
    location: "Delft, NL",
    date: "05/2009",
    type: "Training with certificate",
  },
];

const Trainings = () => {
  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-black">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-700 inline-block">
          Trainings & Certificates
        </h2>

        <p className="text-gray-700 text-md mb-8 text-justify">
          This is the list of training courses I attended, with the certificates I have received.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-400 text-sm">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-2 border border-gray-300 font-semibold whitespace-nowrap">Date</th>
                <th className="p-2 border border-gray-300 font-semibold">Title</th>
                <th className="p-2 border border-gray-300 font-semibold">Type</th>
                <th className="p-2 border border-gray-300 font-semibold">Organization</th>
                <th className="p-2 border border-gray-300 font-semibold">Location</th>
              </tr>
            </thead>
            <tbody>
              {trainings.map((item, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="p-2 border border-gray-300 whitespace-nowrap">{item.date}</td>
                  <td className="p-2 border border-gray-300">{item.title}</td>
                  <td className="p-2 border border-gray-300">{item.type}</td>
                  <td className="p-2 border border-gray-300">{item.organization}</td>
                  <td className="p-2 border border-gray-300">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
