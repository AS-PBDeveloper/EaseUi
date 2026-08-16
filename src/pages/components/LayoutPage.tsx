import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";
import { BarChart3, Bell, FolderKanban, Search } from "lucide-react";

const LayoutPage = () => {
  const appShellCode = `<div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[220px_1fr]">
  <aside>Navigation</aside>
  <main>Content</main>
</div>`;

  const cardGridCode = `<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <section>Metric</section>
  <section>Metric</section>
  <section>Metric</section>
</div>`;

  const propsData = [
    {
      prop: "Container",
      type: "max-w-* + mx-auto + px-*",
      default: "-",
      description: "Constrains content width while preserving responsive gutters.",
    },
    {
      prop: "App Shell",
      type: "grid-cols-[sidebar_content]",
      default: "-",
      description: "Creates dashboard-style navigation and content regions.",
    },
    {
      prop: "Responsive Grid",
      type: "grid + sm/md/lg columns",
      default: "-",
      description: "Adapts repeated content from one column to multiple columns.",
    },
    {
      prop: "Stack",
      type: "flex flex-col gap-*",
      default: "-",
      description: "Maintains consistent vertical rhythm between sections.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Layout
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Practical responsive layout patterns for pages, dashboards, toolbars,
          and repeated content.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          App Shell
        </h2>
        <ComponentDemo code={appShellCode}>
          <div className="grid min-h-[420px] w-full overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 md:grid-cols-[220px_1fr]">
            <aside className="border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950 md:border-b-0 md:border-r">
              <div className="mb-6 text-sm font-semibold tracking-tight">
                Workspace
              </div>
              <nav className="space-y-1 text-sm">
                {["Overview", "Projects", "Reports", "Settings"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-md px-3 py-2 ${
                        index === 0
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {item}
                    </div>
                  )
                )}
              </nav>
            </aside>
            <main className="flex flex-col">
              <header className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
                <div>
                  <h3 className="font-semibold">Dashboard</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Team activity and delivery health
                  </p>
                </div>
                <button className="rounded-md border border-gray-200 p-2 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                  <Bell size={18} />
                </button>
              </header>
              <div className="grid gap-4 p-5 sm:grid-cols-2">
                {[
                  ["Active projects", "24", FolderKanban],
                  ["Weekly searches", "1.8k", Search],
                  ["Health score", "92%", BarChart3],
                  ["Alerts", "3", Bell],
                ].map(([label, value, Icon]) => (
                  <section
                    key={label as string}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {label as string}
                      </span>
                      <Icon className="text-indigo-500" size={18} />
                    </div>
                    <div className="mt-3 text-2xl font-bold">
                      {value as string}
                    </div>
                  </section>
                ))}
              </div>
            </main>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Responsive Grid
        </h2>
        <ComponentDemo code={cardGridCode}>
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Plan", "Build", "Review"].map((item) => (
              <section
                key={item}
                className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Keep content grouped, scannable, and responsive without
                  changing the underlying markup.
                </p>
              </section>
            ))}
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Pattern Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;
