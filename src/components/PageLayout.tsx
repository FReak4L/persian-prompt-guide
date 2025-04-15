
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TableOfContents from '@/components/TableOfContents';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileMenuOverlay from './MobileMenuOverlay';

interface PageLayoutProps {
  children: React.ReactNode;
  initialSection?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  initialSection = 'intro' 
}) => {
  const [tocVisible, setTocVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(initialSection);
  const isMobile = useIsMobile();

  const toggleToc = () => {
    setTocVisible(prev => !prev);
  };

  useEffect(() => {
    // Initialize TOC visibility based on screen size
    if (window.innerWidth >= 768) {
      setTocVisible(true);
    } else {
      setTocVisible(false);
    }
    
    // Handle body class for mobile menu - prevent scrolling when menu is open
    if (tocVisible && isMobile) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Setup intersection observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    };

    window.addEventListener('load', handleHashNavigation);
    
    // Handle click outside to close mobile menu
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && tocVisible) {
        const target = e.target as HTMLElement;
        const sidebar = document.getElementById('sidebar-menu');
        const menuButton = document.querySelector('header button');
        
        if (sidebar && 
            !sidebar.contains(target) && 
            menuButton && 
            !menuButton.contains(target)) {
          setTocVisible(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    
    // Try to navigate if hash is present
    handleHashNavigation();

    // Clean up event listeners and observers
    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleHashNavigation);
      document.body.classList.remove('menu-open');
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [tocVisible, initialSection, isMobile]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header toggleToc={toggleToc} tocVisible={tocVisible} />
      
      <div className="flex flex-1 pt-16">
        {isMobile ? (
          <>
            {/* Mobile menu overlay */}
            <MobileMenuOverlay 
              isVisible={tocVisible} 
              onClick={() => setTocVisible(false)} 
            />
            
            {/* Mobile sidebar */}
            <div 
              id="sidebar-menu"
              className={cn(
                "fixed top-16 right-0 bottom-0 w-[85%] max-w-[300px] bg-white z-40 transition-transform duration-300 ease-in-out border-t border-gray-100 shadow-xl overflow-hidden",
                tocVisible ? "translate-x-0" : "translate-x-full"
              )}
            >
              <TableOfContents 
                visible={tocVisible}
                onClose={() => setTocVisible(false)}
                activeSection={activeSection}
              />
            </div>
          </>
        ) : (
          /* Desktop sidebar */
          <div 
            id="sidebar-menu"
            className={cn(
              "fixed top-16 right-0 bottom-0 w-72 bg-white z-40 transition-transform duration-300 border-t border-gray-100 overflow-hidden",
              tocVisible ? "translate-x-0" : "translate-x-full"
            )}
          >
            <TableOfContents 
              visible={tocVisible}
              onClose={() => setTocVisible(false)}
              activeSection={activeSection}
            />
          </div>
        )}
        
        <main className={cn(
          "flex-1 transition-all duration-300 w-full",
          !isMobile && tocVisible ? "md:mr-72" : ""
        )}>
          <div className="container mx-auto px-4 py-8 md:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
