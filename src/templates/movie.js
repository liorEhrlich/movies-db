import React from "react"
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: Int!){
    allMovie(filter: {movieId: {eq: $slug}}) {
      nodes {
        overview
        vote_average
        vote_count
        movieId
      }
    }
  }
`

const Movie = (props) => {
  const {title, trailer} = props.pageContext
  const [{overview}] = props.data.allMovie.nodes
  return (
  <>
      <h1>{title}</h1>
  <p>{overview}</p>
      <iframe width="920" height="505" title={title}
        src={`${trailer}?autoplay=1`}>
    </iframe>
</>
)}

export default Movie