import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges.map(post => {
    return (
      <li>
        <Link to={`/blog/${post.node.fields.slug}`}>
          <h2>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.date}</p>
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{posts}</ol>
    </Layout>
  )
}

export default BlogPage
