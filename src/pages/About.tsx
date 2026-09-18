export default function About() {


  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-4 bg-[#573178] dark:bg-[#1b0c33]"
    >
       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Layout: foto esquerda (só desktop) + conteúdo direita */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">

          {/* ── FOTO — somente desktop ── */}
          <div className="relative hidden lg:flex lg:w-[380px] lg:flex-shrink-0 lg:items-center lg:justify-center">

            {/* Anel decorativo externo */}
            <div className="absolute h-[340px] w-[340px] rounded-full border border-purple-300/50 dark:border-violet-500/20 animate-[spin_18s_linear_infinite]">
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-200 dark:bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
              <div className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple-100 dark:bg-violet-400 shadow-[0_0_8px_rgba(232,121,249,0.8)]" />
            </div>
            <div className="absolute h-[300px] w-[300px] rounded-full border border-purple-300/50 dark:border-violet-600/10 animate-[spin_26s_linear_infinite_reverse]" />

            {/* Foto com borda em gradiente */}
            <div className="relative h-[260px] w-[260px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 dark:from-violet-600 dark:via-violet-500 dark:to-violet-400 p-[2px] shadow-[0_0_60px_rgba(139,92,246,0.45)]">
                <div className="h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#140025] to-[#1e003a]">
                  {/* Substitua pelo seu <img> */}
                  
                  <img src="/fotoPerfilRoun.svg" alt="Manuella Oliveira" className="h-full w-full object-cover object-top" /> 
                </div>
              </div>
             
              </div>
          </div>

          {/* ── CONTEÚDO ── */}
          <div className="flex flex-1 flex-col justify-center">

            {/* Label */}
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400 dark:to-violet-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c28ffc] dark:text-violet-500">
                Sobre mim
              </span>
            </div>

            {/* Título */}
            <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight text-[#f7eeff] dark:text-white md:text-4xl">
              Transformando{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#f7eeff] via-[#c28ffc] to-[#8324d1] dark:from-violet-300 dark:via-violet-500 dark:to-violet-700 bg-clip-text text-transparent">
                  ideias 
                </span>
              </span>{" "}
              em{" "}
              <span className="bg-gradient-to-r from-[#f7eeff] via-[#c28ffc] to-[#8324d1] dark:from-violet-300 dark:via-violet-500 dark:to-violet-700 bg-clip-text text-transparent">
                código
              </span>
            </h2>

            {/* Texto */}
            <div className="mb-8 space-y-4">
              <p className="text-[13.5px] leading-relaxed text-[#d4d4d4] dark:text-white/60 md:text-[14.5px]">
                Olá! Sou a <span className="font-semibold text-purple-500 dark:text-violet-500">Manuella</span>, desenvolvedora Full Stack formada pela <span className="font-medium text-[#300e68] dark:text-white/80">Fatec Itaquera</span> e atualmente cursando Sistemas de Informação na Faculdade Impacta.
              </p>
              <p className="text-[13.5px] leading-relaxed text-[#d4d4d4] dark:text-white/60 md:text-[14.5px]">
                Tenho experiência no desenvolvimento de sistemas reais — atualmente trabalho como estagiária Full Stack na <span className="font-medium text-[#300e68] dark:text-white/80">Prefeitura de São Paulo</span>, onde construo e mantenho o sistema <span className="font-medium text-purple-400 dark:text-violet-400">COPI/DPE</span>, uma plataforma de gestão de afastamentos de servidores municipais.
              </p>
              <p className="text-[13.5px] leading-relaxed text-[#d4d4d4] dark:text-white/60 md:text-[14.5px]">
                Apaixonada por interfaces bem construídas, código limpo e experiências que fazem sentido para quem usa.
              </p>
            </div>  

          </div>
        </div>
      </div>
    </section>
  );
}
