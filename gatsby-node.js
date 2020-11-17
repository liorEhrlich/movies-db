require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const axios = require("axios")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const numPages = 30

  const axiosRequests = [...Array(numPages).keys()].map(i =>
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: process.env.MOVIES_DB_API_KEY,
        sort_by: "popularity.desc",
        certification_country: "US",
        page: i + 1
      }
    })
  )

  const [...rest] = await Promise.all(axiosRequests)

  const movies = []

  rest.forEach(response => {
    movies.push(...response.data.results)
  })

  movies.forEach(movie => {
    const node = {
      ...movie,
      movieId: movie.id,
      poster: "https://image.tmdb.org/t/p/w200/" + movie.poster_path,
      id: createNodeId(`Movie-${movie.id}`),
      internal: {
        type: "Movie",
        contentDigest: createContentDigest(movie)
      }
    }
    actions.createNode(node)
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMovie {
        nodes {
          movieId
          title
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("falied to create movie pages ", result.errors)
  }

  const movieNodes = result.data.allMovie.nodes

  for (i = 0; i < movieNodes.length; i++) {
    const { movieId, title } = movieNodes[i]

    const movieTrailerResponse = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      params: {
        api_key: process.env.MOVIES_DB_API_KEY
      }
    })

    let key = ""

    if (movieTrailerResponse.data.results.length > 0) {
      ;[{ key }] = movieTrailerResponse.data.results
    }

    const similarMoviesResponse = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
      params: {
        api_key: process.env.MOVIES_DB_API_KEY
      }
    })

    const similarMovies = similarMoviesResponse.data.results.map(movie => ({
      ...movie,
      movieId: movie.id,
      poster: "https://image.tmdb.org/t/p/w200/" + movie.poster_path
    }))

    actions.createPage({
      path: movieId + "",
      component: require.resolve(`./src/templates/movie.js`),
      context: {
        slug: movieId,
        title,
        similarMovies,
        ...(key && { trailer: `https://www.youtube.com/embed/${key}` })
      }
    })
  }
}
