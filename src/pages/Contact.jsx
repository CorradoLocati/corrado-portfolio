import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-customGray px-6 py-20 text-gray-800">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 border-b-2 border-green-500 pb-2">
          Contact Me
        </h2>

        <p className="mb-6 text-justify">
          Feel free to reach out if you’d like to collaborate, have questions about my work, or just want to say hello.
        </p>

         <div className="flex justify-center space-x-8">
          <a
            href="mailto:corrado.locati@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail size={32} className="text-green-700 hover:text-green-900 transition" />
          </a>

          <a
            href="https://www.google.com/maps/place/Utrecht,+Netherlands"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
          >
            <MapPin size={32} className="text-green-700 hover:text-green-900 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/corradolocati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} className="text-green-700 hover:text-green-900 transition" />
          </a>

          <a
            href="https://github.com/CorradoLocati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={32} className="text-green-700 hover:text-green-900 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
