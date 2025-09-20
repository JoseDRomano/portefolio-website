/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portefolio-website',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
