// src/ui/InputField.tsx
import { ReactNode } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { EyeSlashIcon } from '@heroicons/react/24/solid';

interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  error?: string;
  className?: string;
  showPasswordToggle?: boolean;
  isPasswordVisible?: boolean;
  onTogglePassword?: () => void;
}

export const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
  error,
  className = '',
  showPasswordToggle = false,
  isPasswordVisible = false,
  onTogglePassword,
}: InputFieldProps) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-3 text-light-gray w-5 h-5 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pl-10 pr-${showPasswordToggle ? '10' : '3'} py-2 border rounded-lg focus:ring-2 focus:ring-corporate-red focus:outline-none ${
          error ? 'border-error' : 'border-very-light-gray'
        } ${className}`}
      />
      {showPasswordToggle && onTogglePassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 top-3 text-light-gray hover:text-corporate-red"
        >
          {isPasswordVisible ? (
            <EyeIcon className="w-5 h-5" />
          ) : (
            <EyeSlashIcon className="w-5 h-5" />
          )}
        </button>
      )}
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
};
