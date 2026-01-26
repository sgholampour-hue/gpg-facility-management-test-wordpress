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
  blurPlaceholder?: boolean;
}

const LazyImage = memo(({
  src,
  alt,
  className,
  skeletonClassName,
  aspectRatio = "auto",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  blurPlaceholder = true,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState<string | null>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate blur placeholder from thumbnail
  useEffect(() => {
    if (!blurPlaceholder || !src || hasError) return;
    
    // Create a tiny version for blur effect
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        // Create tiny 20x20 version for blur
        const size = 20;
        const aspectRatio = img.width / img.height;
        canvas.width = size;
        canvas.height = Math.round(size / aspectRatio);
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setBlurDataUrl(canvas.toDataURL("image/jpeg", 0.5));
      } catch {
        // CORS or other errors - silently fail
      }
    };
  }, [src, blurPlaceholder, hasError]);

  const aspectRatioClass = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "16/9": "aspect-[16/9]",
  }[aspectRatio];

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={cn("relative overflow-hidden", aspectRatioClass, className)}
    >
      {/* Blur placeholder */}
      {blurPlaceholder && blurDataUrl && !isLoaded && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${blurDataUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Skeleton loader with shimmer effect */}
      {!isLoaded && !blurDataUrl && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-muted via-muted/70 to-muted animate-shimmer bg-[length:200%_100%]",
            skeletonClassName
          )}
          aria-hidden="true"
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-xs">Afbeelding niet beschikbaar</span>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700 ease-out",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          {...props}
        />
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

export default LazyImage;
