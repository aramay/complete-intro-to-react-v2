import React from 'react'
const { string } = React.PropTypes

{/*this is not a show anymore*/}

const ShowCard = React.createClass({
  propTypes: {
    poster: string,
    title: string,
    year: string,
    description: string
  },

  render () {
    {/*this.props.show => will not work spread operator*/}
    const { poster, title, year, description } = this.props

    return (
      <div className='show-card'>

        <img src={`/public/img/posters/${poster}`} alt={title} />

        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{description}</p>
        </div>
      </div>
      )
  }
})

export default ShowCard

