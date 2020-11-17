import React from "react"
import styled from "styled-components"

const Rating = ({ voteAvg, voteCount }) => {
  const maxStars = 5
  const starsVote = voteAvg / 2

  return (
    <Wrapper>
      {[...Array(maxStars).keys()].map(star => {
        if (star < starsVote) return <Star key={star}>&#9733;</Star>
        else return <Star key={star}>&#9734;</Star>
      })}
      <VotesCount>{voteCount}</VotesCount>
    </Wrapper>
  )
}

export default Rating

const Star = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  margin-right: 2px;
`

const VotesCount = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.border};
  font-size: 12px;
  margin-top: 4px;
  margin-left: 2px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
