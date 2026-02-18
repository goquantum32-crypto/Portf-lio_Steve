import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
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
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Localização</h3>
            <p className="text-slate-600">{CONTACT_INFO.location}</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Telefone</h3>
            <div className="flex flex-col gap-1">
              {CONTACT_INFO.phone.map((num, idx) => (
                <a key={idx} href={`tel:${num.replace(/\s/g, '')}`} className="text-slate-600 hover:text-primary-600 transition-colors">
                  {num}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl text-center hover:shadow-md transition-shadow group cursor-pointer" onClick={copyEmail}>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600 mb-2 break-all">{CONTACT_INFO.email}</p>
            <span className="text-xs text-primary-500 font-medium flex items-center">
              {copied ? 'Copiado!' : <span className="flex items-center"><Copy size={12} className="mr-1" /> Clique para copiar</span>}
            </span>
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