/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@aws-amplify/ui-react', '@aws-amplify/ui-react-core'],
  reactStrictMode: true,
}

module.exports = nextConfig
