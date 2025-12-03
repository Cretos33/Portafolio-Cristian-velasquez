import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          ¡Conversemos!
        </h2>
        <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
          Estaré feliz de trabajar contigo. Llevemos tu empresa al siguiente nivel mediante la inteligencia de datos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          
          {/* Phone */}
          <div className="flex flex-col items-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:-translate-y-2">
            <div className="p-4 bg-slate-800 rounded-full mb-6 group-hover:bg-cyan-500 transition-colors">
              <Phone className="h-8 w-8 text-cyan-400 group-hover:text-white" />
            </div>
            <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Llámame</p>
            <p className="text-lg md:text-xl font-bold">+57 318 291 7644</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:-translate-y-2">
            <div className="p-4 bg-slate-800 rounded-full mb-6 group-hover:bg-cyan-500 transition-colors">
              <Mail className="h-8 w-8 text-cyan-400 group-hover:text-white" />
            </div>
            <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Escríbeme</p>
            <a href="mailto:cristianvelasquez0405@gmail.com" className="text-lg md:text-xl font-bold hover:text-cyan-400 transition-colors break-all">
              cristianvelasquez0405@gmail.com
            </a>
          </div>

        </div>
        
        <div className="flex justify-center">
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors transform hover:scale-110 shadow-lg shadow-blue-600/20">
                <Linkedin className="h-8 w-8 text-white" />
             </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;