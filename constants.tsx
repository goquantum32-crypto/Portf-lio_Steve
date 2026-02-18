import React from 'react';
import { ExperienceItem, SkillCategory, EducationItem, ContactInfo } from './types';
import { Car, Wrench, Package, Briefcase, Database, Terminal, FileText, Users, Clock, ShieldCheck } from 'lucide-react';

export const PROFILE_DATA = {
  name: "Estevão Sitefane",
  role: "Tecnologia • Administração • Serviços",
  headline: "Licenciado em Administração de Sistemas de Informação e Redes",
  // IMPORTANTE: Salve a sua foto na pasta do projeto com o nome "foto-perfil.png"
  profileImagePlaceholder: "./foto-perfil.png", 
  about: `Sou finalista da Licenciatura em Administração de Sistemas de Informação e Redes, com experiência prática em tecnologia, serviços, logística e atendimento ao cliente.
  
  Possuo forte capacidade de adaptação, disciplina no trabalho e facilidade em aprender rapidamente novas ferramentas e sistemas. Ao longo da minha trajetória, desenvolvi competências tanto na área tecnológica quanto em atividades operacionais, gestão de pequenos negócios e suporte ao cliente.
  
  Procuro uma oportunidade profissional onde possa aplicar os meus conhecimentos em tecnologia, organização de dados, suporte administrativo e gestão de processos, contribuindo para a eficiência e crescimento da organização.`,
  
  objective: "Desenvolver carreira na área administrativa, tecnológica ou logística, contribuindo com profissionalismo, dedicação e competências digitais para o crescimento da organização."
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Motorista Parceiro",
    company: "Yango",
    icon: 'car',
    description: [
      "Transporte seguro de clientes",
      "Gestão de rotas e tempo",
      "Atendimento ao cliente",
      "Uso de plataformas digitais",
      "Gestão de pagamentos"
    ],
    skills: ["Comunicação", "Responsabilidade", "Gestão de Tempo", "Resolução de Problemas"]
  },
  {
    role: "Assistente de Mecânica",
    company: "Oficina Automóvel",
    icon: 'wrench',
    description: [
      "Apoio em manutenção e reparação de veículos",
      "Identificação de problemas mecânicos",
      "Organização de ferramentas",
      "Apoio em diagnóstico de avarias"
    ],
    skills: ["Trabalho Técnico", "Disciplina", "Atenção aos Detalhes", "Trabalho em Equipa"]
  },
  {
    role: "Proprietário",
    company: "Mini Car Wash",
    icon: 'briefcase',
    description: [
      "Gestão do negócio",
      "Atendimento ao cliente",
      "Lavagem e manutenção de veículos",
      "Controlo financeiro básico",
      "Organização do espaço"
    ],
    skills: ["Empreendedorismo", "Gestão de Clientes", "Responsabilidade Financeira", "Liderança"]
  },
  {
    role: "Entregador / Estafeta",
    company: "Serviços de Entrega",
    icon: 'box',
    description: [
      "Entrega de encomendas",
      "Planeamento de rotas",
      "Comunicação com clientes",
      "Cumprimento de prazos"
    ],
    skills: ["Responsabilidade", "Gestão de Tempo", "Orientação ao Cliente", "Trabalho sob Pressão"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Licenciatura em Administração de Sistemas de Informação e Redes",
    institution: "Universidade São Tomás de Moçambique",
    period: "2022 – Finalista (em fase de conclusão)",
    details: [
      "Gestão e organização de dados",
      "Suporte em redes informáticas",
      "Introdução à programação (Python e SQL)",
      "Planeamento de sistemas de informação",
      "Segurança e organização digital"
    ]
  },
  {
    degree: "Curso de Gestão de Recursos Humanos",
    institution: "Elton Professional Training Centre",
    period: "Dez. 2023",
    details: [
      "Recrutamento e seleção de pessoal",
      "Processos administrativos de RH",
      "Gestão de equipas e liderança",
      "Noções de legislação laboral"
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Tecnológicas",
    items: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Digitação Rápida", "Bases de Dados (Básico)", "Python (Básico)", "SQL (Básico)"]
  },
  {
    title: "Administrativas & RH",
    items: ["Organização Documental", "Gestão de Processos", "Atendimento ao Cliente", "Recrutamento e Seleção", "Controlo Básico Financeiro"]
  },
  {
    title: "Pessoais",
    items: ["Disciplina e Pontualidade", "Aprendizagem Rápida", "Trabalho em Equipa", "Comunicação Eficaz", "Resolução de Problemas"]
  }
];

export const LANGUAGES = [
  { name: "Português", level: "Fluente" },
  { name: "Changana", level: "Fluente" },
  { name: "Inglês", level: "Básico" }
];

export const CONTACT_INFO: ContactInfo = {
  location: "Matola — Maputo",
  phone: ["+258 860 675 792", "+258 840 104 892"],
  email: "estevaostefane02@gmail.com"
};