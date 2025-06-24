import React from 'react';
import { Download } from 'lucide-react';

const downloads = [
  {
    label: 'Curriculum Vitae (EN)',
    filename: 'Corrado Locati - CV.pdf',
  },
  {
    label: 'PhD Thesis – Chemical engineering (EN)',
    filename: 'CORRADO-LOCATI-PhD-thesis-JPG.pdf',
  },
  {
    label: "Master's Thesis – Micro and Nanotechnology (EN)",
    filename: 'report_pavia.pdf',
  },
  {
    label: "Master's Thesis – Material Science (IT)",
    filename: 'Material Science Thesis.pdf',
  },
];

const Downloads = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-customGray px-6 py-20 text-gray-800">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 border-b-2 border-green-500 pb-2 text-center">
          Downloads
        </h2>

        <ul className="space-y-4 mt-8">
          {downloads.map((doc, index) => (
            <li key={index}>
              <a
                href={`/assets/${doc.filename}`}
                download
                className="flex items-center justify-between bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition"
              >
                {doc.label}
                <Download size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Downloads;
