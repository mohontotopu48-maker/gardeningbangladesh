import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["preview-chat-6baef017-9e21-414d-adee-242c8f5bf0c3.space-z.ai"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "sfile.chatglm.cn",
      },
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
      },
    ],
  },
};

export default nextConfig;
