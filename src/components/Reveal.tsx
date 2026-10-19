import { useLayoutEffect, useRef, type CSSProperties, type HTMLAttributes } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "rise" | "left" | "right" | "zoom" | "tilt";
  delay?: number;
};


export default function Reveal({ variant = "rise", delay = 0, className = "", style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const reveal = () => {
      element.classList.remove("reveal-pending");
      observer.disconnect();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) reveal();
    }, { threshold: 0.08, rootMargin: "0px 0px -24px" });
    element.classList.add("reveal-pending");
    observer.observe(element);
    const handleMotion = () => { if (motion.matches) reveal(); };
    motion.addEventListener("change", handleMotion);
    element.addEventListener("focusin", reveal);
    return () => {
      observer.disconnect();
      element.classList.remove("reveal-pending");
      motion.removeEventListener("change", handleMotion);
      element.removeEventListener("focusin", reveal);
    };
  }, []);

  return <div ref={ref} data-reveal={variant} className={`reveal ${className}`}
    style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties} {...props} />;
}
