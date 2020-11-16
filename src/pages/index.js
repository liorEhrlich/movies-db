import React from "react"
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allMovie {
      nodes {
        id
        popularity
        title
        vote_average
        vote_count
        backdrop_path
        poster_path
      }
    }
  }
`

export default function Home({data}) {
  return <ul>
  {data.allMovie.nodes.map(movie => (
    <li key={movie.id}>
      {movie.title}
      <br/>
      popularity {movie.popularity}
      <br/>
      vote avg {movie.vote_average}
      <br/>
      vote count {movie.vote_count}
      <br/>
      <img src={'https://image.tmdb.org/t/p/w200/'+movie.poster_path} alt={movie.title}/>
    </li>
  ))}
  </ul>
}
