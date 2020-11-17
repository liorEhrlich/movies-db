import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import MoviesList from "../components/movies/moviesList"

const Movie = ({pageContext}) => {
  const { title, trailer, similarMovies } = pageContext

  return (
    <Layout>
      <Title>{title}</Title>

      {similarMovies.length && (
        <Checkout href='#similar'>Check out similar movies</Checkout>
      )}

      <IframeContainer>
        <Iframe
          allowfullscreen
          width="1600"
          height="900"
          title={title}
          src={`${trailer}?autoplay=1`}
        ></Iframe>
      </IframeContainer>
      {similarMovies.length && (
        <>
          <SubTitle id='similar'>More Like This</SubTitle>
          <MoviesList movies={similarMovies} isNavigatable={false} />
        </>
      )}
    </Layout>
  )
}

export default Movie

const Title = styled.h1`
  font-size: 35px;
  color: ${props => props.theme.colors.primary};
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

const Checkout = styled.a`
  display: inline-block;
  font-size: 20px;
  color: ${props => props.theme.colors.border};
  margin-bottom: 10px;
  text-decoration: none;

  :hover {
    font-weight: bold;
  }
`