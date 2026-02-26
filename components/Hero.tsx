import React, { useState, useRef, useEffect } from 'react';
import { Mail, ChevronDown, Camera, Terminal, Lock, X, Check } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(PROFILE_DATA.profileImagePlaceholder);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authCode, setAuthCode] = useState('');
  const [authError, setAuthError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch saved image on mount
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/profile-image');
        if (response.ok) {
          const data = await response.json();
          if (data.image) {
            setImageSrc(data.image);
          }
        }
      } catch (error) {
        console.error('Failed to fetch profile image:', error);
      }
    };
    fetchImage();
  }, []);

  const handleImageClick = () => {
    setShowAuthModal(true);
    setAuthCode('');
    setAuthError(false);
  };

  const verifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify the code (200402) - using trim to handle accidental whitespace
    if (authCode.trim() === "200402") {
      setShowAuthModal(false);
      // Trigger the hidden file input
      fileInputRef.current?.click();
    } else {
      setAuthError(true);
      setAuthCode('');
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        setImageSrc(base64Image);
        
        // Save to backend
        try {
          await fetch('/api/profile-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: base64Image }),
          });
        } catch (error) {
          console.error('Failed to save profile image:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    // Se não encontrar o elemento, deixa o link funcionar normalmente
  };

  return (
    <section id="home" className="relative bg-slate-950 pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      
      {/* Tech Background Pattern (Grid & Glows) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contactar-me
              </a>
              <a 
                href="#experience"
                onClick={(e) => handleScroll(e, '#experience')}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
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
                onClick={handleImageClick}
                title="Clique para alterar a foto (Requer Código)"
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
                  <span className="text-xs text-slate-400 mt-1">🔒 Requer Código</span>
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

      {/* Security Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-2 text-cyan-400">
                <Lock size={18} />
                <span className="font-bold tracking-wide text-sm uppercase">Acesso Restrito</span>
              </div>
              <button 
                onClick={() => setShowAuthModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={verifyCode} className="p-6">
              <p className="text-slate-400 text-sm mb-4">
                Esta área é protegida. Insira o código de administrador para carregar uma nova foto.
              </p>
              
              <div className="mb-4">
                <input
                  type="password"
                  value={authCode}
                  onChange={(e) => {
                    setAuthCode(e.target.value);
                    setAuthError(false);
                  }}
                  placeholder="Código PIN"
                  className={`w-full bg-slate-950 border ${authError ? 'border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20'} rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none focus:ring-2 transition-all font-mono tracking-widest text-center text-lg`}
                  autoFocus
                />
                {authError && (
                  <p className="text-red-500 text-xs mt-2 text-center font-medium animate-pulse">
                    ⛔ Código Incorreto. Tente novamente.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Check size={18} />
                Verificar Acesso
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;