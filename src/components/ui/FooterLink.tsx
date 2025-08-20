// src/ui/FooterLink.tsx
import { ReactNode } from 'react';

interface FooterLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const FooterLink = ({ href, children, className = '' }: FooterLinkProps) => {
  return (
    <a href={href} className={`text-gray-400 hover:text-red-500 transition-colors text-sm ${className}`}>
      {children}
    </a>
  );
};