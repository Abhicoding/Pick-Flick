import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
position: absolute;
left: 40%;
top: 40%;
width: 20%
`

const Search = () => {
  return (
    <Wrapper>
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text' placeholder='Search for a movie' />
        </div>
        <div className='control'>
          <Link to='/browse' className='button is-info'>
      Search
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Search
