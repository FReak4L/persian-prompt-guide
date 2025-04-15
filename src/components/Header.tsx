
import React from 'react';
import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import MobileMenuButton from './MobileMenuButton';
import DarkModeToggle from './DarkModeToggle';

interface HeaderProps {
  toggleToc: () => void;
  tocVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleToc, tocVisible }) => {
  const [scrolled, setScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 right-0 left-0 z-50 bg-white dark:bg-background transition-all duration-300 py-3 md:py-4",
      scrolled ? "bg-opacity-95 backdrop-blur-sm shadow-sm dark:bg-opacity-95 dark:shadow-md" : "bg-opacity-100"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 space-x-reverse">
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-2 rounded-full shadow-sm">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-700 to-blue-700 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">راهنمای جامع مهندسی پرامپت</h1>
        </Link>
        
        <div className="flex items-center space-x-2 space-x-reverse">
          <DarkModeToggle />
          <MobileMenuButton 
            isOpen={tocVisible}
            onClick={toggleToc}
            className="touch-manipulation"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
