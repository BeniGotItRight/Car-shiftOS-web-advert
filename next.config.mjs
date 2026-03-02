/** @type {import('next').NextConfig} */
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const apiHost = apiUrl.replace(/^https?:\/\//, "").split("/")[0];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "http", hostname: apiHost, pathname: "/**" },
      { protocol: "https", hostname: apiHost, pathname: "/**" },
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
