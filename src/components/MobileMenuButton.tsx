
import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MobileMenuButton = ({ isOpen, onClick, className }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
      className={cn(
        "p-3 rounded-full transition-colors",
        "touch-manipulation tap-highlight-none active:scale-95 select-none",
        "min-h-[44px] min-w-[44px] flex items-center justify-center",
        isOpen 
          ? "bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700" 
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
        className
      )}
      type="button"
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );
};

export default MobileMenuButton;
