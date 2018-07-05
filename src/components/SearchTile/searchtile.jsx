// @flow
import * as React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Search from '../../shared/Search/search.jsx'
import Button from '../../shared/Button/button.jsx'

type Props = {
  searchTerm: string,
  searchResult: Function,
  searchFunc: Function,
  history: any,
  location: any,
  match: any
}


class SearchTile extends React.Component<Props> {
  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleSearchClick = self.handleSearchClick.bind(self)
  }

  handleSearchClick () {
    this.props.searchResult()
  }

  handleBrowseClick () {
    this.props.history.push('/browse')
    console.log('this ran')
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
              <Button style={'is-danger'} onClick={this.handleBrowseClick}>
                Browse all
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
