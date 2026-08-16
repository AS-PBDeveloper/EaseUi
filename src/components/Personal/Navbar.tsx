import { toggleTheme } from "@/features/ThemeSlice";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  const isDark = mode === "dark";

  return (
    <nav className="h-16 w-full flex items-center justify-between px-8 border-b border-gray-200 dark:border-gray-800/80 bg-white/85 dark:bg-gray-950/85 backdrop-blur-md sticky top-0 z-30 transition-colors duration-200">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-2xl cursor-pointer text-gray-900 dark:text-white tracking-tight"
        >
          EaseUi
        </h1>

        <div className="hidden sm:flex items-center bg-gray-50 dark:bg-gray-900 rounded-md px-3 py-1.5 border border-gray-200 dark:border-gray-800 transition-colors">
          <Search size={18} className="text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search components"
            className="ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-gray-600 dark:text-gray-400">
        <li
          onClick={() => navigate("components")}
          className="cursor-pointer hover:text-black dark:hover:text-white transition-colors"
        >
          Components
        </li>
        <li className="cursor-pointer hover:text-black dark:hover:text-white transition-colors">
          About
        </li>
        <li className="cursor-pointer hover:text-black dark:hover:text-white transition-colors">
          Templates
        </li>
        <li>
          <button
            type="button"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => dispatch(toggleTheme())}
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </li>
      </ul>

      <button className="md:hidden text-gray-700 dark:text-gray-300">
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
