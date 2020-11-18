import React from "react"
import { graphql } from "gatsby"

import MoviesList from "../components/movies/moviesList"
import Layout from "../components/layout"
import Preview from "../components/movies/preview"

export const query = graphql`
  {
    allMovie {
      nodes {
        id
        movieId
        title
        vote_average
        vote_count
        poster
        poster_path
        backdrop_path
        overview
      }
    }
  }
`

const Home = ({ data }) => {
  const movies = data.allMovie.nodes

  return (
  <Layout>
    <Preview movie={movies[0]}/>
    <MoviesList movies={movies} />
  </Layout>
)}

export default Home
