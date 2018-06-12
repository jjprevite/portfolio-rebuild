/* eslint no-unused-expressions:0 */

import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import SEO from '../components/SEO'
import MobileNavBar from '../components/MobileNavbar'
import theme from '../../config/Theme'
import { media } from '../utils/media'

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.dark};
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
`

const TemplateWrapper = props => {
  const { children } = props
  const today = new Date()
  const year = today.getFullYear()
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MobileNavBar />
        <SEO />
        {children()}
        <Footer>
          &copy; {year} Made with 🎵 and ❤️ by Joe Previte <br />
          <a href="https://github.com/jjprevite/portfolio-rebuild">GitHub Repository</a>
        </Footer>
      </div>
    </ThemeProvider>
  )
}

export default TemplateWrapper
