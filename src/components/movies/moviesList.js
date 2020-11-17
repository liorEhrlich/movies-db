import React from "react"
import styled from "styled-components"

import MovieItem from "./movieItem"

const MoviesList = ({ movies }) => (
  <Wrapper>
    {movies.map(movie => (
      <Movie key={movie.id}>
        <MovieItem movie={movie} />
      </Movie>
    ))}
  </Wrapper>
)

export default MoviesList

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const Movie = styled.li`
  margin-right: 20px;
  margin-bottom: 10px;
  width: 200px;
`
