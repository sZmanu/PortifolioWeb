interface TecnologiaIconeProps {
    src: string;
    alt: string;
    nome: string;
  }
function TecnologiaIcone({ src, alt, nome }: TecnologiaIconeProps) {
    return (
        <div>
        <div className=" p-4 rounded-lg flex flex-col justify-center items-center  border border-white/10 transition-all duration-300 hover:scale-110 hover:border-purple-400/40  hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]">
            <img src={src} alt={alt} className="h-10 w-10 " />
            
        </div>   
        <h2 className="text-white text-sm font-medium mt-1">{nome}</h2>
        </div>
    )
}
export default TecnologiaIcone;