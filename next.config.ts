import type { NextConfig } from "next";


// Deployment trigger: Force update
const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
