import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <h3>There has been an error</h3>
      <h1>Page not found!!!</h1>
      <Link to='/' >Back to the home page</Link>
    </div>
  )
}

export default NotFound