import { ServicesData } from "../utils/ServicesData";
import getTechnologiesData from "../utils/TechnologiesData";
import CardService from "../components/CardService";
import IconTecnologias from "../components/IconTecnologias";
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden min-h-[90vh] py-20 px-4 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] flex flex-col justify-center"
    >

      {/* ── Luzes de fundo ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Halo externo difuso */}
        <div className="absolute bottom-24 -left-24 h-[560px] w-[160px] rounded-full  dark:bg-violet-600/40 blur-[70px] sm:bottom-40 sm:-left-52 sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />
        {/* Núcleo mais brilhante */}
        <div className="absolute bottom-24 -left-12 h-[440px] w-[100px] rounded-full  dark:bg-violet-500/70 blur-[45px] sm:bottom-62 sm:-left-30 sm:h-[280px] sm:w-[280px] sm:blur-[80px]" />

        <div className="absolute bottom-24 -right-24 h-[560px] w-[160px] rounded-full  dark:bg-violet-600/40 blur-[70px] sm:bottom-40 sm:-right-52 sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />
        {/* Núcleo mais brilhante */}
        <div className="absolute bottom-24 -right-12 h-[440px] w-[100px] rounded-full dark:bg-violet-500/70 blur-[45px] sm:bottom-62 sm:-right-30 sm:h-[280px] sm:w-[280px] sm:blur-[80px]" />
       
      </div>
      
      <div className="relative  mx-auto max-w-6xl">                         

        {/* Título */}
        <div className="mb-12 text-center">
         
          <h2 className="text-2xl font-black tracking-tight text-[#9157c7] dark:text-white md:text-3xl lg:text-4xl">
            Minhas{" "}
            <span className="bg-gradient-to-r dark:from-violet-300 dark:via-violet-500 dark:to-violet-700 from-[#9157c7] via-[#632ea0] to-[#3f0c7a] bg-clip-text text-transparent">
              habilidades
            </span>
          </h2>
        </div>

        {/* ── Cards de serviço ── */}
        <div className="mb-16 grid grid-cols-2 justify-items-stretch gap-2 sm:gap-4 lg:grid-cols-4">
          {ServicesData.map((service, i) => (
            <div
              key={i}
              className="group relative w-full max-w-[18rem] overflow-hidden rounded-xl border border-[#7b2bc7]/60 dark:border-violet-800/25 bg-white/5 p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#7b2bc7]/80 dark:hover:border-violet-500/45 hover:shadow-[0_0_32px_rgba(139,92,246,0.2)] dark:bg-white/[0.04] sm:max-w-none sm:rounded-2xl sm:p-5"
            >
              {/* Gradiente interno no hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 via-transparent to-fuchsia-600/5 dark:from-violet-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Brilho no topo */}
              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent dark:via-violet-300/40" />

              {/* Ícone */} 
              <div className="relative z-10 mb-3 inline-flex items-center justify-center rounded-lg border border-[#7b2bc7]/60 dark:border-violet-700/30 bg-[#6e2fa8] dark:bg-violet-900/30 p-2 text-[#ead4ff] dark:text-violet-400 backdrop-blur-sm transition-all duration-300 group-hover:border-[#7b2bc7]/30 dark:group-hover:border-violet-500/50 group-hover:bg-[#7b2bc7]/80 dark:group-hover:bg-violet-800/40 group-hover:text-purple-300 dark:group-hover:text-violet-300 sm:mb-4 sm:rounded-xl sm:p-3">
                {service.icon}
              </div>

              <h3 className="relative z-10 mb-1 !text-[14px] font-bold leading-tight text-[#511d81] dark:text-white sm:mb-2 sm:!text-[14px] lg:!text-[16px] !font-semibold">
                {service.title}
              </h3>
              <p className="relative z-10 text-[11px] md:text-[13px] mt-2 leading-relaxed text-[#555] dark:text-white/45 sm:text-[12px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Divisor ── */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-700/40 to-transparent dark:via-violet-700/40" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7b2bc7] dark:text-violet-500">
            Tech Stack
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7b2bc7]/40 to-transparent dark:via-violet-700/40" />
        </div>

        {/* ── Ícones de tecnologia ── */}
        <div className="flex flex-wrap items-center justify-center sm:gap-6 gap-3 md:gap-8">
          {getTechnologiesData().map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2"
            >
              {/* Ícone glass */}
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border dark:border-white/10 border-purple-800/10 dark:bg-white/5 bg-purple-800/5 p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#7b2bc7]/40 dark:hover:border-violet-400/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] md:h-14 md:w-14">
                {/* Brilho glass */}
                <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="pointer-events-none absolute left-1 top-1 h-3 w-3 rounded-full bg-white/10 blur-sm" /> 
                {/* Glow hover */}
                <div className="pointer-events-none absolute inset-0 rounded-xl  " />
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:drop-shadow-[0_4px_10px_rgba(139,92,246,0.4)]"
                />
              </div>
              {/* Label */}
              <span className="text-[10px] font-medium text-[#555] transition-colors duration-200 group-hover:text-[#7b2bc7] dark:group-hover:text-violet-400 dark:text-white/40 md:text-[11px]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
