
import React from 'react';
import { cn } from '@/lib/utils';

interface MobileMenuOverlayProps {
  isVisible: boolean;
  onClick: () => void;
  className?: string;
}

const MobileMenuOverlay = ({ isVisible, onClick, className }: MobileMenuOverlayProps) => {
  if (!isVisible) return null;
  
  return (
    <div 
      className={cn(
        "fixed inset-0 bg-black/50 dark:bg-black/70 z-30 animate-fade-in backdrop-blur-sm",
        className
      )}
      onClick={onClick}
      aria-hidden="true"
    />
  );
};

export default MobileMenuOverlay;
