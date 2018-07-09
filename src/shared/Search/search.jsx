
import * as React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SearchLogo from '../../../public/search.svg'
import setSearchTerm from '../../redux/actionCreators.js'

class Search extends React.Component <Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      searchTerm: this.props.searchTerm
    }
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const searchTerm = this.state.searchTerm
    return (
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text'
            placeholder={!searchTerm ? 'Search for a movie' : ''}
            defaultValue={searchTerm} onChange={this.props.handleSearchTermChange} />
        </div>
        <div className='control'>
          <Link to='browse' className='button is-info' >
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
    dispatch(setSearchTerm(event.target.name))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))

type Props = {
  searchTerm: string,
  handleSearchTermChange: Function
}

type State = {
  searchTerm: string
}