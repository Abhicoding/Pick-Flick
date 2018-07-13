// @flow
import * as React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SearchLogo from '../../../public/search.svg'
import {setSearchTerm, getSearchResults} from '../../redux/actionCreators.js'

class Search extends React.Component <Props, State> {
  constructor (props: Props) {
    super()
    const self : any = this
    self.search = self.search.bind(self)
  }

  shouldComponentUpdate () {
    return false
  }

  search () {
    this.props.handleSearchQuery(this.props.searchTerm)
  }

  render () {
    const searchTerm = this.props.searchTerm
    return (
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text'
            placeholder={!searchTerm ? 'Search for a movie' : ''}
            defaultValue={searchTerm || ''} onChange={this.props.handleSearchTermChange} />
        </div>
        <div className='control'>
          <Link to='browse' className='button is-info' onClick={this.search} >
            <SearchLogo height={25} width={25} fill={'white'} />
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({searchTerm : state.searchTerm})
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  },
  handleSearchQuery (searchTerm) {
    dispatch(getSearchResults(searchTerm))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))

type Props = {
  searchTerm: string,
  handleSearchTermChange: Function,
  handleSearchQuery: Function
}

type State = {
  searchTerm: string
}