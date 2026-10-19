import Reveal from "./Reveal";
import { CardProject, type Project } from "./CardProject";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

interface ProjectCarouselProps {
  projects: Project[];
  index: number;
  cardWidthPercent: number;
  isAtStart: boolean;
  isAtEnd: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (project: Project) => void;
}

export default function ProjectCarousel({
  projects,
  index,
  cardWidthPercent,
  isAtStart,
  isAtEnd,
  onPrevious,
  onNext,
  onSelect,
}: ProjectCarouselProps) {
  return (
    <div role="region" aria-roledescription="carrossel" aria-label="Projetos" className="relative flex w-full max-w-6xl items-center gap-1 sm:gap-4 min-[1800px]:max-w-[1728px]">
      <button onClick={() => { if (!isAtStart) onPrevious(); }} aria-disabled={isAtStart} aria-label="Projeto anterior" className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-light)] text-white transition-colors hover:bg-[var(--color-tertiary)] aria-disabled:cursor-not-allowed aria-disabled:opacity-40 sm:h-12 sm:w-12">
        <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="flex-1 overflow-hidden py-10">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * cardWidthPercent}%)` }}>
          {projects.map((project, projectIndex) => (
            <Reveal variant="rise" delay={Math.max(0, projectIndex - index) * 90} key={`${project.title}-${projectIndex}`} inert={projectIndex < index || projectIndex >= index + Math.round(100 / cardWidthPercent)} role="group" aria-roledescription="slide" aria-label={`${projectIndex + 1} de ${projects.length}`} className="box-border shrink-0 px-1 sm:px-5" style={{ width: `${cardWidthPercent}%` }}>
              <CardProject project={project} onSelect={onSelect} />
            </Reveal>
          ))}
        </div>
      </div>

      <p className="sr-only" role="status">Projetos {index + 1} a {Math.min(projects.length, index + Math.round(100 / cardWidthPercent))} de {projects.length}</p>

      <button onClick={() => { if (!isAtEnd) onNext(); }} aria-disabled={isAtEnd} aria-label="Próximo projeto" className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-light)] text-white transition-colors hover:bg-[var(--color-tertiary)] aria-disabled:cursor-not-allowed aria-disabled:opacity-40 sm:h-12 sm:w-12">
        <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}
