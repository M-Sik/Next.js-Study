/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  // source에 적어둔 경로로 접근시 destination에 적어둔 경로로 리다이렉트 시킴
  // permaent옵션은 한번 리다이렉트가 일어난 주소면 브라우저에 캐싱해서 다시 확인하지말고 리다이렉트 시키라는 옵션
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig;
