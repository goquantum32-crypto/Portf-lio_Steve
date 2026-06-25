import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Meus Projetos</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg">
            Alguns dos projetos que desenvolvi recentemente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="group flex flex-col bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-primary-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <Code size={24} />
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-primary-600 transition-colors"
                  aria-label={`Visitar projeto ${project.title}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 flex-grow mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
