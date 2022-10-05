/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//    images: {
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// }

// module.exports = nextConfig

// next.config.js
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
});
module.exports = semi({
  // your custom Next.js configuration
  reactStrictMode: true,
  swcMinify: true,
  
   images: {
    // loader: 'cloudinary',
    // path: '/',
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
});

