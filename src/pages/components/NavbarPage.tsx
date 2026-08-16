import { Navbar } from "@/components/navbar";
import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";

<Navbar variant="light" size="default" />`;

  const variantsCode = `<Navbar variant="light" />
<Navbar variant="glass" />
<Navbar variant="primary" />
<Navbar variant="dark" />`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description: "Controls the navbar background, border, and text colors.",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Sets the navbar height.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Entrance animation applied when the navbar mounts.",
    },
    {
      prop: "hoverAnimation",
      type: '"none" | "jiggle" | "scale" | "bounce" | ...',
      default: '"none"',
      description: "Optional GSAP-powered hover animation.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Renders the navbar through Radix Slot for composition.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Navbar
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A responsive navigation bar surface with theme-aware variants and
          optional entrance animations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Usage
        </h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full">
            <Navbar variant="light" animation="none" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Variants
        </h2>
        <ComponentDemo code={variantsCode}>
          <div className="flex w-full flex-col gap-4">
            <Navbar variant="light" animation="none" />
            <Navbar variant="glass" animation="none" />
            <Navbar variant="primary" animation="none" />
            <Navbar variant="dark" animation="none" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Sizes
        </h2>
        <ComponentDemo code={`<Navbar size="sm" />\n<Navbar size="lg" />`}>
          <div className="flex w-full flex-col gap-4">
            <Navbar size="sm" variant="light" animation="none" />
            <Navbar size="lg" variant="glass" animation="none" />
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

export default NavbarPage;
