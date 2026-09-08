import { useEffect, useRef, useState } from "react";

type Tab = "educacao" | "experiencia";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  link?: { label: string; href: string };
}

const educacao: TimelineItem[] = [
  {
    year: "2025 — atual",
    title: "Faculdade Impacta",
    subtitle: "Sistemas de Informação",
    description:
      "Cursando graduação com foco em desenvolvimento de sistemas, banco de dados, engenharia de software e gestão de TI.",
  },
  {
    year: "2022 — 2025",
    title: "Fatec Itaquera",
    subtitle: "Desenvolvimento de Software Multiplataforma",
    description:
      "Graduação técnica com ênfase em desenvolvimento web, mobile e sistemas desktop. Projetos práticos com React, TypeScript e NestJS.",
  },
  {
    year: "2025 — 2026",
    title: "Generation Brasil",
    subtitle: "Bootcamp Full Stack",
    description:
      "Programa intensivo de formação em desenvolvimento Full Stack com metodologia ágil, foco em empregabilidade e projetos reais.",
  },
];

const experiencia: TimelineItem[] = [
  {
    year: "2024 — atual",
    title: "Estagiária Full Stack",
    subtitle: "Prefeitura de São Paulo — COPI/DPE",
    description:
      "Desenvolvimento e manutenção do sistema COPI/DPE, plataforma de gestão de afastamentos de servidores municipais. Atuação em frontend com React e TypeScript, documentação técnica e investigação de bugs.",
    link: { label: "Ver sistema", href: "#" },
  },
  {
    year: "2023 — 2024",
    title: "Freelancer Frontend",
    subtitle: "99Freelas",
    description:
      "Desenvolvimento de landing pages, sites institucionais e componentes React para clientes variados. Foco em responsividade e performance.",
    link: { label: "Ver perfil", href: "#" },
  },
];

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const row = rowRef.current;

    if (!row || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(row);
      },
      { threshold: 0.1, rootMargin: "0px 0px -5%" },
    );

    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      style={{
        transitionDelay: `${index * 150}ms`,
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      className={`relative grid grid-cols-1 gap-y-3 pb-10 pl-8 last:pb-0 mb-5 md:grid-cols-[minmax(0,1fr)_10rem_minmax(0,1fr)] md:gap-x-8 md:gap-y-0 md:pb-14 md:pl-0 motion-reduce:transition-none ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >

      {/* COLUNA ESQUERDA — título e subtítulo */}
      <div className="order-2 flex min-w-0 flex-col pt-0.5 md:order-none">
        <h3 className="text-[11px] font-bold leading-snug dark:text-white md:text-[19px] lg:text-[21px] text-[var(--color-text-dark)]">
          {item.title}
        </h3>
        <p className="mt-1 text-[12px] font-semibold dark:text-[var(--color-secondary)] md:text-[14px] lg:text-[15px] text-[var(--color-tertiary)]">
          {item.subtitle}
        </p>
        {item.link && (
          <a
            href={item.link.href}
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-purple-700/40 bg-purple-900/20 px-3 py-1.5 text-[11px] font-semibold text-purple-400 backdrop-blur-sm transition-all duration-200 hover:border-purple-500/60 hover:bg-purple-800/30 hover:text-purple-300"
          >
            {item.link.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>

      {/* COLUNA CENTRAL — ano + linha vertical + bolinha */}
      <div className="relative order-1 flex items-start gap-3 md:order-none">
        {/* Ano */}
        <span className="whitespace-nowrap pt-0.5 text-[13px] font-bold dark:text-white text-[var(--color-text-dark)] md:text-[15px] lg:text-[17px]">
          {item.year}
        </span>
        {/* Bolinha com glow */}
        <div className="absolute -left-7 top-0.5 flex h-3 w-3 shrink-0 items-center justify-center md:relative md:left-auto md:top-auto md:ml-auto md:mt-1 md:translate-x-1/2">
          <div className="absolute h-5 w-5 rounded-full bg-purple-600/30 blur-sm" />
          <div className="relative h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9),0_0_22px_rgba(168,85,247,0.45)]" />
        </div>
      </div>

      {/* COLUNA DIREITA — descrição */}
      <div className="order-3 min-w-0 pt-0.5 md:order-none">
        <p className="text-[12.5px] leading-relaxed dark:text-white/50 text-black/60 font-medium md:text-[14px] lg:text-[15px]">
          {item.description}
        </p>
      </div>

    </div>
  );
}

export default function TrajectorySection() {
  const [activeTab, setActiveTab] = useState<Tab>("educacao");

  const items = activeTab === "educacao" ? educacao : experiencia;

  return (
    <section className="px-8 pb-16 antialiased">
      {/* Título */}
      <div className="mb-15 text-center">
        <h2 className="xl:text-4xl font-black md:text-3xl text-lg dark:text-white text-[var(--color-text-dark)]">
          Minha{" "}
          <span className="dark:bg-[var(--color-secondary)] text-[var(--color-primary)] ml-2 bg-clip-text ">
            trajetória
          </span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="mb-20 flex justify-center">
        <div className="flex rounded-xl border border-purple-800/30 dark:bg-white/[0.03] p-1 bg-[var(--color-text-light)] backdrop-blur-md">
          {(
            [
              { key: "educacao", label: "Educação"},
              { key: "experiencia", label: "Experiência" },
            ] as { key: Tab; label: string; icon: string }[]
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 rounded-lg px-5 py-2 text-[12px] font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "dark:bg-[var(--color-secondary)] bg-[var(--color-quaternary)] text-white shadow-[0_0_20px_rgba(109,40,217,0.5)]"
                  : "text-purple-900/60 dark:text-white/30 dark:hover:text-white/70 hover:text-purple-900/90"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1 left-2.5 top-2.5 w-px bg-gradient-to-b from-purple-400/15 via-purple-500/50 to-purple-500/90 md:left-[calc(50%+5rem)]"
        />
        <div className="relative flex flex-col">
          {items.map((item, index) => (
            <TimelineRow key={`${activeTab}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
