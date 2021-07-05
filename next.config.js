module.exports = {
  images: {
    domains: ['source.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}