/** @type {import("next").NextConfig} */
const config = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    config.stats = "verbose";
    // Enhanced node polyfills for postgres and other modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        dns: false,
        perf_hooks: false,
        child_process: false,
        os: false,
        path: false,
        http: false,
        https: false,
        zlib: false,
        util: false,
        url: false,
        querystring: false,
      };
    }
    return config;
  },
};
export default config;
