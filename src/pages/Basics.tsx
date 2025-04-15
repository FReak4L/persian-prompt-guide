
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ArticleSection from '@/components/ArticleSection';
import Blockquote from '@/components/Blockquote';
import CodeBlock from '@/components/CodeBlock';
import { Link } from 'react-router-dom';

const Basics = () => {
  return (
    <PageLayout initialSection="basics">
      <ArticleSection id="basics" title="اصول اولیه مهندسی پرامپت" delay={0} variant="highlight">
        <p>
          مهندسی پرامپت (Prompt Engineering) شامل طراحی، ساخت، بهینه‌سازی و ارزیابی دستورالعمل‌هایی است که به مدل‌های زبانی داده می‌شود. این مهارت به شما کمک می‌کند تا پاسخ‌های دقیق‌تر، مرتبط‌تر و مفیدتری از هوش مصنوعی دریافت کنید.
        </p>
      </ArticleSection>
      
      <ArticleSection id="basics-what" title="مهندسی پرامپت چیست؟" delay={1} isSubsection={true}>
        <p>
          مهندسی پرامپت فرآیند طراحی و بهینه‌سازی دستورالعمل‌هایی است که به مدل‌های زبانی بزرگ مانند GPT-4 داده می‌شود تا پاسخ‌های مطلوب و دقیقی دریافت کنید. این فرآیند شامل انتخاب دقیق کلمات، ساختار و زمینه‌ای است که پرامپت در آن ارائه می‌شود.
        </p>
        
        <p className="mt-4">
          کیفیت نتایج به دست آمده از یک مدل زبانی به طور قابل توجهی تحت تأثیر میزان اطلاعات و نحوه ساختاردهی آن در پرامپت قرار دارد. پرامپت خوب مانند نقشه‌ای دقیق است که هوش مصنوعی را به مقصد مورد نظر شما هدایت می‌کند.
        </p>
        
        <p className="mt-3 font-semibold text-indigo-700">
          یک مهندس پرامپت خوب می‌داند چگونه:
        </p>
        
        <ul className="list-disc list-inside mr-5 my-4 space-y-2">
          <li>مسئله را به درستی <span className="text-blue-600 font-medium">تعریف</span> کند</li>
          <li>دستورالعمل‌های <span className="text-blue-600 font-medium">شفاف و دقیق</span> بنویسد</li>
          <li>زمینه و محدودیت‌های لازم را <span className="text-blue-600 font-medium">مشخص</span> کند</li>
          <li>پرامپت را <span className="text-blue-600 font-medium">آزمایش و بهینه‌سازی</span> کند</li>
          <li>نتایج را <span className="text-blue-600 font-medium">ارزیابی و اصلاح</span> کند</li>
        </ul>
      </ArticleSection>
      
      <ArticleSection id="basics-why" title="چرا مهندسی پرامپت مهم است؟" delay={2} isSubsection={true}>
        <p>
          مهندسی پرامپت به دلایل زیر اهمیت دارد:
        </p>
        
        <ul className="list-disc list-inside mr-5 my-4 space-y-2">
          <li><span className="text-emerald-600 font-medium">افزایش دقت و کیفیت</span> پاسخ‌های دریافتی از مدل‌های زبانی</li>
          <li><span className="text-emerald-600 font-medium">کاهش سوگیری و خطاهای</span> مدل</li>
          <li><span className="text-emerald-600 font-medium">بهینه‌سازی هزینه و زمان</span> استفاده از خدمات هوش مصنوعی</li>
          <li>دستیابی به نتایج <span className="text-emerald-600 font-medium">خلاقانه‌تر و کاربردی‌تر</span></li>
          <li><span className="text-emerald-600 font-medium">کنترل بیشتر</span> بر خروجی مدل‌های زبانی</li>
        </ul>
        
        <Blockquote>
          پرامپت خوب مانند نقشه‌ای دقیق است که هوش مصنوعی را به مقصد مورد نظر شما هدایت می‌کند.
        </Blockquote>
        
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg font-bold text-blue-800 mb-4">انواع اساسی پرامپت‌ها</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">پرامپت‌های ساده</h4>
              <p className="text-sm">
                ابتدایی‌ترین شکل ورودی به مدل‌های زبانی که معمولاً برای کارهای پیچیده یا دقیق مناسب نیستند. مثال: "آسمان..."
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">پرامپت‌های پرسشی/دستوری</h4>
              <p className="text-sm">
                شامل طرح یک سؤال مستقیم یا ارائه یک دستورالعمل واضح. مثال: "مهندسی پرامپت چیست؟"
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">پرامپتینگ Zero-shot</h4>
              <p className="text-sm">
                درخواست مستقیم از مدل بدون ارائه هیچ مثال یا نمایشی. مناسب برای مدل‌های بزرگ تنظیم‌شده برای پیروی از دستورالعمل‌ها.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">پرامپتینگ Few-shot</h4>
              <p className="text-sm">
                ارائه چند مثال یا نمایش از وظیفه مورد نظر همراه با پرامپت اصلی. مناسب برای وظایف پیچیده‌تر و خاص.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/techniques" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            مشاهده تکنیک‌های مهندسی پرامپت
          </Link>
        </div>
      </ArticleSection>
      
      <ArticleSection id="basics-definition" title="تعریف پرامپت و انواع آن" delay={3}>
        <p>
          پرامپت، در واقع ورودی‌ای است که به یک مدل زبانی ارائه می‌شود تا پاسخ آن را هدایت کند. این ورودی می‌تواند شامل یک دستورالعمل یا سؤال، همراه با متن، ورودی‌ها یا مثال‌هایی باشد تا به مدل کمک کند آنچه را که کاربر می‌خواهد انجام دهد، درک کند.
        </p>
        
        <p className="mt-4">
          کیفیت نتایج به دست آمده از یک مدل زبانی به طور قابل توجهی تحت تأثیر میزان اطلاعات و نحوه ساختاردهی آن در پرامپت قرار دارد. یک پرامپت خوب طراحی شده می‌تواند تفاوت بزرگی در دقت، مرتبط بودن و مفید بودن پاسخ ایجاد کند.
        </p>
        
        <CodeBlock language="مثال ساده" variant="primary">
{`// پرامپت ساده (Zero-shot)
لطفاً مزایا و معایب انرژی خورشیدی را فهرست کنید.

// پرامپت با زمینه (Zero-shot با زمینه)
به عنوان یک متخصص انرژی‌های تجدیدپذیر، لطفاً مزایا و معایب انرژی خورشیدی را از نظر اقتصادی، زیست‌محیطی و عملیاتی فهرست کنید.

// پرامپت Few-shot
مثال 1:
سؤال: مزایا و معایب خودروهای برقی چیست؟
پاسخ:
مزایا:
- کاهش آلودگی هوا و انتشار گازهای گلخانه‌ای
- هزینه‌های عملیاتی پایین‌تر
- نیاز به تعمیر و نگهداری کمتر
- عملکرد بهتر در شتاب‌گیری

معایب:
- محدودیت در مسافت قابل پیمایش
- زمان طولانی شارژ
- کمبود ایستگاه‌های شارژ
- قیمت اولیه بالاتر

سؤال جدید: مزایا و معایب انرژی خورشیدی چیست؟`}
        </CodeBlock>
      </ArticleSection>
    </PageLayout>
  );
};

export default Basics;
