import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const useCountUp = ({
  end,
  start = 0,
  duration = 1000,
  delay = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    // If user prefers reduced motion, show final value immediately
    if (prefersReducedMotion.current) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + (end - start) * easeOut;

        setCount(Number(currentValue.toFixed(decimals)));

        if (now < endTime) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, hasAnimated, end, start, duration, delay, decimals]);

  const formattedCount = `${prefix}${count.toLocaleString("nl-NL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  return { ref, count, formattedCount, isVisible };
};

export default useCountUp;
