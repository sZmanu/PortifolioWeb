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
    <div className="relative flex w-full max-w-6xl items-center gap-1 sm:gap-4 min-[1800px]:max-w-[1728px]">
      <button onClick={onPrevious} disabled={isAtStart} aria-label="Projeto anterior" className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-light)] text-white transition-colors hover:bg-[var(--color-tertiary)] disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12">
        <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="flex-1 overflow-hidden py-10">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * cardWidthPercent}%)` }}>
          {projects.map((project, projectIndex) => (
            <div key={`${project.title}-${projectIndex}`} className="box-border shrink-0 px-1 sm:px-5" style={{ width: `${cardWidthPercent}%` }}>
              <CardProject project={project} onSelect={onSelect} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={onNext} disabled={isAtEnd} aria-label="Próximo projeto" className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-light)] text-white transition-colors hover:bg-[var(--color-tertiary)] disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12">
        <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}