module.exports = {
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Droid Sans', 'Droid Serif']
      }
    }
  }
]
}
