

import { useNavigate } from "react-router";
import { Button } from "@/components/Button/Button";
import { ArrowRight, Sparkles } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 flex flex-col items-center text-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
        <Sparkles size={14} />
        <span>Beautiful & Animated UI Components</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Build faster with <span className="text-indigo-600 dark:text-indigo-400">EaseUi</span>
      </h1>

      <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        A collection of accessible, modern, and animated React components built with Tailwind CSS and GSAP. Seamlessly switch between Light and Dark mode.
      </p>

      <div className="flex items-center gap-4 pt-4">
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/components/button")}
          className="gap-2"
        >
          Explore Components
          <ArrowRight size={16} />
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => navigate("/components/card")}
        >
          View Cards
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
