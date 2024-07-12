import MillionLint from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    unoptimized: true,  // Disable built-in image optimization for static exports
    remotePatterns: [
      {
        hostname: "i.ibb.co",
      },
      {
        hostname: "swiperjs.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "source.unsplash.com",
      },
      {
        hostname: "levelupesg.co",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
    domains: ["encrypted-tbn0.gstatic.com"],
  },
  // output: 'export',  // Ensure static export is set
};

export default MillionLint.next()(nextConfig);
