import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>Sup dawg.</h2>
      <p>
        Contact? <Link to="/contact">Contact.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
