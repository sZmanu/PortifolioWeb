import { useEffect, useState } from "react";
import Menu from "./Menu";
import Switch from "./ToggleMode";
import { itensMenu } from "../itensMenu/ItensMenu";

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement; 
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

    const toggleDarkMode = () => {
        setDark(!dark);
    }

  return (
    <nav className="flex justify-between items-center md:px-14 px-4 py-4 relative z-50 bg-[#f1e5ff]  dark:bg-[#120C1C] ">

      <img src="/logoNome.svg" alt="Logo manuella" className="sm:w-60 w-50"/>
      <div className="flex items-center gap-4 justify-center">
        
        <ul className="hidden md:flex md:gap-5 lg:gap-10 text-white">
          {itensMenu.map((item) => (
            <li key={item.id} className="transition hover:scale-110">
              <a href={item.link} className="text-lg dark:text-[#DDD3EE] hover:text-[#6f5a92] dark:hover:text-[#A489D1] text-[#371175] font-medium">
                {item.nome}
              </a>
            </li>
          ))}
        </ul>

        <Switch toggleHandDark={toggleDarkMode} isDark={dark}/>
         
        <button
          className="dark:text-white text-2xl md:hidden dark:hover:text-[#A489D1] text-[#40108d] hover:text-[#6f5a92] transition delay-150 duration-100 ease-in-out "
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>

      </div>
      {menuAberto && (
        <Menu fecharMenu={() => setMenuAberto(false)} />
      )}

    </nav>
  );
}
export default NavBar;