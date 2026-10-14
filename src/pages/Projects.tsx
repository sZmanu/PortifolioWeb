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

        <div className="flex justify-center mb-10 md:gap-3 mt-10">
            <ButtonTab title="Todos" onClick={() => handleTabClick(2)} isActive={activeTab === 2} > 
            
            </ButtonTab>
            <ButtonTab title="Web" onClick={() => handleTabClick(0)} isActive={activeTab === 0} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-5 w-5 sm:h-6 sm:w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>

            </ButtonTab>
            <ButtonTab title="Mobile" onClick={() => handleTabClick(1)} isActive={activeTab === 1} >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
                </svg>
            </ButtonTab>
            
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
