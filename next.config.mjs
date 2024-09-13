import { fileURLToPath } from 'url';
import path from "path";

// Dirname workaround
const { dirname } = path;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.jsx", "page.js"],
  webpack: config => {
    const webpackConfig = config;
    webpackConfig.resolve.alias["@styles"] = path.join(__dirname, "./src/styles");
    webpackConfig.resolve.alias["@components"] = path.join(__dirname, "./src/components");
    return webpackConfig;
  },
};

export default nextConfig;
