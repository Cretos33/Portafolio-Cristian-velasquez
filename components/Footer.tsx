import React from 'react';
import { Database } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Database className="h-6 w-6 text-cyan-500" />
            <span className="text-xl font-bold text-white">
              DNA Data <span className="text-cyan-500 font-light">Consulting</span>
            </span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p className="mb-2">Cristian David Velasquez Rendon</p>
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;