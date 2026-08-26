function CardFoto() {
  return (
  <div className="relative flex items-center justify-center photo-float">
    <div
      className="photo-frame p-[3px] w-[230px] h-[340px] md:w-[289px] md:h-[426px] 2xl:w-[335px] 2xl:h-[495px] rounded-[115px] md:rounded-[138px] 2xl:rounded-[160px]"
      style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed, #c084fc)' }}
    >
      <img
        // src="/fotoPerfilRoun.svg" 
        alt="Foto Manuella"
        className="w-full h-full rounded-[112px] md:rounded-[135px] object-cover"
      />
    </div>
  </div>
    
  );
}
export default CardFoto;
