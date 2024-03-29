import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <p>This is {data.site.siteMetadata.author}'s site © 2019</p>
    </div>
  )
}

export default Footer
