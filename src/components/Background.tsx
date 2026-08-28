import styled from 'styled-components';
import type { ReactNode } from 'react';

interface BackgroundProps {
  children?: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <StyledWrapper>
      <div className="cyber-pattern" />
      <div className="content">{children}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: 100svh;
  overflow: hidden;

  .cyber-pattern {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: #120C1C;

    /* C'est ici que la magie opère. On empile plusieurs couches : */
    background-image: 
      /* 1. La Vignette (Ombre sur les bords pour l'effet cinéma) */
      radial-gradient(circle at center, transparent 30%, #120C1C 90%),
      /* 2. GRILLE PRINCIPALE (Cyan - Grande) - Lignes Verticales & Horizontales */
        linear-gradient(rgba(224, 197, 255, 0.25) 1px, transparent 1px),
      linear-gradient(90deg, rgba(217, 171, 255, 0.17) 1px, transparent 1px),
      /* 3. GRILLE SECONDAIRE (Magenta - Petite) - Lignes Verticales & Horizontales */
        linear-gradient(rgba(216, 3, 244, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(217, 3, 244, 0.05) 1px, transparent 1px);

    /* On définit la taille des grilles */
    background-size:
      100% 100%,
      /* Vignette */ 60px 60px,
      /* Grande grille Cyan (60px) */ 60px 60px,
      20px 20px,
      /* Petite grille Magenta (20px) */ 20px 20px;

    /* On lance l'animation */
    animation: cyber-move 10s linear infinite;
  }

  .content {
    position: relative;
    z-index: 1;
  }

  /* L'animation qui fait bouger les grilles */
  @keyframes cyber-move {
    0% {
      background-position:
        0 0,
        /* Vignette (ne bouge pas) */ 0 0,
        0 0,
        /* Grille Cyan (Départ) */ 0 0,
        0 0; /* Grille Magenta (Départ) */
    }
    100% {
      background-position:
        0 0,
        /* Vignette */ 60px 60px,
        60px 60px,
        /* Grille Cyan bouge de 60px (1 carreau) */ 40px 40px,
        40px 40px; /* Grille Magenta bouge de 40px (plus vite/décalé) */
    }
  }`;

export default Background;
