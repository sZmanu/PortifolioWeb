import { useEffect, useRef, useState } from "react";

interface ProjectPreviewProps {
  video?: string;
  image?: string;
  title: string;
}

export default function ProjectPreview({ video, image, title }: ProjectPreviewProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || failed) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const updatePlayback = () => {
      if (visible && !document.hidden && !motion.matches) {
        void element.play().catch(() => { /* The poster stays visible if autoplay is blocked. */ });
      } else element.pause();
    };
    const observer = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.15 }) : null;
    if (observer) observer.observe(element);
    else { visible = true; updatePlayback(); }
    document.addEventListener("visibilitychange", updatePlayback);
    motion.addEventListener("change", updatePlayback);
    return () => {
      observer?.disconnect();
      element.pause();
      document.removeEventListener("visibilitychange", updatePlayback);
      motion.removeEventListener("change", updatePlayback);
    };
  }, [video, failed]);

  if (video && !failed) return <video ref={ref} src={video} poster={image} muted loop playsInline
    preload="none" aria-hidden="true" tabIndex={-1} onError={() => setFailed(true)}
    className="pointer-events-none h-40 w-full object-cover" />;
  if (image) return <img src={image} alt={`Prévia do projeto ${title}`} loading="lazy"
    className="h-40 w-full object-cover" />;
  return <div className="flex h-40 items-center justify-center bg-purple-100 text-sm text-purple-900 dark:bg-purple-950 dark:text-purple-200">Prévia em breve</div>;
}
