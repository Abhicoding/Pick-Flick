import React from 'react'
// import styled from 'styled-components'
import {Link} from 'react-router-dom'

import SearchLogo from '../../../public/search.svg'

// const Wrapper = styled.div`
// position: relative;
// margin-top: 10%;
// margin-left: 10%;
// width: 80%;
// `

const Search = () => {
  return (
    // <Wrapper>
    <div className='field has-addons'>
      <div className='control'>
        <input className='input' type='text' placeholder='Search for a movie' />
      </div>
      <div className='control'>
        <Link to='/browse' className='button is-info'>
          <SearchLogo height={25} width={25} fill={'white'} />
        </Link>
      </div>
    </div>
    // </Wrapper>
  )
}

export default Search
