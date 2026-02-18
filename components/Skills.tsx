import React from 'react';
import { SKILLS_DATA, LANGUAGES } from '../constants';
import { Monitor, Briefcase, UserCheck } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Competências</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tech Skills */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-blue-500">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">{SKILLS_DATA[0].title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA[0].items.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Admin Skills */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-green-500">
             <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-green-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">{SKILLS_DATA[1].title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA[1].items.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Skills */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-purple-500">
             <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-purple-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">{SKILLS_DATA[2].title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA[2].items.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm font-medium rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6 text-center">Idiomas</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="p-4 bg-slate-800 rounded-xl">
                <p className="font-bold text-lg mb-1">{lang.name}</p>
                <p className="text-slate-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;