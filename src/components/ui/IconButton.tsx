// src/ui/IconButton.tsx
import { ReactNode } from 'react';

interface IconButtonProps {
  onClick?: () => void;
  href?: string;
  icon: ReactNode;
  label: string;
  badge?: boolean;
  className?: string;
}

export const IconButton = ({ onClick, href, icon, label, badge = false, className = '' }: IconButtonProps) => {
  const commonClasses = `p-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-transform transform hover:scale-105 ${className}`;
  
  if (href) {
    return (
      <a href={href} className={commonClasses} aria-label={label}>
        {icon}
        {badge && <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-pulseScale" aria-hidden="true" />}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={commonClasses} aria-label={label}>
      {icon}
      {badge && <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-pulseScale" aria-hidden="true" />}
    </button>
  );
};