import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 20px 10px;
`

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: monospace;
  }
`

export default Layout
