import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aws-superpower-portfolio",
  assetPrefix: "/aws-superpower-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
