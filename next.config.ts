import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "d2gox21sq349ly.cloudfront.net",
        port: '',
      },
    ],
  },
};

export default nextConfig;
