interface BadgeProps {
    title: string
}

function BadgeTecnologia ({title}: BadgeProps) {
    return(
        <div className="flex justify-center rounded-full border border-[var(--color-tertiary)] text-[var(--color-tertiary)] dark:border-[var(--color-text-light)] px-2 py-1 text-[8px] dark:text-[var(--color-text-light)]  hover:border-violet-400 hover:text-violet-400 hover:shadow-[0_0_12px_rgba(135, 110, 179, 0.7)] md:text-[8px] lg:text-[10px] xl:text-[11px]">
            <span>{title}</span>
        </div>
    )
}
export default BadgeTecnologia
