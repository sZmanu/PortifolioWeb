interface Education {
  period: string;
  institution: string;
  course: string;
}

const educationData: Education[] = [
  {
    period: "2022 — 2025",
    institution: "Fatec Itaquera",
    course: "Des. de Software Multiplataforma",
  },
  {
    period: "2025 — 2026",
    institution: "Generation Brasil",
    course: "Desenvolvedor Full Stack",
  },
  {
    period: "2023 — 2024",
    institution: "Fatec Itaquera",
    course: "Desenvolvimento de software",
  },
  {
    period: "2022 — 2023",
    institution: "Fatec Itaquera",
    course: "Desenvolvimento de software",
  },
];

function EducationCard({ period, institution, course }: Education) {
  return (
    <div className="w-1/3 overflow-hidden rounded-xl border border-purple-800/30 bg-white/[0.04] p-4 pl-5 backdrop-blur-lg transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_24px_rgba(139,92,246,0.2)]">
      {/* Barra lateral em gradiente */}
      <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl bg-gradient-to-b from-purple-700 via-purple-500 to-fuchsia-500 dark:from-violet-700 dark:via-purple-500 dark:to-fuchsia-500" />

      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-purple-500">
        {period}
      </p>
      <p className="mb-0.5 text-[13px] font-bold text-white">{institution}</p>
      <p className="text-[11px] text-white/40">{course}</p>
    </div>
  );
}

export default function EducationSection() {
  return (
    
      <div className=" gap-3 flex-wrap flex flex-row">
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
   
  );
}
