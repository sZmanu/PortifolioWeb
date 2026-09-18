import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ButtonCode from "./ButtonCode";
import type { Project } from "./CardProject";

interface ModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

type MediaItem =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

function ModalCard({ isOpen, onClose, project }: ModalCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen || !project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  // Monta a lista de mídia: vídeo primeiro (se existir), depois as fotos
const mediaItems: MediaItem[] = [
  ...(project.video ? [{ type: "video" as const, src: project.video }] : []),
  ...(project.images ?? []).map((src) => ({ type: "image" as const, src })),
];

  const hasMedia = mediaItems.length > 0;
  const active = mediaItems[activeIndex];

  const prev = () =>
    setActiveIndex((i) => (i - 1 + mediaItems.length) % mediaItems.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % mediaItems.length);

  return createPortal(
    (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm md:p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="relative m-2 max-h-[calc(100svh-2rem)] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-2xl bg-white p-4 shadow-2xl dark:bg-[var(--color-bg-dark)] md:m-10 md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute right-4 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-xl text-gray-600 transition hover:bg-black/20 hover:text-gray-900 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20"
        >
          ×
        </button>

        {/* Título */}
        <h2
          id="modal-project-title"
          className="mb-4 text-lg font-semibold text-[var(--color-bg-dark)] dark:text-[var(--color-bg-ligth)] md:text-2xl"
        >
          {project.title}
        </h2>

        {/* ── GALERIA ── */}
        {hasMedia && (
          <div className="mb-4">
            {/* Visualizador principal */}
            <div className="relative flex max-h-[40svh] items-center justify-center overflow-hidden rounded-xl bg-black md:max-h-[50svh]">
              {active.type === "video" ? (
                <video
                  key={active.src}
                  controls
                  preload="metadata"
                  className="h-auto max-h-[35svh] w-auto max-w-full rounded-xl object-contain md:max-h-[50svh]"
                >
                  <source src={active.src} type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
              ) : (
                <img
                  key={active.src}
                  src={active.src}
                  alt={`Mídia ${activeIndex + 1}`}
                  className="max-h-[40svh] w-full rounded-xl object-contain md:max-h-[50svh]"
                />
              )}

              {/* Setas de navegação (só aparece se houver mais de 1 item) */}
              {mediaItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Próximo"
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Contador */}
              {mediaItems.length > 1 && (
                <span className="absolute bottom-2 right-3 rounded-full bg-black/50 px-2 py-0.5 text-[11px] text-white backdrop-blur-sm">
                  {activeIndex + 1} / {mediaItems.length}
                </span>
              )}
            </div>

            {/* Tira de thumbnails */}
            {mediaItems.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {mediaItems.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Ver mídia ${i + 1}`}
                    className={`relative h-10 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 md:h-16 md:w-24 ${
                      i === activeIndex
                        ? "dark:border-[#A489D1] border-purple-500 opacity-100 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="flex h-full w-full items-center justify-center bg-black">
                        {/* Ícone de play para vídeo */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-white/80"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={`Thumbnail ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Descrição */}
        <div className="mb-5 mt-2 rounded-lg bg-[#f1e5ff80] p-4 dark:bg-[#f1e5ff0e] mt-15">
          <p className="text-[11px] text-[#696969] dark:text-[#c6c6c6] md:text-[16px] lg:text-[16px]">
            {project.description}
          </p>
        </div>

        {/* Botão */}
        <div className="flex w-full justify-end">
          <ButtonCode />
        </div>
      </div>
    </div>
    ),
    document.body,
  );
}

export default ModalCard;
