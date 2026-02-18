import React, { useState, useRef } from 'react';
import { Mail, ChevronDown, Camera, Terminal, Cpu } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(PROFILE_DATA.profileImagePlaceholder);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative bg-slate-950 pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      
      {/* Tech Background Pattern (Grid & Glows) */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-cyan-300 uppercase bg-slate-900/80 rounded-full border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Disponível para Trabalho
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              {PROFILE_DATA.name}
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Terminal size={20} className="text-cyan-400" />
              <p className="text-xl md:text-2xl text-slate-300 font-medium font-mono">
                {PROFILE_DATA.role}
              </p>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 border-l-2 border-cyan-500/50 pl-4">
              {PROFILE_DATA.about.split('\n')[0]}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contactar-me
              </a>
              <a 
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 rounded-lg transition-all"
              >
                Ver Experiência
                <ChevronDown className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              {/* Tech Circle Decoration */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-700 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-[-10px] rounded-full border border-cyan-500/20"></div>

              {/* Image Container with Click Handler */}
              <div 
                className="relative w-full h-full cursor-pointer rounded-full overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] border-4 border-slate-800 z-10 bg-slate-900"
                onClick={() => fileInputRef.current?.click()}
                title="Clique para alterar a foto"
              >
                <img 
                  src={imageSrc} 
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== "https://placehold.co/400x400/0f172a/22d3ee?text=Carregar+Foto") {
                         target.src = "https://placehold.co/400x400/0f172a/22d3ee?text=Carregar+Foto";
                    }
                  }}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-cyan-400">
                  <Camera size={32} className="mb-2" />
                  <span className="text-sm font-semibold tracking-wider uppercase">Alterar Foto</span>
                </div>
              </div>

              {/* Hidden File Input */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />

              <div className="absolute bottom-4 right-4 z-20 bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-lg flex items-center gap-2 pointer-events-none">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;