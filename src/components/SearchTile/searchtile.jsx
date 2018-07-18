// @flow
import * as React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Search from '../../shared/Search/search.jsx'
import {setNextPage, setSearchTerm} from '../../redux/actionCreators.js'

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
    this.props.handleBrowse()
  }

  render () {
    return (
      <Wrapper>
        <article className='field is-grouped is-warning'>
        <div className='control'>
              <Search {...this.props} />
            </div>
            <div className='control'>
              <Link className= 'button is-danger' to='browse' onClick={this.handleBrowseClick}>
                Browse all
              </Link>
            </div>
        </article>
      </Wrapper >
    )
  }
}

const mapStateToProps = (state: any) => ({
  searchTerm: state.searchTerm,
  page: state.page
})

const mapDispatchToProps = (dispatch) => ({
  handleBrowse () {
    setSearchTerm('')
    setNextPage(1)
  }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchTile))

const Wrapper = styled.div`
width: max-content;
box-sizing: border-box;
margin: 10% auto auto auto;
`