// @flow
import * as React from 'react'
import {Link} from 'react-router-dom'

import SearchLogo from '../../../public/search.svg'

export default class Search extends React.Component <Props, State> {
  handleChange : function
  handleSearch : function
  handleEnter : function
  constructor (props: Props) {
    super(props)
    this.state = {
      searchTerm: this.props.searchTerm
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange (e: SyntheticInputEvent<EventTarget>):void {
    this.setState({
      searchTerm: e.target.name
    })
    this.props.searchFunc(e.target.name)
  }

  handleEnter (e: SyntheticInputEvent<EventTarget>):void {
    console.log(e, 'handleEnter')
  }

  handleSearch () {
    if (this.props.searchResult) {
      this.props.searchResult()
    }
  }

  render () {
    const searchTerm = this.state.searchTerm
    return (
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text'
            placeholder={!searchTerm ? 'Search for a movie' : ''}
            value={searchTerm || ''} onChange={this.handleChange}
            onKeyUp={this.handleEnter} />
        </div>
        <div className='control'>
          <Link to='browse' className='button is-info'
            onClick={this.handleSearch} >
            <SearchLogo height={25} width={25} fill={'white'} />
          </Link>
        </div>
      </div>
    )
  }
}

type Props = {
  searchTerm: string,
  searchResult: function,
  searchFunc: function
}

type State = {
  searchTerm: string
}