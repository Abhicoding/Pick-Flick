// @flow
import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import CardLayout from '../CardLayout/cardlayout.jsx'

import {setNextPage, getNextPage} from '../../redux/actionCreators.js'

class Browse extends React.Component <Props>{
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

type Props = {
  "searchTerm": string,
  "results": Array<Movie>,
  "page": number,
  "handleNextPage": Function 
  }