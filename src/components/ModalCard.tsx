import type { Project } from "./CardProject";

interface ModalCardProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}
function ModalCard({ isOpen, onClose, project }: ModalCardProps) {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="presentation" onClick={onClose}>
            <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl" role="dialog" aria-modal="true" aria-labelledby="modal-project-title" onClick={(event) => event.stopPropagation()}>
                <button type="button" onClick={onClose} aria-label="Fechar modal" className="absolute right-4 top-3 text-2xl text-gray-600 hover:text-gray-900">
                    ×
                </button>
                <h2 id="modal-project-title" className="mb-2 text-2xl font-semibold">{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </div>
    )
}
export default ModalCard;
