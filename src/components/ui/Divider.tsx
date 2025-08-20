// src/ui/Divider.tsx
interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider = ({ text, className = '' }: DividerProps) => {
  return (
    <div className={`flex items-center my-6 ${className}`}>
      <hr className="flex-grow border-gray-300" />
      {text && <span className="px-3 text-sm text-medium-gray">{text}</span>}
      <hr className="flex-grow border-gray-300" />
    </div>
  );
};