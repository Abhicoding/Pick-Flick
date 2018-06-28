import React from 'react'
import {Link} from 'react-router-dom'

import Search from '../../shared/Search/search.jsx'

class Header extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <section className='hero is-primary'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              <Link to='/'>
        Pick-Flix
              </Link>
            </h1>
            <h2 className='subtitle'>
          Movie Database
            </h2>
          </div>
          {this.props.location.pathname !== '/'
            ? <div className='container'><Search {...this.props} /></div>
            : null}
        </div>
      </section>
    )
  }
}

export default Header
