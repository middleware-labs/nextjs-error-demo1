const { config } = require('process');
const MiddlewareWebpackPlugin =
  require("@middleware.io/sourcemap-uploader/dist/webpack-plugin").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true, // for client side
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new MiddlewareWebpackPlugin(
        process.env.MW_ACCESS_TOKEN || '', // Account key of the application.
        "2.0.0", // Application verison
        ".next/", // By default path of next.js where sourcemap resides.
        ".next/", // Base path where your sourcemap will reside after upload.
      )
    );

    if (isServer) {
      config.devtool = 'source-map'; // Enable source maps for server-side code
    }
    return config;
  },
  experimental: {
    serverSourceMaps: true, // for server side
    instrumentationHook: true,
    serverComponentsExternalPackages: ['@middleware.io/agent-apm-nextjs'],
  },
};

module.exports = nextConfig; 