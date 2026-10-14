
interface ButtonTabProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
  children?: React.ReactNode;
}
function ButtonTab({ title, onClick, isActive, children }: ButtonTabProps) {
  return (
    <div>
      <button 
        className={`border border-violet-400 ${isActive ? 'dark:bg-violet-400/60 bg-[#9157c7]' : ''} ${isActive ? 'text-white' : 'dark:text-gray-300 text-[#9157c7]'} rounded-4xl md:px-4 px-3 md:py-2 m-1 text-[11px] md:text-sm font-medium flex md:min-h-[45px] min-h-[35px] justify-between items-center gap-1  dark:hover:bg-gray-100 hover:text-gray-100 hover:bg-purple-950 dark:hover:bg-violet-800 focus:outline-none `}
        onClick={onClick}
      >
        
        {children}
        {title}
      </button>
    </div>
  );
}
export default ButtonTab;