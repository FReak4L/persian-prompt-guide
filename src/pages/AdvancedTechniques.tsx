
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ArticleSection from '@/components/ArticleSection';
import Blockquote from '@/components/Blockquote';
import CodeBlock from '@/components/CodeBlock';
import { Link } from 'react-router-dom';

const AdvancedTechniques = () => {
  return (
    <PageLayout initialSection="advanced-techniques">
      <ArticleSection id="advanced-techniques" title="تکنیک‌های پیشرفته" delay={0}>
        <p>
          علاوه بر تکنیک‌های پایه، روش‌های پیشرفته‌تری نیز برای بهبود عملکرد مدل‌های زبانی و حل مسائل پیچیده‌تر وجود دارد. این تکنیک‌ها معمولاً ترکیبی از روش‌های پایه هستند یا از مفاهیم پیشرفته‌تر استفاده می‌کنند.
        </p>
      </ArticleSection>

      <ArticleSection id="meta-prompting" title="پرامپتینگ فراداده (Meta Prompting)" delay={1} isSubsection={true}>
        <p>
          پرامپتینگ فراداده روشی است که در آن، به جای طراحی مستقیم پرامپت‌ها، از مدل زبانی می‌خواهیم خودش پرامپت‌های مناسب را برای حل مسائل خاص تولید کند. به عبارت دیگر، "پرامپتی برای تولید پرامپت‌های بهتر" ایجاد می‌کنیم.
        </p>
        
        <p className="mt-4">
          این تکنیک به ویژه برای زمانی مفید است که نیاز به تخصص در ساخت پرامپت‌های پیچیده دارید، یا می‌خواهید پرامپت‌های خود را به سرعت بهینه کنید.
        </p>
        
        <CodeBlock language="پرامپت" variant="primary">
{`من می‌خواهم یک پرامپت مؤثر برای [موضوع خاص] ایجاد کنم. لطفاً یک پرامپت حرفه‌ای طراحی کن که:

1. شامل مقدمه، هدف و زمینه مناسب باشد
2. دستورالعمل‌های دقیق و شفاف برای مدل زبانی ارائه دهد
3. فرمت دقیق خروجی مورد انتظار را مشخص کند
4. محدودیت‌ها و معیارهای کیفی را تعیین کند
5. چند مثال برای هدایت مدل ارائه دهد

موضوع: [توضیح مختصر درباره وظیفه‌ای که می‌خواهید انجام دهید]`}
        </CodeBlock>

        <div className="bg-indigo-50 p-4 rounded-lg my-6 border border-indigo-100">
          <h3 className="font-bold text-indigo-700 mb-2">کاربردهای پرامپتینگ فراداده</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>بهینه‌سازی پرامپت‌های موجود</li>
            <li>تولید پرامپت‌های تخصصی برای حوزه‌های خاص</li>
            <li>کشف رویکردهای جدید برای مسائل دشوار</li>
            <li>شخصی‌سازی پرامپت‌ها بر اساس سبک‌ها و نیازهای مختلف</li>
          </ul>
        </div>
      </ArticleSection>

      <ArticleSection id="chain-prompting" title="زنجیره‌سازی پرامپت (Prompt Chaining)" delay={2} isSubsection={true}>
        <p>
          زنجیره‌سازی پرامپت روشی است که در آن، یک مسئله پیچیده به چندین زیرمسئله تقسیم می‌شود و هر زیرمسئله با یک پرامپت جداگانه حل می‌شود. سپس نتایج هر مرحله به عنوان ورودی به مرحله بعدی داده می‌شود.
        </p>
        
        <p className="mt-4">
          این تکنیک به ویژه برای مسائل پیچیده‌ای که نیاز به استدلال‌های طولانی یا پردازش چندمرحله‌ای دارند، مفید است. همچنین به مدیریت محدودیت‌های زمینه (context) در مدل‌های زبانی کمک می‌کند.
        </p>
        
        <div className="my-6 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-3 font-bold text-gray-700 border-b">
            مثال زنجیره‌سازی پرامپت: تحلیل و نوشتن پست وبلاگ
          </div>
          <div className="p-4">
            <ol className="list-decimal list-inside space-y-3">
              <li className="bg-blue-50 p-2 rounded">
                <span className="font-semibold">پرامپت مرحله 1 (ایده‌پردازی):</span>
                <p className="text-sm text-gray-600 mr-6 mt-1">
                  "لطفاً 5 ایده جذاب برای پست وبلاگ درباره [موضوع] تولید کن."
                </p>
              </li>
              <li className="bg-indigo-50 p-2 rounded">
                <span className="font-semibold">پرامپت مرحله 2 (انتخاب ایده):</span>
                <p className="text-sm text-gray-600 mr-6 mt-1">
                  "از میان ایده‌های زیر، کدام یک بیشترین جذابیت را برای مخاطب هدف [توضیح مخاطب] دارد؟ دلیل انتخاب خود را توضیح بده. [نتایج مرحله 1]"
                </p>
              </li>
              <li className="bg-purple-50 p-2 rounded">
                <span className="font-semibold">پرامپت مرحله 3 (طرح کلی):</span>
                <p className="text-sm text-gray-600 mr-6 mt-1">
                  "برای ایده انتخاب شده '[نتیجه مرحله 2]'، یک طرح کلی با عناوین بخش‌ها و زیربخش‌ها ایجاد کن."
                </p>
              </li>
              <li className="bg-rose-50 p-2 rounded">
                <span className="font-semibold">پرامپت مرحله 4 (نوشتن محتوا):</span>
                <p className="text-sm text-gray-600 mr-6 mt-1">
                  "با استفاده از طرح کلی زیر، یک پست وبلاگ کامل با مقدمه، بخش‌های اصلی و نتیجه‌گیری بنویس. [نتیجه مرحله 3]"
                </p>
              </li>
              <li className="bg-amber-50 p-2 rounded">
                <span className="font-semibold">پرامپت مرحله 5 (ویرایش و بهبود):</span>
                <p className="text-sm text-gray-600 mr-6 mt-1">
                  "پست وبلاگ زیر را بازبینی کن و برای بهبود خوانایی، جذابیت و SEO آن پیشنهاد بده. [نتیجه مرحله 4]"
                </p>
              </li>
            </ol>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="active-prompt" title="پرامپت فعال (Active-Prompt)" delay={3} isSubsection={true}>
        <p>
          پرامپت فعال (Active-Prompt) روشی است که از ایده‌های یادگیری فعال (Active Learning) الهام گرفته است. در این روش، مدل به طور خودکار نمونه‌هایی را انتخاب می‌کند که بیشترین عدم قطعیت را در آنها دارد و برای این نمونه‌ها از انسان توضیح می‌خواهد.
        </p>
        
        <p className="mt-4">
          این تکنیک به ویژه برای تطبیق بهتر مدل با وظایف خاص و بهبود عملکرد آن در موارد چالش‌برانگیز مفید است. همچنین از منابع انسانی به صورت بهینه‌تری استفاده می‌کند.
        </p>
        
        <div className="bg-green-50 p-4 rounded-lg my-6 border border-green-100">
          <h3 className="font-bold text-green-800 mb-2">مزایای Active-Prompt</h3>
          <ul className="list-disc list-inside mr-5 space-y-1 text-green-700">
            <li>استفاده بهینه از منابع انسانی برای حاشیه‌نویسی</li>
            <li>بهبود عملکرد مدل در موارد چالش‌برانگیز</li>
            <li>افزایش دقت با داده‌های آموزشی کمتر</li>
            <li>شناسایی خودکار نقاط ضعف مدل</li>
          </ul>
        </div>
        
        <CodeBlock language="فرآیند Active-Prompt">
{`# مرحله 1: تخمین عدم قطعیت
مدل چندین پاسخ برای هر سؤال تولید می‌کند و میزان تفاوت بین پاسخ‌ها به عنوان معیار عدم قطعیت استفاده می‌شود.

# مرحله 2: انتخاب موارد چالش‌برانگیز
سؤالاتی که بیشترین عدم قطعیت را دارند برای حاشیه‌نویسی توسط انسان انتخاب می‌شوند.

# مرحله 3: حاشیه‌نویسی انسانی
متخصصان انسانی استدلال‌های Chain-of-Thought و پاسخ‌های صحیح را برای موارد انتخاب شده ارائه می‌دهند.

# مرحله 4: یادگیری و بهبود
مدل از حاشیه‌نویسی‌های انسانی یاد می‌گیرد و عملکرد خود را در موارد مشابه بهبود می‌بخشد.`}
        </CodeBlock>
      </ArticleSection>

      <ArticleSection id="automatic-pe" title="مهندس پرامپت خودکار (APE)" delay={4} isSubsection={true}>
        <p>
          مهندس پرامپت خودکار (Automatic Prompt Engineer یا APE) یک تکنیک پیشرفته است که به صورت خودکار پرامپت‌های بهینه را کشف و تولید می‌کند. در این روش، مدل به جستجوی فضای پرامپت‌های ممکن می‌پردازد و بهترین پرامپت را برای یک وظیفه خاص پیدا می‌کند.
        </p>
        
        <p className="mt-4">
          این تکنیک فرآیند طراحی پرامپت را که معمولاً یک فرآیند دستی و مبتنی بر آزمون و خطاست، خودکار می‌کند و می‌تواند پرامپت‌هایی را کشف کند که از پرامپت‌های طراحی شده توسط انسان بهتر عمل می‌کنند.
        </p>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden my-6">
          <div className="flex border-b">
            <div className="w-1/2 p-3 font-bold border-l bg-rose-50 text-rose-700">طراحی دستی پرامپت</div>
            <div className="w-1/2 p-3 font-bold bg-blue-50 text-blue-700">مهندس پرامپت خودکار (APE)</div>
          </div>
          <div className="flex">
            <div className="w-1/2 p-4 border-l text-sm space-y-2">
              <p>• فرآیند زمان‌بر و مبتنی بر آزمون و خطا</p>
              <p>• محدود به تجربه و دانش طراح پرامپت</p>
              <p>• امکان بررسی تعداد محدودی از گزینه‌ها</p>
              <p>• وابسته به شهود و دانش تجربی</p>
            </div>
            <div className="w-1/2 p-4 text-sm space-y-2">
              <p>• بررسی خودکار فضای وسیعی از پرامپت‌ها</p>
              <p>• کشف الگوهای غیرمنتظره و مؤثر</p>
              <p>• بهینه‌سازی مبتنی بر معیارهای عینی</p>
              <p>• بهبود مداوم با یادگیری از نتایج قبلی</p>
            </div>
          </div>
        </div>
        
        <CodeBlock language="مثال APE">
{`# APE توانست پرامپت zero-shot CoT زیر را کشف کند:
"Let's work this out in a step by step way to be sure we have the right answer."

# این پرامپت کشف شده توسط APE، عملکرد بهتری نسبت به پرامپت‌های دستی رایج مانند:
"Let's think step by step."

# نشان داد و در آزمایش‌های مختلف به نتایج دقیق‌تری منجر شد.`}
        </CodeBlock>
      </ArticleSection>

      <ArticleSection id="pal" title="مدل‌های زبانی با کمک برنامه (PAL)" delay={5} isSubsection={true}>
        <p>
          مدل‌های زبانی با کمک برنامه (Program-Aided Language Models یا PAL) رویکردی است که توانایی‌های مدل‌های زبانی را با قدرت برنامه‌نویسی ترکیب می‌کند. در این روش، مدل زبانی برای درک مسئله و نوشتن کد برنامه برای حل آن استفاده می‌شود.
        </p>
        
        <p className="mt-4">
          مزیت اصلی PAL این است که برای محاسبات دقیق و استدلال‌های پیچیده، از مفسر برنامه‌نویسی (مانند پایتون) استفاده می‌کند که دقت بیشتری نسبت به محاسبات درون متنی مدل زبانی دارد.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg my-6 border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-2">فرآیند PAL در چهار مرحله</h3>
          <ol className="list-decimal list-inside space-y-2 mr-4">
            <li>مدل زبانی <span className="font-semibold">مسئله را درک</span> می‌کند</li>
            <li>مدل زبانی <span className="font-semibold">یک برنامه</span> (معمولاً به زبان پایتون) برای حل مسئله <span className="font-semibold">تولید می‌کند</span></li>
            <li>برنامه تولید شده <span className="font-semibold">اجرا</span> می‌شود</li>
            <li>نتیجه اجرای برنامه به عنوان <span className="font-semibold">پاسخ نهایی</span> ارائه می‌شود</li>
          </ol>
        </div>
        
        <CodeBlock language="مثال PAL">
{`# درخواست مسئله ریاضی:
"علی 5 توپ تنیس دارد. او 2 بسته دیگر توپ تنیس می‌خرد. هر بسته 3 توپ دارد. حالا علی چند توپ تنیس دارد؟"

# پاسخ مدل با استفاده از PAL:
"""
برای حل این مسئله، باید محاسبه کنیم که علی در نهایت چند توپ خواهد داشت.

\`\`\`python
# توپ‌های اولیه علی
initial_balls = 5

# تعداد بسته‌های جدید
new_packages = 2

# تعداد توپ در هر بسته
balls_per_package = 3

# محاسبه کل توپ‌های جدید
new_balls = new_packages * balls_per_package

# محاسبه کل توپ‌ها
total_balls = initial_balls + new_balls

print(total_balls)
\`\`\`

اجرای کد بالا نتیجه 11 را نشان می‌دهد. بنابراین، علی 11 توپ تنیس دارد.
"""

# اجرای کد برنامه نویسی:
# 5 + (2 * 3) = 11

# پاسخ نهایی: 11`}
        </CodeBlock>
        
        <div className="mt-8 text-center">
          <Link 
            to="/models" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            مشاهده مدل‌های زبانی و کاربردها
          </Link>
        </div>
      </ArticleSection>
    </PageLayout>
  );
};

export default AdvancedTechniques;
