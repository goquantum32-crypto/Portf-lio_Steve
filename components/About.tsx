import React from 'react';
import { User, Target, GraduationCap } from 'lucide-react';
import { PROFILE_DATA, EDUCATION_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Profile */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Perfil Profissional</h3>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {PROFILE_DATA.about.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Objective */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Objetivo</h3>
              </div>
              <p className="text-slate-600">
                {PROFILE_DATA.objective}
              </p>
            </div>

            {/* Education List */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Formação Académica</h3>
              </div>
              
              <div className="space-y-8">
                {EDUCATION_DATA.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-slate-200 last:border-l-0 last:pb-0">
                    {/* Dot on Timeline */}
                    <div className="absolute top-0 left-[-7px] w-3 h-3 rounded-full bg-purple-500 ring-4 ring-white"></div>
                    
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg leading-tight">{edu.degree}</h4>
                      <p className="text-primary-600 font-medium mt-1">{edu.institution}</p>
                      <p className="text-slate-500 text-sm mt-1 mb-2 bg-slate-100 inline-block px-2 py-0.5 rounded">{edu.period}</p>
                      <ul className="mt-2 space-y-1">
                        {edu.details.map((detail, idx) => (
                           <li key={idx} className="text-sm text-slate-600 flex items-start">
                             <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                             {detail}
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;