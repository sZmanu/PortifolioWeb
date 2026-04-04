import { useState } from "react";
import Menu from "./Menu";

function NavBar(){
    const [menuAberto, setMenuAberto] = useState(false);

    
    return(
        <nav className="grid grid-cols-2 z-78 justify-between items-center px-15 py-4">
            <img src="/logoNome.svg" alt="Logo manuella" />

            <button className="text-white text-2xl md:hidden absolute right-5 hover:text-[#A489D1]"
        onClick={() => setMenuAberto(!menuAberto)}>☰</button>

            <ul className="justify-end hidden md:flex">
            <div className="flex justify-between xl:w-3/5 w-full">
                <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="#home" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1] ">Home</a></li>
                <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="#about" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1]">Sobre</a></li>
                <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="#about" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1]">Skills</a></li>
                <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="#about" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1]">Projetos</a></li>
                <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="#contact" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1]">Contato</a></li>
                </div>
            </ul>
            {menuAberto && <Menu fecharMenu={() => setMenuAberto(false)}/>}
            
        </nav>
    )
}
export default NavBar;