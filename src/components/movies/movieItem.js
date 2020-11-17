import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Rating from "./rating"

const MovieItem = ({ movie, isNavigatable = true }) => {
  if(isNavigatable) {
    return (
      <StyledLink to={`/${movie.movieId}`}>
        <Poster image={movie.poster} />
        <Title>{movie.title}</Title>
        <Rating voteAvg={movie.vote_average} voteCount={movie.vote_count} />
      </StyledLink>
    )
  }
   
else {
  return (
    <div>
      <Poster image={movie.poster} />
      <Title>{movie.title}</Title>
      <Rating voteAvg={movie.vote_average} voteCount={movie.vote_count} />
    </div>
  )
}
}

export default MovieItem

const Poster = styled.div`
  background: url(${props => props.image});
  border: 1px solid ${props => props.theme.colors.background};
  border-radius: 3px;
  height: 300px;
  width: 200px;

  :hover {
    background: linear-gradient(#0c100c99, #0c100c99),
      url(${props => props.image});
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Title = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.border};
  margin-top: 8px;
`
