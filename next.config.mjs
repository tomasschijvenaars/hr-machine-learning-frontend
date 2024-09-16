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
    webpackConfig.resolve.alias["@components"] = path.join(__dirname, "./src/components");
    webpackConfig.resolve.alias["@constants"] = path.join(__dirname, "./src/utils/constants");
    webpackConfig.resolve.alias["@helpers"] = path.join(__dirname, "./src/utils/helpers");
    webpackConfig.resolve.alias["@layouts"] = path.join(__dirname, "./src/layouts");
    webpackConfig.resolve.alias["@themes"] = path.join(__dirname, "./src/themes");
    webpackConfig.resolve.alias["@hooks"] = path.join(__dirname, "./src/hooks");
    return webpackConfig;
  },
};

export default nextConfig;
