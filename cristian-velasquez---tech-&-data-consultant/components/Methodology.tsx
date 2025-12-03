import React from 'react';
import { Search, AlertTriangle, Lightbulb, PenTool, BarChart2, Layers, Cpu, Database, Settings } from 'lucide-react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    number: "01",
    title: "Diagnóstico Tecnológico",
    description: "Evaluamos tu infraestructura actual, flujo de datos y necesidades de ERP/IA.",
    icon: Search
  },
  {
    number: "02",
    title: "Estrategia & Diseño",
    description: "Diseñamos la arquitectura de la solución (Odoo, Data Warehouse, Modelos AI) a medida.",
    icon: Lightbulb
  },
  {
    number: "03",
    title: "Desarrollo e Implementación",
    description: "Configuración de Odoo, desarrollo de scripts Python y migración segura de datos.",
    icon: Settings
  },
  {
    number: "04",
    title: "Capacitación & Despliegue",
    description: "Entrenamiento a tu equipo y puesta en marcha (Go-Live) con soporte continuo.",
    icon: PenTool
  },
  {
    number: "05",
    title: "Analítica & Optimización",
    description: "Creación de dashboards de control y mejora continua basada en datos reales.",
    icon: BarChart2
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Metodología de Trabajo
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Un ciclo probado para la implementación exitosa de ERP e Inteligencia de Negocios.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 z-0"></div>

          <div className="space-y-12 lg:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} lg:gap-16 mb-0 lg:mb-24 last:mb-0`}>
                
                {/* Content Side */}
                <div className="w-full lg:w-5/12 text-center lg:text-left">
                   <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 border-cyan-500 hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                   </div>
                </div>

                {/* Center Icon/Number */}
                <div className="my-6 lg:my-0 w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-8 ring-white z-20">
                  <span className="sr-only">Paso</span>
                  {step.icon ? <step.icon size={28} /> : step.number}
                </div>

                {/* Empty Side for balance */}
                <div className="w-full lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* The Pyramid / Focus Areas */}
        <div className="mt-24 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">Áreas de Especialización</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-600 p-6 rounded-xl text-white transform hover:-translate-y-2 transition-transform">
                    <Database className="mb-4 h-8 w-8 text-blue-200" />
                    <h4 className="font-bold text-lg mb-2">Ingeniería de Datos</h4>
                    <p className="text-sm text-blue-100">ETL, Warehousing y estructuración de información corporativa.</p>
                </div>
                <div className="bg-purple-600 p-6 rounded-xl text-white transform hover:-translate-y-2 transition-transform">
                    <Layers className="mb-4 h-8 w-8 text-purple-200" />
                    <h4 className="font-bold text-lg mb-2">Implementación Odoo</h4>
                    <p className="text-sm text-purple-100">ERP a medida, CRM, Ventas, Inventario y Contabilidad.</p>
                </div>
                <div className="bg-cyan-500 p-6 rounded-xl text-white transform hover:-translate-y-2 transition-transform">
                    <Cpu className="mb-4 h-8 w-8 text-cyan-100" />
                    <h4 className="font-bold text-lg mb-2">Inteligencia Artificial</h4>
                    <p className="text-sm text-cyan-100">Automatización de procesos y machine learning aplicado.</p>
                </div>
                <div className="bg-emerald-500 p-6 rounded-xl text-white transform hover:-translate-y-2 transition-transform">
                    <BarChart2 className="mb-4 h-8 w-8 text-emerald-100" />
                    <h4 className="font-bold text-lg mb-2">Business Intelligence</h4>
                    <p className="text-sm text-emerald-100">Visualización de datos para decisiones estratégicas.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;