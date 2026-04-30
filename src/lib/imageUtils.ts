const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="#c8c5c2"/>
  <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#c8c5c2"/>
      <stop offset="50%" stop-color="#d4d1ce" stop-opacity="1"/>
      <stop offset="100%" stop-color="#c8c5c2"/>
    </linearGradient>
  </defs>
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const blurDataURL = (w = 700, h = 475) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
