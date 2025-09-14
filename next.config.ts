import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If your repository name is not the same as your GitHub username,
  // uncomment and update the basePath below:
  // basePath: '/your-repository-name',
};

export default nextConfig;
