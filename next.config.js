/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "ja",
  },
};

module.exports = nextConfig;
