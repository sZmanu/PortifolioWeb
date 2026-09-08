interface TecnologiaIconeProps {
    src: string;
    alt: string;
  }
function TecnologiaIcone({ src, alt }: TecnologiaIconeProps) {
    return (     
        <div className="w-30 p-3 h-20 rounded-lg flex flex-col justify-center items-center bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 hover:border-purple-400/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]">
            <img src={src} alt={alt} className="h-10 w-10 " />
            <h2 className="text-white/30 text-sm font-medium mt-1">nome</h2>
        </div>   
    )
}
export default TecnologiaIcone;