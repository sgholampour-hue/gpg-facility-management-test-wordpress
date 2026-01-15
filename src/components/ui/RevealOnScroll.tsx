import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-in";

interface RevealOnScrollProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const variantStyles: Record<AnimationVariant, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-4",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    initial: "opacity-0",
    visible: "opacity-100",
  },
  "slide-left": {
    initial: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "scale-in": {
    initial: "opacity-0 scale-[0.97]",
    visible: "opacity-100 scale-100",
  },
};

export const RevealOnScroll = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 500,
  className,
  as: Component = "div",
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const { initial, visible } = variantStyles[variant];

  const Tag = Component as any;

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: prefersReducedMotion ? "0ms" : `${duration}ms`,
        transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

export default RevealOnScroll;
