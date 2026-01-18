/// <reference types="vite/client" />

// Type declarations for vite-imagetools
declare module '*?format=webp&quality=85' {
  const src: string;
  export default src;
}

declare module '*?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*.jpg?*' {
  const src: string;
  export default src;
}

declare module '*.png?*' {
  const src: string;
  export default src;
}

declare module '*.jpeg?*' {
  const src: string;
  export default src;
}
