// src/ui/FooterSection.tsx
import { ReactNode } from 'react';

interface FooterSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const FooterSection = ({ title, children, className = '' }: FooterSectionProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
      {children}
    </div>
  );
};