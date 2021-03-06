/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MobileNavbar from '../components/MobileNavbar'
import Button from '../components/Button'
import { media } from '../utils/media'

import config from '../../config/SiteConfig'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`

const Contact = () => (
  <Wrapper>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      <Menu />
      <MobileNavbar isHome={false} />
    </Header>
    <Content>
      <h1>📨 Contact</h1>
      <p>Want to get in touch? Fill out this form below and say hello 👋🏼</p>
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field
      "
        netlify
        action="/contact"
      >
        <p>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message" required />
        </p>
        <p>
          <Button type="submit">Send</Button>
        </p>
        <input type="hidden" name="form-name" value="contact-form" />
      </form>
    </Content>
  </Wrapper>
)

export default Contact
