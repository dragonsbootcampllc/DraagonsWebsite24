/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "swiperjs.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
