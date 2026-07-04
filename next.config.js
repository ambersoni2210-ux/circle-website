/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local SVG/WebP in /public work automatically.
    // To use EXTERNAL image URLs (e.g. Unsplash), add the domain here.
    // See IMAGE_REPLACEMENT_GUIDE.md step 6.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
    // Allow our local SVG product visuals to be served through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
