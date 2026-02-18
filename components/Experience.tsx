import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Car, Wrench, Package, Briefcase, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'car': return <Car size={20} />;
      case 'wrench': return <Wrench size={20} />;
      case 'box': return <Package size={20} />;
      default: return <Briefcase size={20} />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600">
            Histórico prático em diversos setores, demonstrando versatilidade e compromisso.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
                   <div className="w-2.5 h-2.5 bg-primary-500 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className={`bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600">
                        {getIcon(exp.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-primary-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <ul className="mt-4 space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-white text-slate-600 text-xs font-medium rounded border border-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty Space for Grid Layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;