import { useState, useEffect, useCallback } from "react";
import { type Project } from "../components/CardProject";
import { getProjectsData } from "../utils/ProjectsData";
import ModalCard from "../components/ModalCard";
import Background2 from "../components/Background2";
import ProjectCarousel from "../components/ProjectCarousel";
import ButtonTab from "../components/ButtonTab";

function getCardsPerView(): number {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width < 640) return 1;   // mobile
    if (width < 1024) return 2;  // tablet
    if (width < 1800) return 3;  // desktop
    return 4;                    // telas grandes
}

function useCardsPerView(): number {
    const [cardsPerView, setCardsPerView] = useState<number>(getCardsPerView);

    useEffect(() => {
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
    const [projectsSelected, setProjectsSelected] = useState<Project[]>(projects);
    const cardsPerView = useCardsPerView();
    const [activeTab, setActiveTab] = useState<number>(2);
    const [index, setIndex] = useState<number>(0);
    const maxIndex = Math.max(0, projectsSelected.length - cardsPerView);

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

    const visibleIndex = Math.min(index, maxIndex);
    const cardWidthPercent = 100 / cardsPerView;
    const isAtStart = visibleIndex === 0;
    const isAtEnd = visibleIndex === maxIndex;

    function handleTabClick(tabIndex: number) {
        setIndex(0);
        // Lógica para filtrar os projetos com base na aba selecionada
        if (tabIndex === 0) {
            setProjectsSelected(projects.filter(project => project.tipo === "web"));
            setActiveTab(0);
        }
        else if (tabIndex === 1) {
            setProjectsSelected(projects.filter(project => project.tipo === "mobile"));
            setActiveTab(1);
        }
        else {
            setProjectsSelected(projects);
            setActiveTab(2);
        }
    }

    return (
        <Background2>
        <section id="projects" className="min-h-svh flex items-center justify-center flex-col px-2 py-10 sm:px-4">
            <div data-scroll-reveal className="flex w-full flex-col items-center">
            <div className="mb-8 text-center">
        <h2 className="text-2xl font-black tracking-tight text-[#9157c7] dark:text-white md:text-3xl lg:text-4xl">
          Meus{" "}
          <span className="bg-gradient-to-r dark:from-violet-300 dark:via-violet-500 dark:to-violet-700 from-[#9157c7] via-[#632ea0] to-[#3f0c7a] bg-clip-text text-transparent">
            projetos
          </span>
        </h2>
      </div>

        <div className="flex justify-center mb-10 gap-3 mt-10">
            <ButtonTab title="Todos" onClick={() => handleTabClick(2)} isActive={activeTab === 2} />
            <ButtonTab title="Web" onClick={() => handleTabClick(0)} isActive={activeTab === 0} />
            <ButtonTab title="Mobile" onClick={() => handleTabClick(1)} isActive={activeTab === 1} />
            
        </div>
            
            <ProjectCarousel
                projects={projectsSelected}
                index={visibleIndex}
                cardWidthPercent={cardWidthPercent}
                isAtStart={isAtStart}
                isAtEnd={isAtEnd}
                onPrevious={handlePrev}
                onNext={handleNext}
                onSelect={setProjetoSelecionado}
            />

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
