
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import TableOfContents from '@/components/TableOfContents';
import ArticleSection from '@/components/ArticleSection';
import Blockquote from '@/components/Blockquote';
import { cn } from '@/lib/utils';

const Index = () => {
  const [tocVisible, setTocVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const toggleToc = () => {
    setTocVisible(!tocVisible);
    // Toggle body class for preventing scroll on mobile when menu is open
    if (!tocVisible) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  useEffect(() => {
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

    // Fix for mobile responsiveness
    const handleResize = () => {
      if (window.innerWidth >= 768 && !tocVisible) {
        setTocVisible(true);
        document.body.classList.remove('menu-open');
      } else if (window.innerWidth < 768 && tocVisible) {
        setTocVisible(false);
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on load

    // Clean up event listeners and observers
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('menu-open');
    };
  }, [tocVisible]);

  // Add click event handler to close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth < 768 && tocVisible) {
        const target = event.target as HTMLElement;
        const toc = document.querySelector('aside');
        const menuButton = document.querySelector('button[aria-label="باز/بسته کردن فهرست مطالب"]');
        
        if (toc && 
            !toc.contains(target) && 
            menuButton && 
            !menuButton.contains(target)) {
          setTocVisible(false);
          document.body.classList.remove('menu-open');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tocVisible]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header toggleToc={toggleToc} tocVisible={tocVisible} />
      
      <div className="flex flex-1 pt-16">
        <TableOfContents 
          visible={tocVisible} 
          onClose={() => {
            setTocVisible(false);
            document.body.classList.remove('menu-open');
          }} 
          activeSection={activeSection}
        />
        
        <main className={cn(
          "flex-1 transition-all duration-300 w-full",
          tocVisible ? "md:mr-72" : ""
        )}>
          <div className="container mx-auto px-4 py-8 md:py-12">
            <ArticleSection id="intro" title="راهنمای جامع مهندسی پرامپت" delay={0}>
              <p className="text-lg">
                مهندسی پرامپت به عنوان یک حوزه نسبتاً جدید، به سرعت در حال تحول است و اهمیت فزاینده‌ای در بهره‌برداری از قابلیت‌های مدل‌های زبانی بزرگ (LLM) در کاربردها و تحقیقات گوناگون پیدا کرده است. این مهارت، که فراتر از طراحی ساده پرامپت‌ها می‌رود، مجموعه‌ای وسیع از تکنیک‌ها و روش‌های اساسی برای تعامل و توسعه با استفاده از LLMها را شامل می‌شود.
              </p>
              
              <p className="mt-4">
                درک این تکنیک‌ها برای محققان و توسعه‌دهندگان به طور یکسان حیاتی است، زیرا کیفیت نتایج حاصل از یک مدل زبانی به شدت به میزان اطلاعات ارائه شده در پرامپت و نحوه ساخت آن بستگی دارد. این راهنمای جامع با هدف ارائه آخرین یافته‌های تحقیقاتی، تکنیک‌های پیشرفته پرامپتینگ، مطالب آموزشی و راهنمایی‌های عملی برای علاقه‌مندان به این حوزه تهیه شده است.
              </p>
              
              <Blockquote source="سام آلتمن، مدیرعامل OpenAI">
                مهندسی پرامپت یک هنر و علم است. با یادگیری این مهارت، شما کلید قدرت واقعی هوش مصنوعی را در دست خواهید داشت.
              </Blockquote>
            </ArticleSection>
            
            <ArticleSection id="guide-overview" title="آنچه در این راهنما خواهید آموخت" delay={1}>
              <p className="mb-6">
                این راهنمای جامع به شما کمک می‌کند تا با مفاهیم و تکنیک‌های مختلف مهندسی پرامپت آشنا شوید و بتوانید از آنها برای بهبود تعامل با مدل‌های زبانی بزرگ استفاده کنید. در بخش‌های مختلف این راهنما، موضوعات زیر را بررسی خواهیم کرد:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 hover-scale transition-transform duration-300">
                  <Link to="/basics" className="block h-full">
                    <h3 className="font-bold text-blue-700 text-xl mb-3">اصول اولیه مهندسی پرامپت</h3>
                    <p className="text-gray-700">
                      آشنایی با مفاهیم پایه مهندسی پرامپت، چیستی و چرایی اهمیت آن در کار با هوش مصنوعی و تأثیر آن بر کیفیت پاسخ‌های دریافتی.
                    </p>
                  </Link>
                </div>
                
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200 hover-scale transition-transform duration-300">
                  <Link to="/techniques" className="block h-full">
                    <h3 className="font-bold text-indigo-700 text-xl mb-3">تکنیک‌های مهندسی پرامپت</h3>
                    <p className="text-gray-700">
                      معرفی و بررسی تکنیک‌های پایه مانند Zero-shot، Few-shot، Chain of Thought و ReAct که به بهبود کیفیت پاسخ‌ها کمک می‌کنند.
                    </p>
                  </Link>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 hover-scale transition-transform duration-300">
                  <Link to="/advanced-techniques" className="block h-full">
                    <h3 className="font-bold text-purple-700 text-xl mb-3">تکنیک‌های پیشرفته</h3>
                    <p className="text-gray-700">
                      آشنایی با روش‌های پیچیده‌تر مانند درخت افکار، خودسازگاری، RAG و PAL برای حل مسائل پیچیده‌تر و دقیق‌تر.
                    </p>
                  </Link>
                </div>
                
                <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200 hover-scale transition-transform duration-300">
                  <Link to="/models" className="block h-full">
                    <h3 className="font-bold text-emerald-700 text-xl mb-3">مدل‌های زبانی و کاربردها</h3>
                    <p className="text-gray-700">
                      معرفی مدل‌های مختلف زبانی، ویژگی‌ها، قابلیت‌ها و کاربردهای بهینه هر کدام، و نحوه انتخاب مدل مناسب برای هر وظیفه.
                    </p>
                  </Link>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 hover-scale transition-transform duration-300">
                  <Link to="/best-practices" className="block h-full">
                    <h3 className="font-bold text-amber-700 text-xl mb-3">بهترین شیوه‌های عملی</h3>
                    <p className="text-gray-700">
                      اصول، الگوها و نمونه‌های کاربردی برای طراحی پرامپت‌های مؤثر و کارآمد در انواع کاربردها و موقعیت‌ها.
                    </p>
                  </Link>
                </div>
              </div>
            </ArticleSection>
            
            <ArticleSection id="getting-started" title="شروع به کار" delay={2}>
              <p>
                برای شروع یادگیری مهندسی پرامپت، توصیه می‌کنیم ابتدا با بخش <Link to="/basics" className="text-blue-600 font-medium prompt-link">اصول اولیه مهندسی پرامپت</Link> شروع کنید و پس از درک مفاهیم پایه، به بخش‌های تخصصی‌تر بروید.
              </p>
              
              <p className="mt-4">
                هر بخش این راهنما شامل توضیحات مفصل، مثال‌های عملی و نکات کاربردی است که به شما کمک می‌کند مفاهیم را به خوبی درک کنید و در عمل از آنها بهره ببرید.
              </p>
              
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 rounded-lg shadow-md my-6">
                <h3 className="text-xl font-bold mb-3">درخواست همکاری جامعه</h3>
                <p>
                  برای پیشرفت و توسعه دانش مهندسی پرامپت در جامعه فارسی‌زبان، ما به همکاری و مشارکت شما نیاز داریم. تجربیات، نمونه‌ها و دیدگاه‌های خود را با ما به اشتراک بگذارید تا بتوانیم این راهنما را غنی‌تر و کاربردی‌تر کنیم.
                </p>
              </div>
            </ArticleSection>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
