import { Button } from "@/components/Button/Button";
import PropsTable from "@/components/Personal/PropsTable";
import { Tooltip } from "@/components/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import { Info, Settings, Sparkles } from "lucide-react";

const TooltipPage = () => {
  const usageCode = `import { Tooltip } from "@/components/Tooltip";

<Tooltip content="Create a new component" side="top">
  <button>Hover me</button>
</Tooltip>`;

  const positionsCode = `<Tooltip content="Top tooltip" side="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <button>Right</button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <button>Left</button>
</Tooltip>`;

  const variantsCode = `<Tooltip content="Default tooltip" variant="dark">
  <button>Dark</button>
</Tooltip>

<Tooltip content="Light tooltip" variant="light">
  <button>Light</button>
</Tooltip>

<Tooltip content="Primary tooltip" variant="primary">
  <button>Primary</button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "Content displayed inside the tooltip.",
    },
    {
      prop: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "Controls the tooltip placement around the trigger.",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "success" | "warning"',
      default: '"dark"',
      description: "The visual style of the tooltip surface.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Controls tooltip width, padding, and text size.",
    },
    {
      prop: "delay",
      type: "number",
      default: "120",
      description: "Delay in milliseconds before the tooltip opens.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Prevents the tooltip from opening.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tooltip
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A lightweight helper for showing contextual labels on hover or focus.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Usage
        </h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="Create a new component" side="top">
            <Button variant="primary" hoverAnimation="none" className="gap-2">
              <Sparkles size={16} />
              Hover me
            </Button>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Positions
        </h2>
        <ComponentDemo code={positionsCode}>
          <div className="grid grid-cols-2 gap-6 sm:flex sm:items-center sm:gap-4">
            <Tooltip content="Top tooltip" side="top">
              <Button variant="outline" hoverAnimation="none">
                Top
              </Button>
            </Tooltip>
            <Tooltip content="Right tooltip" side="right">
              <Button variant="outline" hoverAnimation="none">
                Right
              </Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" side="bottom">
              <Button variant="outline" hoverAnimation="none">
                Bottom
              </Button>
            </Tooltip>
            <Tooltip content="Left tooltip" side="left">
              <Button variant="outline" hoverAnimation="none">
                Left
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Variants
        </h2>
        <ComponentDemo code={variantsCode}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Tooltip content="Default tooltip" variant="dark">
              <Button variant="dark" hoverAnimation="none" className="gap-2">
                <Info size={16} />
                Dark
              </Button>
            </Tooltip>
            <Tooltip content="Light tooltip" variant="light">
              <Button variant="outline" hoverAnimation="none">
                Light
              </Button>
            </Tooltip>
            <Tooltip content="Primary tooltip" variant="primary">
              <Button variant="primary" hoverAnimation="none" className="gap-2">
                <Settings size={16} />
                Primary
              </Button>
            </Tooltip>
            <Tooltip content="Saved successfully" variant="success">
              <Button variant="ok" hoverAnimation="none">
                Success
              </Button>
            </Tooltip>
            <Tooltip content="Review this setting" variant="warning">
              <Button variant="secondary" hoverAnimation="none">
                Warning
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
