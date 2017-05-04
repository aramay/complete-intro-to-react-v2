import React from 'react'
import {Link} from 'react-router'

import { connect } from 'react-redux'

const { string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input value={this.props.searchTerm} type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
      )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
