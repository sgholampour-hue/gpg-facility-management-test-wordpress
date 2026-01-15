import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  aspectRatio?: "auto" | "square" | "video" | "4/3" | "3/2" | "16/9";
}

const LazyImage = ({
  src,
  alt,
  className,
  skeletonClassName,
  aspectRatio = "auto",
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aspectRatioClass = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "16/9": "aspect-[16/9]",
  }[aspectRatio];

  return (
    <div
      ref={imgRef}
      className={cn("relative overflow-hidden", aspectRatioClass, className)}
    >
      {/* Skeleton loader */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-muted via-muted/70 to-muted animate-shimmer bg-[length:200%_100%]",
          isLoaded && "opacity-0 transition-opacity duration-500",
          skeletonClassName
        )}
      />

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
