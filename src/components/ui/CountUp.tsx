import { cn } from "@/lib/utils";
import useCountUp from "@/hooks/useCountUp";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  labelClassName?: string;
  label?: string;
}

export const CountUp = ({
  end,
  start = 0,
  duration = 1000,
  delay = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  labelClassName,
  label,
}: CountUpProps) => {
  const { ref, formattedCount, isVisible } = useCountUp({
    end,
    start,
    duration,
    delay,
    suffix,
    prefix,
    decimals,
  });

  return (
    <div className="stat-item">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className={cn(
          "stat-number block transition-all duration-500",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
          className
        )}
      >
        {formattedCount}
      </span>
      {label && (
        <span
          className={cn(
            "stat-label block transition-all duration-500 delay-150",
            isVisible ? "opacity-100" : "opacity-0",
            labelClassName
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default CountUp;
