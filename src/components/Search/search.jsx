import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
position: absolute;
left: 40%;
top: 40%;
width: 20%
`

const Search = () => {
  return (
    <Wrapper>
      <div class='field has-addons'>
        <div class='control'>
          <input class='input' type='text' placeholder='Search for a movie' />
        </div>
        <div class='control'>
          <a class='button is-info'>
      Search
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Search
