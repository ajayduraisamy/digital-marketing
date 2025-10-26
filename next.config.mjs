// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["res.cloudinary.com"], // Add this line
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
