import type { Service } from "../utils/ServicesData";

interface CardServiceProps {
  service: Service;
}

export default function CardService({ service }: CardServiceProps) {
  return (
    <div className="group relative w-full max-w-[18rem] overflow-hidden rounded-xl border border-[#7b2bc7]/60 bg-white/5 p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#7b2bc7]/80 hover:shadow-[0_0_32px_rgba(139,92,246,0.2)] dark:border-violet-800/25 dark:bg-white/[0.04] dark:hover:border-violet-500/45 sm:max-w-none sm:rounded-2xl sm:p-5">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 via-transparent to-fuchsia-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-violet-600/10" />
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent dark:via-violet-300/40" />

      <div className="relative z-10 mb-3 inline-flex items-center justify-center rounded-lg border border-[#7b2bc7]/60 bg-[#6e2fa8] p-2 text-[#ead4ff] backdrop-blur-sm transition-all duration-300 group-hover:border-[#7b2bc7]/30 group-hover:bg-[#7b2bc7]/80 group-hover:text-purple-300 dark:border-violet-700/30 dark:bg-violet-900/30 dark:text-violet-400 dark:group-hover:border-violet-500/50 dark:group-hover:bg-violet-800/40 dark:group-hover:text-violet-300 sm:mb-4 sm:rounded-xl sm:p-3">
        {service.icon}
      </div>

      <h3 className="relative z-10 mb-1 !text-[14px] leading-tight text-[#511d81] dark:text-white sm:mb-2 sm:!text-[14px] lg:!text-[16px] !font-semibold">
        {service.title}
      </h3>
      <p className="relative z-10 mt-2 text-[11px] leading-relaxed text-[#555] dark:text-white/45 md:text-[13px] sm:text-[12px]">
        {service.description}
      </p>
    </div>
  );
}