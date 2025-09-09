import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Hostinger
  output: "export",
  images: {
    // Disable next/image optimization for static export
    unoptimized: true,
  },
};

export default nextConfig;
