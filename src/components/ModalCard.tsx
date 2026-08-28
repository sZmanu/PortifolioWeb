import ButtonCode from "./ButtonCode";
import type { Project } from "./CardProject";

interface ModalCardProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}
function ModalCard({ isOpen, onClose, project }: ModalCardProps) {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black/50 p-4" role="presentation" onClick={onClose}>
            <div className="relative max-h-[calc(100svh-2rem)] m-10 w-full max-w-4xl overflow-y-auto overscroll-contain rounded-lg bg-white p-6 shadow-xl dark:bg-[var(--color-bg-dark)]" role="dialog" aria-modal="true" aria-labelledby="modal-project-title" onClick={(event) => event.stopPropagation()}>
                <button type="button" onClick={onClose} aria-label="Fechar modal" className="absolute right-4 top-3 text-2xl text-gray-600 hover:text-gray-900">
                    ×
                </button>
                
                <h2 id="modal-project-title" className="mb-2 md:text-2xl text-lg font-semibold text-[var(--color-bg-dark)] dark:text-[var(--color-bg-ligth)]">{project.title}</h2>
                {project.video && (
                    <video
                        controls
                        preload="metadata"
                        className="mb-4 w-full rounded-lg"
                    >
                        <source src={project.video} type="video/mp4" />
                        Seu navegador não suporta a reprodução de vídeo.
                    </video>
                )}
                    <div className=" rounded-lg p-4 dark:bg-[#f1e5ff0e] mt-13 bg-[#f1e5ff80]">
                <p className="md:text-[16px] lg:text-[16px] text-[#696969] text-[11px] dark:text-[#c6c6c6]">{project.description}</p>
                </div>
                <h2 className="dark:text-white text-[var(--color-bg-dark)] font-semibold mt-5 text-[12px] lg:text-xl md:text-[17px]">Tecnologias:</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology, index) => (
                            <img key={technology} src={technology} alt={`Tecnologia ${index + 1}`} className="h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-500 ease-in-out hover:-translate-y-2 " />
                        ))}
                    </div>
                    <div className="w-full flex justify-end">
                        <ButtonCode/>
                    </div>
                    
            </div>
        </div>
    )
}
export default ModalCard;
