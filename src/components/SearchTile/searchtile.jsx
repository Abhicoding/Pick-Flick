// @flow
import * as React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'

import Search from '../../shared/Search/search.jsx'

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
  }

  render () {
    return (
      <Wrapper>
        <article className='field is-grouped is-warning'>
        <div className='control'>
              <Search {...this.props} />
            </div>
            <div className='control'>
              <Link className= 'button is-danger' to='browse'>
                Browse all
              </Link>
            </div>
        </article>
      </Wrapper >
    )
  }
}

export default SearchTile

const Wrapper = styled.div`
width: max-content;
box-sizing: border-box;
margin: auto;
`