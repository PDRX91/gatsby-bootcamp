import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="header">
      <h1>
        <Link className="title" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link className="nav-item" activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" activeClassName="active" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="nav-item" activeClassName="active" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-item" activeClassName="active" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
