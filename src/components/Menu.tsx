import { useState } from "react";

interface MenuProps{
    fecharMenu: () => void;
}
function Menu({fecharMenu}: MenuProps){
    return(
        <section className="absolute top-20 right-5 z-50 border border-[#A489D1]  md:hidden bg-[#1E162E] rounded">

                <ul className="flex-col justify-center flex gap-4 px-10 py-4">
                    <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1] ">home</a></li>
                    <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1] ">sobre</a></li>
                    <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1] ">skills</a></li>
                    <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1] ">projetos</a></li>
                    <li className="transition delay-150 duration-100 ease-in-out  hover:scale-110"><a href="" className="font-medium text-lg text-[#DDD3EE] hover:text-[#A489D1] ">contato</a></li>
                </ul>



        </section>
    )
}
export default Menu;