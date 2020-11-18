import styled from "styled-components"

const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.background};
  border-radius: 3px;
  padding: 8px;
  font-size: 14px;
  text-decoration: none;

  :hover {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

export default Button