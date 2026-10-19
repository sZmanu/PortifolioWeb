export interface Technology {
  src: string;
  name: string;
}

export default function getTechnologiesData(): Technology[] {
  return [
    { src: "/HTML.svg", name: "HTML5" },
    { src: "/CSS.svg", name: "CSS3" },
    { src: "/JavaScript.svg", name: "JavaScript" },
    { src: "/TypeScript.svg", name: "TypeScript" },
    { src: "/React-Dark.svg", name: "React" },
    { src: "/TailwindCSS-Dark.svg", name: "Tailwind" },
    { src: "/Bootstrap.svg", name: "Bootstrap" },
    { src: "/StyledComponents.svg", name: "Styled" },
    { src: "/Figma-Dark.svg", name: "Figma" },
    { src: "/AndroidStudio-Dark.svg", name: "Android" },
    { src: "/DotNet.svg", name: ".NET" },
    { src: "/CS.svg", name: "C#" },
    { src: "/NestJS-Dark.svg", name: "NestJS" },
    { src: "/NodeJS-Dark.svg", name: "Node.js" },
    { src: "/Prisma.svg", name: "Prisma" },
    { src: "/MySQL-Dark.svg", name: "MySQL" },
    { src: "/Git.svg", name: "Git" },
    { src: "/Github-Dark.svg", name: "GitHub" },
    { src: "/Python-Dark.svg", name: "Python" },
    { src: "/Jest.svg", name: "Jest" },
    { src: "/Postman.svg", name: "Postman" },
    { src: "/Npm-Dark.svg", name: "NPM" },
  ]
}

  