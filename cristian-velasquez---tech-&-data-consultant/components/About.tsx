import React from 'react';
import { Target, Lightbulb, Code2, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-cyan-600 uppercase tracking-wide">Perfil Profesional</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ingeniería y Tecnología al servicio del negocio
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Consultor senior en innovación tecnológica, especializado en ecosistemas ERP y Ciencia de Datos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column - Redesigned for a cleaner, smaller look */}
          <div className="flex justify-center relative">
            <div className="relative w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 border-4 border-white ring-1 ring-slate-100 transform hover:scale-[1.02] transition-transform duration-500">
               {/* 
                  NOTA: Asegúrate de guardar tu foto como 'cristian-velasquez.png' 
                  en la carpeta 'public/' del proyecto.
               */}
               <img 
                 src="/cristian-velasquez.png" 
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                 }}
                 alt="Cristian Velásquez" 
                 className="object-cover w-full h-full"
               />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute top-1/2 -right-10 hidden lg:block">
                <div className="grid grid-cols-3 gap-2 opacity-20">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    ))}
                </div>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg text-slate-600"
            >
              <p>
                Soy <strong>Cristian Velásquez</strong>, consultor especializado en transformar empresas mediante la tecnología. Mi enfoque combina la estrategia comercial con la potencia de la <strong>Inteligencia Artificial</strong> y la estructuración de datos.
              </p>
              <p>
                Como experto en implementación de <strong>Odoo ERP</strong> y arquitecturas de datos, ayudo a las organizaciones a centralizar su información, automatizar procesos y predecir tendencias de mercado. Mi objetivo es claro: convertir la tecnología en rentabilidad medible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">ERP & Odoo</h4>
                  <p className="text-sm text-slate-600">Implementación, migración y parametrización experta.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 p-3 bg-cyan-50 rounded-lg text-cyan-600">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">IA & Machine Learning</h4>
                  <p className="text-sm text-slate-600">Modelos predictivos y automatización inteligente.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 p-3 bg-purple-50 rounded-lg text-purple-600">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Analítica de Datos</h4>
                  <p className="text-sm text-slate-600">Dashboards (PowerBI/Looker) para toma de decisiones.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 p-3 bg-orange-50 rounded-lg text-orange-600">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Innovación</h4>
                  <p className="text-sm text-slate-600">Transformación digital corporativa end-to-end.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;