// src/ui/SocialIcon.tsx
import { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export const SocialIcon = ({ href, icon, label, className = '' }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center h-9 w-9 rounded-full bg-gray-800 hover:bg-red-600 transition-colors transform hover:scale-110 ${className}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
};