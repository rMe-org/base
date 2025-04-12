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
    if (!isServer) {
      config.devtool = "source-map";
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };

      // Inject build error detector
      // This approach ensures the detector is included in the client bundle
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        // Add our build error detector to all client entries
        if (entries['main.js']) {
          if (Array.isArray(entries['main.js'])) {
            entries['main.js'].push('./src/utis/build-error-detector.ts');
          } else {
            entries['main.js'] = [entries['main.js'], './src/utis/build-error-detector.ts'];
          }
        }

        return entries;
      };
    }
    return config;
  },
};
export default config;
