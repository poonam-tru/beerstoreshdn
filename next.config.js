/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tbsecoms.wpengine.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "tbsecomd.wpengine.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfolder.io",
        port: "",
        pathname: "/DRTYD0A2/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};
//cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1
https: module.exports = nextConfig;
