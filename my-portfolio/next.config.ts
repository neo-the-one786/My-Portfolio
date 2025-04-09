/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,  // enables faster builds with SWC
    experimental: {
        appDir: true,   // enables the /app directory (needed for App Router)
    },
};

module.exports = nextConfig;
