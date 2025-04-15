import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  ChevronLeft, BookOpen, Star, Zap, Brain, Code, MessageSquare, 
  Shield, Award, Lock, AlignLeft, Lightbulb, GitFork, Workflow, 
  Search, Share2, BrainCircuit, CheckCircle, Cpu, Database, 
  KeySquare, LineChart, Maximize, ArrowUp, RefreshCw, AlarmCheck 
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  route?: string;
  badge?: string;
  subsections?: { id: string; title: string; route?: string; badge?: string }[];
}

interface TableOfContentsProps {
  visible: boolean;
  onClose: () => void;
  activeSection: string;
}

const sections: Section[] = [
  {
    id: "intro",
    title: "مقدمه",
    icon: <BookOpen className="h-4 w-4" />,
    route: "/"
  },
  {
    id: "basics",
    title: "اصول اولیه مهندسی پرامپت",
    icon: <Star className="h-4 w-4" />,
    route: "/basics",
    badge: "ضروری",
    subsections: [
      { id: "basics-what", title: "مهندسی پرامپت چیست؟", route: "/basics#basics-what" },
      { id: "basics-why", title: "چرا مهندسی پرامپت مهم است؟", route: "/basics#basics-why" },
      { id: "basics-concepts", title: "مفاهیم کلیدی", route: "/basics#basics-concepts" },
      { id: "basics-types", title: "انواع پرامپت", route: "/basics#basics-types" },
    ]
  },
  {
    id: "techniques",
    title: "تکنیک‌های مهندسی پرامپت",
    icon: <Zap className="h-4 w-4" />,
    route: "/techniques",
    subsections: [
      { id: "techniques-zero", title: "پرامپت‌های ساده (Zero-shot)", route: "/techniques#techniques-zero" },
      { id: "techniques-few", title: "پرامپت‌های نمونه‌دار (Few-shot)", route: "/techniques#techniques-few" },
      { id: "techniques-cot", title: "زنجیره استدلال (Chain of Thought)", route: "/techniques#techniques-cot", badge: "پیشرفته" },
      { id: "techniques-react", title: "تکنیک ReAct", route: "/techniques#techniques-react", badge: "پیشرفته" },
      { id: "techniques-self", title: "خودسازگاری (Self-consistency)", route: "/techniques#techniques-self", badge: "پیشرفته" },
      { id: "techniques-tot", title: "درخت افکار (Tree of Thoughts)", route: "/techniques#techniques-tot", badge: "پیشرفته" },
      { id: "techniques-rag", title: "تولید تقویت شده با بازیابی (RAG)", route: "/techniques#techniques-rag", badge: "پیشرفته" },
      { id: "techniques-knowledge", title: "پرامپتینگ تولید دانش", route: "/techniques#techniques-knowledge", badge: "جدید" },
      { id: "techniques-automatic", title: "استدلال خودکار (ART)", route: "/techniques#techniques-automatic", badge: "جدید" },
    ]
  },
  {
    id: "models",
    title: "مدل‌های زبانی و کاربردها",
    icon: <Brain className="h-4 w-4" />,
    route: "/models",
    badge: "جدید",
  },
  {
    id: "advanced-techniques",
    title: "تکنیک‌های پیشرفته",
    icon: <BrainCircuit className="h-4 w-4" />,
    route: "/advanced-techniques",
    badge: "پیشرفته",
    subsections: [
      { id: "meta-prompting", title: "پرامپتینگ فراداده (Meta Prompting)", route: "/advanced-techniques#meta-prompting" },
      { id: "chain-prompting", title: "زنجیره‌سازی پرامپت (Prompt Chaining)", route: "/advanced-techniques#chain-prompting" },
      { id: "active-prompt", title: "پرامپت فعال (Active-Prompt)", route: "/advanced-techniques#active-prompt" },
      { id: "automatic-pe", title: "مهندس پرامپت خودکار (APE)", route: "/advanced-techniques#automatic-pe" },
      { id: "pal", title: "مدل‌های زبانی با کمک برنامه (PAL)", route: "/advanced-techniques#pal" },
      { id: "directional-stimulus", title: "پرامپتینگ محرک جهت‌دار (DSP)", route: "/advanced-techniques#directional-stimulus", badge: "جدید" },
    ]
  },
  {
    id: "examples",
    title: "نمونه‌های کاربردی",
    icon: <Code className="h-4 w-4" />,
    route: "/best-practices#examples",
  },
  {
    id: "practices",
    title: "بهترین شیوه‌های عملی",
    icon: <Award className="h-4 w-4" />,
    route: "/best-practices#practices",
  },
  {
    id: "design-principles",
    title: "اصول طراحی پرامپت مؤثر",
    icon: <AlignLeft className="h-4 w-4" />,
    route: "/best-practices#design-principles",
  },
  {
    id: "conversations",
    title: "طراحی مکالمات هوشمند",
    icon: <MessageSquare className="h-4 w-4" />,
    route: "/best-practices#conversations",
  },
  {
    id: "prompt-patterns",
    title: "الگوهای پرامپت",
    icon: <Workflow className="h-4 w-4" />,
    route: "/best-practices#prompt-patterns",
    badge: "کاربردی",
  },
  {
    id: "security",
    title: "امنیت و حریم خصوصی",
    icon: <Shield className="h-4 w-4" />,
    route: "/best-practices#security",
    badge: "مهم",
  }
];

const TableOfContents: React.FC<TableOfContentsProps> = ({ visible, onClose, activeSection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar-menu');
      if (sidebar && !sidebar.contains(event.target as Node) && visible) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [visible, onClose, isMobile]);

  const handleNavigation = (route: string) => {
    console.log('Navigation clicked:', route); // Debug log
    
    if (route) {
      if (route.includes('#') && 
          (route.split('#')[0] === location.pathname || 
          (route.split('#')[0] === '' && location.pathname === '/'))) {
        const elementId = route.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          if (isMobile) {
            onClose(); // Close menu on mobile after navigation
          }
        }
      } else {
        navigate(route);
        if (isMobile) {
          onClose(); // Close menu on mobile after navigation
        }
      }
    }
  };

  if (isMobile && !visible) return null;

  return (
    <aside 
      id="sidebar-menu"
      className={cn(
        "fixed top-16 right-0 bottom-0 w-72 bg-white shadow-lg z-40 overflow-hidden border-t border-gray-100",
        isMobile ? "w-full md:w-72" : (visible ? "translate-x-0" : "translate-x-full md:translate-x-0")
      )}
      style={{ transform: isMobile ? 'none' : (visible ? 'translateX(0)' : 'translateX(100%)') }}
    >
      <div className="p-4 border-b sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-800">فهرست مطالب</h2>
          {isMobile && (
            <button 
              onClick={onClose} 
              className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="بستن فهرست"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      
      <nav className="overflow-y-auto h-[calc(100%-60px)] py-2 px-4">
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={section.id} style={{ '--animation-delay': index } as React.CSSProperties} className="table-of-contents-item">
              <div 
                className={cn(
                  "block py-3 px-3 rounded-md transition-colors text-right flex items-center space-x-2 space-x-reverse",
                  activeSection === section.id 
                    ? "bg-indigo-50 text-indigo-600 font-medium" 
                    : "text-gray-700 hover:bg-gray-50",
                  "cursor-pointer touch-manipulation min-h-[44px]"
                )}
                onClick={() => handleNavigation(section.route || `/#${section.id}`)}
                role="button"
                tabIndex={0}
              >
                <span className={cn(
                  "inline-flex items-center justify-center w-7 h-7 rounded-full mr-2",
                  activeSection === section.id ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-600"
                )}>
                  {section.icon}
                </span>
                <span className="flex-1">{section.title}</span>
                {section.badge && (
                  <span className={cn(
                    "text-xs py-0.5 px-1.5 rounded-full",
                    section.badge === "ضروری" ? "bg-amber-100 text-amber-700" :
                    section.badge === "پیشرفته" ? "bg-purple-100 text-purple-700" :
                    section.badge === "جدید" ? "bg-green-100 text-green-700" :
                    section.badge === "مهم" ? "bg-red-100 text-red-700" :
                    section.badge === "کاربردی" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 text-gray-700"
                  )}>
                    {section.badge}
                  </span>
                )}
              </div>
              
              {section.subsections && (
                <ul className="mr-8 mt-1 space-y-1">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id}>
                      <div 
                        className={cn(
                          "block py-2 px-3 rounded-md transition-colors text-right text-sm flex items-center",
                          activeSection === subsection.id 
                            ? "bg-indigo-50 text-indigo-600 font-medium" 
                            : "text-gray-700 hover:bg-gray-50",
                          "cursor-pointer touch-manipulation min-h-[40px]"
                        )}
                        onClick={() => handleNavigation(subsection.route || `/#${subsection.id}`)}
                        role="button"
                        tabIndex={0}
                      >
                        <span className="flex-1">{subsection.title}</span>
                        {subsection.badge && (
                          <span className={cn(
                            "text-xs py-0.5 px-1.5 rounded-full",
                            subsection.badge === "ضروری" ? "bg-amber-100 text-amber-700" :
                            subsection.badge === "پیشرفته" ? "bg-purple-100 text-purple-700" :
                            subsection.badge === "جدید" ? "bg-green-100 text-green-700" :
                            subsection.badge === "مهم" ? "bg-red-100 text-red-700" :
                            subsection.badge === "کاربردی" ? "bg-blue-100 text-blue-700" :
                            "bg-gray-100 text-gray-700"
                          )}>
                            {subsection.badge}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default TableOfContents;
