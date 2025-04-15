
import React from 'react';
import Header from '@/components/Header';
import TableOfContents from '@/components/TableOfContents';
import ArticleSection from '@/components/ArticleSection';
import Blockquote from '@/components/Blockquote';
import CodeBlock from '@/components/CodeBlock';
import { cn } from '@/lib/utils';

const BestPracticesPage = () => {
  const [tocVisible, setTocVisible] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('design-principles');

  const toggleToc = () => {
    setTocVisible(!tocVisible);
  };

  React.useEffect(() => {
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
      } else if (window.innerWidth < 768 && tocVisible) {
        setTocVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on load

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [tocVisible]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header toggleToc={toggleToc} tocVisible={tocVisible} />
      
      <div className="flex flex-1 pt-16">
        <TableOfContents 
          visible={tocVisible} 
          onClose={() => setTocVisible(false)} 
          activeSection={activeSection}
        />
        
        <main className={cn(
          "flex-1 transition-all duration-300 w-full",
          tocVisible ? "md:mr-72" : ""
        )}>
          <div className="container mx-auto px-4 py-8 md:py-12">
            <ArticleSection id="design-principles" title="اصول طراحی پرامپت مؤثر" delay={0}>
              <p>
                برای طراحی پرامپت‌های مؤثر، رعایت اصول زیر بسیار مهم است:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-700 mb-3">اصل وضوح و دقت</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3">
                    <li>از دستورالعمل‌های شفاف و بدون ابهام استفاده کنید</li>
                    <li>منظور خود را با جزئیات کافی توضیح دهید</li>
                    <li>از اصطلاحات تخصصی مناسب استفاده کنید</li>
                    <li>سؤالات دوپهلو یا گیج‌کننده را اصلاح کنید</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h3 className="font-bold text-indigo-700 mb-3">اصل تقسیم‌بندی مسئله</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3">
                    <li>مسائل پیچیده را به گام‌های کوچکتر تقسیم کنید</li>
                    <li>از مدل بخواهید مراحل حل را نشان دهد</li>
                    <li>مشکلات چندبخشی را با ترتیب منطقی ارائه دهید</li>
                    <li>از تکنیک زنجیره‌سازی پرامپت استفاده کنید</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h3 className="font-bold text-purple-700 mb-3">اصل هدایت فرآیند استدلال</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3">
                    <li>از مدل بخواهید گام به گام فکر کند</li>
                    <li>مسیر استدلال را با پرسش‌های هدایت‌کننده مشخص کنید</li>
                    <li>از تکنیک‌های Chain of Thought استفاده کنید</li>
                    <li>نقاط مرجع و معیارهای ارزیابی ارائه دهید</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h3 className="font-bold text-green-700 mb-3">اصل کنترل خروجی</h3>
                  <ul className="list-disc list-inside space-y-2 mr-3">
                    <li>فرمت دقیق پاسخ مورد انتظار را مشخص کنید</li>
                    <li>محدودیت‌های طول و سبک را تعیین کنید</li>
                    <li>معیارهای ارزیابی کیفیت پاسخ را ارائه دهید</li>
                    <li>در صورت نیاز، ساختار مشخصی برای خروجی تعیین کنید</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg my-6 border border-amber-100">
                <h3 className="font-bold text-amber-700 mb-3">اصل بازخورد و تکرار</h3>
                <p className="mb-4">بهترین پرامپت‌ها معمولاً حاصل چندین دور بازخورد و اصلاح هستند:</p>
                <ol className="list-decimal list-inside space-y-2 mr-5">
                  <li><span className="font-semibold">آزمایش اولیه:</span> پرامپت اولیه را تست کنید</li>
                  <li><span className="font-semibold">ارزیابی نتایج:</span> خروجی را با انتظارات خود مقایسه کنید</li>
                  <li><span className="font-semibold">شناسایی مشکلات:</span> نقاط ضعف یا ابهامات را پیدا کنید</li>
                  <li><span className="font-semibold">اصلاح پرامپت:</span> بر اساس بازخوردها، پرامپت را بهبود دهید</li>
                  <li><span className="font-semibold">تکرار فرآیند:</span> پرامپت اصلاح شده را دوباره آزمایش کنید</li>
                </ol>
              </div>

              <Blockquote variant="success">
                پرامپت‌های عالی از تکرار و بهبود مداوم به دست می‌آیند. هر بار که با یک مدل زبانی تعامل می‌کنید، فرصتی برای یادگیری و بهبود روش‌های پرامپتینگ خود دارید.
              </Blockquote>
            </ArticleSection>
            
            <ArticleSection id="practices" title="بهترین شیوه‌های عملی" delay={1}>
              <p>
                برای دستیابی به نتایج بهتر در مهندسی پرامپت، رعایت این اصول توصیه می‌شود:
              </p>
              
              <ul className="list-disc list-inside mr-5 my-4 space-y-2">
                <li><strong className="text-blue-700">شفافیت و دقت:</strong> دستورالعمل‌ها را واضح، دقیق و بدون ابهام بنویسید.</li>
                <li><strong className="text-blue-700">ساختاردهی:</strong> پرامپت‌ها را به بخش‌های منطقی تقسیم کنید (مقدمه، زمینه، وظیفه، محدودیت‌ها).</li>
                <li><strong className="text-blue-700">ارائه نمونه:</strong> در صورت امکان، نمونه‌های خوب و بد را برای هدایت مدل ارائه دهید.</li>
                <li><strong className="text-blue-700">تعیین نقش:</strong> نقش مشخصی برای مدل زبانی تعریف کنید (مثلاً "مانند یک معلم ریاضی پاسخ دهید").</li>
                <li><strong className="text-blue-700">محدودسازی:</strong> محدودیت‌های پاسخ را مشخص کنید (طول، فرمت، سبک).</li>
                <li><strong className="text-blue-700">تکرار و بازنگری:</strong> پرامپت‌ها را مرتباً آزمایش کرده و بر اساس نتایج بهبود دهید.</li>
              </ul>
              
              <Blockquote variant="success">
                بهترین پرامپت‌ها حاصل آزمون و خطاهای متعدد هستند. از اصلاح و بهبود مداوم نترسید.
              </Blockquote>

              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-5 rounded-lg border border-blue-200 my-6">
                <h3 className="font-bold text-xl mb-4 text-indigo-700">فهرست بررسی پرامپت مؤثر</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-white p-1 rounded-full border border-indigo-300 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-800">آیا هدف پرامپت واضح است؟</p>
                      <p className="text-sm text-indigo-600">مشخص کنید دقیقاً چه نتیجه‌ای می‌خواهید.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-1 rounded-full border border-indigo-300 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-800">آیا اطلاعات زمینه‌ای کافی ارائه شده است؟</p>
                      <p className="text-sm text-indigo-600">برای پاسخ دقیق، مدل به زمینه مناسب نیاز دارد.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-1 rounded-full border border-indigo-300 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-800">آیا دستورالعمل‌ها به ترتیب منطقی ارائه شده‌اند؟</p>
                      <p className="text-sm text-indigo-600">ترتیب دستورالعمل‌ها بر کیفیت پاسخ تأثیر می‌گذارد.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-1 rounded-full border border-indigo-300 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-800">آیا فرمت پاسخ مورد انتظار مشخص شده است؟</p>
                      <p className="text-sm text-indigo-600">تعیین دقیق فرمت، ساختار پاسخ را بهبود می‌بخشد.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-1 rounded-full border border-indigo-300 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-800">آیا مثال‌های کافی ارائه شده‌اند؟</p>
                      <p className="text-sm text-indigo-600">مثال‌ها می‌توانند به درک بهتر مدل از وظیفه کمک کنند.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ArticleSection>
            
            <ArticleSection id="prompt-patterns" title="الگوهای پرامپت" delay={2}>
              <p>
                الگوهای پرامپت (Prompt Patterns) قالب‌های ساختاری آزمایش شده‌ای هستند که می‌توانید برای ساخت پرامپت‌های مؤثر از آنها استفاده کنید. این الگوها مانند طرح‌های آماده عمل می‌کنند و می‌توانند برای کاربردهای مختلف شخصی‌سازی شوند.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-700 mb-3">الگوی نقش‌دهی (Persona Pattern)</h3>
                  <p className="text-gray-600 mb-3">به مدل یک نقش یا شخصیت خاص می‌دهد تا از آن دیدگاه پاسخ دهد.</p>
                  <div className="bg-white p-3 rounded border border-blue-100 text-sm">
                    <code>
                      شما یک [نقش/متخصص] با [ویژگی‌ها/تخصص‌ها] هستید. لطفاً به این سؤال پاسخ دهید: [سؤال]
                    </code>
                  </div>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-700 mb-3">الگوی قدم به قدم (Step-by-Step Pattern)</h3>
                  <p className="text-gray-600 mb-3">از مدل می‌خواهد فرآیند حل مسئله را گام به گام نشان دهد.</p>
                  <div className="bg-white p-3 rounded border border-purple-100 text-sm">
                    <code>
                      لطفاً این مسئله را گام به گام حل کنید. هر مرحله را با جزئیات توضیح دهید: [مسئله]
                    </code>
                  </div>
                </div>

                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-700 mb-3">الگوی دیدگاه‌های متقابل (Contrasting Viewpoints)</h3>
                  <p className="text-gray-600 mb-3">از مدل می‌خواهد چندین دیدگاه مختلف درباره یک موضوع ارائه دهد.</p>
                  <div className="bg-white p-3 rounded border border-green-100 text-sm">
                    <code>
                      سه دیدگاه مختلف و متقابل درباره [موضوع] ارائه دهید. هر دیدگاه را با استدلال‌های قوی پشتیبانی کنید.
                    </code>
                  </div>
                </div>

                <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-amber-700 mb-3">الگوی نقد و اصلاح (Critique and Revise)</h3>
                  <p className="text-gray-600 mb-3">از مدل می‌خواهد محتوایی را ارزیابی و سپس بهبود دهد.</p>
                  <div className="bg-white p-3 rounded border border-amber-100 text-sm">
                    <code>
                      لطفاً [محتوا] را نقد کنید، نقاط ضعف آن را شناسایی کنید و سپس نسخه بهبودیافته آن را ارائه دهید.
                    </code>
                  </div>
                </div>
              </div>

              <Blockquote variant="info">
                ترکیب الگوهای مختلف می‌تواند به نتایج بهتری منجر شود. برای مثال، می‌توانید الگوی نقش‌دهی را با الگوی قدم به قدم ترکیب کنید.
              </Blockquote>
            </ArticleSection>

            <ArticleSection id="examples" title="نمونه‌های کاربردی" delay={3}>
              <p>
                در این بخش، چند نمونه کاربردی از پرامپت‌های بهینه‌شده برای موقعیت‌های مختلف ارائه می‌شود:
              </p>
              
              <CodeBlock language="مثال ۱: خلاصه‌سازی متن" variant="primary">
{`لطفاً متن زیر را در حداکثر ۳ پاراگراف خلاصه کنید. نکات کلیدی را حفظ کرده و سبک نوشتاری رسمی را رعایت کنید:

[متن مورد نظر برای خلاصه‌سازی]`}
              </CodeBlock>
              
              <CodeBlock language="مثال ۲: تحلیل داده" variant="secondary">
{`داده‌های زیر مربوط به فروش ماهانه یک فروشگاه در سال ۱۴۰۲ است. لطفاً آن‌ها را تحلیل کنید و روندها، نقاط قوت و فرصت‌های بهبود را مشخص کنید. نتایج را به صورت بندهای مجزا با عناوین مشخص ارائه دهید.

[داده‌های فروش ماهانه]`}
              </CodeBlock>
              
              <CodeBlock language="مثال ۳: نوشتن ایمیل کاری">
{`لطفاً یک ایمیل کاری با شرایط زیر بنویسید:
- موضوع: درخواست تمدید مهلت پروژه
- گیرنده: مدیر پروژه (آقای محمدی)
- دلیل: تأخیر در تحویل مواد اولیه از تأمین‌کننده
- مهلت جدید درخواستی: ۲ هفته
- لحن: مؤدبانه اما رسمی
- طول: حداکثر ۱۵۰ کلمه`}
              </CodeBlock>

              <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-5 rounded-lg border border-pink-100 my-6">
                <h3 className="text-pink-700 font-bold text-lg mb-2">نکته مهم:</h3>
                <p className="text-gray-700">
                  برای دریافت بهترین نتیجه از این پرامپت‌ها، می‌توانید آنها را با توجه به نیازهای خاص خود شخصی‌سازی کنید. افزودن جزئیات بیشتر و محدودیت‌های دقیق‌تر معمولاً منجر به نتایج بهتر می‌شود.
                </p>
              </div>
            </ArticleSection>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BestPracticesPage;
