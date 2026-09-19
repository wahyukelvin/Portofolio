/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: hasil build berupa HTML/CSS/JS murni di folder /out
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
