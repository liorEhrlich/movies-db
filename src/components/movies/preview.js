import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Button from '../common/button'

const Preview = ({ movie }) => {
  const poster = "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path

  return (
  <>
  <Poster image={poster} >
    <Content>
      <Title>{movie.title}</Title>
      <Description>{movie.overview}</Description>
      <Link to={'/' + movie.movieId}>
        <StyledButton>Watch The Trailer</StyledButton>
      </Link>
    </Content>
  </Poster>
  </>
)}

export default Preview

const Poster = styled.div`
    position: relative;
    margin-top: 10px;
  background: linear-gradient(transparent, #0c100c),
      url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  padding: 0 15px;
  background-size: cover;
  border: 1px solid ${props => props.theme.colors.background};
  border-radius: 3px;
  padding: 0 20px;
  height: 620px;
`

const Description = styled.p`
  font-size: 22px;
  color: ${props => props.theme.colors.border};
  overflow: hidden;
  max-width: 670px;
`

const Title = styled.div`
  font-size: 45px;
  color: ${props => props.theme.colors.border};
  margin-top: 8px;
  max-width: 200px;
`

const StyledButton = styled(Button)`
  
`

const Content = styled.div`
  position: absolute;
  bottom: 100px;
`