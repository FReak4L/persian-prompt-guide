
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ArticleSection from '@/components/ArticleSection';
import CodeBlock from '@/components/CodeBlock';
import Blockquote from '@/components/Blockquote';

const TechniquesPage = () => {
  return (
    <PageLayout initialSection="techniques">
      <ArticleSection id="techniques" title="تکنیک‌های مهندسی پرامپت" delay={0}>
        <p>
          تکنیک‌های مختلفی در مهندسی پرامپت وجود دارد که به شما کمک می‌کند پاسخ‌های بهتری از مدل‌های زبانی دریافت کنید. در ادامه به برخی از مهم‌ترین این تکنیک‌ها می‌پردازیم.
        </p>
        
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg my-6 border border-purple-100">
          <p className="text-purple-800 font-medium">
            با تسلط بر این تکنیک‌ها، می‌توانید تعامل بسیار مؤثرتری با مدل‌های زبانی بزرگ داشته باشید و از آنها برای حل مسائل پیچیده استفاده کنید.
          </p>
        </div>
      </ArticleSection>
      
      <ArticleSection id="techniques-zero" title="پرامپت‌های ساده (Zero-shot)" delay={1} isSubsection={true}>
        <p>
          در این روش، بدون ارائه هیچ مثال یا نمونه‌ای، از مدل زبانی می‌خواهید وظیفه‌ای را انجام دهد. این روش برای وظایف ساده یا مواردی که مدل قبلاً با آن‌ها آشنا است، مناسب است.
        </p>
        
        <p className="mt-4">
          پرامپتینگ Zero-shot به طور خاص برای تعامل با مدل‌های زبانی بزرگی استفاده می‌شود که برای پیروی از دستورالعمل‌ها تنظیم شده‌اند و قادرند وظایف خاصی را بدون هیچ نمونه قبلی انجام دهند.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/b85f30ce-5ca7-409a-80e3-007425ba75d4.png" 
            alt="مقایسه Standard Prompting و Chain-of-Thought Prompting" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 1: مقایسه بین پرامپت‌های ساده (چپ) و پرامپت‌های Chain-of-Thought (راست)
          </p>
        </div>
        
        <CodeBlock language="پرامپت" variant="primary">
{`لطفاً مزایا و معایب انرژی خورشیدی را فهرست کنید.`}
        </CodeBlock>

        <h3 className="font-bold text-lg mt-6 mb-2 text-indigo-700">مزایا و محدودیت‌های روش Zero-shot</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-100">
            <h4 className="font-bold text-green-700 mb-2">مزایا</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>ساده و سریع</li>
              <li>نیازی به آماده‌سازی مثال‌ها نیست</li>
              <li>مناسب برای وظایف متداول و ساده</li>
              <li>مصرف توکن کمتر</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
            <h4 className="font-bold text-amber-700 mb-2">محدودیت‌ها</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>دقت کمتر در وظایف پیچیده</li>
              <li>عملکرد ضعیف‌تر در وظایف غیرمعمول</li>
              <li>کنترل کمتر روی فرمت خروجی</li>
              <li>نیاز به اطلاعات زمینه‌ای بیشتر</li>
            </ul>
          </div>
        </div>
      </ArticleSection>
      
      <ArticleSection id="techniques-few" title="پرامپت‌های نمونه‌دار (Few-shot)" delay={2} isSubsection={true}>
        <p>
          در این روش، چند نمونه از ورودی و خروجی مورد انتظار را به مدل ارائه می‌دهید تا الگوی مورد نظر را دریابد. این روش برای وظایف پیچیده‌تر مناسب است.
        </p>
        
        <p className="mt-4">
          توانایی LLMها برای استفاده مؤثر از پرامپتینگ few-shot زمانی ظاهر می‌شود که مدل‌ها به اندازه کافی بزرگ شوند. اگر پرامپتینگ zero-shot نتایج مطلوب را به دست ندهد، توصیه می‌شود که مثال‌هایی در پرامپت ارائه شود که منجر به پرامپتینگ few-shot می‌شود.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/23d8d099-39e6-4125-ba33-d1b6f1514637.png" 
            alt="Auto Demos و In-Context Reasoning" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 2: نمونه‌ای از Few-shot Prompting با ارائه مثال‌های In-Context
          </p>
        </div>
        
        <CodeBlock language="پرامپت" variant="secondary">
{`مثال‌های زیر را مشاهده کنید:

ورودی: این فیلم فوق‌العاده بود!
احساس: مثبت

ورودی: واقعاً از خرید این محصول پشیمانم.
احساس: منفی

ورودی: کتاب جالبی بود، اما پایان آن را دوست نداشتم.
احساس: مختلط

ورودی: سرویس مشتری این شرکت افتضاح است.
احساس:`}
        </CodeBlock>

        <h3 className="font-bold text-lg mt-6 mb-2 text-indigo-700">نکات کلیدی برای Few-shot Prompting</h3>
        
        <ul className="list-disc list-inside mr-5 my-4 space-y-2">
          <li><span className="font-semibold">انتخاب مثال‌های متنوع:</span> مثال‌هایی را انتخاب کنید که طیف وسیعی از حالت‌ها را پوشش دهند.</li>
          <li><span className="font-semibold">فرمت یکسان:</span> از یک قالب یکسان برای همه مثال‌ها استفاده کنید.</li>
          <li><span className="font-semibold">تعداد مناسب:</span> معمولاً ۳ تا ۵ مثال کافی است؛ تعداد بیشتر لزوماً به نتایج بهتر منجر نمی‌شود.</li>
          <li><span className="font-semibold">ترتیب مثال‌ها:</span> گاهی ترتیب مثال‌ها می‌تواند بر نتیجه تأثیر بگذارد.</li>
        </ul>
      </ArticleSection>
      
      <ArticleSection id="techniques-cot" title="زنجیره استدلال (Chain of Thought)" delay={3} isSubsection={true}>
        <p>
          این تکنیک به مدل کمک می‌کند تا مراحل استدلال را قدم به قدم طی کند و به جای ارائه پاسخ مستقیم، فرآیند فکری خود را نشان دهد. این روش برای حل مسائل پیچیده منطقی یا ریاضی بسیار مفید است.
        </p>
        
        <p className="mt-4">
          تکنیک Chain of Thought (CoT) قابلیت‌های استدلال مدل‌های زبانی بزرگ را با تشویق آن‌ها به تولید مراحل استدلال میانی قبل از رسیدن به پاسخ نهایی، افزایش می‌دهد. این روش به ویژه برای وظایف پیچیده‌ای مؤثر است که نیاز به استدلال منطقی و حل مسئله گام به گام دارند.
        </p>
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img 
              src="/lovable-uploads/15b27914-1fb1-4b7b-ab30-197a6f6c386e.png" 
              alt="Propose و Value Prompt" 
              className="w-full shadow-md"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              تصویر 3: انواع پرامپت‌ها - Propose Prompt و Value Prompt
            </p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/03734bf7-1e54-4c68-bda9-e7494b342849.png" 
              alt="جدول مقایسه دقت روش‌های مختلف Chain of Thought" 
              className="w-full shadow-md"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              تصویر 4: مقایسه دقت روش‌های مختلف Chain of Thought
            </p>
          </div>
        </div>
        
        <Blockquote variant="info" source="پژوهش‌های Google DeepMind">
          افزودن عبارت ساده "بیایید گام به گام فکر کنیم" به پرامپت می‌تواند عملکرد مدل‌های زبانی بزرگ را در حل مسائل پیچیده تا 30٪ بهبود بخشد.
        </Blockquote>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/e616d386-4cb7-4f8b-a2c6-f1a10db8d5eb.png" 
            alt="ساختار متا پرامپت برای حل مسائل ریاضی" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 5: ساختار متا پرامپت برای حل مسائل ریاضی
          </p>
        </div>
        
        <CodeBlock language="پرامپت">
{`مسئله زیر را با نشان دادن مراحل محاسبه حل کنید:

اگر علی ۵ کتاب بخرد و هر کتاب ۳۵۰۰۰ تومان باشد، و او کارت تخفیف ۲۰٪ داشته باشد، در مجموع چقدر باید بپردازد؟

مراحل حل:`}
        </CodeBlock>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/520ace2e-0316-474a-977d-4212a04873f1.png" 
            alt="مثال‌های حل مسائل ریاضی با Chain of Thought" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 6: نمونه حل مسائل ریاضی با استفاده از Chain of Thought
          </p>
        </div>

        <h3 className="font-bold text-lg mt-6 mb-2 text-indigo-700">انواع Chain of Thought</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-2">Few-shot CoT</h4>
            <p className="text-sm">
              در این روش، چند مثال از مسائل به همراه مراحل استدلال و پاسخ آنها ارائه می‌شود تا مدل این الگو را تقلید کند.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
            <h4 className="font-bold text-indigo-700 mb-2">Zero-shot CoT</h4>
            <p className="text-sm">
              با افزودن عبارت "بیایید گام به گام فکر کنیم" یا "Let's think step by step" به پرامپت، مدل را تشویق به ارائه استدلال می‌کنیم.
            </p>
          </div>
        </div>
      </ArticleSection>
      
      <ArticleSection id="techniques-react" title="تکنیک ReAct" delay={4} isSubsection={true}>
        <p>
          ReAct (Reasoning and Acting) یک تکنیک پیشرفته است که استدلال و اقدام را با هم ترکیب می‌کند. در این روش، مدل زبانی نه تنها استدلال می‌کند، بلکه بر اساس استدلال خود اقدام نیز می‌کند و بازخورد می‌گیرد.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/b80316c6-e819-4f69-b777-c7564e633c6c.png" 
            alt="نمونه‌ای از روش ReAct" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 7: مثالی از تکنیک ReAct که شامل فکر کردن، اقدام کردن و مشاهده است
          </p>
        </div>
        
        <p className="mt-4">
          این تکنیک از سه مرحله تشکیل شده است:
        </p>
        
        <ol className="list-decimal list-inside mr-5 my-4 space-y-2">
          <li><span className="font-semibold text-purple-700">استدلال (Reasoning):</span> مدل درباره مسئله فکر می‌کند و مراحل حل آن را تحلیل می‌کند.</li>
          <li><span className="font-semibold text-purple-700">اقدام (Acting):</span> بر اساس استدلال، یک اقدام مشخص انجام می‌دهد (مانند جستجوی اطلاعات).</li>
          <li><span className="font-semibold text-purple-700">مشاهده (Observation):</span> نتایج اقدام را مشاهده و بررسی می‌کند.</li>
        </ol>
        
        <CodeBlock language="پرامپت" variant="secondary">
{`سوال: "قیمت سهام شرکت تسلا در روز گذشته چقدر بود و چه تغییری نسبت به هفته قبل داشته است؟"

استدلال: برای پاسخ به این سؤال، باید پیش‌بینی آب و هوای پاریس در هفته آینده را بررسی کنم.
اقدام: جستجوی "قیمت سهام تسلا روز گذشته"
مشاهده: قیمت سهام تسلا در روز گذشته 242.68 دلار بود.
استدلال: حالا باید قیمت هفته قبل را پیدا کنم تا بتوانم تغییرات را محاسبه کنم.
اقدام: جستجوی "قیمت سهام تسلا هفته قبل"
مشاهده: قیمت سهام تسلا در هفته قبل 220.45 دلار بود.
استدلال: حالا می‌توانم تغییرات را محاسبه کنم. 242.68 - 220.45 = 22.23 دلار افزایش داشته است.

پاسخ: قیمت سهام تسلا در روز گذشته 242.68 دلار بود که نسبت به هفته قبل 22.23 دلار (حدود 10.1%) افزایش داشته است.`}
        </CodeBlock>
      </ArticleSection>
      
      <ArticleSection id="techniques-self" title="خودسازگاری (Self-consistency)" delay={5} isSubsection={true}>
        <p>
          خودسازگاری یک تکنیک پیشرفته مهندسی پرامپت است که هدف آن بهبود دقت پرامپتینگ Chain-of-Thought با جایگزینی روش ساده "رمزگشایی حریصانه" است. این روش شامل تولید چندین مسیر استدلال متنوع و سپس انتخاب سازگارترین پاسخ در میان آن‌ها است.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/9c476cb5-205f-4dfb-adec-ef72e038e69d.png" 
            alt="مقایسه انواع تکنیک‌های استدلال" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 8: مقایسه روش‌های مختلف استدلال شامل IO، Chain of Thought، Self-Consistency و Tree of Thoughts
          </p>
        </div>
        
        <p className="mt-4">
          ایده اصلی این است که برای یک سؤال واحد، مدل چندین پاسخ مستقل تولید می‌کند و پاسخی که بیشتر در بین این پاسخ‌ها تکرار می‌شود یا از نظر منطقی سازگارتر است، به عنوان پاسخ نهایی انتخاب می‌شود.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/81334175-48a6-4ec3-9f98-e10719d4ed1c.png" 
            alt="مقایسه موفقیت روش‌های مختلف در بازی 24" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 9: مقایسه میزان موفقیت روش‌های مختلف در بازی 24 - خودسازگاری عملکرد بهتری نشان می‌دهد
          </p>
        </div>
        
        <CodeBlock language="پرامپت" variant="primary">
{`سوال: وقتی من 6 ساله بودم خواهرم نصف سن من را داشت. حالا من 70 ساله هستم خواهر من چند ساله است؟

استدلال 1:
وقتی من 6 ساله بودم، خواهرم نصف سن من یعنی 3 ساله بود.
تفاوت سنی ما 6 - 3 = 3 سال است.
حالا که من 70 ساله هستم، خواهرم 70 - 3 = 67 ساله است.

استدلال 2:
وقتی من 6 ساله بودم، خواهرم 3 ساله بود.
پس خواهرم همیشه 3 سال از من کوچکتر است.
حالا که من 70 ساله هستم، خواهرم 70 - 3 = 67 ساله است.

استدلال 3:
وقتی من 6 ساله بودم، خواهرم نصف سن من یعنی 3 ساله بود.
من 2 برابر سن او بودم.
پس الان هم من باید 2 برابر سن او باشم.
70 ÷ 2 = 35، پس خواهرم 35 ساله است.

پاسخ: با توجه به سازگاری بیشتر، خواهرم 67 ساله است.`}
        </CodeBlock>
        
        <div className="bg-purple-50 p-4 rounded-lg my-6 border border-purple-100">
          <h3 className="font-bold text-purple-700 mb-2">مزایای خودسازگاری</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>بهبود دقت پاسخ‌ها در وظایف استدلالی پیچیده</li>
            <li>کاهش خطاهای محاسباتی و منطقی</li>
            <li>توانایی بررسی چندین رویکرد مختلف برای حل مسئله</li>
            <li>قابلیت اطمینان بیشتر به پاسخ نهایی</li>
          </ul>
        </div>
      </ArticleSection>
      
      <ArticleSection id="techniques-tot" title="درخت افکار (Tree of Thoughts)" delay={6} isSubsection={true}>
        <p>
          درخت افکار (ToT) یک چارچوب طراحی شده برای وظایف پیچیده‌ای است که نیاز به اکتشاف و دوراندیشی استراتژیک دارند. این تکنیک به LLM اجازه می‌دهد تا با در نظر گرفتن چندین مسیر استدلال و ارزیابی انتخاب‌ها برای تعیین اقدام بعدی، تصمیم‌گیری کند.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/0bc85871-42bf-4e0e-8b1e-e7c9f112d136.png" 
            alt="برنامه‌ی تولید شده توسط LLM در روش ART" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 10: پیاده‌سازی روش درخت افکار با تقسیم‌بندی مسائل در گره‌های مختلف
          </p>
        </div>
        
        <p className="mt-4">
          ToT یک ساختار درختی از ایده‌ها ایجاد می‌کند، جایی که هر ایده یک گام میانی به سوی حل مسئله است. این رویکرد LLM را قادر می‌سازد تا "افکار" میانی خود را خودارزیابی کند و تصمیم بگیرد که آیا به آن مسیر ادامه دهد یا مسیر دیگری را انتخاب کند.
        </p>
        
        <CodeBlock language="پرامپت" variant="secondary">
{`بازی 24: چهار عدد 3، 5، 7 و 9 به شما داده شده است. با استفاده از عملیات‌های اصلی (جمع، تفریق، ضرب، تقسیم) و قراردادن پرانتز، عددی را بسازید که مقدار آن دقیقاً 24 باشد. هر عدد باید دقیقاً یک بار استفاده شود.

افکار اولیه:
1. می‌توانم (3 × 5) + (7 × 9) را امتحان کنم: 15 + 63 = 78 (خیلی بزرگ)
2. می‌توانم (5 + 3) × (9 - 7) را امتحان کنم: 8 × 2 = 16 (کمتر از 24)
3. می‌توانم (9 - 7) × (5 × 3) را امتحان کنم: 2 × 15 = 30 (بیشتر از 24)
4. می‌توانم (9 - 3) × (7 - 5) را امتحان کنم: 6 × 2 = 12 (کمتر از 24)
5. می‌توانم 9 × (5 - 3) × 7 را امتحان کنم: 9 × 2 × 7 = 126 (خیلی بزرگ)

ادامه مسیر دوم:
شاید بتوانم با عملیات دیگری به 24 برسم.
اگر (5 + 3) × (9 - 7) = 16 باشد، نیاز دارم 8 واحد دیگر اضافه کنم.
چطور است 5 × 3 + 9 را امتحان کنم: 15 + 9 = 24، اما اینجا 7 را استفاده نکرده‌ام.

رویکرد جدید:
3 × (9 - 5) = 3 × 4 = 12 (نصف 24)
چطور است: 3 × (9 - 5) × 7 را امتحان کنم: 3 × 4 × 7 = 84 (خیلی بزرگ)

رویکرد نهایی:
خب، اگر 3 × 8 = 24 باشد، پس نیاز دارم با 5، 7 و 9 عدد 8 را بسازم.
9 - 5 = 4، 4 × 2 = 8، و 2 را از کجا بیاورم؟ 7 ÷ 3 تقریباً 2.33 است.
صبر کنید!  3 × 8 = 24 و 8 = 9 - 7/5:
3 × (9 - 7/5) = 3 × (9 - 1.4) = 3 × 7.6 = 22.8 (نزدیک، اما دقیق نیست)

راه حل درست:
9 × (5 - 7/3) = 9 × (5 - 2.33...) = 9 × 2.67... = 24`}
        </CodeBlock>
        
        <div className="bg-blue-50 p-4 rounded-lg my-6 border border-blue-100">
          <h3 className="font-bold text-blue-700 mb-2">کاربردهای درخت افکار</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">مسائل پیچیده:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>استدلال ریاضی</li>
                <li>بازی‌های منطقی</li>
                <li>برنامه‌ریزی استراتژیک</li>
                <li>حل جدول کلمات متقاطع</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">کارهای خلاقانه:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>نوشتن داستان</li>
                <li>طوفان فکری</li>
                <li>طراحی محصول</li>
                <li>تولید ایده‌های نوآورانه</li>
              </ul>
            </div>
          </div>
        </div>
      </ArticleSection>
      
      <ArticleSection id="techniques-rag" title="تولید تقویت شده با بازیابی (RAG)" delay={7} isSubsection={true}>
        <p>
          تولید تقویت شده با بازیابی (RAG) یک روش برای رسیدگی به وظایف دانش‌محور برای مدل‌های زبانی است که اغلب نیاز به دسترسی به دانش خارجی فراتر از داده‌های آموزشی اولیه مدل دارند. RAG یک مؤلفه بازیابی اطلاعات را با یک مدل تولید متن ترکیب می‌کند.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/6427db6d-3b06-4961-a31e-142b8e953a76.png" 
            alt="معماری RAG" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 11: معماری سیستم RAG که ترکیبی از بازیابی اطلاعات و تولید متن است
          </p>
        </div>
        
        <p className="mt-4">
          این تکنیک به LLM اجازه می‌دهد تا در زمان تولید پاسخ، اطلاعات مرتبط و به‌روز را از منابع خارجی مانند پایگاه‌های داده، اسناد یا وب به دست آورد. این امر به بهبود دقت، مرتبط بودن و قابلیت اطمینان پاسخ‌های تولید شده کمک می‌کند و مشکل "توهم" در LLMها را کاهش می‌دهد.
        </p>
        
        <CodeBlock language="فرآیند RAG">
{`# مرحله 1: دریافت سؤال کاربر
"آخرین پیشرفت‌ها در درمان سرطان پانکراس چیست؟"

# مرحله 2: بازیابی اطلاعات مرتبط از منابع خارجی
- مقاله‌های علمی جدید
- گزارش‌های پزشکی
- اخبار پیشرفت‌های درمانی

# مرحله 3: افزودن اطلاعات بازیابی شده به پرامپت
"""
سؤال: آخرین پیشرفت‌ها در درمان سرطان پانکراس چیست؟

متن زمینه:
[مقاله 1] محققان دانشگاه X در سال 2024 ایمونوتراپی جدیدی را معرفی کردند که...
[مقاله 2] آزمایش‌های بالینی فاز 3 داروی Y نشان داده است که نرخ بقا را تا 15% افزایش می‌دهد...
[مقاله 3] رویکرد جدید جراحی با کمک هوش مصنوعی به جراحان اجازه می‌دهد تا...
"""

# مرحله 4: تولید پاسخ دقیق و به‌روز توسط LLM
"بر اساس آخرین تحقیقات، پیشرفت‌های اخیر در درمان سرطان پانکراس شامل..."

`}
        </CodeBlock>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-100">
            <h4 className="font-bold text-green-700 mb-2">مزایا</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>دسترسی به اطلاعات به‌روز و دقیق</li>
              <li>کاهش توهمات در پاسخ‌های مدل</li>
              <li>مناسب برای سؤالات تخصصی و دانش‌محور</li>
              <li>امکان استناد به منابع معتبر</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-2">کاربردها</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>پاسخگویی به سؤالات بر اساس اسناد خاص</li>
              <li>سیستم‌های پشتیبانی مشتری هوشمند</li>
              <li>تحقیقات علمی و پزشکی</li>
              <li>کمک‌رسانی حقوقی و تحلیل قراردادها</li>
            </ul>
          </div>
        </div>
      </ArticleSection>
      
      <ArticleSection id="techniques-knowledge" title="پرامپتینگ تولید دانش" delay={8} isSubsection={true}>
        <p>
          پرامپتینگ تولید دانش یک روش در مهندسی پرامپت است که در آن ابتدا از یک مدل زبانی بزرگ (LLM) برای تولید دانش مرتبط با یک سؤال یا وظیفه استفاده می‌شود و سپس این دانش تولید شده در کنار سؤال اصلی در یک پرامپت بعدی گنجانده می‌شود تا مدل را در تولید پاسخ دقیق‌تر و آگاهانه‌تر راهنمایی کند.
        </p>
        
        <div className="my-6">
          <img 
            src="/lovable-uploads/7dc8109e-1447-4a12-9325-719db778b06c.png" 
            alt="نمودار تولید دانش" 
            className="mx-auto shadow-md"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            تصویر 12: فرآیند تولید دانش و ادغام آن برای تولید پاسخ نهایی
          </p>
        </div>
        
        <p className="mt-4">
          این تکنیک به LLM اجازه می‌دهد تا قبل از ارائه پاسخ نهایی، اطلاعات زمینه‌ای یا حقایق مربوطه را از دانش درونی خود استخراج کند. هدف این روش افزایش دقت و مرتبط بودن پاسخ‌های مدل، به ویژه در مواردی است که سؤال یا وظیفه نیاز به دانش جهانی، استدلال عقل سلیم یا اطلاعات به‌روز دارد.
        </p>
        
        <CodeBlock language="پرامپت" variant="primary">
{`# مرحله 1: تولید دانش
سؤال: آیا گلف شامل تلاش برای کسب امتیاز بالاتر است؟
لطفاً قبل از پاسخ به این سؤال، حقایق و دانش مرتبط با ورزش گلف را بنویسید.

# پاسخ مدل (تولید دانش):
حقایق مرتبط با ورزش گلف:
1. گلف یک ورزش است که در آن بازیکنان با استفاده از چوب‌های مخصوص توپ را به درون چاله‌هایی در زمین گلف می‌زنند.
2. هدف اصلی در گلف زدن توپ به درون چاله با کمترین تعداد ضربه ممکن است.
3. در گلف، برخلاف بسیاری از ورزش‌های دیگر، امتیاز کمتر به معنای عملکرد بهتر است.
4. سیستم امتیازدهی در گلف بر اساس "ضربه" است، یعنی تعداد ضرباتی که برای رساندن توپ به چاله استفاده می‌شود.
5. زمین گلف استاندارد شامل 18 چاله است، و مجموع امتیازات 18 چاله نمره نهایی بازیکن را تشکیل می‌دهد.

# مرحله 2: پاسخ به سؤال با استفاده از دانش تولید شده
با توجه به حقایق بالا، آیا گلف شامل تلاش برای کسب امتیاز بالاتر است؟

# پاسخ نهایی مدل:
خیر، در گلف هدف کسب امتیاز پایین‌تر است، نه بالاتر. برخلاف بسیاری از ورزش‌ها که در آن‌ها امتیاز بیشتر بهتر است، در گلف بازیکنان تلاش می‌کنند تا با کمترین تعداد ضربه ممکن (یعنی امتیاز کمتر) توپ را به درون چاله‌ها بیندازند. بنابراین، هدف در گلف کسب کمترین امتیاز ممکن است.`}
        </CodeBlock>
        
        <div className="bg-indigo-50 p-4 rounded-lg my-6 border border-indigo-100">
          <h3 className="font-bold text-indigo-700 mb-2">مزایای پرامپتینگ تولید دانش</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>افزایش دقت پاسخ‌ها با استخراج دانش پیش از پاسخگویی</li>
            <li>کاهش خطاهای ناشی از عدم دسترسی به اطلاعات کافی</li>
            <li>بهبود توضیحات و استدلال‌های ارائه شده در پاسخ</li>
            <li>قابلیت آموزش‌دهی همراه با پاسخگویی به سؤالات</li>
          </ul>
        </div>
      </ArticleSection>
      
      <ArticleSection id="techniques-automatic" title="استدلال خودکار و استفاده از ابزار (ART)" delay={9} isSubsection={true}>
        <p>
          استدلال خودکار و استفاده از ابزار (ART) یک چارچوب است که پرامپتینگ Chain-of-Thought را با استفاده از ابزارهای خارجی به صورت متناوب برای حل وظایف پیچیده با استفاده از مدل‌های زبانی بزرگ (LLM) ترکیب می‌کند.
        </p>
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img 
              src="/lovable-uploads/c7490cb6-9ff9-4241-b22f-980f7d90d406.png" 
              alt="جدول عملکرد ART" 
              className="w-full shadow-md"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              تصویر 13: جدول مقایسه عملکرد ART در وظایف مختلف
            </p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/0dbd753a-543b-4ae7-b762-078f3f895b78.png" 
              alt="فرآیند کار ART" 
              className="w-full shadow-md"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              تصویر 14: نمونه‌ای از فرآیند کار ART با استفاده از ابزارهای خارجی
            </p>
          </div>
        </div>
        
        <p className="mt-4">
          بر خلاف روش‌های سنتی که اغلب نیاز به ایجاد دستی نمایش‌های خاص وظیفه و هماهنگی دقیق تعامل بین تولیدات مدل و استفاده از ابزار دارند، ART از یک LLM منجمد برای تولید خودکار مراحل استدلال میانی به عنوان یک برنامه استفاده می‌کند. این فرآیند شامل انتخاب نمایش‌های مرتبط و استفاده متناوب از ابزار در طول آزمایش است.
        </p>
        
        <CodeBlock language="فرآیند ART">
{`# درخواست کاربر:
"میانگین دمای هوا در پاریس در هفته آینده چقدر خواهد بود؟"

# فرآیند استدلال و استفاده از ابزار:

# استدلال 1:
برای پاسخ به این سؤال، باید پیش‌بینی آب و هوای پاریس در هفته آینده را بررسی کنم.

# استفاده از ابزار 1 (API هواشناسی):
[جستجو: پیش‌بینی آب و هوای پاریس هفته آینده]
خروجی: {
  "روز 1": {"تاریخ": "15 آوریل", "دما": {"حداقل": 10, "حداکثر": 18}},
  "روز 2": {"تاریخ": "16 آوریل", "دما": {"حداقل": 11, "حداکثر": 19}},
  "روز 3": {"تاریخ": "17 آوریل", "دما": {"حداقل": 12, "حداکثر": 20}},
  "روز 4": {"تاریخ": "18 آوریل", "دما": {"حداقل": 11, "حداکثر": 17}},
  "روز 5": {"تاریخ": "19 آوریل", "دما": {"حداقل": 9, "حداکثر": 15}},
  "روز 6": {"تاریخ": "20 آوریل", "دما": {"حداقل": 8, "حداکثر": 14}},
  "روز 7": {"تاریخ": "21 آوریل", "دما": {"حداقل": 7, "حداکثر": 13}}
}

# استدلال 2:
حالا که داده‌های پیش‌بینی آب و هوا را دارم، باید میانگین دمای هفتگی را محاسبه کنم. برای هر روز، میانگین دما را از حداقل و حداکثر محاسبه می‌کنم و سپس میانگین هفت روز را می‌گیرم.

# استفاده از ابزار 2 (محاسبات):
میانگین دمای روز 1: (10 + 18) / 2 = 14
میانگین دمای روز 2: (11 + 19) / 2 = 15
میانگین دمای روز 3: (12 + 20) / 2 = 16
میانگین دمای روز 4: (11 + 17) / 2 = 14
میانگین دمای روز 5: (9 + 15) / 2 = 12
میانگین دمای روز 6: (8 + 14) / 2 = 11
میانگین دمای روز 7: (7 + 13) / 2 = 10

میانگین کل: (14 + 15 + 16 + 14 + 12 + 11 + 10) / 7 = 92 / 7 = 13.14

# پاسخ نهایی:
میانگین دمای هوا در پاریس در هفته آینده حدود 13.14 درجه سانتی‌گراد خواهد بود.`}
        </CodeBlock>
        
        <div className="bg-amber-50 p-4 rounded-lg my-6 border border-amber-100">
          <h3 className="font-bold text-amber-700 mb-2">کاربردهای ART</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">ابزارهای عمومی:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>ماشین حساب برای محاسبات دقیق</li>
                <li>موتورهای جستجو برای اطلاعات به‌روز</li>
                <li>APIهای خارجی برای داده‌های خاص</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">وظایف پیچیده:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>برنامه‌ریزی سفر با در نظر گرفتن شرایط آب و هوایی</li>
                <li>تحلیل مالی با استفاده از داده‌های بازار</li>
                <li>تصمیم‌گیری‌های پزشکی با مراجعه به منابع معتبر</li>
              </ul>
            </div>
          </div>
        </div>
      </ArticleSection>
    </PageLayout>
  );
};

export default TechniquesPage;
