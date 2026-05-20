/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 10,
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

module.exports = nextConfig;
