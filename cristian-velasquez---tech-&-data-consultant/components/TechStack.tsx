import React from 'react';
import { Database, Cloud, BarChart, Code, Cpu, Layers, AppWindow, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Odoo ERP', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-100' },
  { name: 'Python', icon: Code, color: 'text-blue-600', bg: 'bg-yellow-50' },
  { name: 'Power BI', icon: BarChart, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { name: 'Power Apps', icon: AppWindow, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Power Automate', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'TensorFlow / IA', icon: Cpu, color: 'text-orange-500', bg: 'bg-orange-100' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-500', bg: 'bg-blue-100' },
  { name: 'AWS Cloud', icon: Cloud, color: 'text-slate-700', bg: 'bg-slate-200' },
  { name: 'Looker Studio', icon: BarChart, color: 'text-blue-600', bg: 'bg-blue-50' },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-cyan-600 uppercase tracking-wide">Stack Tecnológico</h2>
          <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
            Tecnologías que Domino
          </h3>
          <p className="mt-4 text-slate-500">Soluciones robustas, escalables y orientadas al futuro.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`p-4 rounded-full ${tool.bg} ${tool.color} mb-4`}>
                <tool.icon size={32} />
              </div>
              <span className="font-semibold text-slate-700 text-center">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;