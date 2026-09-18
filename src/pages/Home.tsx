import Button from "../components/Botao";
import CardFoto from "../components/CardFoto";
import './home.css'
import ButtonSocial from "../components/ButtonSocial";

function Home(){
    return(
        <>
        <section id="home" className="h-svh relative flex items-center justify-center bg-[var(--color-bg-ligth)] dark:bg-[var(--color-bg-dark)] ">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Halo externo difuso */}

        <div className="absolute top-24 -left-24 h-[260px] w-[260px] rounded-full  dark:bg-violet-600/30 blur-[70px] sm:top-40 sm:-left-52 sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />
        {/* Núcleo mais brilhante */}
        <div className="absolute top-24 -left-12 h-[140px] w-[140px] rounded-full  dark:bg-violet-500/70 blur-[45px] sm:top-62 sm:-left-30 sm:h-[280px] sm:w-[280px] sm:blur-[80px]" />

        <div className="absolute -bottom-24 -right-24 h-[300px] w-[300px] rounded-full  dark:bg-violet-600/40 blur-[70px] sm:-bottom-50 sm:-right-42 sm:h-[700px] sm:w-[700px] sm:blur-[130px]" />
        {/* Núcleo mais brilhante */}
        <div className="absolute -bottom-20 -right-12 h-[160px] w-[160px] rounded-full  dark:bg-violet-500/70 blur-[45px] sm:-bottom-40 sm:-right-20 sm:h-[420px] sm:w-[420px] sm:blur-[80px]" />
       
      </div>
            
            <div data-scroll-reveal className="grid md:grid-cols-2 gap-8 w-full items-center justify-center min-[1800px]:gap-14">
                <div className="flex flex-col gap-4 items-center">
                    <div className="inline-flex flex-col items-start px-4">
                        <div className="mb-5">
                        <ButtonSocial/>
                        </div>
                        <h1 className="text-2xl md:text-[2rem] lg:text-5xl font-bold dark:text-[#DDD3EE] text-[#48197e] min-[1800px]:text-5xl">Olá, sou a <span className="dark:text-[#a883ee] text-[#703eaa]">Manuella</span></h1>
                        <h2 className="typing-effect mb-4 text-md md:text-[1.3rem] font-semibold dark:text-[#DDD3EE] text-[var(--color-quaternary)] dark:text-[var(--color-text-light)] min-[1800px]:text-[1.6rem]">Desenvolvedora Full Stack</h2>
                    <p className="text-sm md:text-lg dark:text-[#DDD3EE] text-[#444444] min-[1800px]:text-xl">
                        Desenvolvedora Frontend com paixão <br />por criar experiências digitais incríveis.
                    </p>
                    <div className="mt-5 flex gap-4 self-start">
                            <Button
                                title="Contact me"
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            />
                     <Button><a
                        href="/Manuella-curriculo.pdf"
                        download="Manuella-Oliveira.pdf"
                        className="..." >
                        Download CV
                        </a></Button>
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
