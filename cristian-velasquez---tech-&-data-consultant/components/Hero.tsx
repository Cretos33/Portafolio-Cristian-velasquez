import React from 'react';
import { Database, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-90"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Consultoría Tecnológica Integral
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Innovación, Datos e <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Inteligencia Artificial
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Transformo organizaciones mediante <strong>Analítica Avanzada</strong>, soluciones de <strong>IA</strong> e implementación experta de <strong>ERP Odoo</strong>. Conectamos tecnología y estrategia de negocio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             {/* Decorative abstract cards */}
             <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    CV
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Cristian Velásquez</h3>
                    <p className="text-cyan-400 text-sm">Consultor Tech & Innovación</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg flex items-center gap-4 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider">Inteligencia Artificial</p>
                      <p className="text-white font-bold">Automatización & ML</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-lg flex items-center gap-4 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                      <Database size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider">Data Analytics</p>
                      <p className="text-white font-bold">Business Intelligence</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 p-4 rounded-lg flex items-center gap-4 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                      <Layers size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider">ERP Implementation</p>
                      <p className="text-white font-bold">Experto Odoo</p>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Background elements for depth */}
             <div className="absolute top-10 -right-10 w-full h-full bg-cyan-500/20 rounded-2xl -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;