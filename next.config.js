/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  // i18n: {
  //   locales: ["en", "epo"],
  //   defaultLocale: "en",
  // },
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "repository-images.githubusercontent.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
