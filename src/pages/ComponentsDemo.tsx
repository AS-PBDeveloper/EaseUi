import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-900/60 backdrop-blur-sm transition-colors">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Preview
        </span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-md transition-colors shadow-xs"
        >
          <Code size={13} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="py-16 px-6 flex items-center justify-center bg-gray-50/30 dark:bg-gray-950/40 min-h-[140px]">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-gray-200 dark:border-gray-800">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
