import { useState, useEffect, useCallback } from "react";
import { CardProject, type Project } from "../components/CardProject";
import { ArrowLeftIcon } from "../components/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../components/icons/ArrowRightIcon";
import { getProjectsData } from "../utils/ProjectsData";
import ModalCard from "../components/ModalCard";
import Background2 from "../components/Background2";

function getCardsPerView(): number {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width < 640) return 1;   // mobile
    if (width < 1024) return 2;  // tablet
    if (width < 1800) return 3;  // desktop
    return 4;                    // telas grandes
}

function useCardsPerView(): number {
    const [cardsPerView, setCardsPerView] = useState<number>(3);

    useEffect(() => {
        setCardsPerView(getCardsPerView());

        const mobileQuery = window.matchMedia("(max-width: 639px)");
        const tabletQuery = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");

        const handleChange = () => setCardsPerView(getCardsPerView());

        mobileQuery.addEventListener("change", handleChange);
        tabletQuery.addEventListener("change", handleChange);
        window.addEventListener("resize", handleChange);

        return () => {
            mobileQuery.removeEventListener("change", handleChange);
            tabletQuery.removeEventListener("change", handleChange);
            window.removeEventListener("resize", handleChange);
        };
    }, []);

    return cardsPerView;
}


export default function ProjectsSlider() {
    const [projetoSelecionado, setProjetoSelecionado] = useState<Project | null>(null);
    const projects = getProjectsData();
    const cardsPerView = useCardsPerView();
    const [index, setIndex] = useState<number>(0);
    const maxIndex = Math.max(0, projects.length - cardsPerView);

    useEffect(() => {
        setIndex((prev) => Math.min(prev, Math.max(0, projects.length - cardsPerView)));
    }, [cardsPerView, projects.length]);

    const handleNext = useCallback(() => {
        setIndex((prev) => Math.min(prev + 1, maxIndex));
    }, [maxIndex]);

    const handlePrev = useCallback(() => {
        setIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const handleCloseModal = useCallback(() => {
        setProjetoSelecionado(null);
    }, []);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleCloseModal();
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [handleCloseModal]);

    const cardWidthPercent = 100 / cardsPerView;
    const isAtStart = index === 0;
    const isAtEnd = index === maxIndex;

    return (
        <Background2>
        <section className="min-h-svh flex items-center justify-center flex-col px-2 py-10 sm:px-4">
            <div data-scroll-reveal className="flex w-full flex-col items-center">
            <div className="mb-8 text-center">
        <h2 className="xl:text-4xl font-black md:text-3xl text-lg text-white">
          Meus{" "}
          <span className="bg-[var(--color-secondary)] ml-2 bg-clip-text text-transparent">
            projetos
          </span>
        </h2>
      </div>
            
            <div className="relative flex w-full max-w-6xl items-center gap-1 sm:gap-4 min-[1800px]:max-w-[1728px]">
                <button
                    onClick={handlePrev}
                    disabled={isAtStart}
                    aria-label="Projeto anterior"
                    className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-light)] text-white transition-colors hover:bg-[var(--color-tertiary)] disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                >
                    <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <div className="overflow-hidden flex-1 py-10">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{  transform: `translateX(-${index * cardWidthPercent}%)`,  }}>
    {projects.map((project) => (
        <div
            key={project.title}
            className="box-border shrink-0 px-1 sm:px-5"
            style={{ width: `${cardWidthPercent}%` }}
        >
            <CardProject project={project} onSelect={setProjetoSelecionado} />
        </div>
    ))}
</div>
                </div>
                <button
                    onClick={handleNext}
                    disabled={isAtEnd}
                    aria-label="Próximo projeto"
                    className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-light)] text-white transition-colors hover:bg-[var(--color-tertiary)] disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                >
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
            </div>

            </div>
            <ModalCard
                isOpen={projetoSelecionado !== null}
                project={projetoSelecionado}
                onClose={handleCloseModal}
            />
        </section>
        </Background2>
    );
}
