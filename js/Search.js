import React from 'react'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <h1>
         Seach !!
         {preload.shows.map( (show) => {
           return (
             <h3>{show.title}</h3>
           )
         })}
        </h1>
      </div>
   )
  }
})

export default Search
