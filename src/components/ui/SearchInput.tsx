// src/ui/SearchInput.tsx
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({ placeholder = "Search...", className = "" }: SearchInputProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => searchInputRef.current?.focus();

  return (
    <div className="relative">
      <button 
        type="button"
        onClick={handleSearchClick}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm focus:outline-none"
        aria-label="Focus search input"
      >
        <FaSearch />
      </button>
      <input 
        type="text" 
        placeholder={placeholder}
        ref={searchInputRef}
        className={`pl-9 pr-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm w-48 transition-all ${className}`}
      />
    </div>
  );
};