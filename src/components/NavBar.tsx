import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import Switch from "./ToggleMode";
import { itensMenu } from "../itensMenu/ItensMenu";

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) return saved === "dark";
    } catch { /* Storage may be unavailable. */ }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement; 
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.style.colorScheme = dark ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch { /* Optional persistence. */ }
  }, [dark]);

    const toggleDarkMode = () => {
        setDark((previous) => !previous);
    }

  return (
    <nav aria-label="Navegação principal" onKeyDown={(event) => { if (event.key === "Escape" && menuAberto) { setMenuAberto(false); menuButton.current?.focus(); } }} className="fixed z-30 flex w-full items-center justify-between border-b border-purple-900/10 bg-white/10 px-4 py-4 backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 dark:border-white/10 dark:bg-black/10 md:px-14">

      <img src="/logoNome.svg" alt="Logo manuella" className="sm:w-60 w-50"/>
      <div className="flex items-center gap-4 justify-center">
        
        <ul className="hidden md:flex md:gap-5 lg:gap-10 text-white">
          {itensMenu.map((item) => (
            <li key={item.id} className="transition hover:scale-110">
              <a href={item.link} onClick={() => document.querySelector<HTMLElement>(item.link)?.focus()} className="text-lg dark:text-[#DDD3EE] hover:text-[#6f5a92] dark:hover:text-[#A489D1] text-[#371175] font-semibold!">
                {item.nome}
              </a>
            </li>
          ))}
        </ul>

        <Switch toggleHandDark={toggleDarkMode} isDark={dark}/>
         
        <button
          ref={menuButton}
          type="button"
          aria-label={menuAberto ? "Fechar navegação" : "Abrir navegação"}
          aria-expanded={menuAberto}
          aria-controls="mobile-navigation"
          className="dark:text-white text-2xl md:hidden dark:hover:text-[#A489D1] text-[#40108d] hover:text-[#6f5a92] transition delay-150 duration-100 ease-in-out "
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>

      </div>
      {menuAberto && (
        <Menu fecharMenu={() => setMenuAberto(false)} onEscape={() => { setMenuAberto(false); menuButton.current?.focus(); }} />
      )}

    </nav>
  );
}
export default NavBar;
