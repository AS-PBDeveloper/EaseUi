import { Carousel, type CarouselItem } from "@/components/Carousel";
import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";

const slides: CarouselItem[] = [
  {
    title: "Ship polished interfaces",
    description:
      "Compose motion, controls, and theme-aware surfaces in one reusable carousel.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Showcase product moments",
    description:
      "Use slides for announcements, onboarding, image galleries, or featured content.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Stay readable in every theme",
    description:
      "Controls, dots, and overlay text keep contrast in light and dark mode.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1200",
  },
];

const CarouselPage = () => {
  const usageCode = `import { Carousel } from "@/components/Carousel";

const slides = [
  {
    title: "Ship polished interfaces",
    description: "Compose motion, controls, and theme-aware surfaces.",
    image: "/hero.jpg",
  },
];

<Carousel items={slides} />`;

  const propsData = [
    {
      prop: "items",
      type: "CarouselItem[]",
      default: "[]",
      description: "Slides rendered by the carousel.",
    },
    {
      prop: "variant",
      type: '"light" | "outline" | "glass"',
      default: '"light"',
      description: "Controls the carousel frame styling.",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "full"',
      default: '"md"',
      description: "Sets the carousel max width.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically advances slides.",
    },
    {
      prop: "interval",
      type: "number",
      default: "4000",
      description: "Autoplay interval in milliseconds.",
    },
    {
      prop: "showDots",
      type: "boolean",
      default: "true",
      description: "Shows slide pagination dots.",
    },
    {
      prop: "showControls",
      type: "boolean",
      default: "true",
      description: "Shows previous and next buttons.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Carousel
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A controlled slide showcase with image support, keyboard-focusable
          controls, dots, and dark-mode friendly styling.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Usage
        </h2>
        <ComponentDemo code={usageCode}>
          <Carousel items={slides} size="full" />
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Variants
        </h2>
        <ComponentDemo
          code={`<Carousel items={slides} variant="glass" autoPlay />`}
        >
          <Carousel
            items={slides}
            variant="glass"
            size="full"
            autoPlay
            interval={3500}
          />
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

export default CarouselPage;
