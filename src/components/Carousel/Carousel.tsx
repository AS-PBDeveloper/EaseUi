import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const carouselVariants = cva(
  "relative overflow-hidden rounded-lg border transition-colors",
  {
    variants: {
      variant: {
        light:
          "bg-white border-gray-200 text-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100",
        outline:
          "bg-transparent border-gray-300 text-gray-900 dark:border-gray-700 dark:text-gray-100",
        glass:
          "bg-white/75 border-white/70 text-gray-900 backdrop-blur-md dark:bg-gray-900/70 dark:border-white/10 dark:text-gray-100",
      },
      size: {
        sm: "max-w-md",
        md: "max-w-2xl",
        lg: "max-w-4xl",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

export interface CarouselItem {
  title?: string;
  description?: string;
  image?: string;
  content?: React.ReactNode;
}

interface CarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof carouselVariants> {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showControls?: boolean;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      items,
      autoPlay = false,
      interval = 4000,
      showDots = true,
      showControls = true,
      variant,
      size,
      className,
      ...props
    },
    ref
  ) => {
    const safeItems = useMemo(() => items.filter(Boolean), [items]);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = safeItems[activeIndex];

    const goToPrevious = () => {
      setActiveIndex((current) =>
        current === 0 ? safeItems.length - 1 : current - 1
      );
    };

    const goToNext = () => {
      setActiveIndex((current) =>
        current === safeItems.length - 1 ? 0 : current + 1
      );
    };

    useEffect(() => {
      if (!autoPlay || safeItems.length <= 1) return;

      const timer = window.setInterval(goToNext, interval);
      return () => window.clearInterval(timer);
    }, [autoPlay, interval, safeItems.length]);

    if (!activeItem) return null;

    return (
      <div
        ref={ref}
        className={cn(carouselVariants({ variant, size }), className)}
        {...props}
      >
        <div className="relative min-h-72">
          {activeItem.image && (
            <img
              src={activeItem.image}
              alt={activeItem.title || "Carousel slide"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />

          <div className="relative flex min-h-72 items-end p-6 sm:p-8">
            <div className="max-w-xl text-white">
              {activeItem.content ? (
                activeItem.content
              ) : (
                <>
                  {activeItem.title && (
                    <h3 className="text-2xl font-bold tracking-tight">
                      {activeItem.title}
                    </h3>
                  )}
                  {activeItem.description && (
                    <p className="mt-2 text-sm text-gray-200 sm:text-base">
                      {activeItem.description}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {showControls && safeItems.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-white dark:bg-gray-950/90 dark:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goToNext}
              className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-white dark:bg-gray-950/90 dark:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {showDots && safeItems.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {safeItems.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  index === activeIndex
                    ? "w-7 bg-white"
                    : "w-2.5 bg-white/55 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export { Carousel, carouselVariants };
