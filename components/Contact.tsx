import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Copy, ExternalLink, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previne que abra o mailto se clicar no botão de copiar
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Contactos</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600">
            Estou disponível para novas oportunidades. Entre em contacto para marcar uma entrevista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Location */}
          <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl text-center border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Localização</h3>
            <p className="text-slate-600 leading-relaxed">{CONTACT_INFO.location}</p>
          </div>

          {/* Phone - Clickable Card */}
          <a 
             href={`tel:${CONTACT_INFO.phone[0].replace(/\s/g, '')}`}
             className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl text-center border border-slate-100 hover:shadow-lg transition-all duration-300 hover:border-green-200 group cursor-pointer"
          >
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Telefone</h3>
            <div className="flex flex-col gap-2">
              {CONTACT_INFO.phone.map((num, idx) => (
                <span key={idx} className="text-slate-600 group-hover:text-green-700 font-medium transition-colors">
                  {num}
                </span>
              ))}
            </div>
            <span className="mt-4 text-xs text-green-600 font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
              Ligar Agora
            </span>
          </a>

          {/* Email - Clickable with Copy Option */}
          <div className="relative flex flex-col items-center p-8 bg-slate-50 rounded-2xl text-center border border-slate-100 hover:shadow-lg transition-all duration-300 hover:border-purple-200 group">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Email</h3>
            <p className="text-slate-600 mb-6 break-all px-2">{CONTACT_INFO.email}</p>
            
            <div className="flex gap-2 w-full px-4">
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Send size={14} /> Enviar
              </a>
              <button 
                onClick={copyEmail}
                className="flex items-center justify-center p-2 bg-white border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                title="Copiar Email"
              >
                {copied ? <span className="text-green-600 font-bold text-xs">Copiado</span> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-slate-100 pt-8">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Estevão Sitefane. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;