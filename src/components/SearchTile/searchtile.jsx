import React from 'react'
import {Link} from 'react-router-dom'

import Search from '../../shared/Search/search.jsx'
import Button from '../../shared/Button/button.jsx'

import styled from 'styled-components'

class SearchTile extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.searchResult()
  }

  render () {
    return (
      <Wrapper>
        <article className='tile is-child notification is-warning'>
          <Content>
            <StyleSearch>
              <Search {...this.props} />
            </StyleSearch>
            <StyleButton>
              <Button style={'is-danger'} >
                <Link to='/browse' >Browse all</Link>
              </Button>
            </StyleButton>
          </Content>
        </article>
      </Wrapper >
    )
  }
}

const Wrapper = styled.div`
width: max-content;
box-sizing: border-box;
height: 50%;
margin-top: 5%;
margin-left: 30%;
`
const Content = styled.span`
display: float;
`
const StyleButton = styled.div`
width: max-content;
margin-left: 5%;
`

const StyleSearch = styled.div`
width: max-content;
margin-left: 5%;
width: 60%;
`

export default SearchTile