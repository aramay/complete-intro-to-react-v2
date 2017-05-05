import React from 'react'
import {Link} from 'react-router'

import { connect } from 'react-redux'
import { setSearchTerm } from './actionsCreators'

const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearcTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    console.log(this)
    console.log(setSearchTerm)

    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          
          <input onChange={this.handleSearcTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
      )
  }
})

const mapStateToProps = (state) => {
  console.log("mapstatetoprops ", state)
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
