import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
          <NavBar>
            <HomeLink to='/'>Movies DB</HomeLink>
          </NavBar>
          <ChildrenWrapper>
          {children}
          </ChildrenWrapper>
        </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding-top: 45px;
`

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: monospace;
  }
`

const NavBar = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  z-index: 2;
  height: 45px;
  line-height: 45px;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0 40px;
`

const HomeLink = styled(Link)`
  color: ${props => props.theme.colors.background};
  font-size: 28px;
  text-decoration: none;
`

const ChildrenWrapper = styled.div`
  padding: 0 40px;
`

export default Layout
