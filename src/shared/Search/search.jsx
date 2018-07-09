// @flow
import * as React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect, Provider} from 'react-redux'

import store from './../../redux/store.js'

import SearchLogo from '../../../public/search.svg'

class Search extends React.Component <Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      searchTerm: this.props.searchTerm
    }
    const self : any = this
    self.handleSearch = self.handleSearch.bind(self)
    self.handleChange = self.handleChange.bind(self)
    // self.handleEnter = self.handleEnter.bind(self)
  }

  handleChange (e: any) {
    console.log(e.target.value, 'input')
    this.setState({
      searchTerm: e.target.name
    })
    this.props.searchFunc(e.target.name)
  }

  // handleEnter (e: SyntheticKeyboardEvent<HTMLEventTElement>):void {
  //   console.log(e.keyCode, 'handleEnter')
  //   if (e.keyCode === 13) {
  //     this.handleSearch()
  //   }
  // }

  handleSearch () {
    if (this.props.searchResult) {
      this.props.searchResult()
    }
  }

  render () {
    const searchTerm = this.state.searchTerm
    return (
      <Provider store={store} >
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text'
            placeholder={!searchTerm ? 'Search for a movie' : ''}
            value={searchTerm || ''} 
            onChange={this.handleChange.bind(this)}
            // onKeyUp={this.handleEnter} 
            />
        </div>
        <div className='control'>
          <Link to='browse' className='button is-info'
            onClick={this.handleSearch} >
            <SearchLogo height={25} width={25} fill={'white'} />
          </Link>
        </div>
      </div>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => ({searchTerm : state.searchTerm})
export default withRouter(connect(mapStateToProps)(Search))

type Props = {
  searchTerm: string,
  searchResult: Function,
  searchFunc: Function
}

type State = {
  searchTerm: string
}