// @flow
import * as React from 'react'
import {withRouter} from 'react-router-dom'
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
    if (this.props.searchTerm) {
      this.props.handleSearchQuery(this.props.searchTerm)
      this.props.history.push('browse')
    }
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
          <a className='button is-info' onClick={this.search} >
            <SearchLogo height={25} width={25} fill={'white'} />
          </a>
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
  history: any,
  searchTerm: string,
  handleSearchTermChange: Function,
  handleSearchQuery: Function
}

type State = {
  searchTerm: string
}