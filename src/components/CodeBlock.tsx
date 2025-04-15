
import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  language?: string;
  children: string;
  variant?: 'default' | 'primary' | 'secondary';
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'text', children, variant = 'default' }) => {
  const variantStyles = {
    default: "bg-[#1E1E1E]",
    primary: "bg-[#1a2638]",
    secondary: "bg-[#2d1a38]"
  };
  
  const variantHeaderStyles = {
    default: "bg-ios-gray-dark",
    primary: "bg-blue-700",
    secondary: "bg-purple-700"
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
  };
  
  return (
    <div className="my-6 rounded-md overflow-hidden shadow-sm">
      <div className={`${variantHeaderStyles[variant]} text-white px-4 py-2 text-sm flex justify-between items-center`}>
        <span className="font-medium">{language.toUpperCase()}</span>
        <button 
          onClick={copyToClipboard} 
          className="p-1 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
          title="کپی کد"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <pre className={`${variantStyles[variant]} text-white overflow-x-auto p-4 text-sm leading-relaxed font-mono`}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
