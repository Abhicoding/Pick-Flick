import React from 'react'
import {Link} from 'react-router-dom'

import SearchLogo from '../../../public/search.svg'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: this.props.searchTerm
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange (e) {
    this.setState({
      searchTerm: e.target.value
    })
    this.props.searchFunc(e.target.value)
  }

  handleSearch () {
    if (this.props.searchResult) {
      this.props.searchResult()
    }
  }

  render () {
    console.log(this.props, '@browse')
    const searchTerm = this.state.searchTerm
    return (
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text'
            placeholder={!searchTerm ? 'Search for a movie' : ''}
            value={searchTerm || ''} onChange={this.handleChange} />
        </div>
        <div className='control'>
          <Link to='browse' className='button is-info' onClick={this.handleSearch} >
            <SearchLogo height={25} width={25} fill={'white'} />
          </Link>
        </div>
      </div>
    )
  }
}

export default Search
