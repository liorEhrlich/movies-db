import React from "react"
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

export const query = graphql`
  {
    allMovie {
      nodes {
        id
        popularity
        title
        vote_average
        vote_count
        poster
      }
    }
  }
`

export default function Home({data}) {
  return <MoviesList>
  {data.allMovie.nodes.map(movie => (
    <Movie key={movie.id}>
      {movie.title}
      <br/>
      popularity {movie.popularity}
      <br/>
      vote avg {movie.vote_average}
      <br/>
      vote count {movie.vote_count}
      <br/>
      <img src={movie.poster} alt={movie.title}/>
    </Movie>
  ))}
  </MoviesList>
}

const Movie = styled.li`
  width: 220px;
  height: 400px;
  margin-right: 20px;
`

const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`