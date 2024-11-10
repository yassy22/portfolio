/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Ensures SVG files are recognized
      use: ["@svgr/webpack"], // Loads SVGs as React components
    });

    return config;
  },
  // output: "export", // Enables static export
  // basePath: "/out", // Adds 'out' at the beginning of every URL
  // trailingSlash: true, // Optional: ensures all paths end with a slash
};

export default nextConfig;
