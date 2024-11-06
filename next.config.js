/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "books.google.com",
      },
    ]
  },
  // eslint-disable-next-line require-await
  async redirects() {
    return [
      {
        source: '/catalog/book',
        destination: '/catalog',
        permanent: true,
      },
    ]
  },
}