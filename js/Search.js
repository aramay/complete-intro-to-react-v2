import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
import { connect } from 'react-redux'
const { arrayOf, shape, string } = React.PropTypes
// import preload from '../public/data.json'

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },
  // getInitialState () {
  //   return {
  //     searchTerm: ''
  //   }
  // },
  // handleSearchTermChange (event) {
  //   this.setState({
  //     searchTerm: event.target.value
  //   })
  // },
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter( (show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
            return (
              // <ShowCard key={show.imdbID} show={show} />
              <ShowCard key={show.imdbID} {...show} />
          )
        })}
        </div>
      </div>
   )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}


export default connect(mapStateToProps)(Search)
