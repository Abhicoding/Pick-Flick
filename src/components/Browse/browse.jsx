// @flow
import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import CardLayout from '../CardLayout/cardlayout.jsx'

import {setNextPage, getNextPage} from '../../redux/actionCreators.js'

class Browse extends React.Component <any, any>{
  constructor(props) {
    super (props)
    const self : any = this
    self.handlePageChange = self.handlePageChange.bind(self)
  }

  componentWillMount () {
    if (this.props.page === 1 && this.props.results.length === 0) {
      this.props.handleNextPage(this.props.page)
    } 
  }

  handlePageChange () {
    this.props.handleNextPage(this.props.page + 1)
  }

  render () {
  return (
    <div>
          {this.props.results.map((e, i) => {
            return i%4===0 ? this.props.results.slice(i, i+4) : null
           })
          .filter (e => e)
          .map((e, i) => <CardLayout key= {i} movieArray= {e} />)
        }
      <div>
        <a className="button is-warning is-fullwidth" onClick={this.handlePageChange}>More</a>
      </div>
    </div>
  )}
}

const mapStateToProps = (state: any) => ({results : state.results,
searchTerm: state.searchTerm, page: state.page})

const mapDispatchToProps = (dispatch: Function) => ({
  handleNextPage (page) {
    dispatch(setNextPage(page))
    dispatch(getNextPage(page))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Browse))

type Data = { 
  "results": Array<Movie>
}

type Movie = {
  "vote_count": number, 
  "id": number, 
  "video": boolean, 
  "vote_average": number, 
  "title": string, 
  "popularity": number, 
  "poster_path": string, 
  "original_language": string, 
  "original_title": string, 
  "genre_ids": Array<number>, 
  "backdrop_path": string, 
  "adult": boolean, 
  "overview": string, 
  "release_date": string
}