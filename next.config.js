module.exports = {
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