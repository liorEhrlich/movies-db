import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import MoviesList from "../components/movies/moviesList"

export const query = graphql`
  query($slug: Int!) {
    allMovie(filter: { movieId: { eq: $slug } }) {
      nodes {
        overview
        vote_average
        vote_count
        movieId
      }
    }
  }
`

const Movie = props => {
  const { title, trailer, similarMovies } = props.pageContext
  const [{ overview }] = props.data.allMovie.nodes

  return (
    <Layout>
      <Title>{title}</Title>
      <Desc>{overview}</Desc>
      <IframeContainer>
        <Iframe
          allowfullscreen
          width="1600"
          height="900"
          title={title}
          src={`${trailer}?autoplay=1`}
        ></Iframe>
      </IframeContainer>
      {
        similarMovies.length &&
        <>
          <SubTitle>More Like This</SubTitle>
          <MoviesList movies={similarMovies} isNavigatable={false}/>
        </>
      }  
    </Layout>
  )
}

export default Movie

const Title = styled.h1`
  font-size: 35px;
  color: ${props => props.theme.colors.primary};
`

const Desc = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.border};
  margin-top: 8px;
  max-width: 920px;
`

const Iframe = styled.iframe`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 500px;
  border: 0;
`

const IframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 35%;
`

const SubTitle = styled.h2`
font-size: 28px;
color: ${props => props.theme.colors.border}; 
`