import { useState, useEffect, useCallback } from "react";
import { getProjectsData } from "../utils/ProjectsData";

function getCardsPerView(): number {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width < 640) return 1;   // mobile
    if (width < 1024) return 2;  // tablet
    return 3;                    // desktop
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
    const projects = getProjectsData();
    const cardsPerView = useCardsPerView();
    const [index, setIndex] = useState<number>(0);
    const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});


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

    const cardWidthPercent = 100 / cardsPerView;
    const isAtStart = index === 0;
    const isAtEnd = index === maxIndex;

    return (
        <section className="min-h-svh flex items-center justify-center bg-[#f1e5ff] dark:bg-[var(--color-bg-dark)] px-4 py-10">
            <div className="relative w-full max-w-6xl flex items-center gap-2 sm:gap-4">
                <button
                    onClick={handlePrev}
                    disabled={isAtStart}
                    aria-label="Projeto anterior"
                    className="shrink-0 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-text-light)] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-tertiary)] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="overflow-hidden flex-1 py-10">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{  transform: `translateX(-${index * cardWidthPercent}%)`,  }}>
    {projects.map((project, i) => (
        <div
            key={i}
            className="flex-shrink-0 px-5 box-border"
            style={{ width: `${cardWidthPercent}%` }}
        >
            <div className="rounded-lg shadow-xl/20 h-full border border-[var(--color-border)] transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-1">

                <div className="card-body">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-50 rounded-t-lg object-cover"
                    />

                    <div
                        className="relative overflow-hidden p-6"
                        onMouseMove={(e) => {
                            const rect =
                                e.currentTarget.getBoundingClientRect();

                            e.currentTarget.style.setProperty(
                                "--mouse-x",
                                `${e.clientX - rect.left}px`
                            );

                            e.currentTarget.style.setProperty(
                                "--mouse-y",
                                `${e.clientY - rect.top}px`
                            );
                        }}
                        style={{
                            background: `
                                radial-gradient(
                                    250px circle at var(--mouse-x) var(--mouse-y),
                                    var(--color-card-glow),
                                    transparent 70%
                                )
                            `,
                        }}
                    >
                        <h5 className="mb-2 font-semibold text-lg dark:text-[var(--color-bg-ligth)] ">
                            {project.title}
                        </h5>

                        <p className="card-text">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech, ti) => (
                                <span
                                    key={ti}
                                    className="bg-[var(--color-secondary)] text-white text-xs px-2 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-[var(--color-secondary)] border border-[var(--color-secondary)] opacity-75 hover:bg-[var(--color-text-light)] transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 rounded-full"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    ))}
</div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={isAtEnd}
                    aria-label="Próximo projeto"
                    className="shrink-0 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-text-light)] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-tertiary)] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 rounded-full">
                        <path d="M9 18l6-6-6-6" />
                     </svg>
                </button>
            </div>
        </section>
    );
}