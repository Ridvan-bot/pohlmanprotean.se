const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/old-services',
          destination: '/services', // Redirect from old services page to new one
        },
      ];
    },
};
