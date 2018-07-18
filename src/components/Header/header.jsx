// @flow
import React from 'react'
import {Link} from 'react-router-dom'

import Search from '../../shared/Search/search.jsx'

const Header = (props: Props) => {
    return (
      <section className='hero' >
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              <Link to='/'>
        Pick-Flix
              </Link>
            </h1>
            {isNaN(parseInt(props.location.pathname))? null :
            <h2 className='subtitle'>
          Movie Database
            </h2>}
          </div>
          {props.location.pathname === '/browse'
            ? <div className='container'><Search {...props} /></div>
            : null}
        </div>
      </section>
    )
  }

export default Header

type Props = {
  history: any,
  location: any,
  searchTerm: string,
  handleSearchTermChange: Function,
  handleSearchQuery: Function
}