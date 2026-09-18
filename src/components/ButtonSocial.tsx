interface SocialButton {
  href: string;
  label: string;
  colorClass: {
    border: string;
    shadow: string;
    iconIdle: string;
    iconHover: string;
    shimmer: string;
    hoverBg: string;
  };
  icon: React.ReactNode;
}

const ButtonSocial = () => {
  const socials: SocialButton[] = [
    {
      href: "#",
      label: "LinkedIn",
      colorClass: {
        border: "border-purple-800/50 dark:border-indigo-500/30 hover:border-[#7045b1]/70",
        shadow: "hover:shadow-indigo-500/30",
        iconIdle: "dark:text-[#A489D1] text-purple-900/60", 
        iconHover: "dark:group-hover:text-purple-300 group-hover:text-purple-900",
        shimmer: "via-indigo-400/20",
        hoverBg: "bg-purple-500/10",
      },
      icon: (
        <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: "#",
      label: "GitHub",
    colorClass: {
        border: "border-purple-800/50 dark:border-indigo-500/30 hover:border-[#7045b1]/70",
        shadow: "hover:shadow-indigo-500/30",
        iconIdle: "dark:text-[#A489D1] text-purple-900/60",
        iconHover: "dark:group-hover:text-purple-300 group-hover:text-purple-900",
        shimmer: "via-indigo-400/20",
        hoverBg: "bg-purple-500/10",
      },
      icon: (
        <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      href: "#",
      label: "Discord",
      colorClass: {
        border: "border-purple-800/50 dark:border-indigo-500/30 hover:border-[#7045b1]/70",
        shadow: "hover:shadow-indigo-500/30",
        iconIdle: "dark:text-[#A489D1] text-purple-900/60",
        iconHover: "dark:group-hover:text-purple-300 group-hover:text-purple-900",
        shimmer: "via-indigo-400/20",
        hoverBg: "bg-purple-500/10",
      }, 
      icon: (
        <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 640 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241z" />
        </svg>
      ),
    },
  ]; 

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative rounded-full border p-2 shadow-lg backdrop-blur-lg transition-all duration-300 ease-out overflow-hidden hover:shadow-2xl hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 md:p-3 ${social.colorClass.border} ${social.colorClass.shadow}`}
        >
          {/* Fundo colorido que aparece no hover — corrige o bug do gradient no hover */}
          <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${social.colorClass.hoverBg}`} />

          {/* Shimmer */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${social.colorClass.shimmer} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out`} />

          {/* Ícone */}
          <div className={`relative z-10 transition-colors duration-300 ${social.colorClass.iconIdle} ${social.colorClass.iconHover}`}>
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ButtonSocial;
