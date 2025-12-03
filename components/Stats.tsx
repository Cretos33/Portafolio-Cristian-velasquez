import React from 'react';
import { TrendingUp, Settings, DollarSign, CheckCircle } from 'lucide-react';
import { StatItem } from '../types';
import { motion } from 'framer-motion';

const stats: StatItem[] = [
  {
    percentage: "+40%",
    description: "Aumento de productividad mediante automatización con IA y Odoo.",
    icon: TrendingUp
  },
  {
    percentage: "100%",
    description: "Trazabilidad de datos e integración de procesos empresariales.",
    icon: CheckCircle
  },
  {
    percentage: "3X",
    description: "Retorno de inversión (ROI) promedio en proyectos de analítica de datos.",
    icon: DollarSign
  }
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/30 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impacto Real</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            La implementación correcta de tecnología no es un gasto, es el motor de crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700 group-hover:bg-cyan-900/50 text-cyan-400 mb-6 transition-colors">
                <stat.icon size={32} />
              </div>
              <div className="relative inline-block">
                 <span className="text-5xl md:text-6xl font-black text-white tracking-tighter block mb-4">
                    {stat.percentage}
                 </span>
                 <svg className="absolute top-0 left-0 w-full h-full -rotate-90 opacity-20" viewBox="0 0 36 36">
                    <path
                        className="stroke-cyan-500 fill-none"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                 </svg>
              </div>
              <p className="text-slate-300 font-medium leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;