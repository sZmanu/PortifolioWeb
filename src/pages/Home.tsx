import Button from "../components/Botao";
import Card from "../components/ImagemPerfil";
import CardFoto from "../components/CardFoto";

function Home(){
    return(
        <>
        <section id="home" className="h-svh flex items-center justify-center bg-[#f1e5ff] dark:bg-[#120C1C] ">
            {/* <div className="absolute inset-0 min-h-screen bg-[url('/fundoLuzes.svg')] bg-cover bg-center bg-no-repeat "></div> */}
            <div className="grid md:grid-cols-2 gap-8 w-full items-center justify-center">
                <div className="flex flex-col gap-4 items-center">

                    <div className="px-4">
                        <h1 className="text-2xl md:text-[2rem] lg:text-4xl font-bold dark:text-[#DDD3EE] text-[#300e68]">Olá, sou a <span className="dark:text-[#A489D1] text-[#7045b1]">Manuella</span></h1>
                        <h2 className="text-md md:text-[1.3rem] font-semibold dark:text-[#DDD3EE] text-[var(--color-quaternary)] dark:text-[var(--color-text-light)]">Desenvolvedora Full Stack</h2>
                    <p className="text-sm md:text-lg dark:text-[#DDD3EE] text-[#300e68]">
                        Desenvolvedora Frontend com paixão <br />por criar experiências digitais incríveis.
                    </p>
                    <div className="flex gap-4 mt-5">
                      <Button title="Contact me" />
                     <Button title="Download CV" />
                    </div>
                    </div>
                    
                </div>
                <div className="flex items-center justify-center">
         
                <CardFoto/>
                
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;