/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @import "@/styles/_mixins.scss";
    `
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = nextConfig
