import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>Sup dawg.</h2>
      <p>
        Contact? <Link to="/contact">Contact.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
