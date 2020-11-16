require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const axios = require('axios')

exports.sourceNodes = async({ actions, createNodeId, createContentDigest }) => {
  const results = await axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      api_key: process.env.MOVIES_DB_API_KEY,
      sort_by: 'popularity.desc',
      certification_country: 'US',
    }
  })

  const movies = results.data.results

  movies.forEach(movie => {
    const node = {
      ...movie,
      id: createNodeId(`Movie-${movie.id}`),
      internal: {
        type: "Movie",
        contentDigest: createContentDigest(movie),
      },
    }
    actions.createNode(node)
  })
}