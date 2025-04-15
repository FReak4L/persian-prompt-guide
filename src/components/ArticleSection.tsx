
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ArticleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
  isSubsection?: boolean;
  variant?: 'default' | 'highlight';
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ 
  id, 
  title, 
  children, 
  delay = 0,
  isSubsection = false,
  variant = 'default'
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Add observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (sectionRef.current) {
              sectionRef.current.classList.add('opacity-100');
              sectionRef.current.classList.remove('translate-y-10');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const variantStyles = {
    default: "",
    highlight: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800"
  };

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        "article-section opacity-0 translate-y-10 transition-all duration-700 ease-in-out scroll-mt-20 mb-12",
        variantStyles[variant]
      )}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <h2 className={cn(
        "mb-6 font-bold tracking-tight",
        isSubsection ? "text-xl" : "text-2xl md:text-3xl border-b pb-2 border-ios-gray-light dark:border-gray-700",
        variant === 'highlight' ? "text-indigo-700 dark:text-indigo-300" : "text-gray-900 dark:text-white"
      )}>
        {title}
      </h2>
      <div className="prose prose-slate dark:prose-invert max-w-none rtl:prose-headings:text-right rtl:prose-p:text-right">
        {children}
      </div>
    </section>
  );
};

export default ArticleSection;
