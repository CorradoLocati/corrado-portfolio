import React from "react";
import { Routes, Route } from 'react-router-dom';

import AboutMe from "./pages/AboutMe";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";  
import Conferences from "./pages/Conferences";
import DataAnalysis from "./pages/DataAnalysis";
import Downloads from "./pages/Downloads";
import Education from "./pages/Education";
import Home from './pages/Home';
import Projects from "./pages/Projects"; 
import Publications from "./pages/Publications";
import RnD from "./pages/RnD";
import Skills from "./pages/Skills";
import Trainings from "./pages/Trainings";
import WorkExperience from "./pages/WorkExperience";
     
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/workexperience" element={<WorkExperience />} />
		<Route path="/education" element={<Education />} />
		<Route path="/skills" element={<Skills />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/downloads" element={<Downloads />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/dataanalysis" element={<DataAnalysis />} />
		<Route path="/rnd" element={<RnD />} />
      </Routes>
	  <Footer />
    </>
  );
};

export default App;

