import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-gray-900 dark:bg-black/80 text-gray-200 px-4 py-2 border-b border-gray-800">
        <span className="text-xs font-mono uppercase text-gray-400">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors"
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-gray-950 dark:bg-black text-gray-100 p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
