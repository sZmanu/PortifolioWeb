import React from 'react';

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  href?: string;
  download?: string;
}
const Button = ({ title, onClick, children, href, download }: ButtonProps) => {
  const Element = href ? 'a' : 'button';
  return (
    <Element
      href={href}
      download={download}
      className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] min-[1800px]:h-14"
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#A489D1_50%,#aa8edf_100%)]">
      </span>
      {/* cor fundo */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-[#543197] bg-[#5e238f] px-7 text-[12px] md:text-[15px] font-medium text-white backdrop-blur-3xl gap-2 undefined hover:bg-[#2b183b] min-[1800px]:px-9 min-[1800px]:text-lg">
        {title}
        {children}
      </span>
    </Element>
  );
}

export default Button;
