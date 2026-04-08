import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Acting Programs', href: '#' },
    { name: 'Workshops', href: '#' },
    { name: 'Alumni', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-1 bg-gray-50 rounded-xl group-hover:bg-yellow-50 transition-colors">
              <img src={logo} alt="Kapila Logo" className="h-10 w-auto object-contain" /> 
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-gray-900 font-black text-xl tracking-tight">
                Kapila
              </span>
              <span className="text-yellow-600 text-[9px] font-bold tracking-[0.15em] uppercase">
                Acting School • Kochi
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-100">
              <button className="bg-gray-900 hover:bg-yellow-500 text-white hover:text-black font-bold py-2.5 px-7 rounded-full transition-all duration-300 uppercase text-[11px] tracking-widest shadow-lg shadow-gray-200 hover:shadow-yellow-200">
                Join Audition
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-gray-50 text-gray-900 hover:bg-yellow-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
          <div className="px-6 py-8 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-bold text-gray-800 hover:text-yellow-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-yellow-400 text-black font-black py-4 rounded-2xl uppercase tracking-widest shadow-xl shadow-yellow-100">
                Join Audition
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;