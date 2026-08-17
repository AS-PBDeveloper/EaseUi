import { toggleTheme } from "@/features/ThemeSlice";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";

const COMPONENTS = [
  { name: "Button", path: "components/button" },
  { name: "Card", path: "components/card" },
  { name: "Modal", path: "components/modal" },
  { name: "Input", path: "components/input" },
  { name: "Navbar", path: "components/navbar" },
  { name: "Carousel", path: "components/carousel" },
  { name: "Tooltip", path: "components/tooltip" },
  { name: "Layout", path: "components/layout" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  const isDark = mode === "dark";
  
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredComponents = COMPONENTS.filter((comp) =>
    comp.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setShowSuggestions(true);
    setHighlightedIndex(-1);
  };

  const handleSelectComponent = (path: string) => {
    navigate(path);
    setSearchInput("");
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions && filteredComponents.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredComponents.length - 1 ? prev + 1 : prev
        );
        setShowSuggestions(true);
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredComponents[highlightedIndex]) {
          handleSelectComponent(filteredComponents[highlightedIndex].path);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="h-16 w-full flex items-center justify-between px-8 border-b border-gray-200 dark:border-gray-800/80 bg-white/85 dark:bg-gray-950/85 backdrop-blur-md sticky top-0 z-30 transition-colors duration-200">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-2xl cursor-pointer text-gray-900 dark:text-white tracking-tight"
        >
          EaseUi
        </h1>

        <div
          className="hidden sm:flex items-center bg-gray-50 dark:bg-gray-900 rounded-md px-3 py-1.5 border border-gray-200 dark:border-gray-800 transition-colors relative"
          ref={searchRef}
        >
          <Search size={18} className="text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search components"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => searchInput && setShowSuggestions(true)}
            className="ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
          />
          
          {showSuggestions && filteredComponents.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-lg z-50">
              {filteredComponents.map((component, index) => (
                <button
                  key={component.path}
                  onClick={() => handleSelectComponent(component.path)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    index === highlightedIndex
                      ? "bg-blue-500 text-white dark:bg-blue-600"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  } ${index !== filteredComponents.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}`}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {component.name}
                </button>
              ))}
            </div>
          )}
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
