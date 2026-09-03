import type { MouseEvent } from "react";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

export interface Project {
  title: string;
  description: string;
  images?: string[];  // ← era image: string, vira images?: string[]
  video?: string;
  link: string;
  technologies: string[];
}

type CardProjectProps = {
    project: Project;
    onSelect: (project: Project) => void;
};

export function CardProject({ project, onSelect }: CardProjectProps) {
    const updateGlowPosition = (event: MouseEvent<HTMLDivElement>) => {
        const { currentTarget, clientX, clientY } = event;
        const rect = currentTarget.getBoundingClientRect();

        currentTarget.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
        currentTarget.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
    };
 
    return (
        <article className="group relative h-full overflow-hidden rounded-3xl bg-[#ffffff] shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] dark:bg-[var(--color-card)]">
            <div className="absolute left-[10px] top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-purple-100/20 p-2 opacity-70 backdrop-blur-md"><p className="font-bold text-white">1</p></div>
            <video
                src={project.video ?? project.images?.[0]}
                aria-label={`Vídeo de apresentação do projeto ${project.title}`}
                className="pointer-events-none h-40 w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="relative overflow-hidden px-5 py-2" onMouseMove={updateGlowPosition}>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--color-card-glow), transparent 70%)" }}
                />

                <div className="relative">
                    <h5 className="mb-2 sm:text-lg text-[14px] text-[var(--color-bg-dark)] font-semibold dark:text-[var(--color-bg-ligth)]">{project.title}</h5>
                    <p className="card-text line-clamp-3 md:text-[14px] text-[#2E2E2E] dark:text-[#D9D9D9] text-[11px]">
                        {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology, index) => (
                            <img key={technology} src={technology} alt={`Tecnologia ${index + 1}`} className="h-4 w-4 sm:h-5 sm:w-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                        ))}
                    </div>
                    {/* <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology, index) => (
                            <BadgeTecnologia key={technology} title="technology"/>
                        ))}
                    </div> */}
                    <div className="w-full flex justify-end"> 
                        <button type="button" onClick={() => onSelect(project)} aria-label={`Ver detalhes do projeto ${project.title}`} className="z-10 mt-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-secondary)] dark:text-[#ffffff] opacity-75 transition-colors dark:hover:bg-[var(--color-text-light)] hover:text-white hover:bg-[#271A3C] sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                            <ArrowRightIcon className="h-3 w-3 lg:h-4 lg:w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
