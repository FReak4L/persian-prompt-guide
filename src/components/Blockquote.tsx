
import React from 'react';

interface BlockquoteProps {
  children: React.ReactNode;
  source?: string;
  variant?: 'default' | 'info' | 'warning' | 'success';
}

const Blockquote: React.FC<BlockquoteProps> = ({ children, source, variant = 'default' }) => {
  const variantStyles = {
    default: "border-ios-blue bg-ios-gray-light bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 dark:border-blue-400",
    info: "border-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-400",
    warning: "border-amber-500 bg-amber-50 dark:bg-amber-900/30 dark:border-amber-400",
    success: "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 dark:border-emerald-400"
  };
  
  const variantTextStyles = {
    default: "text-ios-gray-dark dark:text-gray-100",
    info: "text-blue-700 dark:text-blue-200",
    warning: "text-amber-700 dark:text-amber-200",
    success: "text-emerald-700 dark:text-emerald-200"
  };
  
  return (
    <div className={`my-6 border-r-4 ${variantStyles[variant]} pr-4 py-3 rounded-l-md animate-scale-in`}>
      <blockquote className={`italic ${variantTextStyles[variant]} font-medium`}>
        {children}
      </blockquote>
      {source && (
        <cite className={`block mt-2 text-sm ${variantTextStyles[variant]} text-opacity-80 dark:text-opacity-90 text-left`}>— {source}</cite>
      )}
    </div>
  );
};

export default Blockquote;
