import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import MoviesList from "../components/MoviesList"
import theme from "../theme"

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
  <ThemeProvider theme={theme}>
    <MoviesList movies={data.allMovie.nodes} />
  </ThemeProvider>
)

export default Home
