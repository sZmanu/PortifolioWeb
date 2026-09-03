interface IconTecnologiasProps {
  src: string;
  alt: string;
}

function IconTecnologias({ src, alt }: IconTecnologiasProps) {
  return (
    <div className="group relative flex w-17 h-17 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-purple-400/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]">
      
      {/* Brilho interno no topo (efeito glass) */}
      <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Reflexo glass no canto superior esquerdo */}
      <div className="pointer-events-none absolute left-1 top-1 h-4 w-4 rounded-full bg-white/10 blur-sm" />

      {/* Glow roxo no hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-purple-900/10 via-transparent to-fuchsia-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <img
        src={src}
        alt={alt}
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(139,92,246,0.4)]"
      />
      
    </div>
  );
}

export default IconTecnologias;
