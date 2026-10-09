
interface ButtonTabProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}
function ButtonTab({ title, onClick, isActive }: ButtonTabProps) {
  return (
    <div>
      <button 
        className={`border border-violet-400 ${isActive ? 'bg-violet-400/60' : ''} ${isActive ? 'text-white' : 'text-gray-300'} rounded-4xl px-4 py-2 m-1 text-sm font-medium  w-25 hover:bg-gray-100 dark:hover:bg-violet-800 focus:outline-none `}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
export default ButtonTab;