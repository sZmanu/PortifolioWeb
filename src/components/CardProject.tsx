import type { MouseEvent } from "react";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

export type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
};

type CardProjectProps = { project: Project };

export function CardProject({ project }: CardProjectProps) {
    const updateGlowPosition = (event: MouseEvent<HTMLDivElement>) => {
        const { currentTarget, clientX, clientY } = event;
        const rect = currentTarget.getBoundingClientRect();

        currentTarget.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
        currentTarget.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
    };

    return (
        <article className="group h-full overflow-hidden rounded-lg bg-white  shadow-xl/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03]">
            <img src={project.image} alt={project.title} className="h-50 w-full object-cover" />

            <div className="relative overflow-hidden p-6" onMouseMove={updateGlowPosition}>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--color-card-glow), transparent 70%)" }}
                />

                <div className="relative">
                    <h5 className="mb-2 text-lg font-semibold dark:text-[var(--color-bg-ligth)]">{project.title}</h5>
                    <p className="card-text">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology, index) => (
                            <img key={technology} src={technology} alt={`Tecnologia ${index + 1}`} className="h-6 w-6 sm:h-8 sm:w-8" />
                        ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir projeto ${project.title}`} className="z-10 mt-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] opacity-75 transition-colors hover:bg-[var(--color-text-light)] sm:h-12 sm:w-12">
                        <ArrowRightIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </article>
    );
}
