import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MoviesList = ({ movies }) => (
  <Wrapper>
    {movies.map(movie => (
      <Movie key={movie.id}>
        <Link to={`/${movie.movieId}`}>
          <img src={movie.poster} alt={movie.title} />
          {movie.title}
          <br />
          popularity {movie.popularity}
          <br />
          id {movie.movieId}
          <br />
          vote avg {movie.vote_average}
          <br />
          vote count {movie.vote_count}
        </Link>
      </Movie>
    ))}
  </Wrapper>
)

export default MoviesList

const Movie = styled.li`
  width: 220px;
  height: 400px;
  margin-right: 20px;
`

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`
