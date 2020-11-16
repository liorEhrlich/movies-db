require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const axios = require('axios')

exports.sourceNodes = async({ actions, createNodeId, createContentDigest }) => {
  // const results = await axios({
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/discover/movie",
  //   params: {
  //     api_key: process.env.MOVIES_DB_API_KEY,
  //     sort_by: 'popularity.desc',
  //     certification_country: 'US',
  //     page: '2',
  //   }
  // })
  const numPages = 15

  const axiosRequests = [...Array(numPages).keys()].map(i => (
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: process.env.MOVIES_DB_API_KEY,
        sort_by: 'popularity.desc',
        // certification_country: 'US',
        page: i+1,
      }
    })
  ))

  const [...rest] = await Promise.all(axiosRequests);

  const movies = []

  rest.forEach(response => {
    movies.push(...response.data.results)
  });

  movies.forEach(movie => {
    const node = {
      ...movie,
      poster: 'https://image.tmdb.org/t/p/w200/'+movie.poster_path,
      id: createNodeId(`Movie-${movie.id}`),
      internal: {
        type: "Movie",
        contentDigest: createContentDigest(movie),
      },
    }
    actions.createNode(node)
  })
}