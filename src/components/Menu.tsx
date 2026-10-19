import { itensMenu } from "../itensMenu/ItensMenu";

interface MenuProps{
    fecharMenu: () => void;
    onEscape: () => void;
}
function Menu({fecharMenu, onEscape}: MenuProps){
    return(
        <div id="mobile-navigation" onKeyDown={(event) => { if (event.key === "Escape") { event.stopPropagation(); onEscape(); } }} className="absolute top-20 right-5 z-50 border border-[#A489D1] md:hidden dark:bg-[#1E162E] bg-[#d8c2ff] rounded">

                <ul className="flex-col justify-center flex gap-4 px-10 py-4">
                    {itensMenu.map((item) => (
                        <li key={item.id} className="transition delay-150 duration-100 ease-in-out  hover:scale-110">
                            <a href={item.link} onClick={() => { fecharMenu(); document.querySelector<HTMLElement>(item.link)?.focus(); }} className="font-medium text-lg dark:text-[#DDD3EE] hover:text-[#6f5a92] text-[#300e68] dark:hover:text-[#4d3474]">
                                {item.nome}
                            </a>
                        </li>
                    ))}
                </ul>



        </div>
    )
}
export default Menu;
