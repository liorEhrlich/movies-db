import React from "react"
import { graphql } from "gatsby"

import MoviesList from "../components/movies/moviesList"
import Layout from "../components/layout"

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
        overview
      }
    }
  }
`

const Home = ({ data }) => (
  <Layout>
    <MoviesList movies={data.allMovie.nodes} />
  </Layout>
)

export default Home
