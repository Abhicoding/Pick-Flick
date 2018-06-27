import React from 'react'
import Search from '../../shared/Search/search.jsx'

const Header = (props) => {
  return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
        Pick-Flix
          </h1>
          <h2 className='subtitle'>
          Movie Database
          </h2>
        </div>
        {props.location.pathname !== '/'
          ? <div className='container'><Search /></div>
          : null}
      </div>
    </section>
  )
}

export default Header
