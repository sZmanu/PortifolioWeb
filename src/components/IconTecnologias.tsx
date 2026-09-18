import type { Technology } from "../utils/TechnologiesData";

interface IconTecnologiasProps {
  technology: Technology;
}

function IconTecnologias({ technology }: IconTecnologiasProps) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#7b2bc7]/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] dark:hover:border-violet-400/40 md:h-14 md:w-14">
        <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="pointer-events-none absolute left-1 top-1 h-3 w-3 rounded-full bg-white/10 blur-sm" />
        <div className="pointer-events-none absolute inset-0 rounded-xl" />
        <img
          src={technology.src}
          alt={technology.name}
          className="relative z-10 h-full w-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:drop-shadow-[0_4px_10px_rgba(139,92,246,0.4)]"
        />
      </div>
      <span className="text-[10px] font-medium text-[#555] transition-colors duration-200 group-hover:text-[#7b2bc7] dark:text-white/40 dark:group-hover:text-violet-400 md:text-[11px]">
        {technology.name}
      </span>
    </div>
  );
}

export default IconTecnologias;