/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:  ['ipfs.infura.io', 'th.bing.com', 'crowdcrowdfund.infura-ipfs.io']
   }
}

module.exports = nextConfig
