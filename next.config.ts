import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/twynex" : "",
  },
  ...(isGithubPages
    ? {
        basePath: "/twynex",
        assetPrefix: "/twynex",
      }
    : {}),
};

export default nextConfig;
