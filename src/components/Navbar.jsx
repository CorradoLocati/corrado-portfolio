import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work Experience', path: '/workexperience' },
  { name: 'Education', path: '/education' },
  { name: 'R&D', path: '/RnD' },
  { name: 'Data Analysis', path: '/dataanalysis' }, 
  { name: 'Trainings', path: '/trainings' },
  { name: 'Skills', path: '/skills' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'Contacts', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
		  to="/"
		  className="text-xl font-bold text-green-700 hover:underline hover:text-green-800 transition"
        >
  Corrado Locati
</Link>
        <div className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium hover:text-green-700 transition-colors ${
                location.pathname === item.path
                  ? 'text-green-700 underline'
                  : 'text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
