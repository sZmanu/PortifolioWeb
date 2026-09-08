import Background from "../components/Background";
import IconTecnologias from "../components/IconTecnologias";
import TecnologiaIcone from "../components/TecnologiaIcone";

function About() {
    return (
  
    <section className="min-h-svh flex dark:bg-[var(--color-bg-dark)] bg-[var(--color-bg-ligth)] items-center justify-center px-2 py-10 sm:px-4">
      <div data-scroll-reveal className="flex flex-row gap-3 w-full justify-center">
        <div className="w-3/12 bg-[#2c253831] p-5 h-[50vh] rounded-md"><h1 className="text-white">Meu conteúdo</h1></div>
        <div className="w-5/12 bg-[#2c253831]  h-[50vh] rounded-md">
        <h2 className="text-white p-7">Habilidades</h2>
        <div className="flex flex-wrap gap-5 p-5 flex justify-center items-center">
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>
        <TecnologiaIcone src={"/JavaScript.svg"} alt={"Logo do JavaScript"}/>

        </div>
        </div>
      </div>
      
    </section>
  

        
    );
}   
export default About;
