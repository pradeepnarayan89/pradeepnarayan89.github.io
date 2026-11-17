/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves plain files, so build a fully static site into ./out
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
