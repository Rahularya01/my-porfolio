import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set the base path for GitHub Pages (replace 'rahul-portfolio' with your actual repo name)
  basePath: process.env.NODE_ENV === "production" ? "/rahul-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/rahul-portfolio/" : "",
  // Disable ESLint during build for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
