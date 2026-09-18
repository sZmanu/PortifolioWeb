export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
} 

export const ServicesData: Service[] = [
  {
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
      </svg>
    ),
    title: "Frontend Development",
    description:
      "Criação de interfaces modernas, responsivas e performáticas com React, TypeScript e Tailwind CSS.",
  },
  {
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile Development",
    description:
      "Aplicativos iOS e Android com React Native e Expo, compartilhando código entre plataformas.",
  },
  {
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "API & Backend",
    description:
      "Desenvolvimento de APIs RESTful com NestJS, integração com bancos de dados e autenticação JWT.",
  },
  {
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 10h10M4 15h13M4 20h8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l2 2 4-4" />
      </svg>
    ),
    title: "Documentação Técnica",
    description:
      "Criação de documentação clara e estruturada para sistemas, APIs e processos de desenvolvimento.",
  },
];