import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
