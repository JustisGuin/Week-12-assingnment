import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/videos",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;