import React from 'react'
import axios from 'axios'
import Header from './Header'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propsTypes: {
     show: shape({
        title: string,
        year: string,
        poster: string,
        description: string,
        trailer: string
      })

   },

  getInitialState () {
     return {
        omdbData: {}
     }
   },
  componentDidMount () {
      axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
      .then((res) => {
         console.log("omdb data ", res.data)
         this.setState({omdbData: res.data})
      })
      .catch((error) => {
         console.log("Axios error ", error)
      })
   },

  render () {
     const { poster, title, year, description, trailer } = this.props.show

     console.log("Details component props ", this.props)

     let ratings

     if (this.state.omdbData.imdbRatings) {
        ratings = <h3>{this.state.omdbData.imdbRating}</h3>
     }
     else {
        ratings = <h3>No Ratings found</h3>
     }

     console.log("ratings ",ratings)

     return (

      <div className='details'>
         <Header />
         <section>
            <h1>{title}</h1>
            <h2>({year})</h2>
            {ratings}
            <img src={`/public/img/posters/${poster}`} />
            <p>{description}</p>
         </section>
         <div>
            <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
         </div>
      </div>

      )
   }
})

// stateless compponent can take props -> query params property

// const Details = (props) => {
//   return <h1>stateless component </h1>
// }

export default Details

