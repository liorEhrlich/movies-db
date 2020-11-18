import React from "react"
import styled from "styled-components"

import MovieItem from "./movieItem"

const MoviesList = ({ movies, isNavigatable }) => (
  <Wrapper>
    {movies.map(movie => (
      <Movie key={movie.id}>
        <MovieItem movie={movie} isNavigatable={isNavigatable} />
      </Movie>
    ))}
  </Wrapper>
)

export default MoviesList

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`

const Movie = styled.li`
  margin-right: 40px;
  margin-bottom: 30px;
  width: 200px;
`
