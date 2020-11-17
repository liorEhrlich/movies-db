import React from "react"
import { graphql } from "gatsby"

import MoviesList from "../components/moviesList"
import Layout from "../components/layout"

export const query = graphql`
  {
    allMovie {
      nodes {
        movieId
        popularity
        title
        vote_average
        vote_count
        poster
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
