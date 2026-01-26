import { useState, useRef, useEffect, memo } from "react";
import { cn } from "@/lib/utils";
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  aspectRatio?: "auto" | "square" | "video" | "4/3" | "3/2" | "16/9";
  priority?: boolean;
  sizes?: string;
}
const LazyImage = memo(({
  src,
  alt,
  className,
  skeletonClassName,
  aspectRatio = "auto",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (priority) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      rootMargin: "200px",
      // Increased for earlier loading
      threshold: 0.01
    });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [priority]);
  const aspectRatioClass = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "16/9": "aspect-[16/9]"
  }[aspectRatio];
  return <div ref={imgRef} className={cn("relative overflow-hidden", aspectRatioClass, className)}>
      {/* Skeleton loader */}
      {!isLoaded && <div className={cn("absolute inset-0 bg-gradient-to-r from-muted via-muted/70 to-muted animate-shimmer bg-[length:200%_100%]", skeletonClassName)} aria-hidden="true" />}

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...props}
        />
      )}
    </div>;
});
LazyImage.displayName = "LazyImage";
export default LazyImage;