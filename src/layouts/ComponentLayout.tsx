import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
    "Form",
  ];

  return (
    <div className="flex min-h-screen bg-(--bg-color) text-(--text-color) transition-colors duration-200">
      <aside
        className={`
          w-64 p-6 flex flex-col
          border-r border-gray-200 dark:border-gray-800
          fixed md:static top-0 left-0 h-full z-20
          bg-white dark:bg-gray-950 md:bg-(--bg-color) md:dark:bg-(--bg-color)
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
        `}
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
          Components
        </h2>
        <ul className="flex flex-col gap-1.5">
          {components.map((item) => {
            const isActive =
              location.pathname === `/components/${item.toLowerCase()}`;
            return (
              <li
                onClick={() => {
                  navigate(item.toLowerCase());
                  setSidebarOpen(false);
                }}
                key={item}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="flex-1 overflow-auto h-screen p-6 md:p-10 bg-(--bg-color) transition-colors duration-200">
        <button
          className="md:hidden mb-4 p-2 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;
