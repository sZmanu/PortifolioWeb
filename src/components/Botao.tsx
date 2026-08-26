import React from 'react';

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({ title, onClick, children }: ButtonProps) => {
  return (
    <button 
      className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none min-[1800px]:h-14"
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#A489D1_50%,#bd5fff_100%)]">
      </span>
      {/* cor fundo */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#231736] px-7 text-[12px] md:text-[15px] font-medium text-white backdrop-blur-3xl gap-2 undefined hover:bg-[#573178] min-[1800px]:px-9 min-[1800px]:text-lg">
        {title}
        {children}
      </span>
    </button>
  );
}

export default Button;
