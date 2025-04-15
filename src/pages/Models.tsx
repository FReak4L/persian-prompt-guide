
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ArticleSection from '@/components/ArticleSection';

const ModelsPage = () => {
  return (
    <PageLayout initialSection="models">
      <ArticleSection id="models" title="مدل‌های زبانی و کاربردها" delay={0} variant="highlight">
        <p>
          امروزه مدل‌های زبانی متنوعی وجود دارند که هر کدام برای کاربردهای خاصی بهینه شده‌اند. آشنایی با این مدل‌ها و انتخاب مدل مناسب برای هر کار، بخشی مهم از مهندسی پرامپت است.
        </p>
        
        <p className="mt-4 font-semibold text-indigo-700 dark:text-indigo-400">
          برخی از مهم‌ترین مدل‌های زبانی عبارتند از:
        </p>
        
        <ul className="list-disc list-inside mr-5 my-4 space-y-3">
          <li className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md"><strong className="text-blue-700 dark:text-blue-400">GPT-4o و GPT-4o-mini:</strong> مدل‌های جدید OpenAI با قابلیت‌های چندرسانه‌ای و توانایی‌های پیشرفته در درک و تولید متن</li>
          <li className="bg-red-50 dark:bg-red-900/20 p-2 rounded-md"><strong className="text-red-700 dark:text-red-400">Gemini Pro و Gemini Ultra:</strong> مدل چندمودالی Google با قابلیت درک و پردازش متن، تصویر و صوت</li>
          <li className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-md"><strong className="text-purple-700 dark:text-purple-400">Claude 3 Opus و Claude 3 Sonnet:</strong> مدل‌های Anthropic با تمرکز بر ایمنی و هماهنگی با ارزش‌های انسانی</li>
          <li className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-md"><strong className="text-emerald-700 dark:text-emerald-400">Llama 3:</strong> مدل متن‌باز Meta با کارایی بالا و قابلیت اجرا در محیط‌های مختلف</li>
          <li className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded-md"><strong className="text-amber-700 dark:text-amber-400">Mistral Large و Mistral Small:</strong> مدل‌های کوچک‌تر اما کارآمد با سرعت بالا و منابع کمتر</li>
          <li className="bg-pink-50 dark:bg-pink-900/20 p-2 rounded-md"><strong className="text-pink-700 dark:text-pink-400">Phi-3 و Phi-3 Mini:</strong> مدل‌های مایکروسافت با قابلیت استدلال و توانایی کد نویسی</li>
          <li className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-md"><strong className="text-indigo-700 dark:text-indigo-400">BERT و RoBERTa:</strong> مدل‌های مبتنی بر ترنسفورمر با تمرکز بر درک متن</li>
          <li className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded-md"><strong className="text-teal-700 dark:text-teal-400">PaLM 2:</strong> مدل زبانی پیشرفته Google برای تولید متن و کد</li>
          <li className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-md"><strong className="text-orange-700 dark:text-orange-400">Cohere Command و Command R+:</strong> مدل‌های بهینه شده برای کاربردهای تجاری</li>
          <li className="bg-lime-50 dark:bg-lime-900/20 p-2 rounded-md"><strong className="text-lime-700 dark:text-lime-400">XLNet:</strong> مدل با رویکرد خودتوجه‌ای متقابل برای درک عمیق متن</li>
        </ul>
        
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white p-5 rounded-lg shadow-md my-6">
          <h3 className="text-xl font-bold mb-3">انتخاب مدل مناسب</h3>
          <p>
            انتخاب مدل مناسب باید بر اساس پیچیدگی وظیفه، نیازهای دقت، سرعت پاسخگویی، هزینه و دسترسی به API انجام شود. برای وظایف ساده‌تر، مدل‌های کوچکتر کافی هستند، در حالی که برای وظایف پیچیده‌تر، استفاده از مدل‌های قوی‌تر توصیه می‌شود.
          </p>
        </div>

        <h3 className="font-bold text-xl mt-8 mb-4 text-indigo-700 dark:text-indigo-400">مقایسه مدل‌های زبانی برتر</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-background border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="py-3 px-4 border-b text-right dark:border-gray-700">مدل</th>
                <th className="py-3 px-4 border-b text-right dark:border-gray-700">شرکت</th>
                <th className="py-3 px-4 border-b text-right dark:border-gray-700">نقاط قوت</th>
                <th className="py-3 px-4 border-b text-right dark:border-gray-700">محدودیت‌ها</th>
                <th className="py-3 px-4 border-b text-right dark:border-gray-700">کاربرد بهینه</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">GPT-4o</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">OpenAI</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">توانایی چندمودالی، دقت بالا، زمینه گسترده</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">هزینه بالا، محدودیت حافظه</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کاربردهای پیچیده ترکیبی متن و تصویر</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Claude 3 Opus</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Anthropic</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">پاسخ‌های طولانی، ایمنی بالا، دقت خوب</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کندتر از GPT-4، محدودیت در برخی زبان‌ها</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">تحلیل‌های عمیق، اسناد طولانی</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Gemini Ultra</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Google</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">ادغام با سرویس‌های گوگل، چندمودالی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کارایی متغیر در برخی وظایف</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">ادغام با محصولات گوگل، تحلیل داده</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Llama 3</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Meta</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">متن‌باز، قابلیت اجرای محلی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">نیاز به منابع سخت‌افزاری</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">استفاده‌های خصوصی، توسعه سفارشی</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Mistral Large</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Mistral AI</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">سرعت بالا، منابع کم، کارایی خوب</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">محدودیت در وظایف بسیار پیچیده</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">استفاده در دستگاه‌های با منابع محدود</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Phi-3</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Microsoft</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کارایی بالا با اندازه کوچک، کدنویسی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">محدودیت در حافظه طولانی‌مدت</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">برنامه‌نویسی، استفاده در دستگاه‌های دسکتاپ</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Cohere Command</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Cohere</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">بهینه‌سازی برای کاربردهای تجاری، RAG</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کمتر شناخته شده، پشتیبانی محدودتر</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کاربردهای بازیابی اطلاعات، چت‌بات‌های تجاری</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Claude 3 Haiku</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Anthropic</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">سرعت بالا، هزینه کم، ایمنی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">دقت کمتر نسبت به مدل‌های بزرگتر</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">پاسخگویی سریع، استفاده در مقیاس بزرگ</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Gemini Pro</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Google</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">چند زبانی، چندمودالی، دسترسی آسان</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">عملکرد متوسط در برخی وظایف</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کاربردهای توسعه نرم‌افزار، بات‌های چندرسانه‌ای</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">GPT-4o-mini</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">OpenAI</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">سرعت بالا، هزینه کم، توانایی چندمودالی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">دقت کمتر نسبت به GPT-4o</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">سرویس‌های مشتری، کاربردهای متنی ساده</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Falcon</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Technology Innovation Institute</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">متن‌باز، تمرکز بر زبان عربی و انگلیسی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">پشتیبانی محدود از برخی زبان‌ها</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کاربردهای چندزبانه، پژوهش</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Vicuna</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">LMSYS</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">متن‌باز، کارایی خوب با منابع کمتر</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">عدم پشتیبانی تجاری</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">تحقیقات دانشگاهی، پروژه‌های شخصی</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Qwen</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Alibaba</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">تمرکز بر زبان چینی، متن‌باز</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">پشتیبانی محدودتر از برخی زبان‌ها</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کاربردهای چینی زبان، تجارت الکترونیک</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Yi</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">01.AI</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">متن‌باز، دوزبانه انگلیسی-چینی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">جدید بودن، اکوسیستم محدودتر</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">توسعه نرم‌افزار، پژوهش، تولید محتوا</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">BLOOMZ</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">BigScience</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">چندزبانه، متن‌باز، تمرکز بر تنوع زبانی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">دقت کمتر نسبت به مدل‌های تجاری</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کاربردهای چندزبانه، پروژه‌های متن‌باز</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">PaLM 2</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Google</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">استدلال منطقی، چندزبانه، کدنویسی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">جایگزینی با مدل‌های Gemini در آینده</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">اتوماسیون، تجزیه و تحلیل متن</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">Jais</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">G42 & Cerebras</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">دوزبانه عربی-انگلیسی، تمرکز بر فرهنگ عربی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">محدودیت در پشتیبانی از سایر زبان‌ها</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">کاربردهای عربی زبان، خاورمیانه</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">CodeLlama</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Meta</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">متن‌باز، تخصصی در تولید کد</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">تمرکز محدود بر کاربردهای غیر کدنویسی</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">توسعه نرم‌افزار، اتوکدنویسی</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">XLNet</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Google/CMU</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">خودتوجه‌ای متقابل، درک عمیق متن</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">قدیمی‌تر نسبت به مدل‌های جدید</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">طبقه‌بندی متن، تحلیل احساسات</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="py-3 px-4 border-b font-medium dark:border-gray-700">BERT</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">Google</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">دوطرفه، سرعت بالا، استاندارد صنعت</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">محدودیت در تولید متن نسبت به مدل‌های جدید</td>
                <td className="py-3 px-4 border-b dark:border-gray-700">استخراج اطلاعات، بازیابی اطلاعات</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mt-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">ویژگی‌های مهم در انتخاب مدل زبانی</h3>
          <ul className="space-y-2 list-disc list-inside mr-4">
            <li className="text-gray-700 dark:text-gray-300">اندازه مدل و پارامترها</li>
            <li className="text-gray-700 dark:text-gray-300">قابلیت‌های چندزبانه و چندمودالی</li>
            <li className="text-gray-700 dark:text-gray-300">هزینه استفاده و قیمت‌گذاری API</li>
            <li className="text-gray-700 dark:text-gray-300">سرعت پاسخگویی و تأخیر</li>
            <li className="text-gray-700 dark:text-gray-300">طول زمینه (Context length) و حافظه</li>
            <li className="text-gray-700 dark:text-gray-300">امکان اجرای محلی و نیازهای سخت‌افزاری</li>
            <li className="text-gray-700 dark:text-gray-300">سیاست‌های استفاده از داده و حریم خصوصی</li>
            <li className="text-gray-700 dark:text-gray-300">قابلیت‌های fine-tuning و سفارشی‌سازی</li>
            <li className="text-gray-700 dark:text-gray-300">میزان تخصص در کاربردهای خاص (کدنویسی، پاسخ به پرسش و...)</li>
          </ul>
        </div>
      </ArticleSection>
    </PageLayout>
  );
};

export default ModelsPage;
